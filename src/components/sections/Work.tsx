import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { HoverBadgeWrapper } from "@/components/motion/HoverBadgeWrapper";
import Image from "next/image";

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const GlobeIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const projects = [
  {
    title: "Aria Mall",
    category: "Branding & Web",
    image: "/images/airia.jpeg",
    socials: [
      { type: "instagram", url: "https://www.instagram.com/airiamall?igsh=MW13ZWFyZWxlMW4yMA==" },
      { type: "website", url: "#" },
    ],
  },
  {
    title: "The Capital",
    category: "Digital Experience",
    image: "/images/the-capital-mall.jpg",
    socials: [
      { type: "instagram", url: "https://www.instagram.com/capitalmallvasai?igsh=cmRrM2Y5bmU0bWV1" },
      { type: "website", url: "#" },
    ],
  },
  {
    title: "North India Mall",
    category: "UI/UX Design",
    image: "/images/nim.jpg",
    socials: [
      { type: "instagram", url: "#" },
      { type: "website", url: "#" },
    ],
  },
  {
    title: "COPA Pune",
    category: "Web Development",
    image: "/images/kopa.webp",
    socials: [
      { type: "instagram", url: "https://www.instagram.com/kopapune?igsh=ZnBzbHR4eXdzMXd2" },
      { type: "website", url: "#" },
    ],
  },
  {
    title: "Y Junction",
    category: "Creative Direction",
    image: "/images/lake-shore.jpeg",
    socials: [
      { type: "instagram", url: "https://www.instagram.com/lakeshoreyjunction?igsh=MXViZ2J6M3M4d3pyMA==" },
      { type: "website", url: "#" },
    ],
  },
  {
    title: "LS Thane",
    category: "Brand Strategy",
    image: "/images/lake-shore-mall.webp",
    socials: [
      { type: "instagram", url: "#" },
      { type: "website", url: "#" },
    ],
  },
  {
    title: "Saffronart",
    category: "Digital Experience",
    image: "/images/saffronart.webp",
    socials: [
      { type: "instagram", url: "https://www.instagram.com/saffronartindia?igsh=MTc4YzFjZ3JvcmFyNw==" },
      { type: "website", url: "#" },
    ],
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
                <div className="aspect-[4/3] w-full relative bg-muted">
                  <HoverBadgeWrapper text="View Project">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </HoverBadgeWrapper>
                </div>

                {/* Project Info */}
                <div className="p-6 md:p-8 border-t-2 border-border group-hover:border-accent transition-colors duration-300">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <div>
                      <p className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground mb-2">
                        {project.category}
                      </p>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    {project.socials && (
                      <div className="flex gap-2">
                        {project.socials.map((social) => (
                          <a
                            key={social.type}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-border p-2 hover:bg-foreground hover:text-background transition-colors duration-300 flex items-center justify-center"
                            aria-label={social.type}
                          >
                            {social.type === "instagram" ? <InstagramIcon /> : <GlobeIcon />}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
