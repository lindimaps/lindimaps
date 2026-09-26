import {defineField, defineType} from 'sanity'
export const galleryItemType=defineType({
 name:'galleryItem',title:'Galeri',type:'document',
 fields:[
  defineField({name:'titleSq',title:'Titulli',type:'string'}),
  defineField({name:'titleEn',title:'Title (EN)',type:'string'}),
  defineField({name:'image',title:'Foto',type:'image',options:{hotspot:true},validation:r=>r.required()}),
  defineField({name:'captionSq',title:'Përshkrimi',type:'text',rows:2}),
  defineField({name:'captionEn',title:'Description (EN)',type:'text',rows:2}),
  defineField({name:'tags',title:'Etiketa',type:'array',of:[{type:'string'}],options:{layout:'tags'}})
 ],preview:{select:{title:'titleSq',media:'image'}}
})
