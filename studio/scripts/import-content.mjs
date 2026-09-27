import {getCliClient} from 'sanity/cli'
import {readFileSync} from 'node:fs'
import {resolve} from 'node:path'

const data = JSON.parse(readFileSync(resolve(process.cwd(), '../web/data/starter.json'), 'utf8'))
const documents = [
  data.home,
  data.settings,
  data.profile,
  data.about,
  ...data.services,
  ...data.projects,
  ...(data.publications || []),
  ...(data.partners || []),
].filter(Boolean)
const dryRun = process.argv.includes('--dry-run')
const syncExisting = process.argv.includes('--sync-existing')
const client = getCliClient({apiVersion: '2025-02-19'}).withConfig({
  useCdn: false,
  perspective: 'raw',
})

async function main() {
  const config = client.config()
  if (config.projectId !== 'oyagunrg' || config.dataset !== 'production')
    throw new Error('Expected LindiMaps project oyagunrg / production; import stopped.')
  const existing = await client.fetch('*[_type in $types]{_id,_type,title,titleSq,name,slug,doi}', {
    types: [...new Set(documents.map((d) => d._type))],
  })
  const singletons = new Set(['homePage', 'siteSettings', 'profile', 'aboutPage'])
  const pending = documents.filter(
    (doc) =>
      !existing.some(
        (old) =>
          old._id.replace(/^drafts\./, '') === doc._id ||
          (old._type === doc._type &&
            (singletons.has(doc._type) ||
              (doc.doi && old.doi === doc.doi) ||
              (doc.slug?.current && old.slug?.current === doc.slug.current) ||
              (doc.titleSq && old.titleSq === doc.titleSq) ||
              (doc.title && old.title === doc.title))),
      ),
  )
  console.log(
    `${documents.length} source documents; ${pending.length} to create; ${documents.length - pending.length} existing documents skipped.`,
  )
  for (const doc of pending)
    console.log(
      `${dryRun ? 'PREVIEW' : 'CREATE'} ${doc._type}: ${doc.titleSq || doc.title || doc.name || doc._id}`,
    )
  if (dryRun) return
  if (syncExisting) {
    const byId = new Map(existing.map((item) => [item._id.replace(/^drafts\./, ''), item]))
    for (const doc of documents) {
      const old = byId.get(doc._id)
      if (!old) continue
      const {_id, _type, ...fields} = doc
      await client.patch(old._id).set(fields).commit()
      console.log(`UPDATE ${doc._type}: ${doc.titleSq || doc.title || doc.name || doc._id}`)
    }
  }
  if (!pending.length) return
  let transaction = client.transaction()
  for (const doc of pending) transaction = transaction.createIfNotExists(doc)
  await transaction.commit()
  console.log(
    'Import complete. Existing documents were not changed. Refresh the website after the cache refresh interval (60 seconds).',
  )
}
main().catch((error) => {
  console.error(error instanceof Error ? error.message : 'Import failed')
  process.exitCode = 1
})
