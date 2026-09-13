import { Facebook, Instagram, Youtube, MapPin } from 'lucide-react'

const LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'El proyecto', href: '#proyecto' },
  { label: 'Salas', href: '#salas' },
  { label: 'Actividades', href: '#actividades' },
  { label: 'Comunidad', href: '#comunidad' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer id="contacto" className="relative bg-azul-oscuro text-crema">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-crema p-1 shadow-sm">
                <img
                  src="/logo.jpg"
                  alt="Escudo de la Institución Educativa Técnica Francisco de Paula Santander"
                  className="h-full w-full object-contain"
                />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-white">Museo Escolar INETFRADPAS</p>
                <p className="text-xs text-menta">Identidad, Memoria y Futuro</p>
              </div>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-crema/70">
              Institución Educativa Técnica
              <br /> Francisco de Paula Santander
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-dorado">
              Navegación
            </h4>
            <ul className="flex flex-col gap-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-crema/80 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-dorado">
              Ubicación
            </h4>
            <p className="mb-3 flex items-start gap-2 text-sm text-crema/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-dorado" />
              Galapa, Atlántico, Colombia
            </p>
            <div className="overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="Ubicación del Museo Escolar INETFRADPAS en Galapa, Atlántico"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958.8691911076767!2d-74.8873319268336!3d10.907476309384707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef5d46fdf3ccaf5%3A0x1087349bbfcd7658!2sInstituci%C3%B3n%20Educativa%20T%C3%A9cnico%20Francisco%20de%20Paula%20Santander!5e0!3m2!1ses-419!2sco!4v1789250104957!5m2!1ses-419!2sco"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-dorado">
              Síguenos
            </h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-dorado hover:text-azul-oscuro transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-dorado hover:text-azul-oscuro transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-dorado hover:text-azul-oscuro transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center">
          <p className="font-hand text-2xl text-dorado">
            Raíces que inspiran, conocimientos que transforman.
          </p>
          <p className="text-xs text-crema/60">
            © {new Date().getFullYear()} Museo Escolar INETFRADPAS · Galapa, Atlántico
          </p>
        </div>
      </div>
    </footer>
  )
}
