"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "pointer" | "view">("default");
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only mount on devices with a fine pointer (desktop)
    if (window.matchMedia("(pointer: fine)").matches) {
      setMounted(true);
      document.body.style.cursor = "none";
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of base size (20px / 2 = 10px) to center it.
      // We will handle centering via CSS transform origin or translate
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.closest('[data-cursor="view"]')) {
        setCursorState("view");
      } else if (
        target.closest("a") || 
        target.closest("button") || 
        target.closest(".cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setCursorState("pointer");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 flex items-center justify-center bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        width: 20,
        height: 20,
      }}
      animate={{
        scale: cursorState === "view" ? 4 : cursorState === "pointer" ? 2.5 : 1,
        opacity: 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {cursorState === "view" && (
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[5px] font-black tracking-widest text-black"
        >
          VIEW
        </motion.span>
      )}
    </motion.div>
  );
}
