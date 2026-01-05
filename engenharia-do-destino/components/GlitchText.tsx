import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

const CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", as: Component = "span" }) => {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let iteration = 0;
    
    // Run effect on mount (intro) only
    const runGlitch = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        setDisplay(prev => 
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    runGlitch();
    
    return () => clearInterval(interval);
  }, [text]);

  // @ts-ignore - Dynamic component rendering
  return (
    <motion.div className="inline-block">
      <Component className={className}>
        {display}
      </Component>
    </motion.div>
  );
};