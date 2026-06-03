import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import Image from "next/image";

const projects = [
  {
    title: "Airia Mall",
    category: "Branding & Web",
    image: "/images/airia.jpeg",
  },
  {
    title: "North India Mall",
    category: "UI/UX Design",
    image: "/images/nim.jpg",
  },
  {
    title: "Kopa Mall",
    category: "Web Development",
    image: "/images/kopa.webp",
  },
  {
    title: "Lake Shore",
    category: "Creative Direction",
    image: "/images/lake-shore.jpeg",
  },
  {
    title: "Saffronart",
    category: "Digital Experience",
    image: "/images/saffronart.webp",
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
            <ScrollReveal 
              key={project.title} 
              delay={i * 0.1}
              className={i === projects.length - 1 && projects.length % 2 !== 0 ? "md:col-span-2" : ""}
            >
              <div className="group bg-background overflow-hidden cursor-pointer h-full">
                {/* Project Image */}
                <div className="aspect-[4/3] w-full relative overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
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
