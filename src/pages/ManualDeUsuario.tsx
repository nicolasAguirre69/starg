import Navbar from "@/components/layout/Navbar";
import GraphBackground from "@/components/layout/nodos";
import { Card, CardContent } from "@/components/ui/card";
export default function ManualDeUsuario() {
  return (
    <>
      {/* --- Fondo con título principal --- */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden px-6 md:px-12 lg:px-20 py-10 shadow-lg">
         <GraphBackground />
        <Navbar classnameText={"text-white"} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-white drop-shadow-lg">
          Manual de Usuario
        </h1>
      </div>

      {/* --- Contenido principal --- */}
      <div className="relative z-10 max-w-4xl mx-auto py-10 px-4">
        <Card className="bg-white/95 shadow-xl rounded-2xl border border-blue-200">
          <CardContent className="p-8 space-y-6 text-gray-800">
            
            <h2 className="text-2xl font-bold text-blue-700">Manual de Usuario</h2>
            <p className="text-lg font-medium">
              Factores que pueden limitar la velocidad de su Internet Fijo.
            </p>

            <p>
              <strong>ADPROTV S.A.S.</strong> y su equipo de ingenieros especializados informan que la velocidad de navegación puede verse afectada por diferentes factores, agrupados en tres categorías:
            </p>

            <ul className="list-disc list-inside space-y-1">
              <li><strong>Cliente</strong></li>
              <li><strong>ADPROTV SAS</strong></li>
              <li><strong>Factores externos</strong></li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-600">
              1. Factores relacionados con el Cliente
            </h3>

            <h4 className="text-lg font-semibold">Equipos de cómputo:</h4>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Sistema operativo: Windows 2000/XP/7/8/10 o inferior, o Mac OS 8.6 o inferior.</li>
              <li>Procesador: Intel Pentium PIII / AMD K6.</li>
              <li>Memoria RAM: mínimo 1 GB.</li>
              <li>Almacenamiento: al menos 2 GB libres en disco.</li>
              <li>Tarjeta de red alámbrica: 100 Mbps o inferior.</li>
              <li>Tarjeta inalámbrica: 802.11 b/g (recomendado 802.11 b/g/n).</li>
            </ul>

            <h4 className="text-lg font-semibold">Software y seguridad:</h4>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Virus y malware reducen el rendimiento del equipo.</li>
              <li>Instalar antivirus, antispam y control parental.</li>
              <li>Evitar programas P2P (Ares, Limewire, etc.).</li>
            </ul>

            <h4 className="text-lg font-semibold">Red interna del hogar:</h4>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Cableado en buen estado y sin empalmes fraudulentos.</li>
              <li>Evitar splitters antes del cable módem.</li>
              <li>Menos dispositivos conectados = mayor velocidad.</li>
            </ul>

            <h4 className="text-lg font-semibold">Cobertura e interferencias WiFi:</h4>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Distancia máxima recomendada: 7 metros sin obstáculos.</li>
              <li>Evitar paredes gruesas, metal, vidrio y agua (peceras).</li>
              <li>Electrodomésticos como microondas pueden interferir.</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-600">
              2. Factores relacionados con ADPROTV
            </h3>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Mantenimientos programados.</li>
              <li>Interrupciones por daños o actos de terceros.</li>
              <li>Calidad de la red de distribución.</li>
              <li>Capacidad de conexión internacional.</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-600">
              3. Factores externos
            </h3>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Problemas en el origen de las páginas web visitadas.</li>
              <li>Servidores saturados o con ancho de banda limitado.</li>
              <li>Interrupciones o congestión en el canal internacional.</li>
            </ul>

            <p className="italic text-gray-700">
              Nota final: Las recomendaciones y factores descritos se basan en la experiencia de ADPROTV S.A.S., considerando las incidencias más comunes registradas por nuestra mesa de ayuda y soporte técnico.
            </p>

            <p className="text-sm text-gray-500">
              Régimen de la protección de los usuarios: Resolución 5111 de 2017
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
