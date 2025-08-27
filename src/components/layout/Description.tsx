import GraphBackground from "./nodos";

export default function Description() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Fondo con grafo */}
      <GraphBackground />

      {/* Contenido con z-index para estar encima */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-6 md:px-12 py-16">
        
        {/* Texto */}
        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Orgullosamente Colombianos 🚀
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Somos una empresa de{" "}
            <span className="font-semibold text-yellow-400">
              telecomunicaciones colombiana
            </span>, comprometida con la innovación y el progreso del país. 
            Ofrecemos{" "}
            <span className="text-yellow-300">fibra óptica de última generación</span>,{" "}
            <span className="text-yellow-300">bajas latencias</span> y{" "}
            <span className="text-yellow-300">megas simétricas</span> para mantenerte siempre conectado.
          </p>

        </div>

        {/* Imagen */}
        <div className="order-1 lg:order-2 flex justify-center">
          <img
            src="img/StarGLogo.png"
            alt="Star G Telecomunicaciones"
            className="bg-white max-w-xs md:max-w-md lg:max-w-lg rounded-2xl shadow-2xl transform transition duration-500 hover:scale-110 hover:rotate-2"
          />
        </div>
      </div>
    </section>
  );
}
