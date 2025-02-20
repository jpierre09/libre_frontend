"use client";
import { motion } from "framer-motion";
import { Users } from "lucide-react"; // Icono representativo

export default function About() {
  return (
    <section className="w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-6 py-12">
      <div className="max-w-5xl flex flex-col lg:flex-row items-center gap-8 lg:gap-16 text-center lg:text-left">
        {/* Imagen o icono temporal */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-white rounded-full flex items-center justify-center shadow-lg"
        >
          <Users className="w-14 h-14 md:w-20 md:h-20 text-gray-600" />
        </motion.div>

        {/* Texto de presentación */}
        <div className="space-y-4 max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Sobre Nosotros
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            En <span className="font-semibold">LIBRE</span>, creamos ropa con
            estilo, comodidad y autenticidad para quienes siguen su propio
            camino. Exploramos nuevas tendencias mientras mantenemos la esencia
            de la libertad en cada prenda.
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
  