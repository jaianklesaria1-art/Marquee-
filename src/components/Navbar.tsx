import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Products', 'Advantages', 'Projects', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-[#050505]/80 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center relative overflow-hidden">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#FF7A00] group-hover:scale-105 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M 20 10 L 20 80 M 80 10 L 80 80 M 20 10 L 50 80 L 80 10 M 20 80 L 35 25 L 50 50 L 65 25 L 80 80 M 15 92 L 85 92" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-widest uppercase">Marquee</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a 
              key={link} 
              href={`/#${link === 'Contact' ? 'contact-form' : link.toLowerCase()}`}
              className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-300 hover:text-white transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#FF7A00] transition-all duration-300 group-hover:w-full"/>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            {links.map((link) => (
              <a 
                key={link} 
                href={`/#${link === 'Contact' ? 'contact-form' : link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-xl font-display uppercase tracking-widest border-b border-white/5 pb-4 hover:text-[#FF7A00] transition-colors text-white"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
