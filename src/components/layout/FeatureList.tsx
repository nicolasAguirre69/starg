import { Workflow, Flag, Users, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Tailored workflows",
    desc: "Track progress across custom issue flows for your team.",
  },
  {
    icon: Flag,
    title: "Milestones",
    desc: "Break projects down into concrete phases.",
  },
  {
    icon: Users,
    title: "Cross-team projects",
    desc: "Collaborate across teams and departments.",
  },
  {
    icon: BarChart3,
    title: "Progress insights",
    desc: "Track scope, velocity, and progress over time.",
  },
];

export default function FeatureList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
      {features.map((f, idx) => (
        <div
          key={idx}
          className="flex gap-3 items-start p-3 md:p-4 rounded-lg hover:bg-accent/50 transition-colors"
        >
          <f.icon className="w-5 h-5 md:w-6 md:h-6 text-primary mt-0.5 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm md:text-base">{f.title}</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">
              {f.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
