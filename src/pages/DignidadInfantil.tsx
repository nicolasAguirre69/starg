import Navbar from "@/components/layout/Navbar";
import GraphBackground from "@/components/layout/nodos";

export default function DignidadInfantil() {
  return (
    <>
      {/* Hero Section */}
      
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden px-6 md:px-12 lg:px-20 py-10  text-center">
        <GraphBackground />
        <Navbar classnameText={"text-white"} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Dignidad Infantil
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-100">
          Protección contra la pornografía infantil y herramientas para denunciar y prevenir este delito.
        </p>
      </div>

      {/* Main Content */}
      <div className="px-6 md:px-12 lg:px-20 py-16 max-w-5xl mx-auto space-y-12">
        {/* Sección con tarjeta */}
        <section className="bg-muted  p-8 rounded-2xl shadow-xl border border-white/10">
          <h2 className="text-2xl font-bold  mb-4">
            ¿Qué es la pornografía infantil?
          </h2>
          <p className=" leading-relaxed">
            Se define como toda representación, por cualquier medio, de un menor o una persona con aspecto de menor
            participando en actividades sexuales explícitas, reales o simuladas, así como cualquier representación de sus
            partes con fines sexuales. Se considera menor a toda persona que no haya alcanzado la edad legal para ser
            considerada adulta.
          </p>
        </section>

        <section className=" bg-muted  p-8 rounded-2xl shadow-xl border border-white/10">
          <h2 className="text-2xl font-bold  mb-4">Normativa vigente</h2>
          <p className="">
            La{" "}
            <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4555" target="_blank"
              className=" underline hover:text-teal-200 transition">
              Ley 679 de 2001
            </a>, el{" "}
            <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4478" target="_blank"
              className=" underline hover:text-teal-200 transition">
              Decreto 1524 de 2002
            </a>, el{" "}
            <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4811" target="_blank"
              className=" underline hover:text-teal-200 transition">
              Decreto 67 de 2003
            </a>{" "}y la{" "}
            <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36216" target="_blank"
              className=" underline hover:text-teal-200 transition">
              Ley 1336 de 2009
            </a>{" "} establecen:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 mt-4 ">
            <li>Prevenir, bloquear y combatir la explotación sexual infantil.</li>
            <li>Denunciar la publicación y difusión de material pornográfico con menores.</li>
            <li>Responsabilidad penal para quienes promuevan o participen en estos actos.</li>
          </ul>
        </section>

        <section className="bg-muted  p-8 rounded-2xl shadow-xl border border-white/10 space-y-4">
          <h2 className="text-2xl font-bold ">¿Dónde denunciar?</h2>
          <div className="grid md:grid-cols-2 gap-6 ">
            <div className=" p-4 rounded-xl border">
              <strong className="block ">MinTIC</strong>
              📞 01 8000 912667 <br />
              <a href="https://www.teprotejo.org" target="_blank"
                className=" underline hover:text-teal-200">
                www.teprotejo.org
              </a>
            </div>

            <div className=" p-4 rounded-xl border">
              <strong className="block ">Fiscalía General de la Nación</strong>
              📞 01 800 0912280 <br />
              <a href="https://www.fiscalia.gov.co/colombia/" target="_blank"
                className=" underline hover:text-teal-200">
                www.fiscalia.gov.co/colombia/
              </a><br />
              ✉ contacto@fiscalia.gov.co
            </div>

            <div className=" p-4 rounded-xl border">
              <strong className="block ">Instituto Colombiano de Bienestar Familiar</strong>
              📞 01 8000 918080 / (1) 660 5520 <br />
              <a href="https://www.icbf.gov.co" target="_blank"
                className=" underline hover:text-teal-200">
                www.icbf.gov.co
              </a>
            </div>

            <div className=" p-4 rounded-xl border">
              <strong className="block ">Dirección Central de Policía Judicial – Dijin</strong>
              📞 426 6900 Ext. 6301-6302 <br />
              <a href="https://www.policia.gov.co/dijin" target="_blank"
                className=" underline hover:text-teal-200">
                www.policia.gov.co/dijin
              </a><br />
              ✉ adelinfo@dijin.policia.gov.co
            </div>

            <div className=" p-4 rounded-xl border">
              <strong className="block ">Centro Cibernético de la Policía</strong>
              <a href="https://caivirtual.policia.gov.co" target="_blank"
                className=" underline hover:text-teal-200">
                caivirtual.policia.gov.co
              </a>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                Videos relacionados
            </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
  {/* Video 1 */}
  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/vvIQ03bmqv8"
      title="Video 1"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

  {/* Video 2 */}
  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/q1jLR5SHMBY"
      title="Video 2"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

  {/* Video 3 */}
  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/p4y8KDSU-Jc"
      title="Video 3"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>

      
        </section>
      </div>
    </>
  );
}
