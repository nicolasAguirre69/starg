import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type ButtonConfig = {
  label: string;
  to: string;
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
};

const buttons: ButtonConfig[] = [
  {
    label: "Get started",
    to: "/planes",
    variant: "default",
  },
  {
    label: "Streamline raises $12M from Roba Ventures →",
    to: "/about",
    variant: "secondary",
  },
];

export default function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
      {buttons.map((btn, index) => (
        <Link key={index} to={btn.to} className="w-full sm:w-auto">
          <Button size="lg" variant={btn.variant} className="w-full sm:w-auto">
            {btn.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
