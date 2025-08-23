import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronRight, Phone, Zap } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface Plan {
  id: number;
  name: string;
  price: string;
  features: string[];
  tvIncluded: boolean;
  recommended?: boolean;
  speed: string;
}

const plans: Plan[] = [
  {
    id: 1,
    name: "Plan Básico",
    price: "$65.000/mes",
    speed: "100 Mbps",
    features: [
      "Canales premium HD",
      "Velocidad: 100 Mbps",
      "Modem 5G",
      "Megas simétricas",
    ],
    tvIncluded: true,
    recommended: true,
  },
  {
    id: 2,
    name: "Plan Avanzado",
    price: "$75.000/mes",
    speed: "150 Mbps",
    features: [
      "Canales premium HD",
      "Velocidad: 150 Mbps",
      "Modem 5G",
      "Megas simétricas",
    ],
    tvIncluded: true,
  },
  {
    id: 3,
    name: "Plan Turbo",
    price: "$80.000/mes",
    speed: "200 Mbps",
    features: [
      "Canales premium HD",
      "Velocidad: 200 Mbps",
      "Modem 5G",
      "Megas simétricas",
    ],
    tvIncluded: true,
  },
  {
    id: 4,
    name: "Plan Internet Básico",
    price: "$45.000/mes",
    speed: "50 Mbps",
    features: [
      "Velocidad: 50 Mbps",
      "Modem 5G",
      "Megas simétricas",
      "Soporte técnico 24/7",
    ],
    tvIncluded: false,
  },
  {
    id: 5,
    name: "Plan Familiar",
    price: "$90.000/mes",
    speed: "250 Mbps",
    features: [
      "Canales premium HD",
      "Velocidad: 250 Mbps",
      "Modem 5G avanzado",
      "Megas simétricas",
      "Control parental",
    ],
    tvIncluded: true,
  },
];

export default function PlansCarousel() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  return (
    <section className="w-full py-10 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-4">
          Nuestros Planes
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-center mb-10">
          Elige el plan que mejor se adapte a ti y comienza a disfrutar de la
          mejor conexión.
        </p>

        <Carousel opts={{ align: "start", loop: true }} className="relative">
          <CarouselContent className="py-6">
            {plans.map((plan) => (
              <CarouselItem
                key={plan.id}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div
                  className="h-full p-2 sm:p-3 lg:p-4"
                  onMouseEnter={() => setSelectedPlan(plan.id)}
                  onMouseLeave={() => setSelectedPlan(null)}
                >
                  {/* Contenedor con borde degradado */}
                  <div
                    className={`p-[2px] rounded-2xl h-full ${
                      plan.recommended
                        ? "bg-gradient-to-r from-[#a20000] to-[#1460ff]"
                        : ""
                    }`}
                  >
                    <Card
                      className={`rounded-2xl bg-background border-0 h-full transition-all duration-300 ease-in-out 
                        ${
                          selectedPlan === plan.id
                            ? "scale-105 shadow-xl"
                            : "scale-100 shadow-md"
                        }
                      `}
                    >
                      <CardContent className="p-4 sm:p-6 flex flex-col h-full relative">
                        {plan.recommended && (
                          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                            Más Popular
                          </span>
                        )}

                        {plan.tvIncluded && (
                          <Badge
                            variant={"gradient"}
                            className="absolute top-3 right-3 text-xs sm:text-sm"
                          >
                            TV Incluida
                          </Badge>
                        )}

                        <div className="flex-grow">
                          <h3
                            className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 ${
                              plan.recommended
                                ? "text-[#1460ff]"
                                : "text-secondary-foreground"
                            }`}
                          >
                            {plan.name}
                          </h3>

                          <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-secondary-foreground mb-4">
                            {plan.price}
                          </p>

                          <div className="mb-6 p-2 sm:p-3 bg-border rounded-lg text-center">
                            <span className="text-xs sm:text-sm text-primary block">
                              Velocidad
                            </span>
                            <span className="text-base sm:text-lg font-bold text-primary">
                              {plan.speed}
                            </span>
                          </div>

                          <ul className="space-y-2 sm:space-y-3 mb-6">
                            {plan.features.map((feature, index) => (
                              <li
                                key={index}
                                className="flex items-start text-primary text-xs sm:text-sm lg:text-base"
                              >
                                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button
                          variant={"gradient"}
                          size="lg"
                          className="w-full text-sm sm:text-base"
                        >
                          Contratar ahora
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CarouselItem>
            ))}

            {/* Card "Ver Más" */}
            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
              <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#a20000] to-[#1460ff] h-full my-4">
                <Card className="rounded-2xl border-0 bg-background h-full">
                  <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center h-full text-center">
                    <div className="mb-6 bg-muted p-4 rounded-full">
                      <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
                    </div>

                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-secondary-foreground mb-4">
                      ¿Necesitas algo más?
                    </h3>

                    <p className="text-xs sm:text-sm lg:text-base text-secondary-foreground mb-6">
                      Tenemos planes personalizados para hogares y empresas con
                      soluciones a medida.
                    </p>

                    <ul className="space-y-1 sm:space-y-2 mb-6 sm:mb-8 text-xs sm:text-sm lg:text-base text-secondary-foreground">
                      <li className="flex items-center justify-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" /> Planes
                        para empresas
                      </li>
                      <li className="flex items-center justify-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" /> Fibra
                        óptica
                      </li>
                      <li className="flex items-center justify-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />{" "}
                        Soluciones gaming
                      </li>
                    </ul>
                    <Button
                      variant={"gradient"}
                      size="lg"
                      className="w-full text-sm sm:text-base"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Contactar asesor
                      <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>

          {/* Flechas de navegación */}
          <CarouselPrevious className="left-2 bg-white shadow-md hover:bg-gray-100" />
          <CarouselNext className="right-2 bg-white shadow-md hover:bg-gray-100" />
        </Carousel>

        {/* CTA final */}
        <div className="mt-10 sm:mt-12 text-center px-4">
          {/* <p className="text-xs sm:text-sm lg:text-base text-secondary-foreground">
            ¿Necesitas un plan personalizado?{" "}
            <a
              href="#"
              className="text-[#1460ff] font-semibold hover:underline"
            >
              Contáctanos
            </a>
          </p>*/}
        {/* Botón */}
          <Button
            variant={"gradient"}
            size="lg"
            className=" text-sm sm:text-base"
          >
            <Phone className="h-5 w-5 mr-2" />
                Descubre nuestros planes
            <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
