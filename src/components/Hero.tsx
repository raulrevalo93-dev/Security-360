import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import regeneratedImage from "../assets/images/regenerated_image_1780055392834.jpg";

function InteractiveCamera() {
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] flex items-center justify-center mx-auto z-20">
      <div className="w-full h-full relative rounded-full">
        <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-slate-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-slate-900">
          <img 
            src={regeneratedImage} 
            alt="Cámara de Seguridad" 
            className="w-full h-full object-cover transform scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-transparent mix-blend-overlay"></div>
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none"></div>
        </div>
      </div>
      
      {/* Soft Glow Behind Image */}
      <div className="absolute inset-[-20%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2)_0%,transparent_60%)] -z-10 mt-10 pointer-events-none"></div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative w-full h-full min-h-[400px] py-8 lg:py-12 flex flex-col justify-center overflow-hidden">
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 h-full">
        <div className="flex-1">
          <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider rounded-full mb-6 inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" />
            Socio Oficial ADT & Starlink
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-2xl">
            Protección total para tu <span className="text-blue-500">tranquilidad</span>.
          </h1>

          <p className="text-lg text-blue-100/70 mb-8 max-w-xl leading-relaxed">
            Especialistas en instalación de cámaras de seguridad, sistemas de alarma monitoreada ADT y conectividad global con Starlink.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <motion.a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white h-12 px-8 rounded-xl font-bold shadow-lg shadow-blue-900/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Cotización <ArrowRight className="h-4 w-4" />
            </motion.a>
            <span className="text-blue-400 font-mono text-sm">Instalación en 24hs</span>
          </div>
        </div>
        
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <InteractiveCamera />
        </div>
      </div>
    </section>
  );
}
