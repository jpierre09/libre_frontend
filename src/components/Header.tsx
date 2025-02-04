"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  content: {
    navigationLeft: string[];
    logo: string;
    navigationRight: string[];
  };
}

export default function Header({ content }: HeaderProps) {
  const { navigationLeft, logo, navigationRight } = content;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-300 font-montserrat
        ${isScrolled ? "bg-gray-900 bg-opacity-80" : "bg-gray-900 bg-opacity-30 backdrop-blur-lg"}
      `}
    >
      <div className="w-full px-4 sm:px-8 flex items-center justify-between py-2 sm:py-3 relative">
        {/* Botón de menú en móviles */}
        <button className="block sm:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="text-white w-5 h-5" /> : <Menu className="text-white w-5 h-5" />}
        </button>

        {/* Navegación izquierda */}
        <div className="hidden sm:flex gap-6">
          <Navigation items={navigationLeft} alignment="start" className="text-sm sm:text-base font-medium" />
        </div>

        {/* Logo centrado */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-bold tracking-wide hover:scale-110 transition-all duration-300 cursor-pointer">
          <a href="/" className="uppercase">{logo}</a>
        </h1>

        {/* Navegación derecha */}
        <div className="hidden sm:flex gap-6">
          <Navigation items={navigationRight} alignment="end" className="text-sm sm:text-base font-medium" />
        </div>
      </div>

      {/* Menú desplegable en móviles */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center bg-gray-900 py-3 gap-4">
          {[...navigationLeft, ...navigationRight].map((item, index) => (
            <a
              key={index}
              href={`/${item.toLowerCase()}`}
              className="text-sm font-medium hover:text-gray-300 transition-all duration-300 py-2"
              aria-label={`Ir a la sección de ${item}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}




// "use client";

// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react"; // Íconos para el menú

// interface HeaderProps {
//   content: {
//     navigationLeft: string[];
//     logo: string;
//     navigationRight: string[];
//   };
// }

// export default function Header({ content }: HeaderProps) {
//   const { navigationLeft, logo, navigationRight } = content;
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`w-full fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-300 
//         ${isScrolled ? "bg-gray-900 bg-opacity-100" : "bg-gray-900 bg-opacity-80 backdrop-blur-md"}`}
//     >
//       <div className="w-full grid grid-cols-3 items-center px-4 sm:px-8 py-4">
//         {/* Botón de menú en móviles */}
//         <button
//           className="block sm:hidden"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
//         </button>

//         {/* Navegación izquierda */}
//         <nav className="hidden sm:flex gap-4 sm:gap-6 justify-self-start">
//           {navigationLeft.map((item, index) => (
//             <a
//               key={index}
//               href={`/${item.toLowerCase()}`}
//               className="text-lg font-medium hover:text-gray-300 transition-all duration-300 whitespace-nowrap"
//               aria-label={`Ir a la sección de ${item}`}
//             >
//               {item}
//             </a>
//           ))}
//         </nav>

//         {/* Logo */}
//         <h1 className="text-3xl font-bold tracking-wider hover:scale-110 transition-all duration-300 text-center cursor-pointer">
//           <a href="/" aria-label="Volver a la página principal">{logo}</a>
//         </h1>

//         {/* Navegación derecha */}
//         <nav className="hidden sm:flex gap-4 sm:gap-6 justify-self-end">
//           {navigationRight.map((item, index) => (
//             <a
//               key={index}
//               href={`/${item.toLowerCase()}`}
//               className="text-lg font-medium hover:text-gray-300 transition-all duration-300 whitespace-nowrap"
//               aria-label={`Ir a la sección de ${item}`}
//             >
//               {item}
//             </a>
//           ))}
//         </nav>
//       </div>

//       {/* Menú desplegable en móviles */}
//       {isMenuOpen && (
//         <div className="sm:hidden flex flex-col items-center bg-gray-900 py-4">
//           {[...navigationLeft, ...navigationRight].map((item, index) => (
//             <a
//               key={index}
//               href={`/${item.toLowerCase()}`}
//               className="text-lg font-medium hover:text-gray-300 transition-all duration-300 py-2"
//               aria-label={`Ir a la sección de ${item}`}
//               onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }
