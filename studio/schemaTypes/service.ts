import {defineField, defineType} from 'sanity'
export const serviceType = defineType({
  name: 'service',
  title: 'Shërbime',
  type: 'document',
  fields: [
    defineField({
      name: 'imageUrl',
      title: 'Imazhi origjinal – URL',
      description: 'Përdoret derisa të ngarkoni një imazh të ri.',
      type: 'url',
    }),
    defineField({
      name: 'titleSq',
      title: 'Titulli',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({name: 'titleEn', title: 'Title (EN)', type: 'string'}),
    defineField({name: 'descriptionSq', title: 'Përshkrimi', type: 'text', rows: 4}),
    defineField({name: 'descriptionEn', title: 'Description (EN)', type: 'text', rows: 4}),
    defineField({name: 'icon', title: 'Ikona / Imazhi', type: 'image'}),
    defineField({name: 'order', title: 'Renditja', type: 'number'}),
  ],
  preview: {select: {title: 'titleSq', media: 'icon'}},
})
