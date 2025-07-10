import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    // 'bg-[#121212]' aplica a cor de fundo escura com Tailwind CSS
    <main className="flex min-h-screen flex-col items-center bg-[#121212] text-white">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}