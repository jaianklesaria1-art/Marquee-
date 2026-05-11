import { motion } from 'motion/react';

export default function Dimensions() {
  const shapes = [
    { 
      name: "Rectangle", 
      preview: "M5 10 h50 v20 h-50 z",
      colSpan: "lg:col-span-2",
      sizes: ["50 X 25", "60 X 30", "60 X 40", "75 X 25", "75 X 40", "75 X 50", "100 X 40", "100 X 50", "100 X 60", "125 X 50", "125 X 75", "150 X 50", "150 X 100", "200 X 100"]
    },
    { 
      name: "Square", 
      preview: "M15 5 h30 v30 h-30 z",
      colSpan: "lg:col-span-1",
      sizes: ["30 X 30", "50 X 50", "75 X 75", "100 X 100"] 
    },
    { 
      name: "Rounded Corner", 
      preview: "M10 10 h40 a5 5 0 0 1 5 5 v10 a5 5 0 0 1 -5 5 h-40 a5 5 0 0 1 -5 -5 v-10 a5 5 0 0 1 5 -5 z",
      colSpan: "lg:col-span-1",
      sizes: ["90 X 45"] 
    },
    { 
      name: "Aerodynamic", 
      preview: "M 5 5 C 25 5 45 15 55 20 C 45 25 25 35 5 35 Z",
      colSpan: "lg:col-span-1",
      sizes: ["100 X 50"] 
    },
    { 
      name: "Arrow", 
      preview: "M5 10 H40 L55 20 L40 30 H5 Z",
      colSpan: "lg:col-span-1",
      sizes: ["75 X 50"] 
    },
    { 
      name: "Elliptical", 
      preview: "M5 20 A 25 10 0 1 0 55 20 A 25 10 0 1 0 5 20",
      colSpan: "lg:col-span-1",
      sizes: ["100 X 25"] 
    },
    { 
      name: "Parallelogram", 
      preview: "M15 10 H55 L45 30 H5 Z",
      colSpan: "lg:col-span-1",
      sizes: ["90 X 70", "70 X 45"] 
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 z-0 bg-[#070707] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 w-full">
        <h2 className="text-xs font-mono text-[#FF7A00] tracking-[0.3em] uppercase mb-3">Infinite Variations</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">Profile Dimensions</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-left">
          {shapes.map((shape, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               viewport={{ once: true }}
               className={`bg-[#0c0c0c] border border-white/5 p-6 flex flex-col sm:flex-row gap-6 items-start ${shape.colSpan} hover:bg-[#111] hover:border-[#FF7A00]/30 transition-all cursor-default`}
             >
                <div className="flex flex-col items-start min-w-[140px] shrink-0">
                  <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">{shape.name}</h4>
                  <svg width="60" height="40" viewBox="0 0 60 40" className="w-16 h-10 text-neutral-400 group-hover:text-white transition-colors">
                    <path d={shape.preview} fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-3 pt-0">
                   {shape.sizes.map((size, sIdx) => (
                     <div key={sIdx} className="text-neutral-300 font-mono text-sm tracking-wider whitespace-nowrap">
                       {size}
                     </div>
                   ))}
                </div>
             </motion.div>
          ))}
        </div>
        
        <p className="mt-12 text-neutral-500 font-mono text-xs uppercase tracking-widest">
          Customized shapes available upon request <br className="md:hidden" />(subject to size and quantity)
        </p>
      </div>
    </section>
  );
}
