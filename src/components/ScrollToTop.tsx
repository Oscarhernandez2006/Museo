import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Sube el scroll al inicio (o a la sección del hash) cada vez que cambia de ruta
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
