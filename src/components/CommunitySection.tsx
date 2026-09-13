import { GraduationCap, Home as HomeIcon, Hammer, HeartHandshake } from 'lucide-react'

const GROUPS = [
  {
    icon: GraduationCap,
    title: 'Estudiantes',
    description: 'Protagonistas del museo, creadores de contenidos y guías virtuales.',
    image: '/FOTO%2013.jpeg',
  },
  {
    icon: HomeIcon,
    title: 'Familias',
    description: 'Comparten fotografías, objetos y relatos que hacen parte de nuestra historia.',
    image: '/FOTO%2018.jpeg',
  },
  {
    icon: Hammer,
    title: 'Artesanos',
    description: 'Muestran sus técnicas, saberes y tradiciones artesanales de Galapa.',
    image: '/FOTO%2012.jpeg',
  },
  {
    icon: HeartHandshake,
    title: 'Comunidad educativa',
    description: 'Docentes y directivos que acompañan y fortalecen este proyecto.',
    image: '/FOTO%208.jpeg',
  },
]

export default function CommunitySection() {
  return (
    <section id="comunidad" className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-extrabold text-azul-oscuro sm:text-4xl">
          Construyamos nuestra memoria juntos
        </h2>
        <p className="mt-3 text-azul-oscuro/70">
          Un museo vivo, construido entre estudiantes, familias, artesanos y toda la
          comunidad educativa de Galapa.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {GROUPS.map(({ icon: Icon, title, description, image }, i) => {
          const accents = ['bg-dorado/20 text-azul-oscuro', 'bg-menta/50 text-azul-petroleo', 'bg-morado/20 text-morado', 'bg-coral/20 text-coral']
          return (
            <div
              key={title}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-md shadow-azul-oscuro/5 transition hover:-translate-y-1"
            >
              <div className="h-36 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accents[i]}`}>
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="text-lg font-bold text-azul-oscuro">{title}</h3>
                <p className="text-sm leading-relaxed text-azul-oscuro/70">{description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
