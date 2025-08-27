import Navbar from "@/components/layout/Navbar";
import GraphBackground from "@/components/layout/nodos";
'use client';


interface LinkItem {
  label: string;
  url: string;
}
export default function RegulacionTic() {
    const links: LinkItem[] = [
    { label: "Ley 679 de 2001", url: "/archivos/regulacionTic/Ley_679_de_2001.pdf" },
    { label: "Acuerdo 011 de 2006", url: "/archivos/regulacionTic/LAcuerdo-011-2006.pdf" },
    { label: "Artículo 16 ley 1266 de 2008", url: "/archivos/regulacionTic/Articulo-16-ley-1266-de-2008.pdf" },
    { label: "Decreto 90 de 18 enero 2018", url: "/archivos/Decreto_90_del_18_enero_de_2018.pdf" },
    { label: "Solicitudes habeas data", url: "/archivos/regulacionTic/Ley-estatutaria-1266-DE-2008-solicitudes-habeas-data.pdf" },
    { label: "Resolución 5299 de 2018", url: "/archivos/regulacionTic/Resolucion_crc_5299_de_2018.pdf" },
    { label: "Resolución 6890 de 2022", url: "/archivos/regulacionTic/Resolucion-crc-6890-de-2022.pdf" },
    { label: "Resolución 5321 de 2018", url: "/archivos/regulacionTic/Resolucion-5321-2016.pdf" },
    { label: "Resolución 5300 de 2018", url: "/archivos/regulacionTic/Resolucion_5300_de_2018.pdf" },
    { label: "Resolución 5337 de 2018", url: "/archivos/regulacionTic/Resolucion_5337_de_2018.pdf" },
    { label: "Resolución 5050 de 2016", url: "/archivos/regulacionTic/Resolucion-5050-de-2016" },
    { label: "Resolución 6333 de 2021", url: "/archivos/regulacionTic/Resolucion-6333-de-2021.pdf" },
    { label: "Resolución 5344 de 2018", url: "/archivos/regulacionTic/Resolucion-5344-de-2018.pdf" },
    { label: "Resolución 5322 de 2018", url: "/archivos/regulacionTic/Resolucion_5322_de_2018.pdf" },
    { label: "Resolución 5397 de 2018", url: "/archivos/regulacionTic/Resolucion_5397_de_2018.pdf" },
    { label: "Resolución 5930 de 2020", url: "/archivos/regulacionTic/Resolucion-5930-de-2020.pdf" },
    { label: "Artículo 6 ley 1266 de 2008", url: "/archivos/regulacionTic/Articulo-6-ley-1266-de-2008.pdf" },
  ];
  return (
    <>
      {/* --- Fondo con título principal --- */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden px-6 md:px-12 lg:px-20 py-10">
        <GraphBackground />
        <Navbar classnameText={"text-white"} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-white">
            Regulacion TIC
        </h1>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-12 py-5">          
         
          

            <div className="bg-white shadow-lg rounded-xl p-6">
            <ul className="divide-y divide-gray-200">
                {links.map(({ label, url }: LinkItem) => (
                <li key={label} className="py-3 flex items-center justify-between group">
                    <span className="text-gray-800 font-medium">{label}</span>
                    <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-semibold flex items-center gap-1 opacity-80 hover:opacity-100 transition"
                    >
                    📄 Ver documento
                    </a>
                </li>
                ))}
            </ul>
            </div>
        </div>
    </>
  );
}
