export default function Subscribe({ content }: { content: string }) {
    return (
      <section className="w-full p-4 bg-gray-200 text-center">
        <h2 className="text-2xl font-semibold mb-2">Suscríbete</h2>
        <p>{content}</p>
      </section>
    );
  }
  