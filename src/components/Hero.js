// src/components/Hero.js
import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative w-full h-screen flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/hero-background.jpg')" }}
    >
      {/* Overlay para escurecer a imagem e dar contraste ao texto */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-mono mb-4 text-white drop-shadow-[0_2px_2px_rgba(0,255,0,0.8)]">
          AW PCs
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Seu Setup Gamer Sob Medida. Performance e Estilo em um só lugar.
        </p>
        <Link href="#servicos" className="bg-aw-green text-aw-dark font-bold py-3 px-8 rounded text-lg hover:bg-white transition-transform hover:scale-105">
          Conheça Nossos Serviços
        </Link>
      </div>
    </section>
  );
}