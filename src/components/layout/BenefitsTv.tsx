import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wifi, Tv, Zap, Clock, Users, Headphones } from "lucide-react";
import { ArrowUpDown } from "lucide-react";

// Definir la interfaz para los items
interface BenefitItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  gradient: string;
}

// Arreglo de beneficios con paleta de colores
const benefits: BenefitItem[] = [
  {
    title: "Internet de Fibra Óptica",
    description:
      "Velocidades de hasta 1Gbps con conexión simétrica y latencia mínima.",
    icon: Wifi,
    color: "bg-blue-500",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "Televisión HD",
    description:
      "Disfruta de una amplia variedad de canales en alta definición.",
    icon: Tv,
    color: "bg-blue-500",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "Tecnología 5G",
    description: "Conectividad de última generación con cobertura garantizada.",
    icon: Zap,
    color: "bg-green-500",
    gradient: "from-green-500 to-green-700",
  },
  {
    title: "Megas Simétricas",
    description:
      "Navegación rápida y eficiente, tanto en descarga como en subida.",
    icon: ArrowUpDown,
    color: "bg-orange-500",
    gradient: "from-orange-500 to-orange-700",
  },
  {
    title: "Modems WIFI 6",
    description: "Destacamos en velocidad, llevando mas de 700Mbps via wifi.",
    icon: Tv,
    color: "bg-purple-500",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    title: "Soporte 24/7",
    description: "Atención al cliente disponible todo el día, todos los días.",
    icon: Clock,
    color: "bg-orange-500",
    gradient: "from-orange-500 to-orange-700",
  },
  {
    title: "Multi-dispositivo",
    description:
      "Conecta dispositivos simultáneamente sin pérdida de velocidad.",
    icon: Users,
    color: "bg-indigo-500",
    gradient: "from-indigo-500 to-indigo-700",
  },
  {
    title: "Asesoría Personalizada",
    description:
      "Expertos en tecnología te ayudan a elegir el mejor plan para ti.",
    icon: Headphones,
    color: "bg-amber-500",
    gradient: "from-amber-500 to-amber-700",
  },
];

export default function BenefitsGrid() {
  return (
    <section className="bg-muted w-full pt-12 pb-8 md:pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Nuestros Beneficios
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubre todo lo que tenemos para ofrecerte con la mejor tecnología
            y servicio
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${benefit.gradient}`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
