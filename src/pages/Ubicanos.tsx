import Navbar from "@/components/layout/Navbar";
import GraphBackground from "@/components/layout/nodos";
export default function Ubicanos() {
  return (
    <>
      {/* Hero con grafo */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <GraphBackground />
        <Navbar classnameText={"text-white"} />
        <section className="relative text-white text-center py-24 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
            ¿DÓNDE ENCONTRARNOS?
          </h2>
        </section>
      </div>

      {/* Cards de oficinas */}
      <div className="bg-gray-50 dark:bg-gray-900 py-20">
        <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-10">
          {/* Oficina principal */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition">
            <h2 className="text-3xl font-bold text-blue-700 dark:text-white mb-4">
              Visítanos en nuestra oficina principal
            </h2>
            <div className="w-full h-[450px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392.19136896039265!2d-74.16835825889837!3d4.639509167361483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9d00329e94ed%3A0x350bd8a53996967c!2sSTARGO%20TV!5e1!3m2!1ses-419!2sco!4v1756136796411!5m2!1ses-419!2sco"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <br />  
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Estamos ubicados en la Calle 38 C # 89 - 41, Patio Bonito, Bogotá.
              Ven y conoce a nuestro equipo, descubre más sobre nuestros
              servicios y cómo podemos ayudarte a conectar con el mundo.
            </p>
            <a
              href="https://maps.app.goo.gl/9opes8UQmkwV9vNL8"
              target="_blank"
              className="inline-block px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-md hover:scale-105 transition"
            >
              Ver en Google Maps
            </a>
          </div>

          {/* Oficina Galán */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition">
            <h2 className="text-3xl font-bold text-blue-700 dark:text-white mb-4">
              Visítanos en nuestra oficina en el barrio Galán
            </h2>
            <div className="w-full h-[450px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d214.57145763821808!2d-74.12049656443966!3d4.620158925060658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sco!4v1756137776972!5m2!1ses-419!2sco"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <br />
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Estamos ubicados en la Cra 57 # 2B - 97, Barrio el Galán, Bogotá.
              Descubre más sobre nuestros servicios y cómo podemos ayudarte a
              conectar con el mundo.
            </p>
            <a
              href="https://maps.app.goo.gl/xjnwnBxqorYKCbv28"
              target="_blank"
              className="inline-block px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-md hover:scale-105 transition"
            >
              Ver en Google Maps
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
