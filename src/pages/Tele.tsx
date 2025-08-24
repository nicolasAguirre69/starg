import Navbar from "@/components/layout/Navbar";
import CarouselPlansTv from "@/components/layout/CarouselPlansTv";
import BenefitsI from "@/components/layout/BenefitsI";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import GraphBackground from "@/components/layout/nodos";

import Requeriments from "@/components/layout/Requeriments";

export default function Plans() {
  return (
    <>
      {/* Navbar + Fondo con grafo */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <GraphBackground />

        <Navbar classnameText={"text-white"} />
        <section className="relative text-white text-center py-20 px-6 md:px-12 lg:px-20 shadow-lg">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide drop-shadow-lg">
            PLANES DE INTERNET + TELEVISION
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-gray-200">
            Descubre la combinación perfecta de velocidad y entretenimiento. Con los
            planes de <span className="font-bold text-yellow-400">Star G</span>,
            disfruta de un internet diseñado para la libertad de tu mundo digital y de
            la mejor televisión de <span className="font-bold text-adpro-blue-200">ADPROTV</span>. Elige tu plan y vive una
            experiencia sin límites.
          </p>
        </section>
      </div>

      {/* Sección de Planes */}
      <div className="bg-muted">
        <CarouselPlansTv />
      </div>
      {/* Sección de Requisitos */}
      <div className="bg-muted">
        <Requeriments />
      </div>
      {/* Sección de Beneficios */}
      <div className="bg-muted">
        <BenefitsI />
      </div>
    </>
  );
}
