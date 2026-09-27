import {defineField,defineType} from 'sanity'

export const projectCategoryType=defineType({
 name:'projectCategory',title:'Kategoritë e projekteve',type:'document',
 fields:[
  defineField({name:'titleSq',title:'Emri',type:'string',validation:r=>r.required()}),
  defineField({name:'titleEn',title:'Name (EN)',type:'string'}),
  defineField({name:'slug',title:'Slug',type:'slug',options:{source:'titleEn',maxLength:64},validation:r=>r.required()}),
  defineField({name:'order',title:'Renditja',type:'number',validation:r=>r.integer().min(0)})
 ],
 preview:{select:{title:'titleSq',subtitle:'titleEn'}}
})
