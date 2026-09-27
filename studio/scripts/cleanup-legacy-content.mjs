import {getCliClient} from 'sanity/cli'

const client=getCliClient({apiVersion:'2025-02-19'})
const expectedProjectId='oyagunrg'
const expectedDataset='production'
const config=client.config()

if(config.projectId!==expectedProjectId||config.dataset!==expectedDataset){
  throw new Error('Refusing to clean outside LindiMaps production dataset')
}

const canonicalId=(slug)=>`lindimaps-project-category-${slug}`

// 1) Remove the legacy "svg" field wherever it still exists.
// It is not part of the current schemas and is not consumed by the frontend.
const legacySvgDocs=await client.fetch(`*[defined(svg)]{_id,_type}`)
for(const doc of legacySvgDocs){
  await client.patch(doc._id).unset(['svg']).commit()
  console.log(`Removed legacy svg from ${doc._type} ${doc._id}`)
}

// 2) Merge duplicate projectCategory documents that share the same normalized slug.
// Prefer the canonical IDs created by migrate-project-categories.mjs.
const categories=await client.fetch(`*[_type=="projectCategory" && defined(slug.current)]{_id,titleSq,titleEn,"slug":slug.current,order}`)
const groups=new Map()
for(const category of categories){
  const slug=String(category.slug||'').trim().toLowerCase()
  if(!slug)continue
  const group=groups.get(slug)||[]
  group.push(category)
  groups.set(slug,group)
}

for(const [slug,group] of groups){
  if(group.length<2)continue

  const preferredId=canonicalId(slug)
  let canonical=group.find(item=>item._id===preferredId)||group[0]

  if(canonical._id!==preferredId){
    canonical=await client.createIfNotExists({
      _id:preferredId,
      _type:'projectCategory',
      titleSq:canonical.titleSq||slug,
      titleEn:canonical.titleEn||canonical.titleSq||slug,
      slug:{_type:'slug',current:slug},
      order:canonical.order,
    })
  }

  const duplicateIds=group.map(item=>item._id).filter(id=>id!==canonical._id)
  for(const duplicateId of duplicateIds){
    const projects=await client.fetch(`*[_type=="project" && references($duplicateId)]{_id,categories}`,{duplicateId})
    for(const project of projects){
      const refs=Array.isArray(project.categories)?project.categories:[]
      const next=[]
      const seen=new Set()
      for(const item of refs){
        const ref=item?._ref===duplicateId?canonical._id:item?._ref
        if(!ref||seen.has(ref))continue
        seen.add(ref)
        next.push({...item,_ref:ref,_key:item?._key||ref})
      }
      await client.patch(project._id).set({categories:next}).commit()
      console.log(`Repointed ${project._id}: ${duplicateId} -> ${canonical._id}`)
    }
    await client.delete(duplicateId)
    console.log(`Deleted duplicate projectCategory ${duplicateId} for slug ${slug}`)
  }
}

console.log(`Cleanup complete. Removed svg from ${legacySvgDocs.length} document(s).`)
