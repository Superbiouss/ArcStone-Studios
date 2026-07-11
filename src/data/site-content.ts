import { NavLink, Project, FAQItem, ServiceItem, ProcessStep, Testimonial, StatItem, FooterLinks } from "@/types";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    title: "Aria Mall",
    category: "Branding & Web",
    image: "/images/airia.jpeg",
    socials: [
      { type: "instagram", url: "https://www.instagram.com/airiamall?igsh=MW13ZWFyZWxlMW4yMA==" },
    ],
  },
  {
    title: "The Capital",
    category: "Digital Experience",
    image: "/images/the-capital-mall.jpg",
    socials: [
      { type: "instagram", url: "https://www.instagram.com/capitalmallvasai?igsh=cmRrM2Y5bmU0bWV1" },
    ],
  },
  {
    title: "North India Mall",
    category: "UI/UX Design",
    image: "/images/nim.jpg",
  },
  {
    title: "COPA Pune",
    category: "Web Development",
    image: "/images/kopa.webp",
    socials: [
      { type: "instagram", url: "https://www.instagram.com/kopapune?igsh=ZnBzbHR4eXdzMXd2" },
    ],
  },
  {
    title: "Y Junction",
    category: "Creative Direction",
    image: "/images/lake-shore.jpeg",
    socials: [
      { type: "instagram", url: "https://www.instagram.com/lakeshoreyjunction?igsh=MXViZ2J6M3M4d3pyMA==" },
    ],
  },
  {
    title: "LS Thane",
    category: "Brand Strategy",
    image: "/images/lake-shore-mall.webp",
  },
  {
    title: "Saffronart",
    category: "Digital Experience",
    image: "/images/saffronart.webp",
    socials: [
      { type: "instagram", url: "https://www.instagram.com/saffronartindia?igsh=MTc4YzFjZ3JvcmFyNw==" },
    ],
  },
];

export const faqs: FAQItem[] = [
  {
    question: "What services does ArcStone Studios offer?",
    answer:
      "We specialize in brand identity systems, UI/UX design, web development, motion design, and creative direction. From strategy to launch, we handle every pixel of your digital presence.",
  },
  {
    question: "What is the typical investment for a project?",
    answer:
      "While every project is custom-scoped, our brand identity engagements typically start at $5,000, and full digital experiences (web design + development) start around $10,000. We focus on delivering high-ROI outcomes and premium quality rather than standard hourly billing.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects are delivered within 2–6 weeks depending on scope. Simple branding packages ship in under 2 weeks, while full web experiences with custom animations typically take 4–6 weeks.",
  },
  {
    question: "What's the onboarding process like?",
    answer:
      "After you reach out, we schedule a discovery call to understand your brand, audience, and goals. From there, we send a detailed proposal with scope, timeline, and investment. Once approved, we kick off with a deep-dive strategy session.",
  },
  {
    question: "How do we communicate during the project?",
    answer:
      "We set up a dedicated Slack or Discord channel for real-time collaboration. We also use a shared Notion workspace (our 'Design Board') where you can track progress, view deliverables, and provide feedback asynchronously without getting lost in email threads.",
  },
  {
    question: "How many revisions do I get?",
    answer:
      "We don't believe in arbitrarily capping revisions. Our milestone-based approach ensures we are perfectly aligned at every step. We iterate until the specific milestone (wireframes, design concept, prototype) meets the agreed-upon strategic goals before moving forward.",
  },
  {
    question: "What technology stack do you use for web development?",
    answer:
      "We build blazing-fast, modern web applications using React, Next.js, and Tailwind CSS. For fluid, immersive animations, we leverage Framer Motion, GSAP, and WebGL. Our stacks are designed for maximum performance, SEO, and scalability.",
  },
  {
    question: "How is ArcStone different from hiring freelancers?",
    answer:
      "Unlike unpredictable freelancers, we operate as a dedicated creative team with structured processes, consistent communication, and guaranteed delivery timelines. You get agency-quality output with the agility of a lean studio.",
  },
  {
    question: "Who owns the final deliverables?",
    answer:
      "You do. Once the final invoice is paid in full, 100% of the intellectual property, design files (Figma), and source code are transferred to your ownership. We only retain the right to showcase the work in our studio portfolio.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Absolutely. We offer post-launch support packages that include maintenance, performance monitoring, content updates, and iterative design improvements to keep your digital presence sharp and secure.",
  },
];

export const services: ServiceItem[] = [
  {
    number: "01",
    title: "Design Board",
    description:
      "Access an informative design collaboration tool for easy project tracking.",
  },
  {
    number: "02",
    title: "Super Fast Delivery",
    description:
      "Unlock a seamless design experience, where each design is crafted and delivered in days.",
  },
  {
    number: "03",
    title: "Unique & Distinct",
    description:
      "Every design we create is uniquely tailored to your needs and remains 100% yours.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We immerse ourselves in your world — your brand, audience, competitors, and goals. Deep research fuels sharp strategy.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "From wireframes to high-fidelity prototypes, we craft every pixel with intention. Bold concepts refined through iteration.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Clean code, smooth animations, flawless performance. We build it right, launch it strong, and support it after.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with ArcStone is like having a dedicated squad of tech wizards and branding experts at my fingertips. The value they bring is truly priceless.",
    name: "Williams Paul",
    company: "HR, Greenish",
  },
  {
    quote:
      "It's as if I have a full squad of internet experts and advertising professionals on my side, and the highlight? Exceptional quality at every turn.",
    name: "Adam Kary",
    company: "Creative Lead, Cloud",
  },
  {
    quote:
      "It feels like I've got an entire team of web gurus and marketing pros working for me. ArcStone delivered beyond our expectations.",
    name: "Chris Waterwood",
    company: "VP, Minty",
  },
];

export const stats: StatItem[] = [
  { number: "150+", label: "Projects Delivered" },
  { number: "98%", label: "Client Retention" },
  { number: "12", label: "Countries Reached" },
  { number: "8+", label: "Years of Craft" },
];

export const footerLinks: FooterLinks = {
  services: [
    { label: "Design Board", href: "#services" },
    { label: "Super Fast Delivery", href: "#services" },
    { label: "Unique & Distinct", href: "#services" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/arcstonestudios.in?igsh=Ym00OGJ1dzNuZDc1" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/arcstone-studios/" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
