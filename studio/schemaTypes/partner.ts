import {defineField, defineType} from 'sanity'
export const partnerType=defineType({
 name:'partner',title:'Partnerë / Institucione',type:'document',
 fields:[
  defineField({name:'name',title:'Emri',type:'string',validation:r=>r.required()}),
  defineField({name:'roleSq',title:'Roli / Përshkrimi',type:'string'}),
  defineField({name:'roleEn',title:'Role / Description (EN)',type:'string'}),
  defineField({name:'logo',title:'Logo',type:'image'}),
  defineField({name:'url',title:'Website',type:'url'}),
  defineField({name:'order',title:'Renditja',type:'number'})
 ],preview:{select:{title:'name',subtitle:'roleSq',media:'logo'}}
})
