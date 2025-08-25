import {
  Card,
} from "@/components/ui/card";

// Definir la interfaz para los items
interface PartnerItem {
  logo: string;   // ahora usamos logo
  link: string;   // link a la página
  gradient: string;
}

// Arreglo de aliados con logo y link
const partners: PartnerItem[] = [
  {
    logo: "/img/WebMaster.png",
    link: "https://www.webmastercolombia.net",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    logo: "/img/inttelgo.png",
    link: "https://www.inttelgo.com",
    gradient: "from-orange-500 to-orange-700",
  },
  {
    logo: "/img/comservired.png",
    link: "https://www.comservired.com",
    gradient: "from-green-500 to-green-700",
  },
  {
    logo: "/img/Mikrotik.svg",
    link: "https://Mikrotik.com/",
    gradient: "from-gray-500 to-gray-700",
    
  },
];

export default function Partners() {
  return (
    <section className="bg-muted w-full pt-12 pb-8 md:pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-yellow-400">
            Nuestros Aliados
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Trabajamos con aliados estratégicos que fortalecen nuestro servicio
            y nos permiten ofrecerte siempre la mejor experiencia.
          </p>
        </div>

        {/* Grid de partners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden flex flex-col items-center p-6"
            >
              {/* Contenedor del logo */}
              <div className=" p-4 rounded-xl flex items-center justify-center shadow-sm mb-4">
                <img
                  src={partner.logo}
                  alt="logo"
                  className="h-30 object-contain"
                />
              </div>
              {/* Botón */}
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r ${partner.gradient} hover:opacity-90 transition`}
              >
                Visitar página
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
