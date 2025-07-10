// src/components/Services.js

const servicesData = [
  {
    title: "Montagem de PCs Gamer",
    items: [
      "Montagem com qualidade e segurança",
      "Instalação de Windows",
      "Instalação de Drivers",
      "Atualização de BIOS",
    ],
  },
  {
    title: "Consultoria para compra de peças",
    items: [
      "Escolha perfeita para sua necessidade e orçamento",
      "Lista com todos os itens descritos e indicações",
      "Variedade e Flexibilidade na escolha",
    ],
  },
  {
    title: "Limpeza e Manutenção de PCs",
    items: [
      "Limpeza completa e segura do PC",
      "Formatação de PC",
      "Testes de performance",
    ],
  },
];

// Um componente para o Card individual
const ServiceCard = ({ title, items }) => (
  // 'border-green-500' usa a cor de destaque que definimos
  <div className="border-2 border-[#39FF14] rounded-lg p-6 max-w-sm w-full">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <ul className="list-disc list-inside space-y-2">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);


export default function Services() {
  return (
    // 'id="servicos"' é útil para o menu de navegação
    <section id="servicos" className="w-full py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h2>
      <div className="container mx-auto flex flex-wrap justify-center gap-8">
        {servicesData.map((service) => (
          <ServiceCard key={service.title} title={service.title} items={service.items} />
        ))}
      </div>
    </section>
  );
}