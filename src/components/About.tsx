export default function About({ content }: { content: string }) {
    return (
      <section className="w-full p-4 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-2">Sobre Nosotros</h2>
        <p>{content}</p>
      </section>
    );
  }
  