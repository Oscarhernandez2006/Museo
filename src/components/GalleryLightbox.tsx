import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

type GalleryLightboxProps = {
  images: string[]
  index: number
  alt: string
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function GalleryLightbox({ images, index, alt, onClose, onNavigate }: GalleryLightboxProps) {
  const goPrev = () => onNavigate((index - 1 + images.length) % images.length)
  const goNext = () => onNavigate((index + 1) % images.length)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  })

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-azul-oscuro/95 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} - imagen ampliada`}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Cerrar imagen"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-dorado hover:text-azul-oscuro"
      >
        <X className="h-6 w-6" />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-dorado hover:text-azul-oscuro sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            aria-label="Siguiente imagen"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-dorado hover:text-azul-oscuro sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <img
        src={images[index]}
        alt={`${alt} - imagen ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
      />

      {images.length > 1 && (
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white">
          {index + 1} / {images.length}
        </span>
      )}
    </div>
  )
}
