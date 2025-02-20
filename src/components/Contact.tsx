"use client";

import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section className="w-full min-h-[70vh] flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-white px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contacto</h2>

      {/* Información de contacto */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center w-full max-w-4xl">
        <div className="flex flex-col items-center">
          <Phone className="w-8 h-8 text-gray-700 mb-2" />
          <p className="text-lg font-medium text-gray-800">+57 300 409 58 28</p>
        </div>
        <div className="flex flex-col items-center">
          <Mail className="w-8 h-8 text-gray-700 mb-2" />
          <p className="text-lg font-medium text-gray-800">librevoyage@gmail.com</p>
        </div>
        <div className="flex flex-col items-center">
          <MapPin className="w-8 h-8 text-gray-700 mb-2" />
          <p className="text-lg font-medium text-gray-800">Medellín, Colombia</p>
        </div>
      </div>

      {/* Redes Sociales */}
      <div className="flex gap-6 text-gray-800 text-2xl mt-6 mb-8">
        <a href="#" className="hover:text-gray-600 transition-all duration-300">
          <Instagram />
        </a>
        <a href="#" className="hover:text-gray-600 transition-all duration-300">
          <Facebook />
        </a>
        <a href="#" className="hover:text-gray-600 transition-all duration-300">
          <Twitter />
        </a>
      </div>

      {/* Formulario de contacto */}
      <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg border border-gray-300">
        <div className="mb-4">
          <input
            type="text"
            placeholder="¿Cómo te llamas?"
            className="w-full p-3 rounded-md bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Déjanos tu Correo"
            className="w-full p-3 rounded-md bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <textarea
            rows={3}
            placeholder="Escribe tu mensaje"
            className="w-full p-3 rounded-md bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none"
          />
        </div>
        <button className="w-full bg-gray-800 text-white font-bold py-3 rounded-md hover:bg-gray-700 transition-all duration-300">
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
}




// export default function Contact({ content }: { content: string }) {
//     return (
//       <section className="w-full p-4 bg-white text-center">
//         <h2 className="text-2xl font-semibold mb-2">Contacto</h2>
//         <p>{content}</p>
//       </section>
//     );
//   }
  