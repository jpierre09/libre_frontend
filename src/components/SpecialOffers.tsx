"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, Shirt, Briefcase } from "lucide-react"; // Íconos corregidos

export default function SpecialOffers() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 30,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Ofertas especiales con íconos corregidos
  const offers = [
    { name: "Camiseta Oversized", discount: "-30%", price: "$99,900", icon: <Shirt className="w-10 h-10 text-gray-800" /> },
    { name: "Pantalón Cargo", discount: "-40%", price: "$159,900", icon: <Briefcase className="w-10 h-10 text-gray-800" /> },
    { name: "Bolso Minimalista", discount: "-20%", price: "$189,900", icon: <ShoppingBag className="w-10 h-10 text-gray-800" /> },
  ];

  return (
    <section className="w-full h-[60vh] sm:h-[70vh] flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-white">
      {/* Título y Cuenta regresiva */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold uppercase tracking-wide text-gray-900">
          Oferta especial pa Vos
        </h2>
        <p className="text-gray-600 text-lg mt-2">Hasta 30% off</p>
        <div className="flex justify-center space-x-4 mt-4 text-xl font-medium text-gray-800">
          <div className="px-4 py-2 border border-gray-400 rounded-md">{timeLeft.hours}h</div>
          <div className="px-4 py-2 border border-gray-400 rounded-md">{timeLeft.minutes}m</div>
          <div className="px-4 py-2 border border-gray-400 rounded-md">{timeLeft.seconds}s</div>
        </div>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-8 w-full max-w-4xl">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="border border-gray-300 p-6 text-center rounded-lg transition-transform transform hover:scale-105 hover:border-gray-600 bg-white shadow-md"
          >
            <div className="flex justify-center mb-4">{offer.icon}</div>
            <h3 className="text-lg font-medium text-gray-800">{offer.name}</h3>
            <p className="text-gray-600 mt-1">{offer.price} COP</p>
            <span className="text-sm text-gray-500">{offer.discount}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
