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

export const faqs: FAQItem[] = [
  {
    question: "What is haven about?",
    answer:
      "Sincerely, it is as though you have a pair of spectacles enabling you to see deeper into problems man longs to dissipate and solve. And luckily for any man who reads you, he will get the answers to his worries except he still isn't ready to tackle himself. Kudos! Keep the ball rolling.",
  },
  {
    question: "What are the criteria to become a writer?",
    answer:
      "Friends who talk about cryptocurrencies and Web3, and you want to understand the terminology.",
  },
  {
    question: "I Want to Use AI in My Work, But I Don't Know How",
    answer:
      "You want to embrace the future of technology without fear.",
  },
  {
    question: "I Want to Be More Efficient and Creative, But There Are Too Many Tools",
    answer:
      "You're ready to navigate tomorrow's innovations confidently.",
  },
  {
    question: "What's the Onboarding process like",
    answer:
      "You're ready to navigate tomorrow's innovations confidently.",
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
      "Working with Crate is like having a dedicated squad of tech wizards and branding experts at my fingertips. And believe it or not, the value they bring is priceless.",
    name: "Williams Paul",
    company: "HR, Greenish",
  },
  {
    quote:
      "It's as if I have a full squad of internet experts and advertising professionals on my side, and the highlight? It didn't charge me a single penny",
    name: "Adam Kary",
    company: "Creative Lead, Cloud",
  },
  {
    quote:
      "It feels like I’ve got an entire team of web gurus and marketing pros working for me, and the best part? It didn’t cost me a cent.",
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
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
