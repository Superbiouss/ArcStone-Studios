"use client";

import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { HoverBadgeWrapper } from "@/components/motion/HoverBadgeWrapper";
import { useScroll, useTransform, motion } from "motion/react";
import Image from "next/image";
import { projects } from "@/data/site-content";
import { InstagramIcon, GlobeIcon } from "@/components/icons";

function ProjectImage({ image, title }: { image: string; title: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="aspect-[4/3] w-full relative bg-muted overflow-hidden">
      <HoverBadgeWrapper text="View Project">
        <motion.div
          style={{ y, width: "100%", height: "120%", position: "absolute", top: "-10%" }}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9Ijc1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNzUiIGZpbGw9IiMyNzI3MkEiLz48L3N2Zz4="
          />
        </motion.div>
      </HoverBadgeWrapper>
    </div>
  );
}

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
                <ProjectImage image={project.image} title={project.title} />

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
