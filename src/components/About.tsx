"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users } from "lucide-react"; // Icono representativo

export default function About() {
  return (
    <section className="w-full h-[60vh] sm:h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="max-w-4xl flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-center sm:text-left">
        {/* Imagen o icono temporal */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full flex items-center justify-center shadow-lg"
        >
          <Users className="w-16 h-16 text-gray-600" />
        </motion.div>

        {/* Texto de presentación */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Sobre Nosotros
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl">
            En <span className="font-semibold">LIBRE</span>, creamos ropa con 
            estilo, comodidad y autenticidad para quienes siguen su propio camino.
          </p>
        </div>
      </div>
    </section>
  );
}




// export default function About({ content }: { content: string }) {
//     return (
//       <section className="w-full p-4 bg-gray-50 text-center">
//         <h2 className="text-2xl font-semibold mb-2">Sobre Nosotros</h2>
//         <p>{content}</p>
//       </section>
//     );
//   }
  