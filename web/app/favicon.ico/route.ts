import {getSiteContent} from "@/lib/sanity";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(){
  const {settings}=await getSiteContent();
  const source=settings?.favicon;

  if(!source){
    return new Response(null,{
      status:404,
      headers:{"Cache-Control":"no-store, max-age=0"}
    });
  }

  return Response.redirect(source,307);
}
