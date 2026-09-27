import {getApps,initializeApp} from "firebase/app";import {getAuth} from "firebase/auth";import {getFirestore} from "firebase/firestore";export const firebaseConfig = {
 apiKey: "AIzaSyDGlHCPxysEO4ZxxIPic3u7rRZCo7oZTZ4",
 authDomain: "workhours-fb74a.firebaseapp.com",
 projectId: "workhours-fb74a",
 storageBucket: "workhours-fb74a.appspot.com"
};
const app=getApps().find(a=>a.name==="pagesat")??initializeApp(firebaseConfig,"pagesat");export const pagesatAuth=getAuth(app);export const pagesatDb=getFirestore(app);