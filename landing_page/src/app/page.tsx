import Dholak from "@/components/Dholak";
import Footer from "@/components/Footer";
import Gitar from "@/components/Gitar";
import Herosection from "@/components/HeroSection";
import People from "@/components/People";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
     
   
      <Herosection/> 
      <Gitar/>
      <Dholak/>
      <People/>
      
    {/* <Button className="justify-center align-center flex ">Explore More --></Button> */}
    <Footer/>
    </main>
  );
}
