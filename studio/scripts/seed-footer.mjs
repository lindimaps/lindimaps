import {getCliClient} from 'sanity/cli'
const client=getCliClient({apiVersion:'2025-02-19'})
const id='lindimaps-settings'
const current=await client.getDocument(id)
if(!current) throw new Error('lindimaps-settings was not found; nothing was changed.')
const defaults={footerKicker:'BEYOND MAPS.',footerHeadline:'Geospatial Solutions.',footerDescriptionSq:'GIS, Remote Sensing dhe WebGIS për të kuptuar, analizuar dhe komunikuar territorin.',footerDescriptionEn:'GIS, Remote Sensing and WebGIS to understand, analyze and communicate territory.',footerCtaSq:'Fillo një projekt',footerCtaEn:'Start a project',footerCtaUrlSq:'/sq/kontakte',footerCtaUrlEn:'/en/contact',footerHoursSq:'Hën – Pre · 09:00 – 17:00',footerHoursEn:'Mon – Fri · 09:00 – 17:00',footerCapabilitiesSq:['Analiza Gjeohapësinore','Remote Sensing','Hartografi Dixhitale','WebGIS Development','Trajnime & Konsulencë'],footerCapabilitiesEn:['Geospatial Analysis','Remote Sensing','Digital Cartography','WebGIS Development','Training & Consulting']}
await client.patch(id).setIfMissing(defaults).commit()
console.log('Footer CMS populated with the current live values. Existing settings were preserved.')
