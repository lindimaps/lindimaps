import {defineField, defineType} from 'sanity'

export const publicationType = defineType({
  name:'publication', title:'Publikime', type:'document',
  fields:[
    defineField({name:'title',title:'Titulli',type:'string',validation:r=>r.required()}),
    defineField({name:'titleEn',title:'Title (EN)',type:'string'}),
    defineField({name:'publicationType',title:'Lloji',type:'string',options:{list:['Journal article','Book chapter','Conference paper','Report','Other']}}),
    defineField({name:'authors',title:'Autorët',type:'array',of:[{type:'string'}]}),
    defineField({name:'year',title:'Viti',type:'number'}),
    defineField({name:'publisher',title:'Revista / Botuesi / Konferenca',type:'string'}),
    defineField({name:'doi',title:'DOI',type:'string'}),
    defineField({name:'url',title:'URL',type:'url'}),
    defineField({name:'abstractSq',title:'Përmbledhje',type:'text',rows:5}),
    defineField({name:'abstractEn',title:'Abstract (EN)',type:'text',rows:5}),
    defineField({name:'coverImage',title:'Imazhi',type:'image',options:{hotspot:true}}),
    defineField({name:'featured',title:'Publikim i veçuar',type:'boolean',initialValue:false})
  ],
  preview:{select:{title:'title',subtitle:'publisher',media:'coverImage'}}
})
