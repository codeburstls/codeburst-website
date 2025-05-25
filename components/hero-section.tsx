
import { Button } from "@/components/ui/button"


export default function  HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10 sm:px-6 lg:px-8">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2 sm:text-center lg:text-left">
          
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
         
                <span className="block">
                  Driving Digital <span className="text-blue-500">Solutions</span> and Innovation
                </span>
              </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Empowering Basotho with <span className="font-semibold">Merafocoins</span> through blockchain and
                digital innovation.
              </p>
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Button className="rounded-full bg-[#3b82f6] hover:bg-blue-700 px-8 py-6 text-lg">Learn More</Button>
              </div>
        </div>
        <img 
          src="./image(4).png"
 
          alt="Hero"
          className="rounded-lg w-600 h-400"
        />
      </div>
    </div>
  </section>
  )
}

