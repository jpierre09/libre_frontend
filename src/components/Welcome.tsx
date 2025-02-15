export default function Welcome({ content }: { content: { text: string; image: string } }) {
  return (
    <section
      className="w-full h-[60vh] sm:h-[90vh] flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${content.image})` }}
    >
      {/* Capa oscura para mejorar visibilidad del texto */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Texto centrado */}
      <p className="relative text-white text-3xl sm:text-5xl font-bold text-center tracking-wide animate-fadeIn max-w-2xl px-6">
        {content.text}
      </p>
    </section>
  );
}
