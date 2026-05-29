import { ShieldCheck, Facebook, Instagram } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="w-full flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest px-4 py-6 gap-4 text-center sm:text-left">
      <p>© {new Date().getFullYear()} SECURITY 360 - SEGURIDAD INTEGRAL Y TECNOLOGÍA</p>
      <div className="flex items-center gap-4">
        <p>DISTRIBUIDOR AUTORIZADO ADT & STARLINK</p>
        <div className="flex gap-4">
           <motion.a 
            href="https://www.facebook.com/profile.php?id=61565377350339&rdid=jV7YC7OXnSadcNuC&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18uw26tXcc%2F#"
            target="_blank" 
            rel="noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label="Facebook"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Facebook className="h-4 w-4" />
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/security_360?igsh=dTNlMDAzdm5laWR2"
            target="_blank" 
            rel="noreferrer"
            className="hover:text-pink-500 transition-colors"
            aria-label="Instagram"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Instagram className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
