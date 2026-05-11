import { motion } from 'motion/react';
import { Send, ChevronDown } from 'lucide-react';
import BorderGlow from './BorderGlow';

export default function Contact() {
  return (
    <section id="contact-form" className="py-32 relative z-10 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FF7A00]/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight">
                Let's discuss <br/>
                <span className="text-[#FF7A00]">your vision.</span>
              </h2>
              <p className="text-neutral-400 text-lg mb-12 max-w-md leading-relaxed">
                Connect with our architectural integration specialists to request technical data, samples, or discuss how Marquee Fins can elevate your next project.
              </p>
            </div>

            <div className="space-y-10">
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold block mb-2">Corporate Office</span>
                <span className="text-neutral-200 text-lg">Mumbai, India</span>
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold block mb-2">Inquiries</span>
                <a href="mailto:info@marqueefins.com" className="text-2xl text-white hover:text-[#FF7A00] transition-colors duration-300">
                  info@marqueefins.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 lg:pl-16"
          >
            <BorderGlow
              edgeSensitivity={30}
              glowColor="29 100 50"
              backgroundColor="#0a0a0a"
              borderRadius={12}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={['#FF7A00', '#FFA14A', '#CC6200']}
              className="w-full"
            >
              <div className="p-8 md:p-12 relative overflow-hidden">
                {/* Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF7A00] via-[#FF7A00]/50 to-transparent" />
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 group relative">
                    <label htmlFor="name" className="text-xs text-neutral-400 font-mono uppercase tracking-wider group-focus-within:text-[#FF7A00] transition-colors">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-[#111]/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] focus:shadow-[0_0_20px_rgba(255,122,0,0.3)] transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2 group relative">
                    <label htmlFor="email" className="text-xs text-neutral-400 font-mono uppercase tracking-wider group-focus-within:text-[#FF7A00] transition-colors">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-[#111]/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] focus:shadow-[0_0_20px_rgba(255,122,0,0.3)] transition-all duration-300"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 group relative">
                    <label htmlFor="phone" className="text-xs text-neutral-400 font-mono uppercase tracking-wider group-focus-within:text-[#FF7A00] transition-colors">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-[#111]/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] focus:shadow-[0_0_20px_rgba(255,122,0,0.3)] transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2 group relative">
                    <label htmlFor="company" className="text-xs text-neutral-400 font-mono uppercase tracking-wider group-focus-within:text-[#FF7A00] transition-colors">Company / Organization</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full bg-[#111]/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] focus:shadow-[0_0_20px_rgba(255,122,0,0.3)] transition-all duration-300"
                      placeholder="Enter company name"
                    />
                  </div>
                </div>

                <div className="space-y-2 group relative">
                  <label htmlFor="inquiry-type" className="text-xs text-neutral-400 font-mono uppercase tracking-wider group-focus-within:text-[#FF7A00] transition-colors">Nature of Inquiry</label>
                  <div className="relative">
                    <select 
                      id="inquiry-type" 
                      className="w-full bg-[#111]/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] focus:shadow-[0_0_20px_rgba(255,122,0,0.3)] transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="quotation" className="bg-[#111]">Request a Quotation</option>
                      <option value="technical" className="bg-[#111]">Technical Information</option>
                      <option value="samples" className="bg-[#111]">Request Product Samples</option>
                      <option value="partnership" className="bg-[#111]">Distributor / Partnership</option>
                      <option value="other" className="bg-[#111]">Other</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none group-focus-within:text-[#FF7A00] transition-colors" />
                  </div>
                </div>

                <div className="space-y-2 group relative">
                  <label htmlFor="message" className="text-xs text-neutral-400 font-mono uppercase tracking-wider group-focus-within:text-[#FF7A00] transition-colors">Project Details / Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-[#111]/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] focus:shadow-[0_0_20px_rgba(255,122,0,0.3)] transition-all duration-300 resize-none placeholder:text-neutral-700"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <p className="text-xs text-neutral-500 max-w-[250px] text-center sm:text-left">
                    Your information is secure and will never be shared with third parties.
                  </p>
                  <button 
                    type="submit"
                    className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-[#FF7A00] text-black font-bold uppercase tracking-wide rounded-md px-8 py-4 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300"
                  >
                    <span>Submit</span>
                    <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
            </BorderGlow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
