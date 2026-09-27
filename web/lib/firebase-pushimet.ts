import {getApps,initializeApp} from "firebase/app";import {getAuth} from "firebase/auth";import {getFirestore} from "firebase/firestore";export const firebaseConfig = {
            apiKey: "AIzaSyDe_lLPQIhfJZaCZ0dZqRlLH0-kfyfy8Sw",
            authDomain: "pushimet.firebaseapp.com",
            projectId: "pushimet",
            storageBucket: "pushimet.firebasestorage.app",
            messagingSenderId: "1024807492402",
            appId: "1:1024807492402:web:7ccaa6f39947bc41d5952b"
        };
const app=getApps().find(a=>a.name==="pushimet")??initializeApp(firebaseConfig,"pushimet");export const pushimetAuth=getAuth(app);export const pushimetDb=getFirestore(app);