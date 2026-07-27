import React from "react";
//how to create a type for navigation items in TypeScript
  export type NavItem = {
     name: string;
     href: string;
   };
   
export type Mission ={
    title:string;
    description:string;
    icon:React.ReactNode
   }
