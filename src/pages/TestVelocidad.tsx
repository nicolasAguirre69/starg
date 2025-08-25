import Navbar from "@/components/layout/Navbar";
import GraphBackground from "@/components/layout/nodos";
import React from "react";

const TestVelocidad: React.FC = () => {
  return (
    <>
      {/* Hero con grafo */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <GraphBackground />
        <Navbar classnameText="text-white" />
        <section className="relative text-white text-center py-24 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
            MIDE TU VELOCIDAD
          </h2>
        </section>
      </div>

      {/* Sección del iframe */}
      <section>
        <iframe
          width="100%"
          height="650px"
          frameBorder={0}
          src="https://webmaster.speedtestcustom.com"
          title="Speedtest"
        />
      </section>
    </>
  );
};

export default TestVelocidad;
