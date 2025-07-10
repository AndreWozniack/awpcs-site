// src/components/Hero.js
import Image from 'next/image';
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

      <div className="relative z-10 p-4 flex flex-col items-center">
        <Image
          src="/logo.png"
          alt="Logo AWPCS"
          width={250}
          height={66}
        />
        <p className="text-xl md:text-2xl mt-4 mb-8 text-gray-300 font-mono">
          Seu Setup Gamer Sob Medida. Performance e Estilo em um só lugar.
        </p>
        <Link href="/servicos" className="bg-aw-green text-aw-dark font-mono py-3 px-8 rounded text-lg hover:bg-white transition-transform hover:scale-105">
          Conheça Nossos Serviços
        </Link>
      </div>
    </section>
  );
}