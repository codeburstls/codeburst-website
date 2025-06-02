
import HeroSection from "@/components/hero-section";
import { ServicesSection } from "@/components/services-offered";
import { MerafocoinsSection } from "@/components/merafocoins-section";

export default function Home() {
  return (
    <main className="min-h-screen">
    
    <HeroSection />
    <ServicesSection/>
    <MerafocoinsSection/>
   
    
    </main>);
}
