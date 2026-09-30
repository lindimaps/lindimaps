import {defineField, defineType} from 'sanity'
export const homePageType=defineType({
 name:'homePage',title:'Home',type:'document',
 groups:[
  {name:'hero',title:'Hero'},
  {name:'content',title:'Përmbajtja'}
 ],
 fields:[
  defineField({name:'heroTitleSq',title:'Hero – Titulli',type:'string',group:'hero'}),
  defineField({name:'heroTitleEn',title:'Hero – Title (EN)',type:'string',group:'hero'}),
  defineField({name:'heroTextSq',title:'Hero – Përshkrimi',type:'text',rows:3,group:'hero'}),
  defineField({name:'heroTextEn',title:'Hero – Description (EN)',type:'text',rows:3,group:'hero'}),
  defineField({name:'heroUseVideo',title:'Përdor video në Hero',type:'boolean',group:'hero',initialValue:false,description:'Kur aktivizohet dhe ka video të ngarkuar, video përdoret si background. Në të kundërt përdoret imazhi.',options:{layout:'switch'}}),
  defineField({name:'heroVideo',title:'Hero – Video background',type:'file',group:'hero',options:{accept:'video/mp4,video/webm'},description:'MP4 ose WebM. Rekomandohet video e optimizuar, pa audio, landscape 16:9. Luhet automatikisht muted + loop.',hidden:({parent})=>!parent?.heroUseVideo}),
  defineField({name:'heroVideoPosition',title:'Pozicioni i videos',type:'string',group:'hero',initialValue:'center',description:'Zgjidh fokusin e videos brenda Hero-s.',options:{list:[{title:'Qendër',value:'center'},{title:'Sipër',value:'top'},{title:'Poshtë',value:'bottom'},{title:'Majtas',value:'left'},{title:'Djathtas',value:'right'}],layout:'radio'},hidden:({parent})=>!parent?.heroUseVideo}),
  defineField({name:'heroImage',title:'Hero – Poster / fallback image',type:'image',group:'hero',options:{hotspot:true},description:'Shfaqet para se video të ngarkohet, kur video është e çaktivizuar ose kur pajisja redukton animacionet.'}),
  defineField({name:'primaryCtaSq',title:'CTA kryesore',type:'string',group:'hero'}),
  defineField({name:'primaryCtaEn',title:'Primary CTA (EN)',type:'string',group:'hero'}),
  defineField({name:'secondaryCtaSq',title:'CTA dytësore',type:'string',group:'hero'}),
  defineField({name:'secondaryCtaEn',title:'Secondary CTA (EN)',type:'string',group:'hero'}),
  defineField({name:'introTitleSq',title:'Seksioni hyrës – Titulli',type:'string',group:'content'}),
  defineField({name:'introTitleEn',title:'Intro section – Title (EN)',type:'string',group:'content'}),
  defineField({name:'introSq',title:'Seksioni hyrës – Teksti',type:'text',rows:5,group:'content'}),
  defineField({name:'introEn',title:'Intro section – Text (EN)',type:'text',rows:5,group:'content'})
 ],preview:{prepare:()=>({title:'Home',subtitle:'Hero, video dhe përmbajtja e faqes kryesore'})}
})
