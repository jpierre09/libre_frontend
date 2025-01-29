export default function SpecialOffers({ content }: { content: string }) {
    return (
      <section className="w-full p-4 bg-yellow-100 text-center border-b">
        <h2 className="text-2xl font-semibold mb-2">Ofertas Especiales</h2>
        <p>{content}</p>
      </section>
    );
  }
  