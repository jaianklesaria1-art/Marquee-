import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    { name: "Emerald Isle", area: "Premium Residential", image: "https://ik.imagekit.io/jai777/Marquee/emerald%20isle.png?updatedAt=1778511890751" },
    { name: "Hinduja Hospital S2", area: "Healthcare", image: "https://ik.imagekit.io/jai777/Marquee/Hinduja%20hospital.png?updatedAt=1778511892268" },
    { name: "Club Aquaria", area: "Recreation Hub", image: "https://ik.imagekit.io/jai777/Marquee/clubb%20aquari.png?updatedAt=1778511890789" },
    { name: "Levels", area: "Luxury Estate", image: "https://ik.imagekit.io/jai777/Marquee/levels.png?updatedAt=1778511892197" },
    { name: "Ashford Pallazzo", area: "Residential Tower", image: "https://ik.imagekit.io/jai777/Marquee/Ashford%20pallazzo.png?updatedAt=1778511892385" },
    { name: "JP North Clubhouse", area: "Recreation Hub", image: "https://ik.imagekit.io/jai777/Marquee/jp%20north%20club%20house.png?updatedAt=1778511892258" },
  ];

  return (
    <section id="projects" className="relative py-32 border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-xs font-mono text-[#FF7A00] tracking-[0.3em] uppercase mb-4">Portfolio Highlights</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Signature Projects</h3>
          </div>
          <Link to="/projects" className="group flex items-center gap-3 text-sm font-mono tracking-widest text-white hover:text-[#FF7A00] transition-colors uppercase">
            View All Projects
            <span className="p-2 rounded-full border border-white/20 group-hover:border-[#FF7A00]/40 group-hover:bg-[#FF7A00]/10 transition-colors">
               <ArrowRight size={16} />
            </span>
          </Link>
        </div>

        {/* Hover-reveal grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative aspect-square bg-[#111] overflow-hidden rounded-2xl cursor-pointer border border-white/5"
            >
              <div className="absolute inset-0 bg-[#0a0a0a] transition-transform duration-700 group-hover:scale-105">
                {proj.image ? (
                  <img 
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full opacity-10 flex gap-4 p-8 transform -skew-x-12">
                      {Array.from({length: 10}).map((_, j) => (
                          <div key={j} className="h-full w-8 bg-white" />
                      ))}
                  </div>
                )}
              </div>
              
              {/* Gradient veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[#FF7A00] text-xs font-mono uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {proj.area}
                </span>
                <h4 className="text-2xl font-bold text-white">{proj.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
