"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface HoverBadgeWrapperProps {
  children: React.ReactNode;
  text: string;
}

export function HoverBadgeWrapper({ children, text }: HoverBadgeWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const badgeX = useSpring(x, springConfig);
  const badgeY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - 40); // 40 is half of the badge width
    y.set(e.clientY - rect.top - 40);
  };

  return (
    <div
      ref={ref}
      className="relative w-full h-full overflow-hidden cursor-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      
      {/* Hidden on touch devices via media query */}
      <motion.div
        className="pointer-events-none absolute left-0 top-0 hidden md:flex w-20 h-20 bg-accent text-accent-foreground font-bold uppercase tracking-tighter rounded-full items-center justify-center text-center text-xs leading-tight shadow-xl z-20 mix-blend-normal"
        style={{
          x: badgeX,
          y: badgeY,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.div>
    </div>
  );
}
