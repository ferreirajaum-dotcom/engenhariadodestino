import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
}

export const HolographicCard: React.FC<HolographicCardProps> = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Rastreamento direto do mouse para resposta instantânea (sem lag do spring)
  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    x.set(clientX - left);
    y.set(clientY - top);
  };

  // 1. Template para o brilho de fundo (Spotlight Fill)
  // Um gradiente radial suave dourado que segue o mouse
  const spotlightFill = useMotionTemplate`radial-gradient(500px circle at ${x}px ${y}px, rgba(212, 169, 78, 0.10), transparent 80%)`;

  // 2. Template para o brilho da borda (Spotlight Border)
  // Uma máscara que revela a borda dourada apenas perto do mouse
  const borderMask = useMotionTemplate`radial-gradient(250px circle at ${x}px ${y}px, black, transparent)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative h-full overflow-hidden rounded-xl border border-white/5 bg-brand-card/40 backdrop-blur-sm group ${className}`}
    >
      {/* Camada 1: Spotlight de Fundo (Fill) */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{ background: spotlightFill }}
      />

      {/* Camada 2: Spotlight de Borda (Contour) */}
      {/* Esta div tem uma borda dourada sólida, mas é mascarada para aparecer apenas no foco */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 border border-brand-gold/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ 
          maskImage: borderMask,
          WebkitMaskImage: borderMask
        }}
      />

      {/* Camada 3: Conteúdo */}
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  );
};