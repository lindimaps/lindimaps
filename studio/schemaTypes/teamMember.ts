import {defineField, defineType} from 'sanity'

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Ekipi',
  type: 'document',
  fields: [
    defineField({name:'name',title:'Emri',type:'string',validation:(r)=>r.required()}),
    defineField({name:'roleSq',title:'Roli',type:'string',validation:(r)=>r.required()}),
    defineField({name:'roleEn',title:'Role (EN)',type:'string'}),
    defineField({name:'bioSq',title:'Përshkrimi',type:'text',rows:4}),
    defineField({name:'bioEn',title:'Description (EN)',type:'text',rows:4}),
    defineField({name:'photo',title:'Fotografia',type:'image',options:{hotspot:true},validation:(r)=>r.required()}),
    defineField({name:'email',title:'Email',type:'string',validation:(r)=>r.email()}),
    defineField({name:'linkedin',title:'LinkedIn',type:'url'}),
    defineField({name:'order',title:'Renditja',type:'number',initialValue:10,validation:(r)=>r.integer().min(0)}),
    defineField({name:'featured',title:'Profil kryesor / CEO',type:'boolean',initialValue:false}),
  ],
  preview:{select:{title:'name',subtitle:'roleSq',media:'photo'}},
})
