// src/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-aw-dark/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-700">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-mono text-aw-green hover:text-white transition-colors">
          AW PCs
        </Link>
        
        {/* Links de Navegação */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#servicos" className="hover:text-aw-green transition-colors">
            Serviços
          </Link>
          <Link href="#projetos" className="hover:text-aw-green transition-colors">
            Projetos
          </Link>
          <Link href="#contato" className="hover:text-aw-green transition-colors">
            Contato
          </Link>
        </div>

        {/* Botão de Orçamento */}
        <Link href="#contato" className="bg-aw-green text-aw-dark font-bold py-2 px-4 rounded hover:bg-white transition-colors">
          Faça seu Orçamento
        </Link>
      </nav>
    </header>
  );
}