"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
        }, 400); // Hold at 100% for a moment
      }
      setProgress(currentProgress);
    }, 100);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-background text-foreground flex flex-col justify-between p-8 md:p-12"
        >
          <div className="flex justify-between items-start text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">
            <span>ARCSTONE STUDIOS</span>
            <span>INITIALIZING</span>
          </div>
          
          <div className="flex flex-col items-center justify-center flex-grow">
            <motion.h1 
              className="text-[12vw] font-bold leading-none tracking-tighter"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {progress}%
            </motion.h1>
            <div className="w-64 h-1 bg-border mt-8 overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-accent"
                style={{ width: `${progress}%` }}
                layout
              />
            </div>
          </div>
          
          <div className="flex justify-between items-end text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">
            <span>DIGITAL EXPERIENCES</span>
            <span>{new Date().getFullYear()}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
