import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Menu, X, User } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'El proyecto', href: '/#proyecto' },
  { label: 'Salas', href: '/#salas' },
  { label: 'Actividades', href: '/#actividades' },
  { label: 'Comunidad', href: '/#comunidad' },
  { label: 'Contacto', href: '/#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-azul-oscuro/95 backdrop-blur supports-[backdrop-filter]:bg-azul-oscuro/90 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-start gap-4 py-3 pr-5 lg:pr-8">
        {/* Logo + nombre, pegado al borde real de la pantalla, sin margen izquierdo */}
        <Link to="/#inicio" className="flex items-center gap-3 shrink-0">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-crema p-1 shadow-sm">
            <img
              src="/logo.jpg"
              alt="Escudo de la Institución Educativa Técnica Francisco de Paula Santander"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="min-w-0 leading-tight text-left">
            <span className="block truncate font-extrabold tracking-tight text-white text-xs sm:text-sm lg:text-base">
              MUSEO ESCOLAR INETFRADPAS
            </span>
            <span className="block truncate text-[10px] sm:text-xs font-medium text-menta">
              Identidad, Memoria y Futuro
            </span>
          </span>
        </Link>

        {/* Menú desktop, pegado al logo */}
        <nav className="hidden lg:flex items-center gap-7 ml-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-crema/90 hover:text-dorado transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Acciones desktop, empujadas al extremo derecho */}
        <div className="hidden lg:flex items-center gap-3 ml-auto">
          <button
            aria-label="Buscar"
            className="flex h-10 w-10 items-center justify-center rounded-full text-crema hover:bg-white/10 transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
          <button className="flex items-center gap-2 rounded-full bg-dorado px-5 py-2.5 text-sm font-semibold text-azul-oscuro shadow-sm hover:brightness-105 transition">
            <User className="h-4 w-4" />
            Iniciar sesión
          </button>
        </div>

        {/* Botón menú móvil */}
        <button
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-azul-oscuro px-5 pb-5 pt-3">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-crema/90 hover:bg-white/10 hover:text-dorado transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-crema">
              <Search className="h-5 w-5" />
            </button>
            <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-dorado px-5 py-2.5 text-sm font-semibold text-azul-oscuro">
              <User className="h-4 w-4" />
              Iniciar sesión
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
