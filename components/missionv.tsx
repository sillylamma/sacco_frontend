import { Mission } from "./mytypes";
 import React from "react"; 
 import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
 import { RocketIcon,AwardIcon,EyeIcon} from "lucide-react";


 const MV = () => {
  const miss:Mission[] = [
    {
      title: "Our Mission",
       description:"To socioeconomically transform the lives of our members via affordable, quality, competitive and market-driven financial solutions.",
       icon:<RocketIcon className='text-indigo-500' size="56"/>
    }
     , {
            title:"Our Vision",
            description:"To be the preferred provider of transformational, quality and competitive market-driven financial solutions to Kenyans.",
            icon:<EyeIcon className='text-indigo-500' size="56"/> 
        },
        {
            title:"Our Values",
            description:"To support and empower the lives of each comrade to the best of our capabilites.",
            icon:<AwardIcon className='text-indigo-500' size="56"/>
        }
  ];

  return (
    <div className="flex flex-col items-center gap-10">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full px-6">

    {miss?.map((item: Mission, index: number) => (
      <Card key={index} className="bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="flex flex-col items-center text-center">
          
          <CardTitle className="text-lg font-semibold mt-2">{item.title}</CardTitle>
          <CardDescription className="text-gray-600">{item.icon}</CardDescription>
        </CardHeader>
        <CardContent>
           <p className='text-gray-600 text-medium'>{item.description}</p>
                    </CardContent>
      </Card>
    ))}
     </div>
    </div>
  );
}
export default MV;