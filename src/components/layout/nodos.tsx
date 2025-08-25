
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface GraphBackgroundProps {
  nodeCount?: number; // cantidad de nodos (default 25)
  linkDistance?: number; // distancia máxima para dibujar líneas
  className?: string; // para estilos extra
}

export default function GraphBackground({
  nodeCount = 25,
  linkDistance = 15,
  className = "",
}: GraphBackgroundProps) {
  const [nodes, setNodes] = useState<Node[]>(() =>
    [...Array(nodeCount)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.1) * 0.07,
      vy: (Math.random() - 0.1) * 0.07,
    }))
  );

  const nodesRef = useRef(nodes);

  useEffect(() => {
    let animationFrame: number;

    const update = () => {
      nodesRef.current = nodesRef.current.map((node) => {
        let { x, y, vx, vy } = node;

        x += vx;
        y += vy;

        // Rebote en los bordes
        if (x <= 0 || x >= 100) vx *= -1;
        if (y <= 0 || y >= 100) vy *= -1;

        return { x, y, vx, vy };
      });

      setNodes([...nodesRef.current]);
      animationFrame = requestAnimationFrame(update);
    };

    animationFrame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden z-0 ${className}`}>
      {/* Líneas */}
      <svg className="absolute inset-0 w-full h-full">
        {nodes.map((a, i) =>
          nodes.map((b, j) => {
            if (i >= j) return null;
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < linkDistance) {
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
