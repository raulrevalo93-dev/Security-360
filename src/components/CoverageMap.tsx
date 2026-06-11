import { MapPin } from "lucide-react";
import { motion } from "motion/react";

export function CoverageMap() {
  return (
    <section id="cobertura" className="w-full h-full bg-slate-900 border border-slate-800 rounded-[2rem] p-6 flex flex-col justify-between group hover:border-blue-500/50 transition-all min-h-[400px]">
      <div className="mb-6 z-10 relative pointer-events-none">
        <h4 className="text-xl font-bold text-white mb-2">Cobertura Local</h4>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
          <span className="text-xs font-bold uppercase tracking-wider text-green-400">Operativo Ahora</span>
        </div>
        <p className="text-sm text-slate-400 font-medium">Servicio en toda la provincia de Salta y alrededores. Instalación rápida garantizada.</p>
      </div>

      <div className="w-full flex-grow rounded-2xl overflow-hidden relative border border-slate-800 bg-slate-950 isolate">
        <iframe
          src="https://maps.google.com/maps?q=Salta,Argentina&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de Cobertura"
          className="absolute inset-0 grayscale invert contrast-125 opacity-40 mix-blend-screen pointer-events-none"
        ></iframe>
        
        {/* Subtle grid overlay to simulate the radar aesthetic */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20 pointer-events-none z-0"></div>

        {/* Scattered Active Service Locations (Blinking Dots) */}
        <div className="absolute top-[25%] left-[35%] w-2 h-2 bg-green-400 rounded-full animate-[pulse_1.5s_ease-in-out_infinite] shadow-[0_0_12px_4px_rgba(34,197,94,0.6)] z-10 pointer-events-none"></div>
        <div className="absolute top-[45%] left-[65%] w-2.5 h-2.5 bg-green-500 rounded-full animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_12px_4px_rgba(34,197,94,0.8)] z-10 pointer-events-none"></div>
        <div className="absolute top-[65%] left-[25%] w-1.5 h-1.5 bg-green-400 rounded-full animate-[pulse_1.2s_ease-in-out_infinite] shadow-[0_0_10px_3px_rgba(34,197,94,0.5)] z-10 pointer-events-none"></div>
        <div className="absolute top-[35%] left-[75%] w-2 h-2 bg-green-500 rounded-full animate-[pulse_2.5s_ease-in-out_infinite] shadow-[0_0_12px_4px_rgba(34,197,94,0.7)] z-10 pointer-events-none"></div>
        <div className="absolute top-[75%] left-[55%] w-[6px] h-[6px] bg-green-400 rounded-full animate-[pulse_1.8s_ease-in-out_infinite] shadow-[0_0_10px_3px_rgba(34,197,94,0.6)] z-10 pointer-events-none"></div>
        <div className="absolute top-[50%] left-[45%] w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_15px_5px_rgba(34,197,94,0.9)] z-10 pointer-events-none"></div>
        <div className="absolute top-[18%] left-[58%] w-1.5 h-1.5 bg-green-400 rounded-full animate-[pulse_2.2s_ease-in-out_infinite] shadow-[0_0_10px_3px_rgba(34,197,94,0.6)] z-10 pointer-events-none"></div>
        <div className="absolute top-[82%] left-[38%] w-2 h-2 bg-green-500 rounded-full animate-[pulse_1.6s_ease-in-out_infinite] shadow-[0_0_12px_4px_rgba(34,197,94,0.7)] z-10 pointer-events-none"></div>

        <motion.button
          onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-colors shadow-lg z-20 pointer-events-auto"
        >
          Consultar Zona
        </motion.button>
      </div>
    </section>
  );
}
