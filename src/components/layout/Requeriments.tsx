import { Mail, FileText, User, Wifi } from "lucide-react";

import type { ReactNode } from "react";

interface Requirement {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function Requirements() {
  const requirements: Requirement[] = [
    {
      icon: <User className="w-8 h-8 text-blue-600" />,
      title: "Documento de identidad",
      description:
        "Copia de la cédula o documento oficial del titular del servicio.",
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Recibo de servicio público",
      description:
        "Copia de un recibo reciente (agua, luz, etc.) para verificar la dirección.",
    },
    {
      icon: <Wifi className="w-8 h-8 text-blue-600" />,
      title: "Cobertura disponible",
      description:
        "Verificamos que la dirección tenga cobertura para el servicio.",
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "Pago inicial",
      description:
        "Se requiere un pago de instalación o primer mes según el plan.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
          Requisitos para adquirir el servicio
        </h2>

        {/* Subtítulo */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Para garantizar un proceso rápido y seguro, asegúrate de cumplir con
          los siguientes requisitos antes de solicitar tu plan.
        </p>

        {/* Grid de requisitos */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{req.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {req.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {req.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
