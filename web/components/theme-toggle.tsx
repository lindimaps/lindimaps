"use client";

import {useEffect,useState} from "react";

type Theme="light"|"dark";

function systemTheme():Theme{
  if(typeof window==="undefined")return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";
}
function applyTheme(theme:Theme){
  document.documentElement.dataset.theme=theme;
  document.documentElement.classList.toggle("dark",theme==="dark");
  document.documentElement.style.colorScheme=theme;
}
export function ThemeToggle({lang}:{lang:"sq"|"en"}){
  const [theme,setTheme]=useState<Theme>("light");
  useEffect(()=>{
    const saved=window.localStorage.getItem("lm-theme");
    const initial:Theme=saved==="dark"||saved==="light"?saved:systemTheme();
    setTheme(initial);
    applyTheme(initial);
  },[]);
  const toggle=()=>{
    const next:Theme=theme==="dark"?"light":"dark";
    setTheme(next);
    applyTheme(next);
    window.localStorage.setItem("lm-theme",next);
  };
  const dark=theme==="dark";
  return <button className="theme-toggle" type="button" onClick={toggle}
    aria-label={lang==="sq"?(dark?"Kalo në modalitetin e ndritshëm":"Kalo në modalitetin e errët"):(dark?"Switch to light mode":"Switch to dark mode")}
    title={lang==="sq"?(dark?"Light mode":"Dark mode"):(dark?"Light mode":"Dark mode")}>
    <span className="theme-toggle-track" aria-hidden="true">
      <span className="theme-toggle-sun">☼</span>
      <span className="theme-toggle-moon">☾</span>
      <span className="theme-toggle-knob"/>
    </span>
  </button>;
}
