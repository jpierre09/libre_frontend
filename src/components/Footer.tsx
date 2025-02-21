"use client";
import { Instagram, Music } from "lucide-react"; // 🎵 Se usa Music en vez de Spotify
import { motion } from "framer-motion"; // Animación suave

export default function Footer({ content }: { content: string }) {
  return (
    <footer className="w-full bg-[#5F4B3B] text-neutral-200 py-10 px-6 text-center">
      {/* Grid responsive */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 items-center text-center sm:text-left">
        
        {/* Sección Izquierda - Sobre la Marca */}
        <div>
          <h3 className="text-lg font-semibold text-white">Sobre la marca</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-neutral-300 hover:text-white transition">Cultura</a></li>
            <li><a href="#" className="text-neutral-300 hover:text-white transition">Trabaja aquí</a></li>
            <li><a href="#" className="text-neutral-300 hover:text-white transition">La vida en Libre</a></li>
          </ul>
        </div>

        {/* Sección Central - Logo con Animación y Redes Sociales */}
        <div className="flex flex-col items-center space-y-4">
          {/* Logo animado */}
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white tracking-wide uppercase cursor-pointer"
            whileHover={{ scale: 1.5, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Libre<span className="text-lg">®</span>
          </motion.h2>

          {/* Iconos de redes sociales */}
          <div className="flex justify-center space-x-6 mt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-7 h-7 text-neutral-300 hover:text-white transition" />
            </a>
            <a href="https://open.spotify.com/playlist/2hrbmrNOlC7q6eT222TRUl" target="_blank" rel="noopener noreferrer">
              <Music className="w-7 h-7 text-neutral-300 hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Sección Derecha - Derechos de Autor */}
        <div className="sm:text-right">
          <p className="text-sm text-neutral-300">{content}</p>
        </div>
      </div>
    </footer>
  );
}





// export default function Footer({ content }: { content: string }) {
//     return (
//       <footer className="w-full bg-gray-800 text-white p-4 text-center">
//         <p>{content}</p>
//       </footer>
//     );
//   }
  