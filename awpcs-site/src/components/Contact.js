// src/components/Contact.js
export default function Contact() {
  return (
    <section id="contato" className="w-full bg-gray-900 py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-mono mb-4">Entre em contato!</h2>
        <p className="text-lg text-gray-400 mb-8">
          Pronto para montar o PC dos seus sonhos ou dar um upgrade na sua máquina?
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Email */}
          <a 
            href="mailto:andre_woz@hotmail.com" 
            className="text-2xl font-bold hover:text-aw-green transition-colors"
          >
            andre_woz@hotmail.com
          </a>
          
          <span className="text-gray-500 hidden md:block">|</span>

          {/* Telefone / WhatsApp */}
          <a 
            href="https://wa.me/5541987826083" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl font-bold hover:text-aw-green transition-colors"
          >
            (41) 98782-6083
          </a>
        </div>
      </div>
    </section>
  );
}