import CTAButtons from "@/components/layout/CTAButtons";
import CarrouselLayout from "@/components/layout/CarouselLayout";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12 lg:py-16">
      {/* Texto */}
      <div className="space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Strategy guides product
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground leading-relaxed">
          Streamline is the fit-for-purpose tool for planning and building
          modern software products.
        </p>

        <div className="pt-4">
          <CTAButtons />
        </div>
      </div>

      {/* Imagen (demo screenshot) */}
      <div className="order-1 lg:order-2">
        <CarrouselLayout />
      </div>
    </section>
  );
}
