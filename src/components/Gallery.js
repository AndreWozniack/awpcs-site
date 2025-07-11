import Image from 'next/image';

const projectImages = [
  'build1.jpg',
  'build2.jpg',
  'build3.jpg',
  'build4.jpg',
  'build5.jpg',
  'build6.jpg',
];

export default function Gallery() {
  return (
    <section id="projetos" className="w-full bg-aw-dark py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-mono text-center mb-12">Projetos Realizados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectImages.map((img, index) => (
            <div key={index} className="relative aspect-square border-2 border-gray-800 rounded-lg overflow-hidden group">
              <Image
                src={`/builds/${img}`}
                alt={`Projeto de PC Gamer ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}