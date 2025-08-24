import Navbar from "@/components/layout/Navbar";
import CarouselPlansIn from "@/components/layout/CarouselPlansIn";
import BenefitsI from "@/components/layout/BenefitsI";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import GraphBackground from "@/components/layout/nodos";

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
