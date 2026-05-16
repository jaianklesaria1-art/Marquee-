import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const { scrollY } = useScroll();
  const videoOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const buildingOpacity = useTransform(scrollY, [0, 600], [0, 0.25]);
  const mainOverlayOpacity = useTransform(scrollY, [0, 600], [0.2, 0.6]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans relative">
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
           {/* Static Building Background for deeper sections */}
          <motion.div 
            className="absolute inset-0 w-full h-full bg-cover bg-center grayscale z-0" 
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")',
              opacity: buildingOpacity 
            }} 
          />
          
          <motion.div 
            className="absolute inset-0 z-[1]"
            style={{ opacity: videoOpacity }}
          >
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-80"
            >
              <source src="https://ik.imagekit.io/jai777/Recording%202026-05-14%20081214.mp4" type="video/mp4" />
            </video>
            {/* Theme matched gradient overlay for the video */}
            <div className="absolute inset-0 bg-[#FF7A00]/5 mix-blend-color" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/20 to-[#050505]" />
          </motion.div>
          
          <motion.div 
            className="absolute inset-0 z-[2] bg-[#050505]" 
            style={{ opacity: mainOverlayOpacity }}
          />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
