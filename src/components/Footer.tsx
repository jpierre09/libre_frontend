export default function Footer({ content }: { content: string }) {
    return (
      <footer className="w-full bg-gray-800 text-white p-4 text-center">
        <p>{content}</p>
      </footer>
    );
  }
  