import { useState, useEffect } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { cn } from "../lib/utils";
import { motion } from "motion/react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "ADT", href: "#adt" },
    { name: "Cobertura", href: "#cobertura" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "sticky top-2 sm:top-4 z-50 transition-all duration-300 w-full rounded-2xl md:rounded-[2rem] flex flex-col",
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-sm p-4"
          : "bg-slate-900/50 border border-slate-800 p-4"
      )}
    >
      <div className="w-full">
        <div className="flex items-center justify-between">
          <motion.a
            href="#inicio"
            className="flex items-center gap-3 text-xl md:text-2xl font-bold tracking-tight text-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
              transition={{ duration: 0.4 }}
            >
              <img src="/logo.png" alt="Security 360 Logo" className="w-full h-full object-contain" />
            </motion.div>
            <span>
              SECURITY <span className="text-blue-500">360</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium uppercase tracking-wider">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-slate-200 hover:text-blue-400 transition-colors inline-block"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          <div className="hidden lg:flex gap-3">
             <motion.a
              href="#servicios"
              className="p-2 border border-slate-800 bg-slate-900 rounded-full cursor-pointer text-white flex items-center justify-center"
              whileHover={{ scale: 1.1, backgroundColor: "#2563eb", borderColor: "#2563eb" }}
              whileTap={{ scale: 0.9 }}
            >
               <span className="sr-only">Servicios</span>
               <Menu className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#contacto"
              className="p-2 border border-slate-800 bg-slate-900 rounded-full cursor-pointer text-white flex items-center justify-center"
              whileHover={{ scale: 1.1, backgroundColor: "#2563eb", borderColor: "#2563eb" }}
              whileTap={{ scale: 0.9 }}
            >
               <span className="sr-only">Contacto</span>
               <ShieldCheck className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-[calc(100%+8px)] left-0 w-full bg-slate-900 rounded-2xl shadow-xl border border-slate-800 p-2"
        >
          <div className="flex flex-col p-2 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 font-medium hover:text-blue-400 w-full px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors uppercase text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-blue-600 w-full text-center hover:bg-blue-500 text-white px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-wider mt-2"
            >
              Cotizar Ahora
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
