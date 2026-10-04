import {getCliClient} from 'sanity/cli'

const client=getCliClient({apiVersion:'2025-02-19'})
const id='lindimaps-settings'
const doc=await client.getDocument(id)
if(!doc) throw new Error('Site settings document not found: '+id)

const defaults=[
 {_key:'services',page:'services',titleSq:'Shërbime GIS, WebGIS & Gjeohapësinore',titleEn:'GIS, WebGIS & Geospatial Services',descriptionSq:'Shërbime profesionale GIS, Remote Sensing, WebGIS, fotogrametri, hartografi dixhitale dhe zgjidhje gjeohapësinore nga LindiMaps.',descriptionEn:'Professional GIS, Remote Sensing, WebGIS, photogrammetry, digital cartography and geospatial services by LindiMaps.'},
 {_key:'projects',page:'projects',titleSq:'Projekte Gjeohapësinore',titleEn:'Geospatial Projects',descriptionSq:'Eksploro projekte LindiMaps në WebGIS, GIS, Remote Sensing, analiza gjeohapësinore, monitorim dhe dokumentim 3D.',descriptionEn:'Explore LindiMaps projects in WebGIS, GIS, Remote Sensing, geospatial analysis, monitoring and 3D documentation.'},
 {_key:'publications',page:'publications',titleSq:'Publikime & Kërkim Shkencor',titleEn:'Publications & Research',descriptionSq:'Publikime, kërkim shkencor, raporte dhe kontribute profesionale në GIS, Remote Sensing, WebGIS dhe teknologji gjeohapësinore.',descriptionEn:'Publications, scientific research, reports and professional contributions in GIS, Remote Sensing, WebGIS and geospatial technologies.'},
 {_key:'activities',page:'activities',titleSq:'Aktivitete Profesionale & Shkencore',titleEn:'Professional & Scientific Activities',descriptionSq:'Aktivitete profesionale dhe shkencore të LindiMaps: punë në terren, konferenca, trajnime dhe zhvillime në fushën gjeohapësinore.',descriptionEn:'LindiMaps professional and scientific activities, including fieldwork, conferences, training and developments in the geospatial field.'},
 {_key:'gallery',page:'gallery',titleSq:'Galeri Gjeohapësinore',titleEn:'Geospatial Gallery',descriptionSq:'Arkivi vizual i LindiMaps me imazhe nga territori, puna në terren, hartografia dhe projektet gjeohapësinore.',descriptionEn:'The LindiMaps visual archive featuring territory, fieldwork, cartography and geospatial projects.'},
 {_key:'about',page:'about',titleSq:'Rreth LindiMaps',titleEn:'About LindiMaps',descriptionSq:'Njihuni me LindiMaps, qasjen profesionale, eksperiencën, vlerat dhe bashkëpunimet në GIS, Remote Sensing dhe WebGIS.',descriptionEn:'Learn about LindiMaps, its professional approach, experience, values and collaborations in GIS, Remote Sensing and WebGIS.'},
 {_key:'contact',page:'contact',titleSq:'Kontakt',titleEn:'Contact',descriptionSq:'Kontakto LindiMaps për GIS, Remote Sensing, WebGIS, fotogrametri, hartografi dixhitale dhe projekte gjeohapësinore.',descriptionEn:'Contact LindiMaps for GIS, Remote Sensing, WebGIS, photogrammetry, digital cartography and geospatial projects.'}
]

const existing=Array.isArray(doc.pageSeo)?doc.pageSeo:[]
const byPage=new Map(existing.map(item=>[item?.page,item]))
const merged=defaults.map(item=>({...item,...(byPage.get(item.page)||{})}))
for(const item of existing){if(item?.page&&!defaults.some(d=>d.page===item.page)) merged.push(item)}

await client.patch(id).set({pageSeo:merged}).commit()
console.log('Per-page SEO populated for 7 pages. Existing page SEO values were preserved.')
