import Navbar from "@/components/layout/Navbar";
import PlansCarousel from "@/components/layout/PlansCarousel";
import BenefitsGrid from "@/components/layout/BenefitsGrid";
import Requeriments from "@/components/layout/Requeriments";
import GraphBackground from "@/components/layout/GraphBackground";
import { internetPlans } from "@/data/plans";
import { internetBenefits } from "@/data/benefits";

export default function Plans() {
  return (
    <>
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <GraphBackground />
        <Navbar classnameText="text-white" />
        <section className="relative text-white text-center py-20 px-6 md:px-12 lg:px-20 shadow-lg">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide drop-shadow-lg">
            PLANES DE INTERNET
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-gray-200">
            Elige el plan que mejor se adapte a tus necesidades y disfruta de una
            experiencia en línea segura y confiable con{" "}
            <span className="font-bold text-yellow-400">Star GO</span>.
          </p>
        </section>
      </div>

      <div className="bg-muted">
        <PlansCarousel plans={internetPlans} />
      </div>

      <div className="bg-muted">
        <Requeriments />
      </div>

      <div className="bg-muted">
        <BenefitsGrid items={internetBenefits} />
      </div>
    </>
  );
}
