// src/components/Footer.js
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black py-8 px-4">
      <div className="container mx-auto text-center text-gray-500">
        <Image
          src="/logo.png"
          alt="Logo AWPCS"
          width={60}
          height={60}
          className="mx-auto mb-4"
        />
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