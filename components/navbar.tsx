import Link from "next/link";
import { NavItem } from "./mytypes";
 

export const navbar=()=>{
    const navItems: NavItem[] = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
      ];
       
      return (
     <nav className="bg-blue-500 p-3 " >
          <div className="flex w-full max-w-6xl items-center justify-between">
                    <h2 className="text-green-50 text-xl font-bold">Smora Sacco</h2>

             <div className="flex gap-4"> 
                {
                  navItems?.map((item: NavItem) => (
                    <Link key={item.href} href={item.href} className="text-white hover:text-gray-300">
                        {item.name}
                    </Link>// shortened the code by removing the <li> element and using Link directly for better semantics and cleaner code.
                   
                   /**<li key={item.href} className="text-white hover:text-gray-300">
                       /<Link href={item.href}>
                            {item.name}
                        </Link> "this one has the <li>  removed by the first one"
                    </li>**/
                 ))
                
                 }
               </div>
           </div>    
      </nav>
      )
      
      
}