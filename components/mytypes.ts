import React from "react";
//how to create a type for navigation items in TypeScript
   type NavItem = {
     name: string;
     href: string;
   };
   
   export type { NavItem };
   /** or to combine both types into a single export, you can do the following:
    export type NavLink={
    name:string;
    href:string;
}**/