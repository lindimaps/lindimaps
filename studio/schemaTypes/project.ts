import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Projektet',
  type: 'document',
  fields: [
    defineField({name:'titleSq', title:'Titulli', type:'string', validation:r=>r.required()}),
    defineField({name:'titleEn', title:'Title (EN)', type:'string'}),
    defineField({name:'slug', title:'Slug', type:'slug', options:{source:'titleSq', maxLength:96}, validation:r=>r.required()}),
    defineField({name:'category', title:'Kategoria', type:'string', options:{list:[
      {title:'WebGIS',value:'webgis'},{title:'GIS',value:'gis'},{title:'Remote Sensing',value:'remote-sensing'},
      {title:'3D / CityEngine',value:'3d'},{title:'Research',value:'research'},{title:'Other',value:'other'}
    ]}}),
    defineField({name:'summarySq', title:'Përmbledhje', type:'text', rows:3}),
    defineField({name:'summaryEn', title:'Summary (EN)', type:'text', rows:3}),
    defineField({name:'descriptionSq', title:'Përshkrimi', type:'array', of:[{type:'block'}]}),
    defineField({name:'descriptionEn', title:'Description (EN)', type:'array', of:[{type:'block'}]}),
    defineField({name:'coverImage', title:'Imazhi kryesor', type:'image', options:{hotspot:true}, fields:[
      {name:'altSq',title:'Alt text',type:'string'},{name:'altEn',title:'Alt text (EN)',type:'string'}
    ]}),
    defineField({name:'gallery', title:'Galeria', type:'array', of:[{type:'image', options:{hotspot:true}}]}),
    defineField({name:'technologies', title:'Teknologjitë', type:'array', of:[{type:'string'}], options:{layout:'tags'}}),
    defineField({name:'roleSq', title:'Roli', type:'string'}),
    defineField({name:'roleEn', title:'Role (EN)', type:'string'}),
    defineField({name:'client', title:'Institucioni / Klienti', type:'string'}),
    defineField({name:'year', title:'Viti', type:'number'}),
    defineField({name:'liveUrl', title:'WebGIS / Live URL', type:'url'}),
    defineField({name:'githubUrl', title:'GitHub URL', type:'url'}),
    defineField({name:'location', title:'Vendndodhja', type:'geopoint'}),
    defineField({name:'featured', title:'Shfaq si projekt i veçuar', type:'boolean', initialValue:false}),
    defineField({name:'order', title:'Renditja', type:'number'})
  ],
  preview:{select:{title:'titleSq',subtitle:'category',media:'coverImage'}}
})
