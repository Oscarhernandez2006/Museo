import { Compass, BookOpen } from 'lucide-react'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Imagen de fondo + capa oscura */}
      <div className="absolute inset-0">
        <img
          src="/FOTO%206.jpeg"
          alt="Artesanías tradicionales de Galapa: sombrero vueltiao, tallados en madera y canastos"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-azul-oscuro/95 via-azul-oscuro/80 to-azul-oscuro/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-azul-oscuro/90 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-5 pb-20 pt-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="max-w-2xl lg:flex-1">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dorado">
            Bienvenidos al
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Museo Escolar
            <br />
            <span className="text-dorado">Huellas Mokaná</span>
          </h1>
          <p className="font-hand mt-3 text-3xl text-menta sm:text-4xl">
            Identidad, Memoria y Futuro
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-crema/90 sm:text-lg">
            Un espacio virtual para conocer nuestra historia, valorar las tradiciones
            de Galapa y aprender junto a nuestra comunidad.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#salas"
              className="flex items-center gap-2 rounded-full bg-dorado px-7 py-3.5 text-sm font-bold text-azul-oscuro shadow-lg shadow-black/20 transition hover:brightness-105"
            >
              <Compass className="h-5 w-5" />
              Explorar el museo
            </a>
            <a
              href="#proyecto"
              className="flex items-center gap-2 rounded-full border-2 border-crema/70 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <BookOpen className="h-5 w-5" />
              Conocer el proyecto
            </a>
          </div>
        </div>

        {/* Máscara artesanal, imagen sin fondo */}
        <div className="relative flex h-96 w-full items-center justify-center sm:h-[440px] lg:h-[520px] lg:w-[560px] lg:shrink-0 xl:h-[600px] xl:w-[680px]">
          <div className="absolute h-72 w-72 rounded-full bg-dorado/25 blur-3xl xl:h-80 xl:w-80" />
          <img
            src="/mascara-toro-frontal.png"
            alt="Máscara artesanal de toro tallada y pintada a mano, tradición de Galapa"
            className="relative h-full w-full -rotate-6 object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Frase decorativa */}
      <div className="relative border-t border-white/10 bg-azul-oscuro/60 backdrop-blur-sm">
        <p className="font-hand mx-auto max-w-7xl px-5 py-4 text-right text-2xl text-dorado sm:text-3xl lg:px-8">
          Galapa: nuestra gente, nuestra cultura.
        </p>
      </div>
    </section>
  )
}
