import { Box, AudioLines, History, Puzzle, MessageSquareHeart, Images } from 'lucide-react'

const FEATURES = [
  { icon: Box, title: 'Objetos interactivos', description: 'Explora y conoce cada pieza.' },
  { icon: AudioLines, title: 'Audios de relatos', description: 'Escucha historias de nuestra gente.' },
  { icon: History, title: 'Línea del tiempo', description: 'Recorre los momentos más importantes.' },
  { icon: Puzzle, title: 'Juegos educativos', description: 'Aprende jugando y pon a prueba tus conocimientos.' },
  { icon: MessageSquareHeart, title: 'Mural comunitario', description: 'Comparte tus recuerdos, fotografías y mensajes.' },
  { icon: Images, title: 'Galería fotográfica', description: 'Revive momentos históricos en imágenes.' },
]

export default function EducationalSection() {
  return (
    <section id="actividades" className="relative bg-menta/40 py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 overflow-hidden rounded-3xl shadow-md">
              <img
                src="/FOTO%2021.jpeg"
                alt="Línea del tiempo y máscaras tradicionales del Museo Escolar INETFRADPAS"
                className="h-56 w-full object-cover sm:h-64"
              />
            </div>
            <h2 className="text-3xl font-extrabold leading-tight text-azul-oscuro sm:text-4xl">
              Más que un museo,
              <br /> una experiencia educativa
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-azul-oscuro/75">
              En el Museo Escolar INETFRADPAS encontrarás actividades interactivas,
              juegos, una línea de tiempo, relatos de nuestra comunidad y mucho más.
            </p>
            <a
              href="#comunidad"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-azul-oscuro px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
            >
              Conoce el proyecto
            </a>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-2">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-center gap-2 rounded-2xl bg-white/70 p-5 text-center shadow-sm backdrop-blur-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-azul-oscuro/10">
                  <Icon className="h-6 w-6 text-azul-petroleo" strokeWidth={2} />
                </span>
                <h3 className="text-sm font-bold text-azul-oscuro">{title}</h3>
                <p className="text-xs leading-relaxed text-azul-oscuro/70">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
