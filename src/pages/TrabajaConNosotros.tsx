import Navbar from "@/components/layout/Navbar";
import GraphBackground from "@/components/layout/nodos";
import CarouselChanels from "@/components/layout/ChanelsList";
import handshakeGif from "@/assets/gif.gif";

export default function TrabajaConNosotros() {
  return (
    <>
      {/* Hero con grafo */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <GraphBackground />
        <Navbar classnameText={"text-white"} />

        <section className="relative text-white text-center py-24 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
            ¿ERES ISP Y QUIERES CRECER CON NOSOTROS?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-200">
            Con <span className="font-bold text-yellow-400">ADPRO TV</span>,
            eleva la experiencia de tus clientes. Ofrece televisión de alta
            calidad con más de{" "}
            <span className="font-semibold text-yellow-400">80 canales</span>{" "}
            digitales y contenido a la carta, todo en un solo lugar.
          </p>
        </section>
      </div>

      {/* Contenido */}
      <div className="bg-gray-50 dark:bg-gray-900">
        <section>
          {/* Canales */}
          <div className="text-center space-y-8">
            <h1 className="py-10 text-3xl md:text-5xl font-extrabold text-blue-700 dark:text-white">
              Más de 80 Canales Digitales de Alta Calidad
            </h1>
            <CarouselChanels />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 space-y-20">
          {/* Por qué asociarte */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10">
            {/* Texto */}
            <div className="space-y-6 text-center md:text-left flex-1">
              <h2 className="text-4xl font-bold text-blue-700 dark:text-white">
                ¿Por qué asociarte con nosotros?
              </h2>
              <p className="text-1xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                En el competitivo mercado de los servicios de internet, destacar
                es clave. Con nuestra programación de televisión, ofreces a tus
                clientes un valor añadido irresistible:{" "}
                <span className="font-semibold">consolidas tu marca</span> y
                aumentas la lealtad. No solo vendes internet, ofreces un{" "}
                <span className="font-semibold">centro de entretenimiento</span>{" "}
                completo.
              </p>
            </div>

            {/* Imagen a la derecha */}
            <div className="flex justify-center md:justify-end py-10 md:py-0">
              <img
                src={handshakeGif}
                alt="Handshake Animation"
                className="w-64 h-auto"
              />
            </div>
          </div>

          {/* Solución */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-blue-700 dark:text-white">
                Solución todo en uno para tu ISP
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                Simplificamos el proceso. Nuestra plataforma te permite integrar
                la programación de TV de manera rápida y sin complicaciones. Tú
                te encargas de la conexión; nosotros de la experiencia.
              </p>
            </div>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li>
                ✅ <span className="font-semibold">Amplia selección de canales</span> – noticias, deportes, películas y más.
              </li>
              <li>
                ✅ <span className="font-semibold">Contenido a la carta</span> – tus clientes deciden qué ver y cuándo.
              </li>
              <li>
                ✅ <span className="font-semibold">Tecnología de vanguardia</span> – moderna, estable y fácil de usar.
              </li>
            </ul>
          </div>

          {/* Beneficios */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Atrae nuevos clientes",
                desc: "Diferénciate ofreciendo internet + TV en un solo plan.",
              },
              {
                title: "Aumenta tus ingresos",
                desc: "Ofrece planes “triple play” y aumenta el valor de cada cliente.",
              },
              {
                title: "Fideliza usuarios",
                desc: "Los clientes con más de un servicio tienen menos probabilidades de irse.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-bold text-blue-700 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-extrabold text-blue-700 dark:text-white">
              ¿Listo para crecer?
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
              Contáctanos hoy mismo y descubre cómo nuestra programación de TV
              puede impulsar tu negocio y ayudarte a ofrecer la mejor experiencia
              a tus clientes.
            </p>
            <a
              href="/contacto"
              className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-lg hover:scale-110 transform transition"
            >
              Contáctanos
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
