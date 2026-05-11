import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wind, Sun, Layers } from 'lucide-react';

export default function Products() {
  const [activeId, setActiveId] = useState('ventilation');

  const products = [
    { 
      id: 'ventilation', 
      title: 'Ventilation', 
      icon: Wind, 
      bgImg: 'https://ik.imagekit.io/jai777/Marquee/Ventiltion.webp',
      desc: 'Promotes optimal air circulation around structures while maintaining aesthetic integrity and structural screening. Allows buildings to breathe naturally.' 
    },
    { 
      id: 'shading', 
      title: 'Shading', 
      icon: Sun, 
      bgImg: 'https://ik.imagekit.io/jai777/Marquee/Shaading.webp',
      desc: 'Expertly engineered to reduce thermal load and provide glare protection, significantly improving energy efficiency without compromising natural light.' 
    },
    { 
      id: 'covering', 
      title: 'Covering', 
      icon: Layers, 
      bgImg: 'https://ik.imagekit.io/jai777/Marquee/Covering.webp',
      desc: 'Wraps robust functional elements in an engaging, rhythmic architectural pattern, transforming mundane utility areas into visual focal points.' 
    },
  ];

  return (
    <section id="products" className="relative py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-xs font-mono text-brand tracking-[0.3em] uppercase mb-4">Functional Aesthetics</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white">Fins & Louvers</h3>
          </div>
          <p className="text-neutral-300 max-w-md font-normal text-lg">
            "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution."
            <br/><span className="text-sm font-mono mt-2 block text-neutral-400">— Aristotle</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row h-[600px] gap-4">
          {products.map((p) => {
            const isActive = activeId === p.id;
            return (
              <motion.div
                key={p.id}
                onMouseEnter={() => setActiveId(p.id)}
                onClick={() => setActiveId(p.id)}
                layout
                initial={{ borderRadius: 16 }}
                animate={{ 
                  flex: isActive ? 3 : 1,
                  backgroundColor: isActive ? '#111111' : '#0a0a0a',
                }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.8 }}
                className="relative overflow-hidden cursor-pointer border border-white/5 hover:border-white/10 rounded-2xl flex flex-col justify-end p-6 md:p-10 group"
              >
                <div 
                  className={`absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 ${isActive ? 'grayscale-0 opacity-50' : 'grayscale-[60%] opacity-20 group-hover:opacity-30'}`} 
                  style={{ backgroundImage: `url(${p.bgImg})` }} 
                />
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
                
                <div className="relative z-10 flex flex-col gap-6">
                  <div className={`p-4 rounded-xl w-fit transition-colors duration-500 ${isActive ? 'bg-brand text-white' : 'bg-white/5 text-neutral-400'}`}>
                    <p.icon size={32} strokeWidth={1.5} />
                  </div>
                  
                  <motion.h4 layout="position" className={`text-2xl md:text-3xl font-bold transition-colors duration-500 ${isActive ? 'text-white' : 'text-neutral-400'}`}>
                    {p.title}
                  </motion.h4>
                  
                  <AnimatePresence mode="popLayout">
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="text-neutral-300 text-lg font-normal max-w-md hidden md:block"
                      >
                        {p.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
