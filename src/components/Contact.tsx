import { motion, AnimatePresence } from 'motion/react';
import { Send, Check, ChevronDown } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'Request a Quotation',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Clear form after success
  useEffect(() => {
    if (isSuccess) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: 'Request a Quotation',
        message: ''
      });
      const timer = setTimeout(() => setIsSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');
    
    const target = e.currentTarget;
    const data = new FormData(target);
    
    // Using FormData prevents CORS preflight issues that often cause "Failed to fetch"
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(data))
      });
      
      if (response.ok) {
        setIsSuccess(true);
      } else {
        const result = await response.json();
        if (Object.hasOwn(result, 'errors')) {
          setErrorMsg(result["errors"].map((err: any) => err["message"]).join(", "));
        } else {
          setErrorMsg("Oops! There was a problem submitting your form.");
        }
      }
    } catch (error: any) {
      setErrorMsg("Network error: Failed to fetch. This usually happens if an adblocker (like uBlock) or privacy extension (like Brave Shields) is blocking Formspree.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <a href="mailto:projects@marqueearch.com" className="text-2xl text-white hover:text-[#FF7A00] transition-colors duration-300">
                  projects@marqueearch.com
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
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <input type="hidden" name="_subject" value={`Marquee Fins Inquiry: ${formData.inquiryType} from ${formData.name}`} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 group relative">
                    <label htmlFor="name" className="text-xs text-neutral-400 font-mono uppercase tracking-wider group-focus-within:text-[#FF7A00] transition-colors">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#111]/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] focus:shadow-[0_0_20px_rgba(255,122,0,0.3)] transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2 group relative">
                    <label htmlFor="email" className="text-xs text-neutral-400 font-mono uppercase tracking-wider group-focus-within:text-[#FF7A00] transition-colors">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#111]/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] focus:shadow-[0_0_20px_rgba(255,122,0,0.3)] transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2 group relative">
                    <label htmlFor="company" className="text-xs text-neutral-400 font-mono uppercase tracking-wider group-focus-within:text-[#FF7A00] transition-colors">Company / Organization</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
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
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-[#111]/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] focus:shadow-[0_0_20px_rgba(255,122,0,0.3)] transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="Request a Quotation" className="bg-[#111]">Request a Quotation</option>
                      <option value="Technical Information" className="bg-[#111]">Technical Information</option>
                      <option value="Request Product Samples" className="bg-[#111]">Request Product Samples</option>
                      <option value="Distributor / Partnership" className="bg-[#111]">Distributor / Partnership</option>
                      <option value="Other" className="bg-[#111]">Other</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none group-focus-within:text-[#FF7A00] transition-colors" />
                  </div>
                </div>

                <div className="space-y-2 group relative">
                  <label htmlFor="message" className="text-xs text-neutral-400 font-mono uppercase tracking-wider group-focus-within:text-[#FF7A00] transition-colors">Project Details / Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#111]/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] focus:shadow-[0_0_20px_rgba(255,122,0,0.3)] transition-all duration-300 resize-none placeholder:text-neutral-700"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-xs text-neutral-500 max-w-[250px] text-center sm:text-left">
                    {isSuccess 
                      ? <span className="text-green-500">Message sent successfully! We'll be in touch soon.</span>
                      : <>
                          {errorMsg && <div className="text-red-500 pb-2 font-bold">{errorMsg}</div>}
                          <span>Your information is secure and will never be shared with third parties.</span>
                        </>
                    }
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`group w-full sm:w-auto flex items-center justify-center font-bold uppercase tracking-wide rounded-md px-8 py-4 transition-all duration-300 relative overflow-hidden ${
                      isSuccess 
                        ? 'bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]' 
                        : 'bg-[#FF7A00] text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed'
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.span 
                          key="submitting" 
                          initial={{ opacity: 0, y: 10 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2"
                        >
                          Sending...
                        </motion.span>
                      ) : isSuccess ? (
                        <motion.span 
                          key="success" 
                          initial={{ opacity: 0, scale: 0.8 }} 
                          animate={{ opacity: 1, scale: 1 }} 
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex items-center gap-2"
                        >
                          <span>Submitted</span>
                          <Check className="w-5 h-5 font-bold" />
                        </motion.span>
                      ) : (
                        <motion.span 
                          key="default" 
                          initial={{ opacity: 0, y: 10 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-3"
                        >
                          <span>Submit</span>
                          <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </motion.span>
                      )}
                    </AnimatePresence>
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
