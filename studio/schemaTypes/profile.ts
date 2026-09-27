import {defineField, defineType} from 'sanity'
export const profileType = defineType({
  name: 'profile',
  title: 'Profili',
  type: 'document',
  fields: [
    defineField({name: 'scholar', title: 'Google Scholar', type: 'url'}),
    defineField({name: 'orcid', title: 'ORCID', type: 'url'}),
    defineField({name: 'name', title: 'Emri', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'headlineSq', title: 'Titulli profesional', type: 'string'}),
    defineField({name: 'headlineEn', title: 'Professional headline (EN)', type: 'string'}),
    defineField({name: 'bioSq', title: 'Biografia', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'bioEn', title: 'Biography (EN)', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'photo', title: 'Fotografia', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'skills',
      title: 'Aftësitë / Teknologjitë',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({name: 'cvUrl', title: 'CV URL', type: 'url'}),
    defineField({name: 'email', title: 'Email', type: 'string', validation: (r) => r.email()}),
    defineField({name: 'linkedin', title: 'LinkedIn', type: 'url'}),
    defineField({name: 'researchGate', title: 'ResearchGate', type: 'url'}),
    defineField({name: 'github', title: 'GitHub', type: 'url'}),
  ],
  preview: {select: {title: 'name', subtitle: 'headlineSq', media: 'photo'}},
})
