import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Estrellas animadas */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-black dark:bg-white"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-6 max-w-lg">
        <motion.h1
          className="text-8xl font-extrabold text-primary drop-shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          404
        </motion.h1>
        <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-foreground">
          ¡Ups! Página no encontrada
        </h2>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">
          La página que estás buscando podría haber sido eliminada, cambiado de
          nombre o no estar disponible temporalmente.
        </p>

        {/* Botones */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg">
            <Link to="/">Volver al Inicio</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.history.back()}
          >
            Volver Atrás
          </Button>
        </div>
      </div>
    </div>
  );
}
