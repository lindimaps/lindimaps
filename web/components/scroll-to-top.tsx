"use client";
import {usePathname} from "next/navigation";
import {useEffect,useLayoutEffect} from "react";

export function ScrollToTop(){
 const pathname=usePathname();
 useEffect(()=>{
  if("scrollRestoration" in window.history)window.history.scrollRestoration="manual";
  return()=>{if("scrollRestoration" in window.history)window.history.scrollRestoration="auto"};
 },[]);
 useLayoutEffect(()=>{
  if(window.location.hash)return;
  const reset=()=>window.scrollTo({top:0,left:0,behavior:"auto"});
  reset();
  const frame=requestAnimationFrame(reset);
  const timer=window.setTimeout(reset,80);
  return()=>{cancelAnimationFrame(frame);window.clearTimeout(timer)};
 },[pathname]);
 return null;
}
