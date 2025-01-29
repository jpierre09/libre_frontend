export default function Categories({ content }: { content: string }) {
    return (
      <section className="w-full p-4 bg-white text-center border-b">
        <h2 className="text-2xl font-semibold mb-2">Categorías</h2>
        <p>{content}</p>
      </section>
    );
  }
  