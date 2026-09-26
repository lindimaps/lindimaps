import {defineField, defineType} from 'sanity'
const items = [
  {
    type: 'object',
    name: 'aboutItem',
    fields: [
      {name: 'titleSq', title: 'Titulli', type: 'string'},
      {name: 'titleEn', title: 'Title (EN)', type: 'string'},
      {name: 'descriptionSq', title: 'Përshkrimi', type: 'text'},
      {name: 'descriptionEn', title: 'Description (EN)', type: 'text'},
    ],
    preview: {select: {title: 'titleSq'}},
  },
]
export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'Rreth nesh – Historia dhe vlerat',
  type: 'document',
  fields: [
    defineField({name: 'history', title: 'Historia', type: 'array', of: items}),
    defineField({name: 'values', title: 'Vlerat', type: 'array', of: items}),
  ],
  preview: {prepare: () => ({title: 'Rreth nesh'})},
})
