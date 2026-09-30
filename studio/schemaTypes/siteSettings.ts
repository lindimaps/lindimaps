import {defineField, defineType} from 'sanity'
export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Konfigurimi i faqes',
  type: 'document',
  fields: [
    defineField({name:'useStarterContent',title:'Përdor përmbajtjen fillestare kur mungon në CMS',type:'boolean',initialValue:false}),
    defineField({name:'siteName',title:'Emri i faqes',type:'string',initialValue:'LindiMaps',validation:(r)=>r.required().min(2).max(80)}),
    defineField({name:'logo',title:'Logo – Header / Light',description:'Logoja kryesore e faqes. Nëse lihet bosh përdoret logoja aktuale.',type:'image'}),
    defineField({name:'logoDark',title:'Logo – Dark mode',description:'Opsionale. Nëse lihet bosh përdoret logoja kryesore.',type:'image'}),
    defineField({name:'logoFooter',title:'Logo – Footer',description:'Opsionale. Nëse lihet bosh përdoret logoja kryesore.',type:'image'}),
    defineField({name:'favicon',title:'Site Icon / Favicon',description:'Ikona që shfaqet në tab-in e browser-it. Preferohet imazh katror.',type:'image'}),
    defineField({name:'presentationVideo',title:'Video prezantuese – Aktivitetet & Galeria',description:'Video fallback që shfaqet te Aktivitetet ose Galeria vetëm kur nuk ka përmbajtje të publikuar. MP4/WebM.',type:'file',options:{accept:'video/mp4,video/webm'}}),
    defineField({name:'presentationVideoPoster',title:'Poster i videos prezantuese',description:'Opsionale. Imazhi që shfaqet para nisjes së videos.',type:'image',options:{hotspot:true}}),
    defineField({name:'email',title:'Email',type:'string',validation:(r)=>r.email()}),
    defineField({name:'locationSq',title:'Vendndodhja',type:'string'}),
    defineField({name:'locationEn',title:'Location (EN)',type:'string'}),
    defineField({name:'linkedin',title:'LinkedIn',type:'url'}),
    defineField({name:'instagram',title:'Instagram',type:'url'}),
    defineField({name:'github',title:'GitHub',type:'url'}),
    defineField({name:'researchGate',title:'ResearchGate',type:'url'}),
    defineField({
      name:'socialLinks',
      title:'Rrjetet sociale – Link + Ikonë',
      description:'Opsionale. Menaxho rrjetet sociale të footer-it nga CMS. Ikona e ngarkuar këtu përdoret në vend të ikonës fallback.',
      type:'array',
      of:[{type:'object',fields:[
        defineField({name:'name',title:'Emri',type:'string',validation:(r)=>r.required().min(2).max(40)}),
        defineField({name:'url',title:'Linku',type:'url',validation:(r)=>r.required()}),
        defineField({name:'icon',title:'Ikona',description:'Ngarko SVG, PNG ose WebP. Preferohet ikonë katrore/transparente.',type:'image'})
      ],preview:{select:{title:'name',subtitle:'url',media:'icon'}}}],
    }),
    defineField({name:'seoTitle',title:'SEO title',type:'string',validation:(r)=>r.max(70)}),
    defineField({name:'seoDescriptionSq',title:'SEO description',type:'text',rows:3,validation:(r)=>r.max(180)}),
    defineField({name:'seoDescriptionEn',title:'SEO description (EN)',type:'text',rows:3,validation:(r)=>r.max(180)}),
    defineField({name:'ogImage',title:'Social / Open Graph image',type:'image'}),
  ],
  preview:{prepare:()=>({title:'LindiMaps – Site settings'})},
})