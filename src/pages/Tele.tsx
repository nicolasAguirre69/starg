import Navbar from "@/components/layout/Navbar";
import CarouselPlansIn from "@/components/layout/CarouselPlansIn";
import BenefitsI from "@/components/layout/BenefitsI";
import { motion } from "framer-motion";
import { useState } from "react";

function GraphBackground() {
  const [hovered, setHovered] = useState<number | null>(null);

  const nodes = [...Array(25)].map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Líneas */}
      <svg className="absolute inset-0 w-full h-full">
        {nodes.map((a, i) =>
          nodes.map((b, j) => {
            if (i >= j) return null; // evitar duplicados
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 25) {
              return (
                <line
                  key={`${i}-${j}`}
                  x1={`${a.x}%`}
                  y1={`${a.y}%`}
                  x2={`${b.x}%`}
                  y2={`${b.y}%`}
                  stroke="white"
                  strokeOpacity={0.15}
                  strokeWidth={1}
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {/* Nodos */}
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-white"
          style={{
            top: `${node.y}%`,
            left: `${node.x}%`,
            transform: "translate(-50%, -50%)",
          }}
          whileHover={{
            scale: 1.8,
            backgroundColor: "#34d399",
            boxShadow: "0px 0px 10px rgba(52, 211, 153, 0.8)",
          }}
          onHoverStart={() => setHovered(i)}
          onHoverEnd={() => setHovered(null)}
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}
    </div>
  );
}

export default function Plans() {
  return (
    <>
      {/* Navbar + Fondo con grafo */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <GraphBackground />

        <Navbar classnameText={"text-white"} />
        <section className="relative text-white text-center py-20 px-6 md:px-12 lg:px-20 shadow-lg">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide drop-shadow-lg">
            PLANES DE INTERNET *
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-gray-200">
            Elige el plan que mejor se adapte a tus necesidades y disfruta de
            una experiencia en línea segura y confiable con{" "}
            <span className="font-bold text-yellow-400">Star G</span>.
          </p>
        </section>
      </div>

      {/* Sección de Planes */}
      <div className="bg-muted">
        <CarouselPlansIn />
      </div>

      {/* Sección de Beneficios */}
      <div className="bg-muted">
        <BenefitsI />
      </div>
    </>
  );
}
