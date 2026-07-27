import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10">
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
