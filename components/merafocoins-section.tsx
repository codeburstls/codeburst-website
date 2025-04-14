import { Button } from "@/components/ui/button";
import Link from "next/link"

export function MerafocoinsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20  lg:items-center ">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Empowering Communities Through Blockchain Knowledge
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Merafocoins is our initiative to educate and empower Basotho
              communities with blockchain technology. Learn about
              cryptocurrencies, smart contracts, and the future of digital
              finance.
            </p>
            <div className="mt-8 space-x-4">
              <Link href="/merafocoins">
              <Button className="bg-[#3b82f6] hover:bg-blue-700">
                Learn More
              </Button>
              </Link>
              <Button variant="outline">Join a Seminar</Button>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-[200px]">
            <img
              src="./image(7).png"
              alt="Merafocoins Initiative"
              
              className="rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
