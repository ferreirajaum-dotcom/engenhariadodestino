import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`relative py-16 md:py-24 px-4 md:px-8 overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // Reduzido de max-w-[1600px] para max-w-6xl para "segurar" mais o layout
        className="w-full max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};
