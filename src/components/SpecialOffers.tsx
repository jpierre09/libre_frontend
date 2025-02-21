"use client";

import { ShoppingBag, Shirt, Briefcase } from "lucide-react";

export default function SpecialOffers() {
  const offers = [
    { name: "Camiseta Oversized", discount: "-30%", price: "$99,900", icon: <Shirt className="w-12 h-12 text-[#4A3F35]" /> },
    { name: "Pantalón Cargo", discount: "-40%", price: "$159,900", icon: <Briefcase className="w-12 h-12 text-[#4A3F35]" /> },
    { name: "Bolso Minimalista", discount: "-20%", price: "$189,900", icon: <ShoppingBag className="w-12 h-12 text-[#4A3F35]" /> },
  ];

  return (
    <section className="w-full min-h-[65vh] flex flex-col justify-center items-center bg-[#F5EFE6] px-6 py-12">
      {/* Título */}
      <h2 className="text-3xl sm:text-4xl font-semibold uppercase tracking-wide text-[#4A3F35] mb-8">
        Ofertas Especiales
      </h2>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="p-6 text-center rounded-lg transition-transform transform hover:scale-105 bg-white shadow-md flex flex-col items-center"
          >
            <div className="mb-4">{offer.icon}</div>
            <h3 className="text-lg font-medium text-[#4A3F35]">{offer.name}</h3>
            <p className="text-[#6A4E42] mt-1 text-lg">{offer.price} COP</p>
            <span className="text-sm text-[#8B6F60]">{offer.discount}</span>
          </div>
        ))}
      </div>
    </section>
  );
}



// "use client";

// import { useState, useEffect } from "react";
// import { ShoppingBag, Shirt, Briefcase } from "lucide-react"; // Íconos corregidos

// export default function SpecialOffers() {
//   const [timeLeft, setTimeLeft] = useState({
//     hours: 12,
//     minutes: 30,
//     seconds: 15,
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         let { hours, minutes, seconds } = prevTime;
//         if (seconds > 0) {
//           seconds--;
//         } else if (minutes > 0) {
//           minutes--;
//           seconds = 59;
//         } else if (hours > 0) {
//           hours--;
//           minutes = 59;
//           seconds = 59;
//         }
//         return { hours, minutes, seconds };
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   // Ofertas especiales con íconos corregidos
//   const offers = [
//     { name: "Camiseta Oversized", discount: "-30%", price: "$99,900", icon: <Shirt className="w-12 h-12 text-gray-800" /> },
//     { name: "Pantalón Cargo", discount: "-40%", price: "$159,900", icon: <Briefcase className="w-12 h-12 text-gray-800" /> },
//     { name: "Bolso Minimalista", discount: "-20%", price: "$189,900", icon: <ShoppingBag className="w-12 h-12 text-gray-800" /> },
//   ];

//   return (
//     <section className="w-full min-h-[70vh] flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-white px-6 py-12">
//       {/* Título */}
//       <div className="text-center mb-8">
//         <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-wide text-gray-900">
//           Oferta Especial Pa' Vos
//         </h2>
//       </div>

//       {/* Grid de productos */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
//         {offers.map((offer, index) => (
//           <div
//             key={index}
//             className="border border-gray-300 p-6 text-center rounded-lg transition-transform transform hover:scale-105 hover:border-gray-600 bg-white shadow-md flex flex-col items-center"
//           >
//             <div className="mb-4">{offer.icon}</div>
//             <h3 className="text-lg font-medium text-gray-800">{offer.name}</h3>
//             <p className="text-gray-600 mt-1 text-lg">{offer.price} COP</p>
//             <span className="text-sm text-gray-500">{offer.discount}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
