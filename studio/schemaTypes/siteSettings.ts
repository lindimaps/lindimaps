import {defineField, defineType} from 'sanity'
export const siteSettingsType=defineType({
 name:'siteSettings',title:'Konfigurimi i faqes',type:'document',
 fields:[
  defineField({name:'siteName',title:'Emri i faqes',type:'string',initialValue:'LindiMaps'}),
  defineField({name:'logo',title:'Logo',type:'image'}),
  defineField({name:'logoDark',title:'Logo për dark mode',type:'image'}),
  defineField({name:'email',title:'Email',type:'string'}),
  defineField({name:'locationSq',title:'Vendndodhja',type:'string'}),
  defineField({name:'locationEn',title:'Location (EN)',type:'string'}),
  defineField({name:'linkedin',title:'LinkedIn',type:'url'}),
  defineField({name:'github',title:'GitHub',type:'url'}),
  defineField({name:'researchGate',title:'ResearchGate',type:'url'}),
  defineField({name:'seoTitle',title:'SEO title',type:'string'}),
  defineField({name:'seoDescriptionSq',title:'SEO description',type:'text',rows:3}),
  defineField({name:'seoDescriptionEn',title:'SEO description (EN)',type:'text',rows:3}),
  defineField({name:'ogImage',title:'Social / Open Graph image',type:'image'})
 ],preview:{prepare:()=>({title:'LindiMaps – Site settings'})}
})
