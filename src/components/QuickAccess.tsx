import { Home, Compass, Gamepad2, Users } from 'lucide-react'

const ITEMS = [
  {
    icon: Home,
    title: 'Inicio',
    description: 'Presentación del museo, bienvenida y acceso a las salas.',
    bg: 'bg-dorado/20',
    color: 'text-dorado',
  },
  {
    icon: Compass,
    title: 'Explorar el museo',
    description: 'Las tres salas temáticas y sus objetos interactivos.',
    bg: 'bg-menta/40',
    color: 'text-azul-petroleo',
  },
  {
    icon: Gamepad2,
    title: 'Actividades educativas',
    description: 'Juegos, preguntas, retos y evaluaciones.',
    bg: 'bg-morado/20',
    color: 'text-morado',
  },
  {
    icon: Users,
    title: 'Comunidad y participación',
    description: 'Relatos, aportes de familias y contacto con el museo.',
    bg: 'bg-coral/20',
    color: 'text-coral',
  },
]

export default function QuickAccess() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, title, description, bg, color }) => (
          <div key={title} className="flex flex-col items-center gap-3 text-center">
            <span className={`flex h-16 w-16 items-center justify-center rounded-full ${bg}`}>
              <Icon className={`h-7 w-7 ${color}`} strokeWidth={2} />
            </span>
            <h3 className="text-base font-bold text-azul-oscuro">{title}</h3>
            <p className="text-sm leading-relaxed text-azul-oscuro/70">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
