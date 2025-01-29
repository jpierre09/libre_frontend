export default function Welcome({ content }: { content: string }) {
    return (
      <section className="w-full p-4 bg-gray-100 text-center">
        <p className="text-xl">{content}</p>
      </section>
    );
  }
  