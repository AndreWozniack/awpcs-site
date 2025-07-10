// src/components/Footer.js
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black py-8 px-4">
      <div className="container mx-auto text-center text-gray-500">
        <Link href="/" className="text-xl font-mono text-aw-green hover:text-white transition-colors mb-4 inline-block">
          AW PCs
        </Link>
        <p>
          &copy; {currentYear} AWPCS. Todos os direitos reservados.
        </p>
        <p className="text-sm mt-2">
          Desenvolvido com Next.js e Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}