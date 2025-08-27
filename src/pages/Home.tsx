import CarouselChanels from "@/components/layout/CarouselChanels";
import HeroSection from "@/components/layout/HeroSection";
import Navbar from "@/components/layout/Navbar";
import CarouselPlansTv from "@/components/layout/CarouselPlansTv";
import Benefits from "@/components/layout/Benefits";
import UserProtection from "@/components/layout/UserProtection";
import ContactForm from "@/components/layout/ContactForm";
import Description from "@/components/layout/Description";
function Home() {
  return (
    <>
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
        <div className="bg-muted">  
          <CarouselPlansTv />
        </div>
      </div>

      {/* Carrusel de Canales */}
      <div className="">
        <CarouselChanels />
      </div>

      <div className="bg-muted">
        <Benefits />
      </div>

      <div className="">
        <UserProtection />
      </div>
      {/* Formulario de Contacto */}

      <div className="bg-muted">
        <ContactForm />
      </div>
    </>
  );
}

export default Home;
