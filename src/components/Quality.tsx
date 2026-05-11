import { motion } from 'motion/react';
import { AlertTriangle } from 'lucide-react';

export default function Quality() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Huge subtle text in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.04]">
        <h2 className="text-[20vw] font-black uppercase leading-none text-white whitespace-nowrap">Excellence</h2>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center space-y-8"
        >
          <h2 className="text-brand text-xs font-mono uppercase tracking-[0.3em]">Quality Assured</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight font-display">
            "Meticulously scrutinized to maintain high quality standards without compromises."
          </h3>
          <p className="text-neutral-300 font-normal text-lg">
            Our past projects have been markedly appreciated by our clients for their unmatched quality and competitive pricing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 border border-brand bg-brand/10 p-8 md:p-12 rounded-3xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="p-6 bg-brand rounded-full text-white shrink-0 shadow-[0_0_40px_rgba(207,113,52,0.4)]">
              <AlertTriangle size={48} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-3">Counterfeit Warning</h4>
              <div className="space-y-4 text-neutral-200 font-normal leading-relaxed">
                <p>
                  Marquee is the <b className="text-white font-semibold">original developer</b> of uPVC Fins and Louvers in the façade industry.
                </p>
                <p>
                  Competitors have attempted to replicate the Marquee Design without any underlying Research & Development. We highly caution against the use of imitation products, as they lack verified performance data or durability guarantees.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
