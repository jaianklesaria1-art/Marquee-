import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const allProjects = [
  { name: "Emerald Isle", image: "https://ik.imagekit.io/jai777/Marquee/emerald%20isle.png?updatedAt=1778511890751" },
  { name: "Bellezza", image: "https://ik.imagekit.io/jai777/Marquee/Breeza.png?updatedAt=1778511890613" },
  { name: "Crescent Bay", image: "https://ik.imagekit.io/jai777/Marquee/cresent.png?updatedAt=1778511890773" },
  { name: "Club Aquaria", image: "https://ik.imagekit.io/jai777/Marquee/clubb%20aquari.png?updatedAt=1778511890789" },
  { name: "Hinduja Hospital S2", image: "https://ik.imagekit.io/jai777/Marquee/Hinduja%20hospital.png?updatedAt=1778511892268" },
  { name: "Levels", image: "https://ik.imagekit.io/jai777/Marquee/levels.png?updatedAt=1778511892197" },
  { name: "Ashford Pallazzo", image: "https://ik.imagekit.io/jai777/Marquee/Ashford%20pallazzo.png?updatedAt=1778511892385" },
  { name: "JP North Clubhouse", image: "https://ik.imagekit.io/jai777/Marquee/jp%20north%20club%20house.png?updatedAt=1778511892258" },
  { name: "Bhagat Grandeur", image: "https://ik.imagekit.io/jai777/Marquee/Bhagat%20grandeur.png?updatedAt=1778511892481" },
  { name: "JK House", image: "https://ik.imagekit.io/jai777/Marquee/Bhagat%20grandeur.png?updatedAt=1778511892481" },
  { name: "Ajithnath", image: "https://ik.imagekit.io/jai777/Marquee/ajithnath.png?updatedAt=1778511892283" },
  { name: "Spring Grove", image: "https://ik.imagekit.io/jai777/Marquee/spring%20grove.png?updatedAt=1778511891889" },
  { name: "The Address : Panorama", image: "https://ik.imagekit.io/jai777/Marquee/panorama.png?updatedAt=1778511892317" },
  { name: "W54", image: "https://ik.imagekit.io/jai777/Marquee/w54.png?updatedAt=1778511892198" },
  { name: "Saifee Park", image: "https://ik.imagekit.io/jai777/Marquee/Saifee%20park.png?updatedAt=1778511891780" },
  { name: "Reserve", image: "https://ik.imagekit.io/jai777/Marquee/reserve.png?updatedAt=1778511892368" },
  { name: "Sachkhand", image: "https://ik.imagekit.io/jai777/Marquee/Sachkhand.png?updatedAt=1778511892216" },
  { name: "Silverene Terraces", image: null },
  { name: "Johnson", image: "https://ik.imagekit.io/jai777/Marquee/Johnson.png?updatedAt=1778511892206" },
  { name: "Parikh House", image: "https://ik.imagekit.io/jai777/Marquee/parikh%20house.png?updatedAt=1778511892090" },
  { name: "Indraprasth", image: "https://ik.imagekit.io/jai777/Marquee/Indraprasthaa.png?updatedAt=1778511892308" },
  { name: "Advent Pallazzo", image: "https://ik.imagekit.io/jai777/Marquee/Advent%20palaazo.png?updatedAt=1778511892157" },
  { name: "Elegante", image: "https://ik.imagekit.io/jai777/Marquee/elegante.png?updatedAt=1778511892292" },
  { name: "Vibgyor School", image: "https://ik.imagekit.io/jai777/Marquee/Vibgyor%20school.png?updatedAt=1778511892210" },
  { name: "7 Marine Drive", image: "https://ik.imagekit.io/jai777/Marquee/7%20marine%20drive.png?updatedAt=1778511892026" },
  { name: "RA Residency", image: "https://ik.imagekit.io/jai777/Marquee/RA%20Residency.png?updatedAt=1778511892289" },
  { name: "Pawangiri", image: "https://ik.imagekit.io/jai777/Marquee/Pawangiri.png?updatedAt=1778511892329" },
  { name: "Seasons Heights", image: "https://ik.imagekit.io/jai777/Marquee/seasons%20height.png?updatedAt=1778511892047" },
  { name: "NMSEZ", image: "https://ik.imagekit.io/jai777/Marquee/nmsez.png?updatedAt=1778511892118" },
  { name: "Palm Beach Residency", image: "https://ik.imagekit.io/jai777/Marquee/palm%20beach%20residency.png?updatedAt=1778511892068" },
  { name: "Ashok Meadows", image: "https://ik.imagekit.io/jai777/Marquee/Ashok%20meadows.png?updatedAt=1778511892004" },
  { name: "HCG Cancer Centre", image: "https://ik.imagekit.io/jai777/Marquee/hcg%20cancer%20center%20.png?updatedAt=1778511891872" },
  { name: "RBA Splennd Foorr", image: null },
  { name: "Anantam", image: "https://ik.imagekit.io/jai777/Marquee/anaatam.png?updatedAt=1778511891748" },
  { name: "Sky Heights", image: "https://ik.imagekit.io/jai777/Marquee/sky%20height.png?updatedAt=1778511891882" },
  { name: "Bellevue", image: "https://ik.imagekit.io/jai777/Marquee/Bellevue.png?updatedAt=1778511892297" },
  { name: "Urban Forest", image: "https://ik.imagekit.io/jai777/Marquee/Urban%20forest%20.png?updatedAt=1778511891039" },
  { name: "Aqua", image: "https://ik.imagekit.io/jai777/Marquee/Aqua.png?updatedAt=1778511892176" },
  { name: "Urbania", image: "https://ik.imagekit.io/jai777/Marquee/urbania.png?updatedAt=1778511892136" },
  { name: "Cayenne Railing", image: "https://ik.imagekit.io/jai777/Marquee/Cayenne%20Railing.png?updatedAt=1778511891883" },
  { name: "Reserve Driveway Trellis", image: "https://ik.imagekit.io/jai777/Marquee/Reserve%20driveway%20trllis%20.png?updatedAt=1778511891742" },
  { name: "Krishe Valley Pergola", image: "https://ik.imagekit.io/jai777/Marquee/krishe%20valley%20pergola.png?updatedAt=1778511892189" },
  { name: "Yewoor Villa Fence", image: "https://ik.imagekit.io/jai777/Marquee/Yewoor%20villa%20fence.png?updatedAt=1778511892248" },
  { name: "Ceejay House Railing", image: "https://ik.imagekit.io/jai777/Marquee/ceejay%20house%20railing.png?updatedAt=1778511892323" },
  { name: "W54 Railing", image: "https://ik.imagekit.io/jai777/Marquee/w54%20railing.png?updatedAt=1778511892199" },
];

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className="pt-32 pb-24 px-6 max-w-[1600px] mx-auto min-h-screen">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-sm font-mono tracking-widest text-neutral-400 hover:text-white transition-colors uppercase mb-16"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>
      
      <div className="mb-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          Selected Works
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
          Explore our expansive portfolio of architectural integration spanning residential towers, healthcare centers, educational institutions, and luxury estates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {allProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="group flex flex-col gap-4"
          >
            <div 
              className={`relative aspect-[4/3] bg-[#0a0a0a] border border-white/5 overflow-hidden w-full ${project.image ? 'cursor-pointer' : ''}`}
              onClick={() => project.image && setSelectedImage(project.image)}
            >
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <div className="w-full h-full flex gap-4 p-8 transform -skew-x-12">
                    {Array.from({length: 10}).map((_, j) => (
                      <div key={j} className="h-full w-8 bg-white" />
                    ))}
                  </div>
                </div>
              )}
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-[#FF7A00] tracking-widest uppercase mb-1">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {project.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-8 md:right-8 text-neutral-400 hover:text-white transition-colors z-[110] bg-black/50 p-2 rounded-full border border-white/10 hover:bg-black/80"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Enlarged project view" 
                className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-sm"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

