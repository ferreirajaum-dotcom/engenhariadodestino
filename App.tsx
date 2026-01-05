import React from 'react';
import { Background } from './components/Background';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { GlitchText } from './components/GlitchText';
import { HolographicCard } from './components/HolographicCard';
import { motion } from 'framer-motion';
import { 
  HERO_CONTENT, 
  PROBLEM_CONTENT, 
  SOLUTION_CONTENT, 
  SCIENCE_FEATURES, 
  BOOKS_SECTION,
  METHODOLOGY_STEPS,
  BENEFITS,
  AUTHOR,
  FINAL_REFLECTION
} from './constants';
import { Check, X, ChevronDown, Mountain, Terminal, Sparkles } from 'lucide-react';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 20 } // Mais suave/pesado
  }
};

export default function App() {
  const scrollToPricing = () => {
    console.log("Scrolling to checkout");
  };

  return (
    <main className="min-h-screen text-brand-muted selection:bg-brand-gold selection:text-brand-dark font-sans overflow-x-hidden bg-brand-dark">
      <Background />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 glass-panel border-b border-white/5"
      >
        <div className="w-full max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 text-brand-gold font-display font-bold text-lg tracking-[0.2em] cursor-pointer group">
            <Mountain className="w-5 h-5 group-hover:rotate-12 transition-transform opacity-80" />
            <span className="opacity-90 group-hover:opacity-100 transition-opacity">ENGENHARIA DO DESTINO</span>
          </div>
          <Button variant="secondary" className="hidden md:flex py-3 px-8 text-xs" onClick={scrollToPricing}>
            Acessar
          </Button>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <div className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-20">
        {/* Subtle grid line decoration */}
        <div className="absolute top-0 bottom-0 left-8 md:left-24 w-px bg-white/5 z-0 hidden lg:block"></div>
        <div className="absolute top-0 bottom-0 right-8 md:right-24 w-px bg-white/5 z-0 hidden lg:block"></div>

        <div className="w-full max-w-7xl mx-auto text-center space-y-12 z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-sm border border-brand-gold/20 bg-brand-card/50 text-brand-gold font-mono text-xs tracking-[0.3em] mb-4 backdrop-blur-md uppercase"
          >
            <span className="w-1.5 h-1.5 bg-brand-gold shadow-[0_0_10px_#D4A94E]"/>
            SISTEMA DE METAS V.2026
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold tracking-tighter text-brand-text leading-[0.85] md:leading-[0.8]">
              ENGENHARIA <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-gold via-[#E5C575] to-[#8A6A2E] relative block mt-2 md:mt-4 opacity-90">
                <GlitchText text="DO DESTINO" />
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg md:text-xl text-brand-muted/80 font-light max-w-2xl mx-auto leading-relaxed px-4 tracking-wide"
          >
            {HERO_CONTENT.hook}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center pt-12 w-full md:w-auto"
          >
            <Button onClick={scrollToPricing} className="w-full md:w-auto">{HERO_CONTENT.cta}</Button>
            <span className="text-xs text-brand-muted/60 font-mono tracking-[0.2em] uppercase border-l border-white/10 pl-6 ml-2 hidden md:block">Versão Digital <br/> Acesso Imediato</span>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, repeat: Infinity, duration: 3 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-brand-muted/40"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </div>

      {/* PROBLEM SECTION */}
      <Section className="border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-text leading-[1.1]">
              {PROBLEM_CONTENT.title} <br/>
              <span className="text-brand-muted opacity-60 block mt-2 text-3xl md:text-5xl">
                {PROBLEM_CONTENT.subtitle}
              </span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold/50 mx-auto lg:mx-0"></div>
            <p className="text-lg text-brand-muted font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {PROBLEM_CONTENT.conclusion}
            </p>
          </div>
          
          <HolographicCard className="p-8 md:p-12 !border-l-2 !border-l-brand-gold/50 !bg-gradient-to-br !from-brand-card/80 !to-brand-dark">
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {PROBLEM_CONTENT.points.map((point, idx) => (
                <motion.li key={idx} variants={itemVariants} className="flex items-center gap-6 group">
                  <div className="w-10 h-10 rounded-full bg-brand-dark border border-white/5 flex items-center justify-center shrink-0 group-hover:border-brand-muted/30 transition-colors">
                    <X className="w-4 h-4 text-brand-muted group-hover:text-brand-text transition-colors" />
                  </div>
                  <span className="text-lg text-brand-muted/80 group-hover:text-brand-text transition-colors font-light">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </HolographicCard>
        </div>
      </Section>

      {/* SOLUTION / CONCEPT */}
      <Section className="border-y border-white/5 bg-brand-card/20">
        <div className="text-center max-w-4xl mx-auto space-y-8 mb-20 md:mb-32">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1.5 }}
          >
            <Terminal className="w-12 h-12 text-brand-gold/80 mx-auto mb-8 opacity-80" />
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-display font-bold text-brand-text tracking-tight">
             <GlitchText text={SOLUTION_CONTENT.title} />
          </h2>
          <p className="text-xl md:text-2xl text-brand-muted font-light leading-relaxed">
            {SOLUTION_CONTENT.description}
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {SOLUTION_CONTENT.features.map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <HolographicCard className="p-10 text-center flex flex-col items-center justify-center gap-6 h-full cursor-pointer hover:border-brand-gold/20">
                <feature.icon className="w-10 h-10 text-brand-gold/60 group-hover:text-brand-gold transition-all duration-500 group-hover:scale-110" />
                <h3 className="font-display font-semibold text-lg uppercase tracking-widest text-brand-text">{feature.label}</h3>
              </HolographicCard>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* SCIENTIFIC BASIS GRID */}
      <Section>
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/5 pb-12">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 text-brand-text">
              Bases <span className="text-brand-gold">Científicas</span>
            </h2>
            <p className="text-lg font-mono text-brand-gold/60 tracking-widest uppercase">
              O código fonte do método
            </p>
          </div>
          <div className="text-right hidden md:block">
             <Sparkles className="w-8 h-8 text-brand-gold/40 animate-pulse ml-auto" />
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {SCIENCE_FEATURES.map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <HolographicCard className="p-8 h-full flex flex-col hover:-translate-y-1 transition-transform duration-500">
                <div className="flex items-center justify-between mb-8">
                  <div className="bg-brand-dark/50 p-4 rounded-sm border border-white/5">
                    <feature.icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  <span className="text-xs font-mono text-brand-muted/40">0{idx + 1}</span>
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-2 text-brand-text">{feature.title}</h3>
                <p className="text-xs font-mono text-brand-gold/80 mb-6 tracking-widest uppercase border-l-2 border-brand-gold/20 pl-3">{feature.subtitle}</p>
                <p className="text-brand-muted mb-8 flex-grow text-base leading-relaxed font-light">{feature.description}</p>
                
                <ul className="space-y-3 mt-auto pt-8 border-t border-white/5">
                  {feature.points.map((p, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-brand-muted/80">
                      <div className="w-1 h-1 bg-brand-gold rounded-full shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </HolographicCard>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* BOOKS SECTION */}
      <Section className="bg-brand-card/10">
        <div className="text-center mb-20">
          <h2 className="text-lg md:text-xl text-brand-muted font-light tracking-wide max-w-4xl mx-auto">
            {BOOKS_SECTION.headline}
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12"
        >
          {BOOKS_SECTION.books.map((book, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex flex-col items-center group">
              <div className="relative mb-8 w-full aspect-[2/3] perspective-1000">
                <div className="absolute inset-0 bg-brand-gold/5 blur-xl group-hover:bg-brand-gold/20 transition-colors duration-700 opacity-50" />
                <img 
                  src={book.image} 
                  alt={book.alt}
                  className="w-full h-full object-cover shadow-2xl transition-transform duration-700 group-hover:rotate-y-12 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-brand-gold font-bold tracking-[0.15em] text-xs text-center uppercase mb-2 opacity-80 group-hover:opacity-100">{book.title}</h3>
              <div className="w-8 h-px bg-white/10 mb-2 group-hover:w-16 transition-all" />
              <p className="text-brand-muted text-xs font-mono uppercase tracking-wider">{book.author}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center mt-24 max-w-4xl mx-auto relative"
        >
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-brand-gold/10 font-serif">"</span>
          <h3 className="text-2xl md:text-3xl font-serif italic text-brand-muted/90 leading-relaxed">
            {BOOKS_SECTION.quote.split("Hábitos Atômicos").map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <span className="text-brand-gold border-b border-brand-gold/30 pb-1">Hábitos Atômicos</span>}
              </React.Fragment>
            ))}
          </h3>
        </motion.div>
      </Section>

      {/* METHODOLOGY STEPS */}
      <Section className="relative overflow-visible">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-gold/10 to-transparent -translate-x-1/2 hidden md:block" />
        
        <div className="text-center mb-24 md:mb-40">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-text tracking-tight">O Sistema em 4 Níveis</h2>
          <p className="text-brand-gold/60 font-mono mt-4 text-sm tracking-[0.4em] uppercase">Engenharia da Jornada</p>
        </div>

        <div className="space-y-24 md:space-y-40">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
            >
              <div className="flex-1 text-center md:text-right w-full">
                {idx % 2 === 0 && (
                  <div className="md:pr-12 group">
                     <span className="text-brand-gold/20 font-display font-bold text-8xl block mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-700">0{step.level}</span>
                     <h3 className="text-3xl md:text-5xl font-bold text-brand-text mb-4 tracking-tight group-hover:text-brand-gold transition-colors duration-500">{step.title}</h3>
                     <p className="text-brand-muted font-light text-lg md:text-xl leading-relaxed">{step.desc}</p>
                  </div>
                )}
              </div>
              
              <div className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-brand-dark border border-brand-gold/30 shadow-[0_0_50px_rgba(212,169,78,0.1)] group hover:scale-110 transition-transform duration-500 shrink-0">
                <div className="absolute inset-0 rounded-full border border-brand-gold/10 scale-125 animate-pulse" />
                <step.icon className="w-8 h-8 text-brand-text group-hover:text-brand-gold transition-colors duration-500" />
              </div>

              <div className="flex-1 text-center md:text-left w-full">
                {idx % 2 !== 0 && (
                   <div className="md:pl-12 group">
                   <span className="text-brand-gold/20 font-display font-bold text-8xl block mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-700">0{step.level}</span>
                   <h3 className="text-3xl md:text-5xl font-bold text-brand-text mb-4 tracking-tight group-hover:text-brand-gold transition-colors duration-500">{step.title}</h3>
                   <p className="text-brand-muted font-light text-lg md:text-xl leading-relaxed">{step.desc}</p>
                </div>
                )}
                 {idx % 2 === 0 && (
                  <div className="md:hidden group">
                     <h3 className="text-3xl font-bold text-brand-text mb-3">{step.title}</h3>
                     <p className="text-brand-muted text-lg">{step.desc}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* BENEFITS / AUDIENCE */}
      <Section className="bg-gradient-to-b from-brand-card/20 to-brand-dark">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Who is it for */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-5xl font-display font-bold text-brand-text mb-12 flex items-center gap-6">
              <span className="text-brand-gold text-lg font-mono border border-brand-gold/30 rounded-full w-10 h-10 flex items-center justify-center">01</span> 
              O que você ganha
            </h3>
            <ul className="space-y-6">
              {BENEFITS.filter(b => b.type === 'positive').map((b, i) => (
                <motion.li 
                  key={i} 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-6 border-b border-white/5 hover:border-brand-gold/30 transition-colors cursor-default group"
                >
                  <Check className="w-5 h-5 text-brand-gold shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span className="text-xl text-brand-muted font-light group-hover:text-brand-text transition-colors">{b.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Who is it NOT for */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-5xl font-display font-bold text-brand-muted/50 mb-12 flex items-center gap-6">
              <span className="text-brand-muted/30 text-lg font-mono border border-brand-muted/20 rounded-full w-10 h-10 flex items-center justify-center">02</span> 
              Não é para quem
            </h3>
            <ul className="space-y-6">
              {BENEFITS.filter(b => b.type === 'negative').map((b, i) => (
                <motion.li 
                  key={i} 
                  whileHover={{ x: 10 }}
                  // Usando brand-muted em vez de vermelho para manter a paleta estrita
                  className="flex items-center gap-6 p-6 border-b border-white/5 hover:border-brand-muted/30 transition-colors cursor-default group opacity-70 hover:opacity-100"
                >
                  <X className="w-5 h-5 text-brand-muted shrink-0 opacity-60" />
                  <span className="text-xl text-brand-muted font-light group-hover:text-brand-text transition-colors">{b.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* AUTHOR */}
      <Section>
        <div className="mb-20 md:mb-32 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-text tracking-tight">{AUTHOR.title}</h2>
        </div>
        
        <HolographicCard className="max-w-6xl mx-auto border-none !bg-transparent md:!bg-brand-card/20 p-0 md:p-16 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 relative group">
            {/* Moldura dourada elegante */}
            <div className="absolute inset-0 border border-brand-gold/30 rotate-6 transition-transform duration-700 group-hover:rotate-12" />
            <div className="absolute inset-0 border border-white/10 -rotate-6 transition-transform duration-700 group-hover:-rotate-12" />
            
            <div className="absolute inset-0 overflow-hidden bg-brand-dark">
               <img 
                src="https://i.postimg.cc/prMvshLr/robert-oliveira-k-GY7ACl-U.png" 
                alt="Author" 
                className="w-full h-full object-cover object-[50%_25%] filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 opacity-90"
              />
            </div>
          </div>

          <div className="space-y-8 text-center md:text-left flex-1">
            <div>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-brand-text mb-2">{AUTHOR.name}</h2>
              <p className="text-brand-gold font-mono text-sm tracking-[0.2em] uppercase opacity-80">{AUTHOR.role}</p>
            </div>
            
            <p className="text-brand-muted leading-relaxed text-lg md:text-xl whitespace-pre-line font-light">
              {AUTHOR.bio}
            </p>
            
            <div className="pt-8 mt-8 border-t border-brand-gold/10 inline-block w-full">
              <p className="text-2xl md:text-3xl font-serif italic text-brand-text/80 whitespace-pre-line">"{AUTHOR.tagline}"</p>
            </div>
          </div>
        </HolographicCard>
      </Section>

      {/* FINAL REFLECTION */}
      <Section className="py-24 md:py-40">
         <div className="max-w-5xl mx-auto text-center space-y-16 md:space-y-24">
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-3 mb-4"
            >
               <Sparkles className="w-5 h-5 text-brand-gold animate-pulse" />
               <h3 className="text-sm font-mono text-brand-gold tracking-[0.5em] uppercase">
                 <GlitchText text={FINAL_REFLECTION.title} />
               </h3>
            </motion.div>
            
            <div className="space-y-8 md:space-y-12">
               {FINAL_REFLECTION.verses.map((verse, i) => (
                  <motion.p 
                     key={i}
                     initial={{ opacity: 0, filter: "blur(10px)" }}
                     whileInView={{ opacity: 1, filter: "blur(0px)" }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.4, duration: 1 }}
                     className={`text-4xl md:text-7xl font-display font-bold tracking-tight ${
                        i === 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-text via-white to-brand-text' : 'text-brand-muted/40'
                     }`}
                  >
                     {verse}
                  </motion.p>
               ))}
            </div>

            <motion.div 
               initial={{ scaleY: 0 }}
               whileInView={{ scaleY: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 1, duration: 0.8 }}
               className="relative py-12 px-8 mt-20 border-y border-brand-gold/20"
            >
               <p className="text-xl md:text-2xl text-brand-gold/90 font-mono whitespace-pre-line leading-relaxed tracking-wide uppercase">
                  {FINAL_REFLECTION.promise}
               </p>
            </motion.div>
         </div>
      </Section>

      {/* FINAL CTA / CONCLUSION */}
      <Section className="text-center pb-40 pt-0">
        <h2 className="text-5xl md:text-8xl font-display font-bold mb-12 text-brand-text tracking-tighter">
          A montanha não se move.
        </h2>
        <p className="text-xl md:text-3xl text-brand-muted/60 mb-20 max-w-4xl mx-auto font-light">
          Mas agora, você sabe exatamente como subir.
        </p>
        
        <div className="flex flex-col items-center gap-10">
          <Button className="text-lg px-16 py-6 w-full md:w-auto hover:scale-105" onClick={scrollToPricing}>
            GARANTIR MEU MANUAL
          </Button>
          <p className="text-xs font-mono text-brand-muted/30 tracking-[0.3em]">
            PROJETO 2026_INITIATED // SYSTEM_READY
          </p>
        </div>
      </Section>

      <footer className="py-16 text-center text-brand-muted/30 text-xs border-t border-white/5 bg-black tracking-widest uppercase">
        <p>© 2024 Engenharia do Destino. Todos os direitos reservados.</p>
        <p className="mt-4">Sonhar é humano. Executar é o que muda destinos.</p>
      </footer>
    </main>
  );
}