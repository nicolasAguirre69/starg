import Navbar from "@/components/layout/Navbar";
import GraphBackground from "@/components/layout/nodos";
import Partners from "@/components/layout/Partners";

export default function About() {
  return (
    <>
      {/* Navbar + Fondo con grafo */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <GraphBackground />
        <Navbar classnameText="text-white" />

        <section className="relative text-white text-center py-16 px-6 md:px-12 lg:px-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide drop-shadow-lg">
            ¿QUIÉNES SOMOS?
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed">
            Conectamos comunidades, familias y sueños a través de la mejor
            experiencia en internet.
          </p>
        </section>
      </div>

      {/* Sección de Quiénes somos */}
      <section className="bg-muted dark:bg-gray-900 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto space-y-8 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-left space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              En{" "}
              <span className="font-bold text-yellow-500">Star G</span>, nuestra
              historia es la de tu comunidad. Más que un proveedor de servicios
              de internet, somos vecinos, padres y amigos, dedicados a tejer una
              red que no solo conecta dispositivos, sino que también une a las
              personas.
            </p>

            <h3 className="text-2xl font-bold text-blue-700 dark:text-white">
              Nuestra esencia: Familias primero
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Comprendemos que en el corazón de cada hogar, el internet es una
              herramienta vital. Es la conexión que permite a los niños hacer su
              tarea, a los padres trabajar desde casa y a las familias compartir
              momentos especiales. Por ello, nuestro servicio está diseñado
              pensando en ti.
            </p>

            <h3 className="text-2xl font-bold text-blue-700 dark:text-white">
              Trabajando de la mano con la comunidad
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Creemos firmemente que el mejor servicio se construye en equipo.
              Por eso, no solo instalamos tu conexión; nos integramos en la vida
              de la comunidad. Participamos en eventos locales, apoyamos
              iniciativas vecinales y escuchamos activamente tus necesidades. Tu
              voz es la guía que nos ayuda a mejorar y a ofrecer un servicio que
              realmente te represente.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Misión y Visión en columnas */}
      <section className="bg-muted dark:bg-gray-900 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
          {/* Misión */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-white">
              Misión
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Conectar a las familias y negocios de nuestra comunidad con un
              servicio de internet rápido, confiable y accesible, a través de
              una atención personalizada y un compromiso genuino con el
              bienestar de cada uno de nuestros vecinos.
            </p>
          </div>

          {/* Visión */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-white">
              Visión
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Ser el proveedor de internet preferido en nuestra región,
              reconocido no solo por la excelencia de nuestra tecnología, sino
              también por ser un pilar de la comunidad que impulsa el
              crecimiento familiar y el desarrollo local.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Partners */}
      <section className="bg-muted dark:bg-gray-900 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <Partners />
        </div>
      </section>
    </>
  );
}
