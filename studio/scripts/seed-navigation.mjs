import {getCliClient} from 'sanity/cli'

const client=getCliClient({apiVersion:'2025-02-19'})
const id='lindimaps-settings'
const current=await client.getDocument(id)
if(!current) throw new Error('lindimaps-settings was not found; nothing was changed.')
if(Array.isArray(current.headerMenu)&&current.headerMenu.length){
  console.log('Header & Menu already contains data. Nothing changed.')
  process.exit(0)
}
const headerMenu=[
 {_key:'home',_type:'object',labelSq:'Kreu',labelEn:'Home',urlSq:'/',urlEn:'/en',visible:true,newTab:false,children:[]},
 {_key:'services',_type:'object',labelSq:'Shërbime',labelEn:'Services',urlSq:'/sq/sherbime',urlEn:'/en/services',visible:true,newTab:false,children:[]},
 {_key:'projects',_type:'object',labelSq:'Projekte',labelEn:'Projects',urlSq:'/sq/projekte',urlEn:'/en/projects',visible:true,newTab:false,children:[]},
 {_key:'publications',_type:'object',labelSq:'Publikime',labelEn:'Publications',urlSq:'/sq/publikime',urlEn:'/en/publications',visible:true,newTab:false,children:[]},
 {_key:'activities',_type:'object',labelSq:'Aktivitete',labelEn:'Activities',urlSq:'/sq/aktivitete',urlEn:'/en/activities',visible:true,newTab:false,children:[]},
 {_key:'gallery',_type:'object',labelSq:'Galeri',labelEn:'Gallery',urlSq:'/sq/galeri',urlEn:'/en/gallery',visible:true,newTab:false,children:[]},
 {_key:'about',_type:'object',labelSq:'Rreth nesh',labelEn:'About us',urlSq:'/sq/rreth_nesh',urlEn:'/en/about',visible:true,newTab:false,children:[]},
 {_key:'contact',_type:'object',labelSq:'Kontakt',labelEn:'Contact',urlSq:'/sq/kontakte',urlEn:'/en/contact',visible:true,newTab:false,children:[]}
]
await client.patch(id).setIfMissing({headerMenu}).commit()
console.log('Header & Menu populated with the current live navigation. Existing settings were preserved.')
