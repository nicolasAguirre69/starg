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
  "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Imagen+1",
  "https://via.placeholder.com/600x400/EF4444/FFFFFF?text=Imagen+2",
  "https://via.placeholder.com/600x400/10B981/FFFFFF?text=Imagen+3",
  "https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Imagen+4",
  "https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Imagen+5",
];

export default function CarouselLayout() {
  // Configurar autoplay (delay en ms)
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
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
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-3/2 items-center justify-center p-6">
                    <img
                      src={imagen}
                      alt={`Imagen ${index + 1}`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />{" "}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
