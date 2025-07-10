// src/app/layout.js
import { Inter, Press_Start_2P } from 'next/font/google';
import './globals.css';

// Componentes que serão compartilhados em todas as páginas
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start-2p',
});

export const metadata = {
  title: 'AW PCs - Montagem de PCs Gamer e Consultoria',
  description: 'Seu setup gamer sob medida. Montagem, manutenção e consultoria especializada em hardware.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${pressStart2P.variable} bg-aw-dark text-gray-200 font-sans flex flex-col min-h-screen`}>
        <Navbar />
        {/* 'children' será o conteúdo específico de cada página (page.js) */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}