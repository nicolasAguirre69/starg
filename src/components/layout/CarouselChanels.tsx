import Autoplay from "embla-carousel-autoplay";
import GraphBackground from "./nodos";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";

interface Channel {
  name: string;
  filename: string;
}

const channels: Channel[] = [
  { name: "A&E", filename: "CANAL_AANDE.svg" },
  { name: "Cartoon", filename: "CANAL_cartoon_network.svg" },
  { name: "Disney", filename: "CANAL_disney.svg" },
  { name: "ESPN", filename: "CANAL_ESPN.svg" },
  { name: "ESPN2", filename: "CANAL_ESPN2.svg" },
  { name: "ESPN3", filename: "CANAL_ESPN3.svg" },
  { name: "ESPN4", filename: "CANAL_ESPN4.svg" },
  { name: "FX", filename: "CANAL_fx.svg" },
  { name: "National Geographic", filename: "CANAL_national_geographic.svg" },
  { name: "Paramount", filename: "CANAL_paramount.svg" },
  { name: "Star", filename: "CANAL_star.svg" },
  { name: "Syfy", filename: "CANAL_syfy.svg" },
  { name: "TNT", filename: "CANAL_tnt.svg" },
  { name: "Warner", filename: "CANAL_warner.svg" },
];

export default function CarouselChannels() {
  const plugin = useRef(
    Autoplay({
      delay: 1800,
      stopOnInteraction: false,
    })
  );

  return (
  <section className="w-full relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden py-12">
  <div className="container mx-auto px-4 md:px-8 lg:px-12">
    
    <GraphBackground />
    {/* Encabezado */}
    <div className="text-center mb-10 max-w-3xl mx-auto text-white">
      <h1 className="text-3xl md:text-7xl font-extrabold tracking-tight mb-4 text-center text-white">
        ADPROTV: Tus Canales Premium 
        Favoritos en un Solo Lugar
      </h1>

      <p className="leading-relaxed text-base md:text-lg text-white">
        Con <span className="font-semibold text-yellow-400">AdproTV</span>{" "}
        disfruta de una experiencia televisiva de primer nivel. Accede a
        canales exclusivos de <span className="text-yellow-300">deportes</span>,{" "}
        <span className="text-yellow-300">películas</span>,{" "}
        <span className="text-yellow-300">series</span> y{" "}
        <span className="text-yellow-300">documentales</span>, sin cortes y con
        la mejor calidad de imagen.
      </p>
    </div>

    {/* Carrusel */}
    <Carousel
      className="w-full mx-auto"
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
        duration: 30,
      }}
    >
      <CarouselContent className="-ml-2 flex">
        {channels.map((channel, index) => (
          <CarouselItem
            key={index}
            className="basis-1/3 sm:basis-1/4 md:basis-1/6 lg:basis-1/8 flex justify-center items-center pl-2"
          >
            <div className="w-full flex items-center justify-center p-3 group">
              <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
                <img
                  src={`/channels/${channel.filename}`}
                  alt={channel.name}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain 
                            opacity-100 group-hover:grayscale group-hover:opacity-70 
                            transition-all duration-500 ease-out"
                  loading="lazy"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </div>
</section>

  );
}
