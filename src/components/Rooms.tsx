import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROOMS } from '../data/rooms'

export default function Rooms() {
  return (
    <section id="salas" className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="mb-10 flex flex-col gap-3">
        <span className="w-fit rounded-full bg-dorado/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-azul-oscuro">
          Explora
        </span>
        <h2 className="text-3xl font-extrabold text-azul-oscuro sm:text-4xl">
          Nuestras salas
        </h2>
        <p className="max-w-2xl text-azul-oscuro/70">
          Descubre las tres salas del museo, donde la historia, la tecnología, la
          memoria y la cultura de Galapa se encuentran para contar grandes historias.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ROOMS.map((room) => (
          <article
            key={room.id}
            className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-azul-oscuro/5 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={room.image}
                alt={room.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span
                className={`absolute left-4 top-4 rounded-full ${room.tagBg} px-3 py-1 text-xs font-bold text-white shadow-sm`}
              >
                {room.label}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className="text-xl font-bold text-azul-oscuro">{room.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-azul-oscuro/70">
                {room.description}
              </p>
              <Link
                to={`/salas/${room.slug}`}
                className={`mt-2 flex w-fit items-center gap-2 rounded-full ${room.btnBg} px-5 py-2.5 text-sm font-semibold text-white transition`}
              >
                Ingresar a la sala
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
