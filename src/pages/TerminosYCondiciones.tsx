import Navbar from "@/components/layout/Navbar";
import GraphBackground from "@/components/layout/nodos";

export default function DignidadInfantil() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden px-6 md:px-12 lg:px-20 py-16 text-center">
        <GraphBackground />
        <Navbar classnameText={"text-white"} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Términos y Condiciones
        </h1>
      </div>

      {/* Main Content */}
      <div className="px-6 md:px-12 lg:px-20 py-16 max-w-5xl mx-auto space-y-10 ">
        
        <section className="bg-muted backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-4">
          <p>
            Bienvenido a <strong>ADPROTV S.A.S.</strong>. Si continúa navegando y utilizando este sitio web, acepta cumplir con los siguientes términos y condiciones de uso, que junto con nuestra política de privacidad regulan la relación de ADPROTV S.A.S. con usted en relación a este sitio web.
          </p>
          <p>
            El término <strong>ADPROTV S.A.S.</strong> o ‘nosotros’ se refiere al propietario del sitio web. El término ‘usted’ se refiere al usuario o visitante de nuestro sitio web. El uso de este sitio web está sujeto a los siguientes términos de uso:
          </p>
        </section>

        <section className="space-y-4 bg-muted backdrop-blur-md rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-blue-700">Condiciones Generales</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              El contenido de las páginas de este sitio web es solo para su información y uso general. Está sujeto a cambios sin previo aviso.
            </li>
            <li>
              Ni nosotros ni terceros proporcionamos ninguna garantía sobre la precisión, actualidad, rendimiento, integridad o idoneidad de la información y materiales encontrados u ofrecidos en este sitio web para ningún propósito en particular. 
              Usted acepta que dicha información y materiales pueden contener inexactitudes o errores, y excluimos expresamente nuestra responsabilidad por tales inexactitudes o errores en la máxima medida permitida por la ley.
            </li>
            <li>
              Su uso de cualquier información o material en este sitio web es completamente bajo su propio riesgo, por lo que no seremos responsables. Será su responsabilidad asegurarse de que cualquier producto, servicio o información disponible a través de este sitio web cumpla con sus requisitos específicos.
            </li>
          </ul>
        </section>

        <section className="space-y-4 bg-muted backdrop-blur-md rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-blue-700">Propiedad Intelectual</h2>
          <p>
            Este sitio web contiene material que es propiedad nuestra o está licenciado a nosotros. Este material incluye, pero no se limita a, el diseño, la disposición, la apariencia y los gráficos. La reproducción está prohibida, salvo en conformidad con el aviso de derechos de autor, que forma parte de estos términos y condiciones.
          </p>
          <p>
            Todas las marcas registradas reproducidas en este sitio web, que no son propiedad del operador o no están licenciadas a él, son reconocidas en el sitio web.
          </p>
        </section>

        <section className="space-y-4 bg-muted backdrop-blur-md rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-blue-700">Uso No Autorizado</h2>
          <p>
            El uso no autorizado de este sitio web puede dar lugar a una reclamación por daños y/o ser un delito penal.
          </p>
        </section>

        <section className="space-y-4 bg-muted backdrop-blur-md rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-blue-700">Enlaces Externos</h2>
          <p>
            De vez en cuando, este sitio web puede incluir enlaces a otros sitios web. Estos enlaces se proporcionan para su conveniencia y para ofrecer información adicional. No significan que respaldemos el(los) sitio(s) web. No tenemos responsabilidad por el contenido de los sitios web enlazados.
          </p>
        </section>

        <section className="space-y-4 bg-muted backdrop-blur-md rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-blue-700">Restricciones</h2>
          <p>
            No puede crear un enlace a este sitio web desde otro sitio web o documento sin el consentimiento previo por escrito de <strong>ADPROTV S.A.S.</strong>.
          </p>
        </section>
      </div>
    </>
  );
}
