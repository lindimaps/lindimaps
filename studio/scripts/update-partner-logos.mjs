import {getCliClient} from 'sanity/cli'
import {readFileSync} from 'node:fs'
import {resolve} from 'node:path'
const data=JSON.parse(readFileSync(resolve(process.cwd(),'../web/data/starter.json'),'utf8'))
const partners=(data.partners||[]).filter((item)=>item._type==='partner'&&item.logoUrl)
const client=getCliClient({apiVersion:'2025-02-19'}).withConfig({useCdn:false,perspective:'raw'})
async function main(){
 const config=client.config()
 if(config.projectId!=='oyagunrg'||config.dataset!=='production') throw new Error('Expected LindiMaps project oyagunrg / production; update stopped.')
 let updated=0
 for(const partner of partners){
  const existing=await client.fetch('*[_type=="partner" && (_id==$id || name==$name)][0]{_id}',{id:partner._id,name:partner.name})
  if(!existing?._id){console.log('SKIP missing:',partner.name);continue}
  await client.patch(existing._id).set({logoUrl:partner.logoUrl,url:partner.url,order:partner.order}).commit()
  console.log('UPDATE logo:',partner.name);updated++
 }
 console.log(`Partner logo update complete: ${updated} updated.`)
}
main().catch((error)=>{console.error(error instanceof Error?error.message:'Update failed');process.exitCode=1})
