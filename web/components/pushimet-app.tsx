"use client";
import {useEffect,useState} from "react";
import {onAuthStateChanged,signInWithEmailAndPassword,signOut,User} from "firebase/auth";
import {doc,onSnapshot} from "firebase/firestore";
import {pushimetAuth,pushimetDb} from "@/lib/firebase-pushimet";

type LeaveYear={allowance?:number;selected?:string[];medical?:string[];manualCarryover?:number|null};

export default function PushimetApp(){
 const [user,setUser]=useState<User|null>(null);
 const [ready,setReady]=useState(false);
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [error,setError]=useState("");
 const [year,setYear]=useState(new Date().getFullYear());
 const [data,setData]=useState<LeaveYear>({});
 useEffect(()=>onAuthStateChanged(pushimetAuth,u=>{setUser(u);setReady(true)}),[]);
 useEffect(()=>{if(!user)return;return onSnapshot(doc(pushimetDb,"users",user.uid,"years",String(year)),snap=>setData(snap.exists()?snap.data() as LeaveYear:{}))},[user,year]);
 if(!ready)return <main className="system-auth"><b>LINDIMAPS SYSTEMS</b></main>;
 if(!user)return <main className="system-auth"><form onSubmit={async e=>{e.preventDefault();setError("");try{await signInWithEmailAndPassword(pushimetAuth,email,password)}catch{setError("Email ose fjalëkalim i pasaktë.");}}}><small>LINDIMAPS SYSTEMS</small><h1>Pushimet</h1><p>Hyr me llogarinë ekzistuese për të aksesuar të dhënat e lejeve.</p><input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/><input type="password" placeholder="Fjalëkalimi" value={password} onChange={e=>setPassword(e.target.value)} required/><button>Kyçu</button>{error&&<em>{error}</em>}<a href="/pushimet-legacy.html">Hap versionin aktual ↗</a></form></main>;
 const allowance=Number(data.allowance??28),used=(data.selected??[]).length,medical=(data.medical??[]).length,carry=Number(data.manualCarryover??0);
 return <main className="system-dashboard"><header><a href="/sisteme"><strong>LINDI<span>MAPS</span></strong><small>Systems · Pushimet</small></a><div><span>{user.email}</span><button onClick={()=>signOut(pushimetAuth)}>Dil</button></div></header><section className="system-dash-head"><div><small>MENAXHIMI I LEJEVE</small><h1>{year}</h1></div><nav><button onClick={()=>setYear(year-1)}>←</button><button onClick={()=>setYear(new Date().getFullYear())}>Sot</button><button onClick={()=>setYear(year+1)}>→</button></nav></section><section className="system-metrics"><article><small>Leje vjetore</small><b>{allowance}</b></article><article><small>Të përdorura</small><b>{used}</b></article><article><small>Të mbetura</small><b>{allowance+carry-used}</b></article><article><small>Raporte mjekësore</small><b>{medical}</b></article></section><section className="migration-note"><small>NEXT.JS + FIREBASE</small><h2>Të dhënat ekzistuese po lexohen direkt nga Firestore.</h2><p>Kjo fazë përdor të njëjtën llogari dhe të njëjtën strukturë <code>users / years</code>. Versioni aktual mbetet i disponueshëm gjatë migrimit.</p><a href="/pushimet-legacy.html">Vazhdo te kalendari aktual ↗</a></section></main>
}