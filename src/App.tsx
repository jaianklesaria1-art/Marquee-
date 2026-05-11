import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const { scrollY } = useScroll();
  const backgroundOverlayOpacity = useTransform(scrollY, [0, 800], [0.5, 0.8]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans relative">
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center grayscale-[50%] opacity-50 z-0" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")' }} 
          />
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center grayscale-[50%] opacity-60 z-10"
          >
            <source src="https://videos.pexels.com/video-files/3201594/3201594-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          <motion.div 
            className="absolute inset-0 z-20 bg-[#050505]" 
            style={{ opacity: backgroundOverlayOpacity }}
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
