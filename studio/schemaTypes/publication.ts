import {defineField, defineType} from 'sanity'

export const publicationType = defineType({
  name:'publication', title:'Publikime', type:'document',
  fields:[
    defineField({name:'title',title:'Titulli',type:'string',validation:r=>r.required()}),
    defineField({name:'titleEn',title:'Title (EN)',type:'string'}),
    defineField({name:'publicationType',title:'Lloji',type:'string',options:{list:[
      {title:'Artikull shkencor',value:'Journal article'},
      {title:'Kapitull libri',value:'Book chapter'},
      {title:'Punim konference',value:'Conference paper'},
      {title:'Raport',value:'Report'},
      {title:'Poster / Prezantim',value:'Presentation'},
      {title:'Tjetër',value:'Other'}
    ]}}),
    defineField({name:'authors',title:'Autorët',type:'array',of:[{type:'string'}]}),
    defineField({name:'year',title:'Viti',type:'number',validation:r=>r.integer().min(1900).max(2100)}),
    defineField({name:'publisher',title:'Revista / Botuesi / Konferenca',type:'string'}),
    defineField({name:'doi',title:'DOI',type:'string',validation:r=>r.regex(/^10\.\d{4,9}\/\S+$/,{name:'DOI',invert:false}).warning('Përdorni formatin DOI, p.sh. 10.xxxx/xxxxx')}),
    defineField({name:'url',title:'URL',type:'url'}),
    defineField({name:'pdf',title:'PDF / Dokument',type:'file',options:{accept:'.pdf'}}),
    defineField({name:'citation',title:'Referenca bibliografike',type:'text',rows:3}),
    defineField({name:'keywords',title:'Fjalë kyçe / Keywords',type:'array',of:[{type:'string'}],options:{layout:'tags'}}),
    defineField({name:'abstractSq',title:'Përmbledhje',type:'text',rows:5}),
    defineField({name:'abstractEn',title:'Abstract (EN)',type:'text',rows:5}),
    defineField({name:'coverImage',title:'Imazhi',type:'image',options:{hotspot:true}}),
    defineField({name:'featured',title:'Publikim i veçuar',type:'boolean',initialValue:false})
  ],
  preview:{select:{title:'title',publisher:'publisher',year:'year',media:'coverImage'},prepare({title,publisher,year,media}){return {title,subtitle:[publisher,year].filter(Boolean).join(' · '),media}}}
})
