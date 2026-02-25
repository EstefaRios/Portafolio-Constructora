import { motion } from 'motion/react';
import heroVideo from '../img/video.mp4';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-transparent" />
        <div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/20 via-white/10 to-transparent"
          style={{ height: '64px' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1
            className="text-4xl md:text-6xl lg:text-7xl mb-6 tracking-wide uppercase text-[#0A0A0A]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Arquitectura Contemporánea.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-[#0A0A0A] max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Proyectos exclusivos de diseño residencial moderno, donde la estética y la funcionalidad se encuentran.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => onNavigate('about')}
            className="px-8 py-4 bg-[#2C5F7C] text-white hover:bg-[#3a7594] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span style={{ fontFamily: 'Montserrat, sans-serif' }}>Descubre más</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('projects')}
            className="px-8 py-4 bg-[#2C5F7C] text-white hover:bg-[#3a7594] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span style={{ fontFamily: 'Montserrat, sans-serif' }}>Nuestros proyectos</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={32} className="text-[#2C5F7C]" />
      </div>
    </section>
  );
}
