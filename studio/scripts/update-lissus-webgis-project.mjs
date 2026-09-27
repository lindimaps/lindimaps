import {getCliClient} from 'sanity/cli'
import {readFileSync} from 'node:fs'
import {resolve} from 'node:path'

const data=JSON.parse(readFileSync(resolve(process.cwd(),'../web/data/starter.json'),'utf8'))
const source=data.projects.find((item)=>item._id==='lindimaps-project-3')
if(!source) throw new Error('Lissus / Lezhë WebGIS source project not found.')
const client=getCliClient({apiVersion:'2025-02-19'}).withConfig({useCdn:false,perspective:'raw'})

async function main(){
 const config=client.config()
 if(config.projectId!=='oyagunrg'||config.dataset!=='production') throw new Error('Expected LindiMaps project oyagunrg / production; update stopped.')
 const existing=await client.fetch('*[_type=="project" && (_id==$id || _id=="drafts."+$id || slug.current=="kalaja-lezhe-3d" || titleSq=="Kalaja Lezhë 3D")][0]{_id}',{id:source._id})
 if(!existing) throw new Error('Existing Lezhë project was not found in Sanity; no document changed.')
 const {_id,_type,...fields}=source
 await client.patch(existing._id).set(fields).unset(['imageUrl']).commit()
 console.log('UPDATED project: Lissus / Lezhë WebGIS')
}
main().catch((error)=>{console.error(error instanceof Error?error.message:'Update failed');process.exitCode=1})
