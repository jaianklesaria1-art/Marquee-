import { motion } from 'motion/react';
import { Building2, Users, Target } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function About() {
  const stats = [
    { 
      icon: Building2, 
      num: "500+", 
      label: "Turnkey Executions",
      bgImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
    },
    { 
      icon: Users, 
      num: "200+", 
      label: "Architects & Builders",
      bgImg: "https://images.unsplash.com/photo-1506501139174-099022df5260?q=80&w=1000&auto=format&fit=crop"
    },
    { 
      icon: Target, 
      num: "5 Decades", 
      label: "Group Legacy",
      bgImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="about" className="relative py-32 border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-3xl"
          >
            <h2 className="text-brand text-xs font-mono tracking-[0.3em] uppercase">The Legacy</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">An unswerving name in the façade industry.</h3>
            
            <div className="space-y-6 text-neutral-300 font-normal text-lg">
              <p>
                Since 2008, Marquee has evolved into the premier provider of uPVC Architectural Fins and Louvers. We bring rhythm to the skyline, backed by a corporate group with over five decades of expertise in Plastics, Non-Ferrous Metals, and Power.
              </p>
              <p>
                Operating our own state-of-the-art manufacturing plant in Mumbai, we oversee the entire lifecycle—from design and fabrication to final installation. Our dedicated 24/7 field team ensures flawless, timely delivery across the country.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="h-full"
              >
                <SpotlightCard 
                  spotlightColor="rgba(255, 255, 255, 0.08)"
                  className="group p-8 md:p-10 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-colors h-full flex flex-col justify-between overflow-hidden gap-12 relative" 
                >
                  <div 
                    className="absolute inset-0 z-0 bg-cover bg-center grayscale-[40%] opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                    style={{ backgroundImage: `url(${stat.bgImg})` }}
                  />
                  <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent pointer-events-none" />
                  
                  <stat.icon className="relative z-10 w-8 h-8 text-neutral-400 group-hover:text-white transition-colors" strokeWidth={1} />
                  <div className="relative z-10">
                    <h4 className="text-4xl md:text-5xl font-black text-white mb-2">{stat.num}</h4>
                    <p className="text-xs font-mono text-neutral-500 uppercase tracking-[0.2em]">{stat.label}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
