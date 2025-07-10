// src/app/layout.js
import { Inter, Press_Start_2P } from 'next/font/google';
import './globals.css';

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
      <body className={`${inter.variable} ${pressStart2P.variable} bg-aw-dark text-gray-200 font-sans`}>
        {children}
      </body>
    </html>
  );
}