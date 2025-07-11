"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const videoPlaylist = [
  'video2.mp4',
  'video3.mp4',
  'video4.mp4',
];

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    const nextVideoIndex = (currentVideoIndex + 1) % videoPlaylist.length;
    setCurrentVideoIndex(nextVideoIndex);
  };

  return (
    <section 
      id="inicio" 
      className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Container que força a proporção vertical (9:16) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <video 
          key={currentVideoIndex}
          autoPlay 
          loop={false}
          muted 
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover" // object-cover preenche o container
        >
          <source src={`/hero-playlist/${videoPlaylist[currentVideoIndex]}`} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
      </div>

      {/* Overlay para escurecer o vídeo */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Conteúdo */}
      <div className="relative z-20 p-4 flex flex-col items-center">
        <Image
          src="/logo.png"
          alt="Logo AWPCS"
          width={250}
          height={250}
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