import CarouselChanels from "@/components/layout/CarouselChanels";
import HeroSection from "@/components/layout/HeroSection";
import Navbar from "@/components/layout/Navbar";
import CarouselPlans from "@/components/layout/CarouselPlans";
import Benefits from "@/components/layout/Benefits";
import UserProtection from "@/components/layout/UserProtection";
import ContactForm from "@/components/layout/ContactForm";
import Description from "@/components/layout/Description";
function Home() {
  return (
    <div className="min-h-screen">
      {/* Sección Hero con Navbar */}
      <div>
        <div className="flex flex-col">
          <Navbar />
          <HeroSection />
        </div>
        <div className="flex flex-col">
          <Description />
        </div>        
        {/* Sección de Planes */}
        <div className="">
          <CarouselPlans />
        </div>          
      </div>

      {/* Carrusel de Canales */}
      <div className=" pb-8 md:pb-12">
        <CarouselChanels />
      </div>

      {/* Beneficios */}
      <div className="">
        <Benefits />
      </div>
      
      <div className="">
        <UserProtection />
      </div>
      {/* Formulario de Contacto */}

      <div className="bg-background">
        <ContactForm />
      </div>      
    </div>
  );
}

export default Home;
