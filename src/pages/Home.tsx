import CarouselChanels from "@/components/layout/CarouselChanels";
import HeroSection from "@/components/layout/HeroSection";
import Navbar from "@/components/layout/Navbar";
import CarouselPlans from "@/components/layout/CarouselPlans";
import Benefits from "@/components/layout/Benefits";
import ContactForm from "@/components/layout/ContactForm";

function Home() {
  return (
    <div className="min-h-screen">
      {/* Sección Hero con Navbar */}
      <div>
        <div className="flex flex-col">
          <Navbar />
          <HeroSection />
        </div>

        {/* Carrusel de Canales */}
        <div className="">
          <CarouselChanels />
        </div>
      </div>

      {/* Sección de Planes */}
      <div className="bg-muted pb-8 md:pb-12">
        <CarouselPlans />
      </div>

      {/* Beneficios */}
      <div className="bg-muted pb-8 md:pb-12">
        <Benefits />
      </div>

      {/* Formulario de Contacto */}
      <div className="bg-background">
        <ContactForm />
      </div>
    </div>
  );
}

export default Home;
