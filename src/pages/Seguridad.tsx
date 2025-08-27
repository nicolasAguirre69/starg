import Navbar from "@/components/layout/Navbar";
import GraphBackground from "@/components/layout/nodos";

export default function Seguridad() {
  return (
    <>
      {/* --- Fondo con título principal --- */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden px-6 md:px-12 lg:px-20 py-10">
        <GraphBackground />
        <Navbar classnameText={"text-white"} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-white">
            Seguridad 
        </h1>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-12 py-5">          
          {/* --- Ataque Man in the Middle --- */}
          <section className="space-y-6 text-justify">
            <h2 className="text-2xl font-bold text-blue-700">
              Ataque “Man-in-the-Middle” (MitM)
            </h2>
            <p>
              El ataque <strong>Man-in-the-Middle (MitM)</strong>, que en
              español significa “hombre en el medio”, es un tipo de ciberataque
              en el que un atacante se posiciona en la comunicación entre dos
              partes (por ejemplo, un cliente y un servidor) con el fin de
              interceptar, modificar o manipular la información transmitida sin
              que ninguno de los dos se dé cuenta.
            </p>
            <p>
              Este ataque suele ocurrir en redes poco seguras, como conexiones
              Wi-Fi públicas o privadas sin cifrado. El atacante puede leer los
              datos, alterar el contenido de los mensajes o incluso hacerse
              pasar por una de las partes legítimas, lo que compromete la
              privacidad y seguridad de la comunicación.
            </p>

            <h3 className="text-xl font-semibold text-blue-500">
              ¿Cómo funciona un ataque MitM?
            </h3>
            <p>
              En términos generales, el atacante se ubica entre el emisor y el
              receptor. Puede interceptar credenciales, números de tarjetas de
              crédito, información bancaria o cualquier tipo de datos sensibles.
              Los métodos más comunes incluyen:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Suplantación de ARP (ARP Spoofing):</strong> el atacante
                envía mensajes falsos en una red local para asociar su dirección
                MAC con la dirección IP de un dispositivo legítimo.
              </li>
              <li>
                <strong>DNS Spoofing:</strong> manipula la resolución de nombres
                de dominio para redirigir al usuario a sitios falsos.
              </li>
              <li>
                <strong>Intercepción de HTTPS:</strong> el atacante aprovecha
                certificados inseguros o falsificados para espiar conexiones que
                deberían estar cifradas.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-500">
              Ejemplo de un ataque MitM
            </h3>
            <p>
              Imagina que un usuario se conecta a una red Wi-Fi pública en un
              café. El atacante crea un punto de acceso falso con un nombre
              similar al de la red real. Cuando el usuario se conecta a esta red
              maliciosa, toda la información transmitida (como contraseñas o
              datos bancarios) pasa primero por el dispositivo del atacante,
              quien puede leerla o modificarla antes de enviarla al servidor
              real. El usuario no percibe nada extraño, ya que todo parece
              funcionar con normalidad.
            </p>

            <h3 className="text-xl font-semibold text-blue-500">
              Consecuencias de un ataque MitM
            </h3>
            <p>
              Ahora que entendemos un poco sobre la estructura del ataque en sí,
              queda por ver qué pueden hacer los delincuentes cuando llevan a
              cabo un ataque Man-in-the-Middle.
            </p>
            <p>
              En el ejemplo, la captura de tráfico fue realizada con Ettercap
              para analizar paquetes. Sin embargo, existen frameworks como{" "}
              <strong>MITMf</strong> (Man-in-the-Middle Framework) que permiten
              acciones adicionales:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Realizar capturas de pantalla de lo que observa la víctima cada
                cierto tiempo.
              </li>
              <li>
                Insertar en la página a la que se accede código en JavaScript
                creado por el atacante.
              </li>
              <li>Intentar abrir tráfico encriptado HTTPS.</li>
              <li>
                Insertar un <strong>keylogger</strong> que capture todo lo que
                escribe la víctima.
              </li>
            </ul>
            <p>
              Además, existen variantes como los ataques{" "}
              <strong>Man-in-the-Browser</strong> o la manipulación del{" "}
              <strong>portapapeles</strong>, que también interceptan acciones
              del usuario de forma invisible.
            </p>

            <h3 className="text-xl font-semibold text-blue-500">
              Cómo protegerse de un ataque MitM
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Desconfíe de las redes Wi-Fi públicas:</strong> evite
                compartir información importante y descargar archivos en redes
                abiertas.
              </li>
              <li>
                <strong>Solo instale software de fuentes confiables:</strong>{" "}
                muchos ataques se esconden en programas pirata o modificados.
              </li>
              <li>
                <strong>Use antivirus actualizado:</strong> correctamente
                configurado, detecta intentos de ataques MitM.
              </li>
              <li>
                <strong>Entornos corporativos:</strong> segregue redes, use
                firewalls estrictos y configure routers para inspeccionar tablas
                ARP.
              </li>
            </ul>
          </section>

          {/* --- Phishing --- */}
          <section className="space-y-6 text-justify">
            <h2 className="text-2xl font-bold text-blue-700">Phishing</h2>
            <h3 className="text-xl font-semibold text-blue-500">Definición</h3>
            <p>
              El <strong>phishing</strong> es una modalidad de estafa diseñada
              para robar la identidad del usuario. El delito consiste en obtener
              información personal como números de tarjetas de crédito,
              contraseñas, información de cuentas u otros datos sensibles por
              medio de engaños. Habitualmente llega a través de correos
              electrónicos fraudulentos o ventanas emergentes.
            </p>

            <h3 className="text-xl font-semibold text-blue-500">
              Cómo funciona
            </h3>
            <p>
              Los atacantes envían millones de correos falsos que aparentan
              provenir de bancos o empresas reconocidas. Estos mensajes incluyen
              enlaces hacia sitios web fraudulentos que imitan a los legítimos
              (sitios “piratas”). Cuando el usuario introduce información en
              estos sitios falsos, los datos son enviados directamente al
              delincuente.
            </p>

            <h3 className="text-xl font-semibold text-blue-\500">
              Cómo protegerse
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Nunca responda a solicitudes de información personal recibidas
                por correo electrónico.
              </li>
              <li>
                Asegúrese de que su PC cuente con las últimas actualizaciones de
                seguridad.
              </li>
              <li>
                Escriba manualmente las direcciones web en el navegador en lugar
                de hacer clic en enlaces.
              </li>
              <li>
                Verifique que el sitio web utilice <strong>https://</strong> y
                cifrado válido.
              </li>
              <li>
                Los ISP implementan filtros anti-spam que ayudan a reducir
                correos de phishing, pero el usuario también debe ser vigilante.
              </li>
            </ul>
          </section>

          {/* --- Spam --- */}
          <section className="space-y-6 text-justify">
            <h2 className="text-2xl font-bold text-blue-700">Spam</h2>
            <h3 className="text-xl font-semibold text-blue-500">Definición</h3>
            <p>
              El <strong>spam</strong> es el correo basura: mensajes no
              solicitados, normalmente publicitarios, enviados de forma masiva.
              Afectan la productividad de los usuarios y pueden ser una vía de
              entrada a fraudes.
            </p>
            <p>
              El spam debe controlarse tanto a nivel de usuario como a nivel de
              proveedores de Internet.
            </p>

            <h3 className="text-xl font-semibold text-blue-\500">
              Normas básicas para evitar el spam
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                No abra archivos adjuntos de remitentes desconocidos, incluso si
                tiene antivirus.
              </li>
              <li>No haga clic en enlaces sospechosos dentro de correos.</li>
              <li>
                Use cuentas con combinaciones de letras y números para
                dificultar ataques.
              </li>
              <li>
                Tenga cuidado al registrar su correo en sitios web, ya que
                pueden venderlo a spammers.
              </li>
              <li>
                Mantenga actualizados los servidores de correo y sistemas
                operativos.
              </li>
              <li>
                Verifique que su IP no esté en listas negras y solicite
                desbloqueos si es necesario.
              </li>
            </ul>
          </section>

          {/* --- Virus --- */}
          <section className="space-y-6 text-justify">
            <h2 className="text-2xl font-bold text-blue-700">
              Virus Informáticos
            </h2>
            <h3 className="text-xl font-semibold text-blue-\500">Definición</h3>
            <p>
              Un <strong>virus informático</strong> es un programa que se copia
              automáticamente con el objetivo de alterar el funcionamiento
              normal de un equipo. Pueden destruir datos, ralentizar sistemas o
              simplemente ser molestos. Muchos virus incluyen cargas dañinas que
              pueden generar graves pérdidas.
            </p>

            <h3 className="text-xl font-semibold text-blue-\500">
              Cómo protegerse
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                No abrir archivos adjuntos de remitentes desconocidos, incluso
                con antivirus instalado.
              </li>
              <li>
                Evitar instalar software pirata o de baja calidad, especialmente
                desde redes P2P.
              </li>
              <li>
                Mantener el sistema operativo y aplicaciones actualizados.
              </li>
              <li>
                Instalar un software antivirus confiable y actualizado con las
                últimas firmas.
              </li>
            </ul>
          </section>
        </div>
    </>
  );
}
