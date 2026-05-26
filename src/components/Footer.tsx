export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 pt-32 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
         
         <div className="mb-16 flex flex-col items-center justify-center gap-8">
            <svg viewBox="0 0 100 100" className="w-24 h-24 md:w-32 md:h-32 text-[#FF7A00]" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M 20 10 L 20 80 M 80 10 L 80 80 M 20 10 L 50 80 L 80 10 M 20 80 L 35 25 L 50 50 L 65 25 L 80 80 M 15 92 L 85 92" />
            </svg>
            <h2 className="text-[12vw] md:text-[8vw] font-black uppercase text-white leading-none tracking-tighter opacity-90 mx-auto">
              Marquee
            </h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left border-t border-white/10 pt-16">
            <div>
              <span className="text-xs font-mono text-[#FF7A00] uppercase tracking-widest block mb-6">Contact</span>
              <a href="mailto:projects@marqueefins.com" className="text-xl text-white hover:text-[#FF7A00] transition-colors block mb-2">projects@marqueefins.com</a>
              <p className="text-neutral-400 font-normal">+91 22 2868 2751 | 2489</p>
            </div>
            
            <div>
              <span className="text-xs font-mono text-[#FF7A00] uppercase tracking-widest block mb-6">Location</span>
              <p className="text-neutral-300 font-normal leading-relaxed">
                146-B.C.D. Govt. Ind. Est.<br/>
                Charkop, Kandivali (W)<br/>
                Mumbai - 400067 India
              </p>
            </div>

            <div>
              <span className="text-xs font-mono text-[#FF7A00] uppercase tracking-widest block mb-6">Explore</span>
              <div className="flex flex-col gap-3">
                {['About', 'Products', 'Projects'].map(l => (
                  <a key={l} href={l === 'Projects' ? '/projects' : `/#${l.toLowerCase()}`} className="text-neutral-300 hover:text-white transition-colors block w-fit font-normal">
                    {l}
                  </a>
                ))}
              </div>
            </div>
         </div>
         
         <div className="mt-32 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-500 uppercase tracking-widest">
           <p className="text-neutral-400">© {new Date().getFullYear()} Marquee uPVC Architectural Fins.</p>
           <a href="http://marqueefins.com" className="hover:text-white transition-colors">Marqueefins.com</a>
         </div>

      </div>
    </footer>
  );
}
