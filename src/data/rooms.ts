export type Room = {
  id: string
  slug: string
  label: string
  title: string
  description: string
  longDescription: string
  image: string
  gallery: string[]
  tagBg: string
  btnBg: string
  accentText: string
}

export const ROOMS: Room[] = [
  {
    id: 'sala-1',
    slug: 'historia-y-tecnologia',
    label: 'Sala 1',
    title: 'Historia y Tecnología',
    description:
      'Explora objetos de colección, aparatos tecnológicos antiguos y una línea de tiempo sobre los cambios tecnológicos.',
    longDescription:
      'La Sala de Historia y Tecnología reúne objetos de colección, aparatos antiguos y una línea de tiempo que muestra cómo la tecnología ha transformado la vida cotidiana de Galapa a lo largo de las generaciones. Un recorrido pensado para entender de dónde venimos y hacia dónde vamos como comunidad.',
    image: '/FOTO%209.jpeg',
    gallery: [],
    tagBg: 'bg-azul-petroleo',
    btnBg: 'bg-azul-petroleo hover:brightness-110',
    accentText: 'text-azul-petroleo',
  },
  {
    id: 'sala-2',
    slug: 'memoria-y-comunidad',
    label: 'Sala 2',
    title: 'Memoria y Comunidad',
    description:
      'Conoce fotografías, testimonios, relatos orales y documentos históricos de las familias galaperas.',
    longDescription:
      'La Sala de Memoria y Comunidad conserva fotografías, testimonios, relatos orales y documentos históricos que dan voz a las familias galaperas. Es un espacio para recordar juntos, honrar a quienes construyeron nuestra identidad y mantener viva la memoria colectiva de nuestro pueblo.',
    image: '/FOTO%2011.jpeg',
    gallery: [],
    tagBg: 'bg-morado',
    btnBg: 'bg-morado hover:brightness-110',
    accentText: 'text-morado',
  },
  {
    id: 'sala-3',
    slug: 'artesanias-de-galapa',
    label: 'Sala 3',
    title: 'Artesanías de Galapa',
    description:
      'Descubre las máscaras, tallados, tejidos y otras expresiones artesanales, y su importancia cultural y económica.',
    longDescription:
      'La Sala de Artesanías de Galapa exhibe máscaras, tallados, tejidos y otras expresiones artesanales que representan el talento y la creatividad de nuestros artesanos. Aquí se resalta también la importancia cultural y económica que estas tradiciones tienen para la comunidad.',
    image: '/FOTO%207.jpeg',
    gallery: [
      '/artesania/MASCARAS%201.jpg',
      '/artesania/MASCARAS%202.jpg',
      '/artesania/MASCARAS%203.jpg',
      '/artesania/MASCARAS%204.jpg',
      '/artesania/MASCARAS%205.jpg',
      '/artesania/MASCARAS%206.jpg',
      '/artesania/MASCARAS%207.jpg',
      '/artesania/MASCARAS%208.jpg',
      '/artesania/MASCARAS%209.jpg',
      '/artesania/MASCARAS%2010.jpg',
      '/artesania/MASCARAS%2011.jpg',
      '/artesania/MASCARAS%2012.jpg',
      '/artesania/MASCARAS%2013.jpg',
      '/artesania/MASCARAS%2014.jpg',
      '/artesania/MASCARAS%2015.jpg',
      '/artesania/MASCARAS%20INTRUMENTOS%20MUSICALES.jpg',
      '/artesania/FIGURA%20MADERA.jpg',
      '/artesania/FIGURA%20MONO.jpg',
      '/artesania/BILLETES.jpg',
      '/artesania/RELIQUIA%20MASCARA.jpg',
    ],
    tagBg: 'bg-coral',
    btnBg: 'bg-coral hover:brightness-110',
    accentText: 'text-coral',
  },
]
