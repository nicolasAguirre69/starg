import Navbar from "@/components/layout/Navbar";
import GraphBackground from "@/components/layout/nodos";

export default function PoliticaDePrivacidad() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden px-6 md:px-12 lg:px-20 py-16 text-center">
        <GraphBackground />
        <Navbar classnameText={"text-white"} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Política de Privacidad
        </h1>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-16 space-y-10 ">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-700">Política de Privacidad</h2>
          <p>
            En ADPROTV S.A.S., la privacidad de nuestros visitantes es muy importante para nosotros. Este documento explica qué tipo de información personal se recibe y se recopila en ADPROTV S.A.S. y cómo se utiliza.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-bold text-blue-700">Archivos de registro</h3>
          <p>
            Como muchos otros sitios web, ADPROTV S.A.S. usa archivos de registro. Esta información incluye direcciones IP, tipo de navegador, proveedor de Internet, fecha y hora, páginas visitadas y número de clics. Esto nos ayuda a analizar tendencias, administrar el sitio y recopilar información demográfica. Las direcciones IP y otra información no están vinculadas a datos personales.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-bold text-blue-700">Cookies</h3>
          <p>
            ADPROTV S.A.S. usa cookies para guardar información sobre las preferencias de los visitantes, registrar qué páginas visita el usuario y personalizar el contenido según el tipo de navegador.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-bold text-blue-700">Cookies DART de Google</h3>
          <p>
            Google, como proveedor externo, usa cookies para mostrar anuncios en ADPROTV S.A.S. La cookie DART permite a Google mostrar anuncios basados en las visitas a ADPROTV S.A.S. y otros sitios. Los usuarios pueden optar por no usar la cookie DART visitando la política de privacidad de Google en este <a href="https://policies.google.com/technologies/ads" target="_blank" className=" underline hover:text-teal-200 transition">enlace</a>.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-bold text-blue-700">Publicidad de terceros</h3>
          <p>
            Los servidores de anuncios de terceros usan tecnología para enviar anuncios directamente a su navegador. Reciben automáticamente su dirección IP. También pueden usar otras tecnologías, como cookies o JavaScript, para medir la efectividad de sus anuncios o personalizar el contenido publicitario que ve.
          </p>
          <p>
            ADPROTV S.A.S. no tiene acceso ni control sobre estas cookies usadas por anunciantes externos. Debe consultar las políticas de privacidad de estos anunciantes para más información sobre sus prácticas. La política de privacidad de ADPROTV S.A.S. no se aplica a otros anunciantes o sitios web.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-bold text-blue-700">Desactivación de cookies</h3>
          <p>
            Si desea desactivar las cookies, puede hacerlo a través de las opciones de su navegador. Más información sobre cómo gestionar cookies se puede encontrar en los sitios web del navegador correspondiente.
          </p>
        </section>
      </div>
    </>
  );
}
