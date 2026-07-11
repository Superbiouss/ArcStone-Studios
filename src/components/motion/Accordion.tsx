"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "motion/react";

interface AccordionItemProps {
  index?: number;
  question: string;
  answer: string;
}

export function AccordionItem({ index, question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const buttonId = useId();

  const formattedIndex = index !== undefined ? (index + 1).toString().padStart(2, "0") : null;

  return (
    <div className="border-b-4 border-border">
      <button
        id={buttonId}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-8 md:py-10 text-left cursor-pointer group"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <div className="flex items-center gap-6 md:gap-12">
          {formattedIndex && (
            <span className="text-xl md:text-2xl font-bold text-accent shrink-0">
              {formattedIndex}
            </span>
          )}
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight pr-8 group-hover:text-accent transition-colors duration-200">
            {question}
          </span>
        </div>
        <span
          className={`text-4xl md:text-5xl font-light text-accent shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
