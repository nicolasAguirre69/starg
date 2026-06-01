import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { BenefitItem } from "@/types";

interface BenefitsGridProps {
  items: BenefitItem[];
}

export default function BenefitsGrid({ items }: BenefitsGridProps) {
  return (
    <section className="w-full pt-12 pb-8 md:pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Nuestros Beneficios
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubre todo lo que tenemos para ofrecerte con la mejor tecnología y servicio
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${benefit.gradient}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
