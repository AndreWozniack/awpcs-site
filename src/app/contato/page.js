import Contact from '@/components/Contact';

export default function PaginaDeContato() {
  // O componente Contact agora ocupa a página inteira
  return (
    <div className="flex-grow flex items-center justify-center">
        <Contact />
    </div>
  );
}