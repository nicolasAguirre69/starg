import Navbar from "@/components/layout/Navbar";
import GraphBackground from "@/components/layout/nodos";
import Partners from "@/components/layout/Partners";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      {/* Hero con fondo y grafo */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <GraphBackground />
        <Navbar classnameText="text-white" />

        <section className="relative text-white text-center py-20 px-6 md:px-12 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide drop-shadow-lg bg-white bg-clip-text text-transparent"
          >
            ¿QUIÉNES SOMOS?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed"
          >
            Conectamos comunidades, familias y sueños a través de la mejor
            experiencia en internet.
          </motion.p>
        </section>
      </div>

      {/* Sección Quiénes somos */}
      <section className="bg-muted dark:bg-gray-900 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 dark:bg-gray-800/90 rounded-3xl shadow-2xl p-10 backdrop-blur-md space-y-8 hover:shadow-blue-300/30 transition-shadow"
          >
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              En{" "}
              <span className="font-bold text-yellow-500">Star G</span>, nuestra
              historia es la de tu comunidad. Más que un proveedor de servicios
              de internet, somos vecinos, padres y amigos, dedicados a tejer una
              red que no solo conecta dispositivos, sino que también une a las
              personas.
            </p>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-700 dark:text-yellow-400">
                Nuestra esencia: Familias primero
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                En cada hogar, el internet es una herramienta vital: permite a
                los niños aprender, a los padres trabajar y a las familias
                compartir momentos especiales. Nuestro servicio está diseñado
                pensando en ti.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-700 dark:text-yellow-400">
                Trabajando de la mano con la comunidad
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                El mejor servicio se construye en equipo. No solo instalamos tu
                conexión; participamos en eventos locales, apoyamos iniciativas
                vecinales y escuchamos tus necesidades. Tu voz es la guía que
                nos ayuda a mejorar.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección Misión y Visión */}
      <section className="bg-muted dark:bg-gray-900 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 dark:bg-gray-800/90 p-10 rounded-3xl shadow-xl hover:shadow-blue-300/30 transition-shadow"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-yellow-400 mb-4">
              Misión
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Conectar a las familias y negocios de nuestra comunidad con un
              servicio de internet rápido, confiable y accesible, con atención
              personalizada y compromiso genuino por el bienestar de cada vecino.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 dark:bg-gray-800/90 p-10 rounded-3xl shadow-xl hover:shadow-blue-300/30 transition-shadow"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-yellow-400 mb-4">
              Visión
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Ser el proveedor de internet preferido en nuestra región,
              reconocido por la excelencia de nuestra tecnología y por ser un
              pilar de la comunidad que impulsa el crecimiento familiar y local.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sección Partners */}
      <section className="bg-muted dark:bg-gray-900 py-20 px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto text-center space-y-10"
        >
          <Partners />
        </motion.div>
      </section>
    </>
  );
}
