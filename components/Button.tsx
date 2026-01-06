import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() ?? { left: 0, top: 0, width: 0, height: 0 };
    
    const x = (clientX - (left + width / 2)) * 0.1; 
    const y = (clientY - (top + height / 2)) * 0.1;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Reduzido padding de py-5 px-10 para py-4 px-8. Fonte text-xs ao invés de text-sm
  const baseStyles = "relative group flex items-center justify-center gap-3 px-8 py-4 font-display font-bold text-xs uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden rounded-sm backdrop-blur-sm";
  
  const variants = {
    primary: "bg-brand-gold/90 text-brand-dark hover:bg-brand-gold hover:text-black hover:shadow-[0_0_30px_rgba(212,169,78,0.3)]",
    secondary: "bg-brand-card/30 border border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10 hover:border-brand-gold/60"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <motion.button 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 skew-x-12" />
    </motion.button>
  );
};
