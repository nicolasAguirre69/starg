import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";

// Arreglo de imágenes con URLs únicas y diferentes colores
const images = [
  "img/BANNER9.webp",
  "img/BANNER11.webp",
  "img/BANNER10.webp"
  
  
];

export default function CarouselLayout() {
  // Configurar autoplay (delay en ms)
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <div className="w-full max-w-6xl mx-auto px-4 hover:scale-105 transition-transform duration-300">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((imagen, index) => (
            <CarouselItem key={index}>

                    <img
                      src={imagen}
                      alt={`Imagen ${index + 1}`}
                      className="rounded-lg aspect-3/2 object-cover"
                      loading="lazy"
                    />{" "}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p></p>
    </div>
  );
}
