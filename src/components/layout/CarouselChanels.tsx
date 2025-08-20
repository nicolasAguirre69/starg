import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";

// Definimos la interfaz para los canales
interface Channel {
  name: string;
  filename: string;
}

// Lista de canales SVG disponibles en la carpeta public/channels/
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
      delay: 1500,
      stopOnInteraction: false,
      jump: false,
    })
  );

  return (
    <div className="w-full overflow-hidden relative">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-secondary-foreground">
          Canales
        </h2>

        <Carousel
          className="w-full mx-auto"
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            duration: 30,
            startIndex: 0,
            skipSnaps: false,
          }}
        >
          <CarouselContent className="-ml-1 flex">
            {channels.map((channel, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 sm:basis-1/4 md:basis-1/6 lg:basis-1/8 flex justify-center items-center pl-1"
              >
                <div className="w-full flex items-center justify-center p-2 group">
                  <div className="relative w-22 h-22 md:w-26 md:h-26 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                    <img
                      src={`/channels/${channel.filename}`}
                      alt={channel.name}
                      className="w-16 h-16 md:w-18 md:h-18 object-contain grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
