import Navbar from "@/components/layout/Navbar";
import GraphBackground from "@/components/layout/nodos";
import React, { useEffect, useState } from "react";

const TestVelocidad: React.FC = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [location, setLocation] = useState<string>("Ubicación desconocida");

  // Actualizar fecha y hora en tiempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Obtener ciudad con Geolocalización
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          setLocation(
            data.address.city ||
              data.address.town ||
              data.address.village ||
              "Ubicación desconocida"
          );
        } catch (error) {
          console.error("Error al obtener ubicación:", error);
        }
      });
    }
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <section className="relative text-center py-16 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
          <GraphBackground />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
            🚀 MIDE TU VELOCIDAD
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            Realiza un test de velocidad para conocer el rendimiento de tu
            conexión a internet en tiempo real.
          </p>

          {/* Fecha, hora y ciudad */}
        </section>
      </div>
      <div className="mt-6 text-sm md:text-base bg-white/10 backdrop-blur-lg px-6 py-3 rounded-xl shadow-lg mx-auto border border-white/20 text-center w-fit">
  <p>
    📅 Fecha: {dateTime.toLocaleDateString()} <br />
    🕒 Hora: {dateTime.toLocaleTimeString()} <br />
    📍 Ubicación: {location}
  </p>
</div>
      {/* Sección principal */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
    
    {/* Recomendaciones (arriba en móviles, a la derecha en desktop) */}
    <div className="order-1 lg:order-2 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center">
        📋 Pasos para realizar el test
      </h2>
      <ul className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        <li><span className="font-semibold">- Conexión por cable:</span> Usa Ethernet para mayor precisión.</li>
        <li><span className="font-semibold">- Desconecta otros dispositivos:</span> Evita consumo paralelo.</li>
        <li><span className="font-semibold">- Cierra programas:</span> Especialmente descargas y streaming.</li>
        <li><span className="font-semibold">- Reinicia el router:</span> Antes de comenzar.</li>
        <li><span className="font-semibold">- Usa un servidor cercano:</span> Si la herramienta lo permite.</li>
        <li><span className="font-semibold">- Haz varias pruebas:</span> En diferentes momentos del día.</li>
        <li><span className="font-semibold">- Contacta a tu proveedor:</span> Si los resultados no son lo que esperabas.</li>
      </ul>
    </div>

    {/* Iframe grande (abajo en móviles, a la izquierda en desktop) */}
    <div className="order-2 lg:order-1 w-full lg:col-span-2 shadow-2xl rounded-2xl overflow-hidden border border-gray-200 bg-white dark:bg-gray-900">
      <div className="relative w-full aspect-[16/9] h-[650px]">
        <iframe
          src="https://webmaster.speedtestcustom.com"
          title="Speedtest"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder={0}
        />
      </div>
    </div>

  </div>
</section>
    </>
  );
};

export default TestVelocidad;
