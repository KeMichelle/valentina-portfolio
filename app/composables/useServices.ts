export interface ServicePricing {
  name: string
  price: string
  includes: string
}

export interface Service {
  id: string
  slug: string
  title: string
  category: string
  subtitle: string
  cover: string
  heroTag: string
  excerpt: string
  description: string
  pricing: ServicePricing[]
  gallery: string[]
  featured: boolean
}

export const services: Service[] = [
  {
    id: 'maternita',
    slug: 'maternita',
    title: 'Maternità',
    category: 'Pregnancy',
    subtitle: 'Servizio fotografico',
    cover: '/images/service-maternita.jpg',
    heroTag: '01 —',
    excerpt: 'Il tempo che precede. La luce sul ventre. Un capitolo intero scritto prima del primo respiro.',
    description: 'Un momento sospeso, intimo e luminoso. Il tuo corpo che cambia, la luce che racconta. Ogni sessione di maternità è pensata per celebrare questa fase unica della tua vita con immagini senza tempo.',
    pricing: [
      { name: 'Studio', price: '€300', includes: 'Sessione da 1 ora · studio · 20 immagini ritoccate · Gallery privata online' },
      { name: 'Outdoor', price: '€400', includes: 'Sessione da 2 ore · location naturale · 30 immagini ritoccate · Gallery privata online' },
    ],
    gallery: ['/images/gallery-01.jpg', '/images/gallery-02.jpg'],
    featured: true,
  },
  {
    id: 'neonati',
    slug: 'neonati',
    title: 'Neonati',
    category: 'Newborn',
    subtitle: 'Servizio fotografico',
    cover: '/images/service-neonati.jpg',
    heroTag: '02 —',
    excerpt: 'Mani piccole quanto un fiore. Sonni profondi come oceani. Le prime ore del mondo.',
    description: 'I primi giorni di vita sono irripetibili. Ogni piccolo dettaglio — le mani, i piedini, il respiro — merita di essere fermato nel tempo con delicatezza e amore.',
    pricing: [
      { name: 'Newborn', price: '€400', includes: 'Sessione da 2–3 ore · studio riscaldato · 30 immagini ritoccate · Gallery privata online' },
    ],
    gallery: ['/images/gallery-03.jpg', '/images/gallery-04.jpg'],
    featured: true,
  },
  {
    id: 'famiglia',
    slug: 'famiglia',
    title: 'Famiglia',
    category: 'Family',
    subtitle: 'Servizio fotografico',
    cover: '/images/service-famiglia.jpg',
    heroTag: '03 —',
    excerpt: 'Il caos gentile di chi si ama. Le tavole apparecchiate, le risate rubate. La vita vera.',
    description: 'Una famiglia non è una posa. È un insieme di sguardi, di mani che si cercano, di risate inaspettate. Il mio lavoro è documentare tutto questo con naturalezza.',
    pricing: [
      { name: 'Studio', price: '€350', includes: 'Sessione da 1 ora · studio · 20 immagini ritoccate · Gallery privata online' },
      { name: 'Outdoor', price: '€400', includes: 'Sessione da 2 ore · location naturale · 30 immagini ritoccate · Gallery privata online' },
    ],
    gallery: ['/images/gallery-05.jpg', '/images/gallery-06.jpg'],
    featured: true,
  },
  {
    id: 'bambini',
    slug: 'bambini',
    title: 'Bambini',
    category: 'Babies',
    subtitle: 'Servizio fotografico',
    cover: '/images/service-bambini.jpg',
    heroTag: '04 —',
    excerpt: 'La curiosità negli occhi, la polvere sulle ginocchia. Ogni fase è preziosa.',
    description: 'I bambini crescono troppo in fretta. Una sessione fotografica è il modo più bello per fermare un momento irripetibile della loro crescita.',
    pricing: [
      { name: 'Babies', price: '€350', includes: 'Sessione da 1.5 ore · 25 immagini ritoccate · Gallery privata online' },
    ],
    gallery: [],
    featured: false,
  },
  {
    id: 'smash-cake',
    slug: 'smash-cake',
    title: 'Smash Cake',
    category: 'Smash Cake',
    subtitle: 'Servizio fotografico',
    cover: '/images/service-smash-cake.jpg',
    heroTag: '05 —',
    excerpt: 'Il primo anno. La torta. La gioia pura di un bambino che scopre il mondo.',
    description: 'Una celebrazione piena di colore, dolcezza e risate. Lo smash cake è un momento iconico del primo anno di vita — da immortalare con immagini autentiche e vivaci.',
    pricing: [
      { name: 'Smash Cake', price: '€400', includes: 'Sessione da 2 ore · studio · 25 immagini ritoccate · Gallery privata online' },
    ],
    gallery: [],
    featured: false,
  },
  {
    id: 'natale',
    slug: 'natale',
    title: 'Natale',
    category: 'Christmas',
    subtitle: 'Servizio fotografico',
    cover: '/images/service-natale.jpg',
    heroTag: '06 —',
    excerpt: 'La magia delle feste catturata per sempre.',
    description: 'Un ritratto di famiglia in chiave natalizia. Atmosfera calda, luci soffuse, ricordi per tutta la vita. Perfetto come regalo o come auguri da condividere.',
    pricing: [
      { name: 'Christmas', price: '€250', includes: 'Sessione da 1 ora · studio tematizzato · 15 immagini ritoccate · Gallery privata online' },
    ],
    gallery: [],
    featured: false,
  },
  {
    id: 'matrimonio',
    slug: 'matrimonio',
    title: 'Matrimonio',
    category: 'Wedding',
    subtitle: 'Servizio fotografico',
    cover: '/images/service-matrimonio.jpg',
    heroTag: '07 —',
    excerpt: "Il giorno più importante merita un racconto visivo all'altezza.",
    description: 'Ogni matrimonio è una storia unica. Lavoro in modo discreto e documentaristico, per restituirvi le emozioni vere di quella giornata — senza pose artificiali.',
    pricing: [
      { name: 'Wedding', price: 'Su richiesta', includes: 'Preventivo personalizzato in base alla durata e alle esigenze della coppia' },
    ],
    gallery: [],
    featured: false,
  },
]

export function useServices() {
  const featuredServices = services.filter(s => s.featured)

  function getService(slug: string): Service | null {
    return services.find(s => s.slug === slug) ?? null
  }

  return { services, featuredServices, getService }
}
