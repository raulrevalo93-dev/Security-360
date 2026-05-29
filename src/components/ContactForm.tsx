import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contacto" className="w-full bg-slate-900 border border-slate-800 rounded-[2rem] p-8 lg:p-12 mb-8">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              Hablemos sobre tu seguridad.
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-md">
              Completá el formulario para solicitar tu cotización o hacernos cualquier consulta técnica. Nuestro equipo de asesores se pondrá en contacto pronto.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Teléfono / WhatsApp</h4>
                  <p className="text-slate-400 mt-1">Lunes a Sábado de 09:00 a 18:00 hs.</p>
                  <a href="tel:+5491112345678" className="text-blue-400 font-bold hover:text-blue-300 transition-colors mt-1 block">
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Correo Electrónico</h4>
                  <p className="text-slate-400 mt-1">Envianos un detalle de tu consulta.</p>
                  <a href="mailto:securitycam360@gmail.com" className="text-blue-400 font-bold hover:text-blue-300 transition-colors mt-1 block">
                    securitycam360@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Ubicación</h4>
                  <p className="text-slate-400 mt-1">Instalaciones a domicilio. Operando localmente.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-950 p-8 rounded-[2rem] border border-slate-800 shadow-xl shadow-black/20">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]">
                <div className="h-16 w-16 bg-blue-500/20 text-blue-500 rounded-[2rem] flex items-center justify-center mb-4">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-extrabold text-white">¡Mensaje Enviado!</h3>
                <p className="text-slate-400 max-w-sm font-medium">
                  Gracias por contactarte con Security 360. Te responderemos a la brevedad.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 bg-slate-800 text-white font-bold px-6 py-3 rounded-xl hover:bg-slate-700 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full h-12 px-5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600 font-medium text-sm"
                    placeholder="Nombre Completo"
                  />
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full h-12 px-5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600 font-medium text-sm"
                    placeholder="Teléfono (Ej: +54 9 11...)"
                  />
                </div>

                <input 
                  type="email" 
                  id="email"
                  className="w-full h-12 px-5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600 font-medium text-sm"
                  placeholder="Correo electrónico"
                />

                <select 
                  id="service" 
                  className="w-full h-12 px-5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none font-medium text-sm text-slate-300"
                >
                  <option value="">Servicio deseado...</option>
                  <option value="camaras">Cámaras de Seguridad</option>
                  <option value="adt">Alarma Monitoreada ADT</option>
                  <option value="starlink">Antena Starlink</option>
                  <option value="soporte">Soporte Técnico</option>
                </select>

                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full p-5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder:text-slate-600 font-medium text-sm"
                  placeholder="Detalles adicionales..."
                ></textarea>

                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-14 bg-slate-100 hover:bg-white disabled:bg-slate-300 text-slate-950 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 mt-2"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin"></span>
                  ) : (
                    <>Enviar Solicitud <Send className="w-4 h-4 ml-1" /></>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
