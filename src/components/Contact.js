"use client";

import { useState } from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa6';

const servicesList = [
  "Montagem de PCs Gamer Personalizados",
  "Consultoria para Compra de Peças",
  "Manutenção e Limpeza de PCs",
  "Otimização e Testes de Performance",
  "Outro Assunto"
];

export default function Contact() {
  const [name, setName] = useState('');
  const [service, setService] = useState(servicesList[0]);
  const [message, setMessage] = useState('');

  const handleWhatsAppSubmit = () => {
    const phoneNumber = "5541987826083";
    const text = `Olá! Meu nome é ${name}. Tenho interesse no serviço de "${service}".\n\n${message}`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(url, '_blank');
  };

  const handleEmailSubmit = () => {
    const email = "andre_woz@hotmail.com";
    const subject = `Contato sobre: ${service}`;
    const body = `Olá! Meu nome é ${name}.\n\nTenho interesse no serviço de "${service}".\n\nMinha mensagem:\n${message}`;
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const url = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
    window.location.href = url;
  };

  // ...e o resto do seu return JSX continua aqui sem nenhuma alteração
  return (
    <section id="contato" className="w-full bg-gray-900/50 py-20 px-4">
      {/* ... seu JSX ... */}
       <div className="bg-aw-dark/30 p-8 rounded-lg shadow-2xl text-left space-y-6">
          {/* Campo Nome */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
              Seu Nome
            </label>
            <input 
              type="text" 
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-4 focus:ring-2 focus:ring-aw-green focus:border-aw-green transition"
              placeholder="Como podemos te chamar?"
            />
          </div>

          {/* Campo Serviço */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-foreground/80 mb-2">
              Serviço de Interesse
            </label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-4 focus:ring-2 focus:ring-aw-green focus:border-aw-green transition"
            >
              {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          {/* Campo Mensagem */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
              Sua Mensagem (Opcional)
            </label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-4 focus:ring-2 focus:ring-aw-green focus:border-aw-green transition"
              placeholder="Descreva o que você precisa ou sua dúvida..."
            />
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <button
              onClick={handleWhatsAppSubmit}
              className="w-full flex items-center justify-center gap-3 bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors text-lg"
            >
              <FaWhatsapp size={24} />
              Iniciar no WhatsApp
            </button>
            <button
              onClick={handleEmailSubmit}
              className="w-full flex items-center justify-center gap-3 bg-sky-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-700 transition-colors text-lg"
            >
              <FaEnvelope size={24} />
              Enviar por E-mail
            </button>
          </div>
        </div>
    </section>
  );
}