import MV from "@/components/missionv";
import { Herosec } from "@/components/hero";


export default function Home(){
  
 return(

   <div className="flex flex-col items-center gap-10">
    {Herosec()}
    {MV()}

    </div>  
 );

}