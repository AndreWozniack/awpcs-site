import ServiceCard from './ServiceCard';

const servicesData = [
  {
    title: "Montagem de PCs Gamer Personalizados",
    description: "Cuido de toda a parte técnica para você ter um PC montado e funcionando 100%. Garantia de compatibilidade entre as peças, cable management e se quiser todas as configurações iniciais (Windows, drivers, BIOS) para você só se preocupar com uma coisa: ligar e jogar!",
    items: [
      "Montagem com cable management e organização interna",
      "Instalação do Sistema Operacional",
      "Instalação de todos os drivers essenciais",
      "Atualização e configuração da BIOS",
    ],
    price: "R$ 250 - R$ 450",
    priceNote: "O valor varia com a complexidade do projeto.",
    imageSrc: "/servicos/pcgamer2.jpg",
    ctaText: "Solicitar Orçamento de Montagem",
    ctaLink: "/contato?servico=montagem",
  },
  {
    title: "Consultoria para Compra de Peças",
    description: "O mundo das peças de PC é confuso e caro. Minha consultoria analisa seu objetivo e orçamento para criar a build perfeita para você. Entrego uma lista detalhada com as melhores peças e onde comprá-las pelo melhor preço, evitando gargalos e garantindo que cada real do seu investimento valha a pena.",
    items: [
      "Análise de necessidade e orçamento do cliente",
      "Lista de peças detalhada com links para compra",
      "Dicas de compatibilidade e upgrades futuros",
      "Suporte para dúvidas durante o processo de compra",
    ],
    price: "R$ 80 - R$ 150",
    priceNote: "Valor abatido na contratação da montagem.",
    imageSrc: "/servicos/quarto-gamer.jpg",
    ctaText: "Quero uma Consultoria",
    ctaLink: "/contato?servico=consultoria",
  },
  {
    title: "Manutenção e Limpeza de PCs",
    description: "Seu PC está lento, barulhento ou superaquecendo? Poeira e desorganização são os maiores inimigos da performance. O serviço completo devolve a velocidade e a eficiência da sua máquina, garantindo maior vida útil para os componentes e uma experiência de uso como se fosse nova.",
    items: [
      "Limpeza física detalhada de todos os componentes",
      "Troca de pasta térmica de alta qualidade (CPU/GPU)",
      "Reorganização de cabos interna",
      "Diagnóstico geral da saúde do hardware",
    ],
    price: "R$ 120 - R$ 250",
    priceNote: "Inclui pasta térmica de alta condutividade.",
    imageSrc: "/servicos/manutencao2.jpg",
    ctaText: "Agendar Limpeza e Manutenção",
    ctaLink: "/contato?servico=manutencao",
  },
  {
    title: "Otimização e Testes de Performance",
    description: "Sente que seu PC pode render mais? O teste de estresse e benchmarks identificam gargalos e oportunidades de melhoria. Otimizamos configurações de software e hardware para você extrair cada gota de performance, seja para jogos competitivos ou para trabalho pesado.",
    items: [
      "Testes de estresse (Stress Test) para CPU e GPU",
      "Análise e otimização de configurações na BIOS",
      "Benchmarks de performance para medir ganhos reais",
      "Relatório de diagnóstico com recomendações de upgrade",
    ],
    price: "R$ 60 - R$ 90 / hora",
    priceNote: "Serviço focado em extrair o máximo do seu hardware atual.",
    imageSrc: "/servicos/performance.avif",
    ctaText: "Analisar meu PC",
    ctaLink: "/contato?servico=otimizacao",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="w-full py-20 px-4 font-mono">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Serviços Pensados Para Você</h2>
          <p className="text-xl mt-4 text-foreground/70 max-w-2xl mx-auto">
            Do sonho do PC Gamer perfeito à manutenção que garante a longevidade da sua máquina.
          </p>
        </div>

        {/* Mapeamento dos serviços com layout alternado */}
        <div className="space-y-20 md:space-y-28">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}