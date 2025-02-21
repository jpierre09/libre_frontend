"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";

export default function Categories() {
  const [isHovered, setIsHovered] = useState(false);

  const categories = [
    { name: "🆕 Recién Llegados", type: "carousel", size: "h-[50vh] sm:col-span-3" },
    { name: "👜 Cosas", size: "h-[40vh] sm:col-span-1" },
    { name: "👕 Hombre", size: "h-[40vh] sm:col-span-1" },
    { name: "👗 Mujer", size: "h-[40vh] sm:col-span-1" },
    { name: "🎨 Colecciones", size: "h-[40vh] sm:col-span-3" },
  ];

  const recentArrivals = ["🔥", "🛍️", "⭐", "💎", "🚀"];

  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 px-4 py-8 bg-white">
      {categories.map((category, index) => {
        if (category.type === "carousel") {
          return (
            <div
              key={index}
              className={`overflow-hidden rounded-lg shadow-md ${category.size}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                pagination={{ clickable: true }}
                navigation
                autoplay={isHovered ? false : { delay: 3000 }}
                className="w-full h-full flex items-center justify-center text-5xl sm:text-6xl bg-white text-black rounded-lg"
              >
                {recentArrivals.map((emoji, i) => (
                  <SwiperSlide key={i} className="flex items-center justify-center text-6xl sm:text-7xl">
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
            className={`flex items-center justify-center bg-white text-black text-2xl sm:text-4xl font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md rounded-lg ${category.size} w-full`}
          >
            {category.name}
          </div>
        );
      })}
    </section>
  );
}





// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import { useState } from "react";

// export default function Categories() {
//   const [isHovered, setIsHovered] = useState(false);

//   const categories = [
//     { name: "🆕 Recién Llegados", type: "carousel", size: "col-span-2 row-span-1 sm:col-span-3" },
//     { name: "👜 Cosas", size: "col-span-1 row-span-1 sm:col-span-1", color: "bg-gradient-to-br from-[#D98960] to-[#C46B47]" },
//     { name: "👕 Hombre", size: "col-span-1 row-span-1 sm:col-span-1", color: "bg-gradient-to-br from-[#A57D64] to-[#7B5E4C]" },
//     { name: "👗 Mujer", size: "col-span-1 row-span-1 sm:col-span-1", color: "bg-gradient-to-br from-[#E5C4A1] to-[#D3A984]" },
//     { name: "🎨 Colecciones", size: "col-span-1 row-span-1 sm:col-span-1", color: "bg-gradient-to-br from-[#8B6F60] to-[#6A4E42]" },
//   ];

//   const recentArrivals = ["🔥", "🛍️", "⭐", "💎", "🚀"];

//   return (
//     <section className="w-full h-[50vh] sm:h-[95vh] grid grid-cols-1 sm:grid-cols-3 grid-rows-auto gap-2 bg-gradient-to-b from-gray-100 to-white p-2">
//       {categories.map((category, index) => {
//         if (category.type === "carousel") {
//           return (
//             <div
//               key={index}
//               className={`overflow-hidden rounded-xl shadow-md ${category.size} h-[40vh] sm:h-full`}
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               <Swiper
//                 modules={[Pagination, Navigation, Autoplay]}
//                 pagination={{ clickable: true }}
//                 navigation
//                 autoplay={isHovered ? false : { delay: 2500 }}
//                 className="w-full h-full flex items-center justify-center text-5xl sm:text-6xl bg-gradient-to-b from-gray-100 to-white text-black rounded-xl"
//               >
//                 {recentArrivals.map((emoji, i) => (
//                   <SwiperSlide key={i} className="flex items-center justify-center text-6xl sm:text-7xl">
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
//             className={`flex items-center justify-center ${category.color} text-gray-900 text-xl sm:text-3xl font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl ${category.size} h-[20vh] sm:h-full`}
//           >
//             {category.name}
//           </div>
//         );
//       })}
//     </section>
//   );
// }





