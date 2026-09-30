import {getSiteContent} from "@/lib/sanity";

export const revalidate = 60;

export async function GET(){
  const {settings}=await getSiteContent();
  const source=settings?.favicon;
  if(!source)return new Response(null,{status:404});
  try{
    const upstream=await fetch(source,{next:{revalidate:60}});
    if(!upstream.ok)return new Response(null,{status:404});
    const body=await upstream.arrayBuffer();
    return new Response(body,{headers:{
      "Content-Type":upstream.headers.get("content-type")||"image/png",
      "Cache-Control":"public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400"
    }});
  }catch{return new Response(null,{status:404})}
}
