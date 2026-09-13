import { useEffect, useRef, useState } from 'react'
import { X, Film } from 'lucide-react'

const COUNTDOWN_SECONDS = 5

export default function IntroVideoModal() {
  const [open, setOpen] = useState(true)
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS)
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!open || playing) return
    if (secondsLeft <= 0) {
      setPlaying(true)
      return
    }
    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearTimeout(timer)
  }, [open, playing, secondsLeft])

  const handleClose = () => {
    videoRef.current?.pause()
    setOpen(false)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-azul-oscuro/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Video introductorio del Museo Escolar INETFRADPAS"
    >
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-azul-oscuro shadow-2xl">
        <button
          onClick={handleClose}
          aria-label="Cerrar video introductorio"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-dorado hover:text-azul-oscuro"
        >
          <X className="h-5 w-5" />
        </button>

        {!playing ? (
          <div className="flex flex-col items-center gap-5 px-8 py-14 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-dorado/20">
              <Film className="h-8 w-8 text-dorado" />
            </span>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Estás a punto de dejar tu huella, observa el video
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-crema/80 sm:text-base">
              Te contamos brevemente qué encontrarás en el Museo Escolar INETFRADPAS:
              identidad, memoria y futuro de nuestra comunidad de Galapa.
            </p>
            <div className="flex flex-col items-center gap-2">
              <span className="font-hand text-4xl text-dorado">{secondsLeft}</span>
              <p className="text-xs font-semibold uppercase tracking-wide text-crema/60">
                El video comienza en unos segundos...
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setPlaying(true)}
                className="rounded-full bg-dorado px-6 py-2.5 text-sm font-bold text-azul-oscuro transition hover:brightness-105"
              >
                Ver ahora
              </button>
              <button
                onClick={handleClose}
                className="rounded-full border-2 border-crema/50 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Omitir
              </button>
            </div>
          </div>
        ) : (
          <video
            ref={videoRef}
            src="/intro.mp4"
            autoPlay
            controls
            onEnded={handleClose}
            className="aspect-video w-full bg-black"
          />
        )}
      </div>
    </div>
  )
}
