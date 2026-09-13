import { RotateCw } from 'lucide-react'

export default function InteractiveMask() {
  return (
    <div className="flex flex-col items-center gap-4 select-none">
      <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-72 lg:w-72 xl:h-80 xl:w-80">
        <div className="absolute inset-0 rounded-full bg-dorado/25 blur-3xl" />
        <div className="absolute inset-[6%] rounded-full bg-azul-petroleo shadow-2xl" />
        <model-viewer
          src="/toro-3d.glb"
          alt="Modelo 3D interactivo de una máscara artesanal de toro, tradición de Galapa"
          camera-controls
          auto-rotate
          auto-rotate-delay={0}
          rotation-per-second="18deg"
          shadow-intensity="0.6"
          exposure="1.1"
          interaction-prompt="none"
          loading="eager"
          reveal="auto"
          className="relative h-full w-full"
        />
      </div>
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-crema/70">
        <RotateCw className="h-4 w-4 text-dorado" />
        Arrastra para rotar en 360°
      </p>
    </div>
  )
}
