import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { RocketIcon,AwardIcon,EyeIcon} from "lucide-react";
import { Mission } from "@/components/mytypes";



export default function Home(){
  const miss:Mission[] = [
    {
      title: "our mission",
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
          {item.icon}
          <CardTitle className="text-lg font-semibold mt-2">{item.title}</CardTitle>
          <CardDescription className="text-gray-600">{item.description}</CardDescription>
        </CardHeader>
      </Card>
    ))}
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full px-6"> 
  <Card>
    <CardHeader>
      <CardTitle>Card One</CardTitle>
      <CardDescription>First option</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Some content here.</p>
    </CardContent>
    <CardFooter>
      <Button>Choose</Button>
    </CardFooter>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Card Two</CardTitle>
      <CardDescription>Second option</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Some content here.</p>
    </CardContent>
    <CardFooter>
      <Button>Choose</Button>
    </CardFooter>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Card Three</CardTitle>
      <CardDescription>Third option</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Some content here.</p>
    </CardContent>
    <CardFooter>
      <Button>Choose</Button>
    </CardFooter>
  </Card>
</div>


</div>


  );
}
