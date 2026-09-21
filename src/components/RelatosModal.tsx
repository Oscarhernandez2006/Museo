import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react'

type Relato = {
  title: string
  src: string
}

const RELATOS: Relato[] = [
  { title: 'Relato 1', src: '/relatos/RELATO1.mp4' },
  { title: 'Relato 2', src: '/relatos/RELATO2.mp4' },
]

type RelatosModalProps = {
  onClose: () => void
}

export default function RelatosModal({ onClose }: RelatosModalProps) {
  const [index, setIndex] = useState(0)

  const goPrev = () => setIndex((i) => (i - 1 + RELATOS.length) % RELATOS.length)
  const goNext = () => setIndex((i) => (i + 1) % RELATOS.length)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  })

  const current = RELATOS[index]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-azul-oscuro/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Audios y relatos de la comunidad"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-azul-oscuro shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar relatos"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-dorado hover:text-azul-oscuro"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="px-6 pb-2 pt-6 text-center sm:px-10 sm:pt-8">
          <h2 className="text-xl font-extrabold text-white sm:text-2xl">
            Relatos de nuestra comunidad
          </h2>
          <p className="mt-1 text-sm text-crema/70">{current.title}</p>
        </div>

        <div className="relative flex items-center justify-center bg-black">
          {RELATOS.length > 1 && (
            <button
              onClick={goPrev}
              aria-label="Relato anterior"
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-dorado hover:text-azul-oscuro"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          <video key={current.src} src={current.src} controls autoPlay className="aspect-video w-full bg-black" />
          {RELATOS.length > 1 && (
            <button
              onClick={goNext}
              aria-label="Siguiente relato"
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-dorado hover:text-azul-oscuro"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>

        <div className="flex items-center justify-center gap-3 px-6 py-5">
          {RELATOS.map((relato, i) => (
            <button
              key={relato.src}
              onClick={() => setIndex(i)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition ${
                i === index
                  ? 'bg-dorado text-azul-oscuro'
                  : 'bg-white/10 text-crema/80 hover:bg-white/20'
              }`}
            >
              <Play className="h-3.5 w-3.5" />
              {relato.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
