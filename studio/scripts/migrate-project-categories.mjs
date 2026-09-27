import {getCliClient} from 'sanity/cli'

const client=getCliClient({apiVersion:'2025-02-19'})
const expectedProjectId='oyagunrg'
const expectedDataset='production'
const config=client.config()
if(config.projectId!==expectedProjectId||config.dataset!==expectedDataset)throw new Error('Refusing to migrate outside LindiMaps production dataset')

const defaults=[
 ['gis','GIS','GIS',1],['webgis','WebGIS','WebGIS',2],['remote-sensing','Remote Sensing','Remote Sensing',3],['3d','3D','3D',4],['web-development','Zhvillim Web & Platforma Digjitale','Web Development & Digital Platforms',5],['research','Kërkim','Research',6],['other','Tjetër','Other',99],
]
for(const [slug,titleSq,titleEn,order] of defaults){await client.createIfNotExists({_id:`lindimaps-project-category-${slug}`,_type:'projectCategory',titleSq,titleEn,slug:{_type:'slug',current:slug},order})}

const projects=await client.fetch(`*[_type=="project" && defined(category)]{_id,category,categories}`)
for(const project of projects){
 const category=String(project.category||'').trim()
 if(!category)continue
 const target=defaults.some(([slug])=>slug===category)?category:'other'
 const ref={_type:'reference',_ref:`lindimaps-project-category-${target}`,_key:target}
 const existing=Array.isArray(project.categories)?project.categories:[]
 const categories=existing.some((item)=>item?._ref===ref._ref)?existing:[...existing,ref]
 await client.patch(project._id).set({categories}).unset(['category']).commit()
 console.log(`Migrated ${project._id}: ${category} -> ${target}`)
}
console.log(`Done. Migrated ${projects.length} project(s) and removed legacy category fields.`)
