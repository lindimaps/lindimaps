import {defineField, defineType} from 'sanity'
export const homePageType=defineType({
 name:'homePage',title:'Home',type:'document',
 fields:[
  defineField({name:'heroTitleSq',title:'Hero – Titulli',type:'string'}),
  defineField({name:'heroTitleEn',title:'Hero – Title (EN)',type:'string'}),
  defineField({name:'heroTextSq',title:'Hero – Përshkrimi',type:'text',rows:3}),
  defineField({name:'heroTextEn',title:'Hero – Description (EN)',type:'text',rows:3}),
  defineField({name:'heroImage',title:'Hero – Imazhi',type:'image',options:{hotspot:true}}),
  defineField({name:'primaryCtaSq',title:'CTA kryesore',type:'string'}),
  defineField({name:'primaryCtaEn',title:'Primary CTA (EN)',type:'string'}),
  defineField({name:'secondaryCtaSq',title:'CTA dytësore',type:'string'}),
  defineField({name:'secondaryCtaEn',title:'Secondary CTA (EN)',type:'string'}),
  defineField({name:'introTitleSq',title:'Seksioni hyrës – Titulli',type:'string'}),
  defineField({name:'introTitleEn',title:'Intro section – Title (EN)',type:'string'}),
  defineField({name:'introSq',title:'Seksioni hyrës – Teksti',type:'text',rows:5}),
  defineField({name:'introEn',title:'Intro section – Text (EN)',type:'text',rows:5})
 ],preview:{prepare:()=>({title:'Home'})}
})
