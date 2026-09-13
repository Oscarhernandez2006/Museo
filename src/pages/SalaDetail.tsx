import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Images } from 'lucide-react'
import { ROOMS } from '../data/rooms'

export default function SalaDetail() {
  const { slug } = useParams()
  const room = ROOMS.find((r) => r.slug === slug)

  if (!room) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-5 text-center">
        <h1 className="text-2xl font-extrabold text-azul-oscuro">Sala no encontrada</h1>
        <Link
          to="/"
          className="flex items-center gap-2 rounded-full bg-azul-oscuro px-6 py-3 text-sm font-bold text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-crema">
      {/* Encabezado de la sala */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={room.image} alt={room.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-azul-oscuro/95 via-azul-oscuro/70 to-azul-oscuro/40" />
        </div>
        <div className="relative mx-auto max-w-5xl px-5 pb-14 pt-10 lg:px-8">
          <Link
            to="/#salas"
            className="mb-8 flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a las salas
          </Link>
          <span
            className={`w-fit rounded-full ${room.tagBg} px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white`}
          >
            {room.label}
          </span>
          <h1 className="mt-4 max-w-2xl text-3xl font-extrabold text-white sm:text-5xl">
            {room.title}
          </h1>
        </div>
      </div>

      {/* Descripción */}
      <div className="mx-auto max-w-5xl px-5 py-12 lg:px-8">
        <p className="max-w-3xl text-lg leading-relaxed text-azul-oscuro/80">
          {room.longDescription}
        </p>

        {/* Galería de imágenes de la sala */}
        <div className="mt-12">
          <h2 className={`mb-6 flex items-center gap-2 text-xl font-bold ${room.accentText}`}>
            <Images className="h-5 w-5" />
            Galería de la sala
          </h2>

          {room.gallery.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {room.gallery.map((src, i) => (
                <div key={src + i} className="aspect-square overflow-hidden rounded-2xl">
                  <img
                    src={src}
                    alt={`${room.title} - imagen ${i + 1}`}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border-2 border-dashed border-azul-oscuro/20 px-6 py-16 text-center text-azul-oscuro/50">
              Próximamente más imágenes de esta sala.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
