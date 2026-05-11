import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function Advantages() {
  const features = [
    { name: "Low Maintenance", desc: "No need for constant repainting or costly upkeep." },
    { name: "Weather Proof", desc: "Resists extreme climate conditions effortlessly." },
    { name: "Rust/Rot Proof", desc: "Immune to moisture damage unlike wood or metals." },
    { name: "Self-Extinguishing", desc: "Non-combustible properties for advanced safety." },
    { name: "Recyclable", desc: "Environmentally sustainable and fully recyclable." },
    { name: "Custom Sizes", desc: "Fabricated to any specific length or dimension." },
  ];

  return (
    <section id="advantages" className="py-32 border-y border-white/5 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed grayscale-[50%] opacity-20 pointer-events-none" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541884053360-19be20d7d79b?q=80&w=2000&auto=format&fit=crop")' }} 
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505] pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-xs font-mono text-brand tracking-[0.3em] uppercase mb-4">Material Superiority</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">The Marquee Advantage</h3>
          <p className="text-neutral-300 max-w-2xl mx-auto font-normal text-lg">
            High engineering value stemming from unmatched tensile strength and plasticity. Outlasting conventional materials like wood and aluminum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="h-full"
            >
              <SpotlightCard 
                spotlightColor="rgba(255, 102, 0, 0.12)"
                className="bg-[#0f0f0f] overflow-hidden border border-white/5 p-8 lg:p-10 rounded-2xl hover:bg-[#030303] hover:border-brand/40 transition-all cursor-pointer h-full group"
              >
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand/20 group-hover:text-brand transition-colors text-neutral-400">
                  <Check size={20} strokeWidth={2} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.name}</h4>
                <p className="text-neutral-300 font-normal leading-relaxed">{item.desc}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 p-8 border border-white/10 rounded-2xl bg-gradient-to-tr from-[#050505] to-[#111] flex flex-col md:flex-row gap-8 items-center justify-between"
        >
            <div className="max-w-3xl">
                <h4 className="text-xl font-bold text-white mb-3">Premium Installation</h4>
                <p className="text-neutral-300 font-normal leading-relaxed">
                  Our elements are installed using premium Stainless Steel accessories, ensuring a reliable fit that will never deteriorate. Multiple colors are integrated directly into the profile, disposing of re-painting costs forever.
                </p>
            </div>
            <div className="text-5xl md:text-7xl font-mono font-black px-4 tracking-tighter drop-shadow-2xl" style={{ color: '#FF944D' }}>
                uPVC
            </div>
        </motion.div>
      </div>
    </section>
  );
}
