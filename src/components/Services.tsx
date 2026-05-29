import { Cctv, ShieldAlert, Satellite, Wrench } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Cctv,
    title: "Cámaras de Seguridad",
    description:
      "Instalación de sistemas de videovigilancia de alta definición (CCTV y cámaras IP). Visualiza tu hogar o negocio en tiempo real desde tu smartphone en cualquier parte del mundo.",
    features: ["Resolución 1080p y 4K", "Visión Nocturna", "Acceso Móvil", "Audio Bidireccional"],
  },
  {
    icon: ShieldAlert,
    title: "Alarmas Monitoreadas ADT",
    description:
      "Agentes oficiales. Venta e instalación de sistemas de alarma ADT, la empresa de seguridad electrónica líder mundial. Monitoreo constante las 24 horas, los 365 días del año.",
    features: ["Monitoreo 24/7", "Aviso ante Cortes de Luz", "Botón de Pánico", "Respuesta Inmediata"],
  },
  {
    icon: Satellite,
    title: "Antenas Starlink",
    description:
      "Buscamos la ubicación óptima e instalamos tu antena Starlink de manera profesional y prolija para asegurar la mejor conectividad a internet satelital vayas donde vayas.",
    features: ["Montaje en Techo", "Cableado Estético", "Configuración Inicial", "Test de Velocidad"],
  },
  {
    icon: Wrench,
    title: "Soporte Técnico Especializado",
    description:
      "Servicio post-venta y soporte técnico para todos los sistemas instalados. Mantenimiento preventivo, reparaciones, y actualizaciones de sistemas de seguridad existentes.",
    features: ["Asistencia Rápida", "Mantenimiento", "Actualizaciones", "Garantía de Instalación"],
  },
];

export function Services() {
  return (
    <section id="servicios" className="w-full bg-slate-900/50 rounded-[2rem] p-8 lg:p-12 border border-slate-800/50">
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white m-0">
            Soluciones Integrales
          </h2>
          <nav className="flex gap-4 text-xs font-bold uppercase tracking-wider text-slate-400">
             <a href="#adt" className="hover:text-blue-400 transition-colors">Monitoreo</a>
             <a href="#contacto" className="hover:text-blue-400 transition-colors">Soporte Técnico</a>
          </nav>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={service.title}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col gap-4 group transition-shadow shadow-none hover:shadow-xl hover:shadow-blue-900/20 hover:border-blue-500/50 cursor-pointer"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white leading-tight">{service.title}</h3>
              <p className="text-sm text-slate-400 leading-snug flex-grow">{service.description}</p>
              
              <ul className="text-xs space-y-1.5 text-slate-500 font-medium mt-auto border-t border-slate-800 pt-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className="mr-2 text-blue-500">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
