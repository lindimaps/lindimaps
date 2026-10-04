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
    defineField({
      name:'headerMenu',
      title:'Header & Menu',
      description:'Opsionale. Nëse lihet bosh, përdoret menuja aktuale e faqes. Rendit elementet me drag & drop. Mbështet një nivel submenuje.',
      type:'array',
      of:[{type:'object',fields:[
        defineField({name:'labelSq',title:'Emri (SQ)',type:'string',validation:(r)=>r.required().max(50)}),
        defineField({name:'labelEn',title:'Name (EN)',type:'string',validation:(r)=>r.required().max(50)}),
        defineField({name:'urlSq',title:'Linku (SQ)',description:'P.sh. /sq/sherbime ose https://...',type:'string',validation:(r)=>r.required()}),
        defineField({name:'urlEn',title:'Link (EN)',description:'P.sh. /en/services ose https://...',type:'string',validation:(r)=>r.required()}),
        defineField({name:'visible',title:'Shfaq në menu',type:'boolean',initialValue:true}),
        defineField({name:'newTab',title:'Hap në tab të ri',type:'boolean',initialValue:false}),
        defineField({
          name:'children',title:'Submenu',description:'Opsionale. Vetëm një nivel submenuje.',
          type:'array',of:[{type:'object',fields:[
            defineField({name:'labelSq',title:'Emri (SQ)',type:'string',validation:(r)=>r.required().max(50)}),
            defineField({name:'labelEn',title:'Name (EN)',type:'string',validation:(r)=>r.required().max(50)}),
            defineField({name:'urlSq',title:'Linku (SQ)',type:'string',validation:(r)=>r.required()}),
            defineField({name:'urlEn',title:'Link (EN)',type:'string',validation:(r)=>r.required()}),
            defineField({name:'visible',title:'Shfaq',type:'boolean',initialValue:true}),
            defineField({name:'newTab',title:'Hap në tab të ri',type:'boolean',initialValue:false}),
          ],preview:{select:{title:'labelSq',subtitle:'labelEn'}}}]
        }),
      ],preview:{select:{title:'labelSq',subtitle:'labelEn'}}}]
    }),
    defineField({name:'presentationVideo',title:'Video prezantuese – Aktivitetet & Galeria',description:'Video fallback që shfaqet te Aktivitetet ose Galeria vetëm kur nuk ka përmbajtje të publikuar. MP4/WebM.',type:'file',options:{accept:'video/mp4,video/webm'}}),
    defineField({name:'presentationVideoPoster',title:'Poster i videos prezantuese',description:'Opsionale. Imazhi që shfaqet para nisjes së videos.',type:'image',options:{hotspot:true}}),
    defineField({name:'email',title:'Email',type:'string',validation:(r)=>r.email()}),
    defineField({name:'locationSq',title:'Vendndodhja',type:'string'}),
    defineField({name:'locationEn',title:'Location (EN)',type:'string'}),
    defineField({name:'linkedin',title:'LinkedIn',type:'url'}),
    defineField({name:'linkedinIcon',title:'LinkedIn – Ikona',description:'Opsionale. Nëse lihet bosh përdoret ikona automatike e LinkedIn.',type:'image'}),
    defineField({name:'instagram',title:'Instagram',type:'url'}),
    defineField({name:'instagramIcon',title:'Instagram – Ikona',description:'Opsionale. Nëse lihet bosh përdoret ikona automatike e Instagram.',type:'image'}),
    defineField({name:'github',title:'GitHub',type:'url'}),
    defineField({name:'githubIcon',title:'GitHub – Ikona',description:'Opsionale. Nëse lihet bosh përdoret ikona automatike e GitHub.',type:'image'}),
    defineField({name:'researchGate',title:'ResearchGate',type:'url'}),
    defineField({name:'researchGateIcon',title:'ResearchGate – Ikona',description:'Opsionale. Nëse lihet bosh përdoret ikona automatike e ResearchGate.',type:'image'}),
    defineField({
      name:'footerSocialLinks',
      title:'Footer – Rrjetet sociale shtesë',
      description:'Shto rrjete të tjera sociale në footer. Për rrjetet e njohura ikona gjenerohet automatikisht; ikona e ngarkuar ka përparësi.',
      type:'array',
      of:[{type:'object',fields:[
        defineField({name:'name',title:'Emri i rrjetit',type:'string',validation:(r)=>r.required().min(2).max(40)}),
        defineField({name:'url',title:'Linku',type:'url',validation:(r)=>r.required()}),
        defineField({name:'icon',title:'Ikona',description:'Opsionale. Ngarko ikonën tënde; nëse lihet bosh përdoret ikona automatike kur rrjeti njihet.',type:'image'})
      ],preview:{select:{title:'name',subtitle:'url',media:'icon'}}}],
    }),
    defineField({name:'seoTitle',title:'SEO title',type:'string',validation:(r)=>r.max(70)}),
    defineField({name:'seoDescriptionSq',title:'SEO description',type:'text',rows:3,validation:(r)=>r.max(180)}),
    defineField({name:'seoDescriptionEn',title:'SEO description (EN)',type:'text',rows:3,validation:(r)=>r.max(180)}),
    defineField({name:'ogImage',title:'Social / Open Graph image',type:'image'}),
  ],
  preview:{prepare:()=>({title:'LindiMaps – Site settings'})},
})