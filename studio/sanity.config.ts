import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const singletonTypes = new Set(['homePage','siteSettings','profile','aboutPage'])

export default defineConfig({
  name: 'default',
  title: 'LindiMaps',

  projectId: 'oyagunrg',
  dataset: 'production',

  plugins: [structureTool({structure:(S)=>S.list().title('LindiMaps').items([S.listItem().title('Home').child(S.document().schemaType('homePage').documentId('homePage')),S.listItem().title('Konfigurimi i faqes').child(S.document().schemaType('siteSettings').documentId('siteSettings')),S.listItem().title('Profili').child(S.document().schemaType('profile').documentId('profile')),S.listItem().title('Rreth nesh').child(S.document().schemaType('aboutPage').documentId('aboutPage')),S.divider(),...S.documentTypeListItems().filter(item=>!singletonTypes.has(item.getId()||''))])}), visionTool()],

  document: {
    newDocumentOptions: (prev) => prev.filter((item) => !singletonTypes.has(item.templateId)),
    actions: (prev, context) => singletonTypes.has(context.schemaType) ? prev.filter(({action}) => action !== 'delete' && action !== 'duplicate') : prev,
  },

  schema: {
    types: schemaTypes,
  },
})
