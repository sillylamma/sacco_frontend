
import { Button } from "./ui/button";
export const Herosec=()=>{
  return(
     <div className="w-full h-[70dvh] " id="hero-section">
            <div className="w-full h-full bg-black/50 p-8 flex items-center justify-center">
                <div className="w-full max-w-6xl">
                <div className=" md:w-100 flex flex-col gap-4">
                    <h1 className="text-4xl font-bold text-green-50">
                        The Smora Sacco
                    </h1>
                    <p className="text-lg text-center max-w-2xl">
                        Welcome to Our Sacco
                    </p>
                    <p className="text-lg text-center max-w-2xl">
                        We are committed to providing our members with affordable, quality, and competitive financial solutions that transform their lives.
                    </p>
             <Button className="bg-blue-700 w-fit">Register Today</Button>

                </div>
            </div>
        </div>
    
</div>
  )
}
