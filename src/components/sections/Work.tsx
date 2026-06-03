import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const projects = [
  {
    title: "Neon Collective",
    category: "Branding & Web",
    color: "#1a1a2e",
  },
  {
    title: "Vortex Labs",
    category: "UI/UX Design",
    color: "#16213e",
  },
  {
    title: "Pulse Audio",
    category: "Web Development",
    color: "#0f3460",
  },
  {
    title: "Iron & Oak",
    category: "Creative Direction",
    color: "#1a1a1a",
  },
];

export function Work() {
  return (
    <section id="work" className="py-20 md:py-32 border-t-2 border-border">
      <div className="mx-auto max-w-[95vw]">
        <ScrollReveal>
          <SectionHeading
            title="SELECTED WORK"
            accentWord="WORK"
            subtitle="A curated selection of projects that showcase our craft."
          />
        </ScrollReveal>

        {/* Project grid with hairline dividers */}
        <div className="mt-16 md:mt-24 bg-border grid md:grid-cols-2 gap-px">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <div className="group bg-background overflow-hidden cursor-pointer">
                {/* Project Image Placeholder */}
                <div
                  className="aspect-[4/3] w-full relative overflow-hidden"
                  style={{ backgroundColor: project.color }}
                >
                  {/* Abstract decorative element instead of placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-[8rem] md:text-[12rem] font-bold text-white/5 select-none leading-none tracking-tighter uppercase"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
                </div>

                {/* Project Info */}
                <div className="p-6 md:p-8 border-t-2 border-border group-hover:border-accent transition-colors duration-300">
                  <p className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
