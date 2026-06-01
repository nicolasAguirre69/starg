
import CarrouselLayout from "@/components/layout/CarouselLayout";

export default function HeroSection() {
  return (
  <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12 lg:py-16">
      {/* Texto */}
      <div className="space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          La máxima velocidad de Internet para tu hogar y negocio.
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground leading-relaxed">
          Únete a la nueva era de la conectividad con un servicio que es sinónimo de velocidad y fiabilidad
        </p>
      </div>

      {/* Imagen (demo screenshot) */}
      <div className="order-1 lg:order-2">
        <CarrouselLayout />
      </div>
    </section>
  );
}
