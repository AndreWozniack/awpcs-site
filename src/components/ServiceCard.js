// src/components/ServiceCard.js

import Image from 'next/image'; // Se estiver usando Next.js, para otimização
import Link from 'next/link';

// Usando a cor do tema que definimos antes!
const accentColor = "aw-green"; 

const ServiceCard = ({ service, reverse = false }) => (
  <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-12`}>
    
    {/* Imagem */}
    <div className="w-full md:w-1/2">
      <Image 
        src={service.imageSrc} 
        alt={service.title}
        width={500}
        height={400}
        className="rounded-lg object-cover shadow-lg"
      />
    </div>

    {/* Conteúdo */}
    <div className="w-full md:w-1/2">
      <h3 className={`text-3xl font-bold text-${accentColor}`}>{service.title}</h3>
      <p className="mt-4 text-lg text-foreground/80">{service.description}</p>
      <ul className="mt-6 space-y-2 list-disc list-inside">
        {service.items.map((item, index) => (
          <li key={index} className="text-foreground/90">{item}</li>
        ))}
      </ul>
      <Link href={service.ctaLink}>
        <span className={`inline-block mt-8 bg-${accentColor} text-aw-dark font-bold py-3 px-6 rounded-lg hover:scale-105 transition-transform`}>
          {service.ctaText}
        </span>
      </Link>
    </div>
  </div>
);

export default ServiceCard;