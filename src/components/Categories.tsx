"use client"; // Renderizado solo en cliente

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";

export default function Categories() {
  const [isHovered, setIsHovered] = useState(false);

  const categories = [
    { name: "🆕 Recién Llegados", type: "carousel", size: "col-span-2 row-span-1" },
    { name: "👜 Accesorios", size: "col-span-1 row-span-1", color: "bg-gradient-to-br from-red-400 to-red-600" },
    { name: "👕 Hombre", size: "col-span-1 row-span-1", color: "bg-gradient-to-br from-blue-400 to-blue-600" },
    { name: "👗 Mujer", size: "col-span-1 row-span-1", color: "bg-gradient-to-br from-green-400 to-green-600" },
    { name: "🎨 Colecciones", size: "col-span-1 row-span-1", color: "bg-gradient-to-br from-purple-400 to-purple-600" },
  ];

  // Emojis en lugar de imágenes 🎉
  const recentArrivals = ["🔥", "🛍️", "⭐", "💎", "🚀"];

  return (
    <section className="w-full h-[60vh] sm:h-[70vh] grid grid-cols-3 grid-rows-2">
      {categories.map((category, index) => {
        if (category.type === "carousel") {
          return (
            <div
              key={index}
              className={`overflow-hidden ${category.size}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                pagination={{ clickable: true }}
                navigation
                autoplay={isHovered ? false : { delay: 2000 }}
                className="w-full h-full flex items-center justify-center text-6xl bg-gray-900 text-white"
              >
                {recentArrivals.map((emoji, i) => (
                  <SwiperSlide key={i} className="flex items-center justify-center text-7xl">
                    {emoji}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          );
        }

        return (
          <div
            key={index}
            className={`flex items-center justify-center ${category.color} text-white text-2xl sm:text-3xl font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${category.size}`}
          >
            {category.name}
          </div>
        );
      })}
    </section>
  );
}








// "use client"; // 👈 Esto obliga a que el componente se renderice solo en el cliente

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";

// export default function Categories() {
//   const categories = [
//     { name: "🆕 Recién Llegados", type: "carousel", size: "col-span-2 row-span-1" },
//     { name: "👜 Accesorios", size: "col-span-1 row-span-1", color: "bg-red-500" },
//     { name: "👕 Hombre", size: "col-span-1 row-span-1", color: "bg-blue-500" },
//     { name: "👗 Mujer", size: "col-span-1 row-span-1", color: "bg-green-500" },
//     { name: "🎨 Colecciones", size: "col-span-1 row-span-1", color: "bg-purple-500" },
//   ];

//   // Emojis en lugar de imágenes 🎉
//   const recentArrivals = ["🔥", "🛍️", "⭐", "💎", "🚀"];

//   return (
//     <section className="w-full h-[60vh] sm:h-[70vh] grid grid-cols-3 grid-rows-2 gap-2">
//       {categories.map((category, index) => {
//         if (category.type === "carousel") {
//           return (
//             <div key={index} className={`overflow-hidden ${category.size}`}>
//               <Swiper
//                 modules={[Pagination, Navigation, Autoplay]}
//                 pagination={{ clickable: true }}
//                 navigation
//                 autoplay={{ delay: 2000 }}
//                 className="w-full h-full flex items-center justify-center text-6xl bg-gray-800 text-white"
//               >
//                 {recentArrivals.map((emoji, i) => (
//                   <SwiperSlide key={i} className="flex items-center justify-center">
//                     {emoji}
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           );
//         }

//         return (
//           <div
//             key={index}
//             className={`flex items-center justify-center ${category.color} text-white text-2xl sm:text-3xl font-bold cursor-pointer transition-all duration-300 hover:opacity-80 ${category.size}`}
//           >
//             {category.name}
//           </div>
//         );
//       })}
//     </section>
//   );
// }









// export default function Categories() {
//   const categories = [
//     { name: "Recien Llegados", size: "col-span-2 row-span-1" }, // Grande
//     { name: "Accesorios", size: "col-span-1 row-span-1" }, // Pequeño
//     { name: "Hombre", size: "col-span-1 row-span-1" }, // Mediano
//     { name: "Mujer", size: "col-span-1 row-span-1" }, // Mediano
//     { name: "Colecciones", size: "col-span-1 row-span-1" }, // Nuevo: Rellena el espacio vacío
//   ];

//   return (
//     <section className="w-full h-[60vh] sm:h-[70vh] grid grid-cols-3 grid-rows-2 gap-2">
//       {categories.map((category, index) => {
//         const colors = ["bg-yellow-500", "bg-red-500", "bg-blue-500", "bg-green-500", "bg-purple-500"];
//         return (
//           <div
//             key={index}
//             className={`flex items-center justify-center ${colors[index]} text-white text-2xl sm:text-3xl font-bold cursor-pointer transition-all duration-300 hover:opacity-80 ${category.size}`}
//           >
//             {category.name}
//           </div>
//         );
//       })}
//     </section>
//   );
// }















// export default function Categories({ content }: { content: string }) {
//     return (
//       <section className="w-full p-4 bg-white text-center border-b">
//         <h2 className="text-2xl font-semibold mb-2">Categorías</h2>
//         <p>{content}</p>
//       </section>
//     );
//   }
  