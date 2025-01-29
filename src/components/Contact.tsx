export default function Contact({ content }: { content: string }) {
    return (
      <section className="w-full p-4 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-2">Contacto</h2>
        <p>{content}</p>
      </section>
    );
  }
  