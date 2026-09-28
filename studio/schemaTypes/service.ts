import {defineField, defineType} from 'sanity'

const localizedList=(name:string,title:string)=>defineField({name,title,type:'array',of:[{type:'string'}]})

export const serviceType = defineType({
  name: 'service',
  title: 'Shërbime',
  type: 'document',
  fields: [
    defineField({name:'imageUrl',title:'Imazhi origjinal – URL',description:'Përdoret derisa të ngarkoni një imazh të ri.',type:'url'}),
    defineField({name:'titleSq',title:'Titulli',type:'string',validation:(r)=>r.required()}),
    defineField({name:'titleEn',title:'Title (EN)',type:'string'}),
    defineField({name:'slug',title:'Slug / URL',type:'slug',options:{source:'titleSq',maxLength:96},description:'Përdoret për faqen e dedikuar të shërbimit.'}),
    defineField({name:'descriptionSq',title:'Përshkrimi',type:'text',rows:4}),
    defineField({name:'descriptionEn',title:'Description (EN)',type:'text',rows:4}),
    defineField({name:'icon',title:'Ikona / Imazhi',type:'image'}),
    defineField({name:'leadSq',title:'Hyrja e faqes së shërbimit',type:'text',rows:3}),
    defineField({name:'leadEn',title:'Service page lead (EN)',type:'text',rows:3}),
    defineField({name:'introSq',title:'Qasja / Përshkrimi i detajuar',type:'text',rows:6}),
    defineField({name:'introEn',title:'Approach / Detailed description (EN)',type:'text',rows:6}),
    localizedList('capabilitiesSq','Kapacitetet'),
    localizedList('capabilitiesEn','Capabilities (EN)'),
    localizedList('workflowSq','Workflow / Hapat'),
    localizedList('workflowEn','Workflow (EN)'),
    localizedList('deliverablesSq','Dorëzimet'),
    localizedList('deliverablesEn','Deliverables (EN)'),
    localizedList('applicationsSq','Përdorimet'),
    localizedList('applicationsEn','Applications (EN)'),
    defineField({name:'technologies',title:'Teknologjitë / Logot',description:'Shto, hiq dhe rendit teknologjitë që shfaqen në shiritin lëvizës.',type:'array',of:[{type:'object',fields:[
      defineField({name:'name',title:'Emri',type:'string',validation:(r)=>r.required()}),
      defineField({name:'logo',title:'Logo',type:'image',options:{hotspot:true}}),
      defineField({name:'url',title:'Website',type:'url'})
    ],preview:{select:{title:'name',media:'logo'}}}]}),
    defineField({name:'ctaTitleSq',title:'Titulli “Diskuto projektin”',type:'string'}),
    defineField({name:'ctaTitleEn',title:'CTA title (EN)',type:'string'}),
    defineField({name:'ctaTextSq',title:'Teksti “Diskuto projektin”',type:'text',rows:3}),
    defineField({name:'ctaTextEn',title:'CTA text (EN)',type:'text',rows:3}),
    defineField({name:'showOnHome',title:'Shfaq në kryefaqe',description:'Aktivizoje për ta shfaqur këtë shërbim në Home.',type:'boolean',initialValue:false}),
    defineField({name:'homeOrder',title:'Renditja në kryefaqe',description:'Numër më i vogël = shfaqet më përpara në Home.',type:'number',validation:(r)=>r.integer().min(0)}),
    defineField({name:'order',title:'Renditja',type:'number'}),
  ],
  preview:{select:{title:'titleSq',subtitle:'titleEn',media:'icon'}},
})
