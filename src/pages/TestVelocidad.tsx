import Navbar from "@/components/layout/Navbar";
import React from "react";

const TestVelocidad: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* Hero con grafo */}
      <div className="relative  overflow-hidden">
        
        <section className="relative  text-center py-12 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
            MIDE TU VELOCIDAD
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            Realiza un test de velocidad para conocer el rendimiento de tu
            conexión a internet en tiempo real.
          </p>
        </section>
      </div>

      {/* Sección principal con grid */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
          {/* Iframe */}
          <div className="w-full lg:col-span-3 shadow-xl rounded-2xl overflow-hidden border border-gray-200">
            <iframe
              width="100%"
              height="100%"
              frameBorder={0}
              src="https://webmaster.speedtestcustom.com"
              title="Speedtest"
              className="w-full h-full"
            />
          </div>

          {/* Recomendaciones */}
          <div className="space-y-6">
            <div className="text-center lg:text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Pasos para realizar el test de velocidad:
              </h2>
            </div>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>
                <span className="font-semibold">🔌 Conexión por cable:</span> Usa un
                cable Ethernet para conectar tu equipo directamente al router.
              </li>
              <li>
                <span className="font-semibold">📱 Desconecta otros dispositivos:</span>{" "}
                Asegúrate de que no haya otros equipos consumiendo internet.
              </li>
              <li>
                <span className="font-semibold">❌ Cierra programas:</span> Especialmente
                los que descargan o transmiten datos.
              </li>
              <li>
                <span className="font-semibold">🔄 Reinicia el router:</span> Antes de
                comenzar para limpiar la conexión.
              </li>
              <li>
                <span className="font-semibold">🌍 Usa un servidor cercano:</span> Si tu
                herramienta de test lo permite.
              </li>
              <li>
                <span className="font-semibold">🕒 Haz varias pruebas:</span> En
                diferentes momentos del día para obtener un promedio más preciso.
              </li>
              <li>
                <span className="font-semibold">📞 Contacta a tu proveedor:</span> Si los
                resultados son mucho más bajos de lo esperado.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestVelocidad;
