import { ArrowRight, ShieldCheck, Phone } from "lucide-react";
import { motion } from "motion/react";

export function ADTSection() {
  return (
    <section id="adt" className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden rounded-[2rem] border border-blue-500/50 p-8 lg:p-12 flex flex-col justify-center">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-blue-700/50 -skew-x-12 translate-x-20 transform origin-top-right"></div>
      
      <div className="relative z-10 w-full h-full flex flex-col items-start justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-400/20 text-blue-100 text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="h-4 w-4" />
            Agentes Autorizados
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Protección con alarmas ADT.
          </h2>
          <p className="text-blue-100 text-base md:text-lg mb-8 leading-relaxed">
            Obtén la máxima seguridad con sistemas de alarma monitoreada las 24 horas. Gestionamos tu alta e instalación de manera rápida y directa.
          </p>
          
          <ul className="space-y-3 mb-10 text-sm md:text-base font-medium">
            {['Instalación bonificada en planes seleccionados', 'Servicio técnico especializado', 'Gestión sin trámites engorrosos'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-blue-50">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500/50 flex items-center justify-center">
                  <ShieldCheck className="h-3 w-3" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <motion.a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-slate-100 h-12 px-6 rounded-xl font-bold shadow-lg shadow-blue-900/40 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contacto');
              if (contactSection) {
                const select = contactSection.querySelector('select');
                if (select) select.value = 'adt';
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Cotización Rápida
          </motion.a>
          <motion.a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-blue-900/30 hover:bg-blue-900/50 text-white border border-blue-400/30 h-12 px-6 rounded-xl font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="h-4 w-4" />
            Llamar Ahora
          </motion.a>
        </div>
      </div>
    </section>
  );
}
