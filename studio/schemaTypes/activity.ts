import {defineField, defineType} from 'sanity'
export const activityType=defineType({
 name:'activity',title:'Aktivitete',type:'document',
 fields:[
  defineField({name:'titleSq',title:'Titulli',type:'string',validation:r=>r.required()}),
  defineField({name:'titleEn',title:'Title (EN)',type:'string'}),
  defineField({name:'kind',title:'Lloji',type:'string',options:{list:['Conference','Training','Workshop','Presentation','Fieldwork','Other']}}),
  defineField({name:'date',title:'Data',type:'date',validation:r=>r.required()}),
  defineField({name:'location',title:'Vendndodhja',type:'string'}),
  defineField({name:'locationEn',title:'Location (EN)',type:'string'}),
  defineField({name:'descriptionSq',title:'Përshkrimi',type:'text',rows:4}),
  defineField({name:'descriptionEn',title:'Description (EN)',type:'text',rows:4}),
  defineField({name:'image',title:'Foto',type:'image',options:{hotspot:true}}),
  defineField({name:'url',title:'Link',type:'url'})
 ],preview:{select:{title:'titleSq',subtitle:'date',media:'image'}}
})
