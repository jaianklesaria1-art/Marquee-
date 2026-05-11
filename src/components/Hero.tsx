import { motion } from 'motion/react';
import { MoveDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4 mt-16 text-white text-balance">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-brand tracking-[0.3em] lg:tracking-[0.5em] uppercase text-xs md:text-sm mb-6 font-mono font-medium">
            uPVC Architectural Fins
          </h2>
          <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black uppercase tracking-tighter leading-none mb-6">
            Marquee
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-neutral-200 font-medium max-w-2xl mx-auto text-lg md:text-2xl mt-4 drop-shadow-md"
        >
          Vigorous architectural rhythm. <span className="text-white">Limitless possibilities.</span>
        </motion.p>
      </div>

      <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-300 hover:text-brand transition-colors animate-bounce"
      >
          <MoveDown size={32} strokeWidth={2} />
      </motion.a>
    </section>
  );
}
