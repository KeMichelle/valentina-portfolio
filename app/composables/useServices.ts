export interface ServicePricing {
  name: string;
  price: string;
  includes: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  cover: string;
  heroTag: string;
  excerpt: string;
  description: string;
  pricing: ServicePricing[];
  gallery: string[];
  featured: boolean;
}

export const services: Service[] = [
  {
    id: 'maternita',
    slug: 'maternita',
    title: 'MOTHERHOOD //.',
    category: 'Motherhood',
    subtitle: 'Servizio fotografico',
    cover: '/images/service-maternity.jpg',
    heroTag: '01 —',
    excerpt:
      'Il tempo che precede. La luce sul ventre. Un capitolo intero scritto prima del primo respiro.',
    description:
      'Un momento sospeso, intimo e luminoso. Il tuo corpo che cambia, la luce che racconta. Ogni sessione di maternità è pensata per celebrare questa fase unica della tua vita con immagini senza tempo.',
    pricing: [
      {
        name: 'Studio',
        price: '€300',
        includes:
          'Sessione da 1 ora · studio · 20 immagini ritoccate · Gallery privata online',
      },
      {
        name: 'Outdoor',
        price: '€400',
        includes:
          'Sessione da 2 ore · location naturale · 30 immagini ritoccate · Gallery privata online',
      },
    ],
    gallery: [
      '/images/maternity-01.png',
      '/images/maternity-02.jpg',
      '/images/maternity-03.jpg',
      '/images/maternity-04.jpg',
      '/images/maternity-05.jpg',
      '/images/maternity-06.jpg',
    ],
    featured: true,
  },
  {
    id: 'neonati',
    slug: 'neonati',
    title: 'NEWBORN //.',
    category: 'Newborn',
    subtitle: 'Servizio fotografico',
    cover: '/images/service-neonati.jpg',
    heroTag: '02 —',
    excerpt:
      'Mani piccole quanto un fiore. Sonni profondi come oceani. Le prime ore del mondo.',
    description:
      'I primi giorni di vita sono irripetibili. Ogni piccolo dettaglio — le mani, i piedini, il respiro — merita di essere fermato nel tempo con delicatezza e amore.',
    pricing: [
      {
        name: 'Newborn',
        price: '€400',
        includes:
          'Sessione da 2–3 ore · studio riscaldato · 30 immagini ritoccate · Gallery privata online',
      },
      {
        name: 'Babies',
        price: '€350',
        includes:
          'Sessione da 1.5 ore · 25 immagini ritoccate · Gallery privata online',
      },
    ],
    gallery: [
      '/images/newborn-01.jpg',
      '/images/newborn-02.jpg',
      '/images/newborn-03.jpg',
      '/images/oldborn-01.png',
      '/images/oldborn-02.png',
      '/images/oldborn-03.png',
    ],
    featured: true,
  },
  {
    id: 'famiglia',
    slug: 'famiglia',
    title: 'FAMILY //.',
    category: 'Family',
    subtitle: 'Servizio fotografico',
    cover: '/images/service-famiglia.jpg',
    heroTag: '03 —',
    excerpt:
      'Il caos gentile di chi si ama. Le tavole apparecchiate, le risate rubate. La vita vera.',
    description:
      'Una famiglia non è una posa. È un insieme di sguardi, di mani che si cercano, di risate inaspettate. Il mio lavoro è documentare tutto questo con naturalezza.',
    pricing: [
      {
        name: 'Studio',
        price: '€350',
        includes:
          'Sessione da 1 ora · studio · 20 immagini ritoccate · Gallery privata online',
      },
      {
        name: 'Outdoor',
        price: '€400',
        includes:
          'Sessione da 2 ore · location naturale · 30 immagini ritoccate · Gallery privata online',
      },
    ],
    gallery: [
      '/images/family-01.jpg',
      '/images/family-02.png',
      '/images/family-03.png',
      '/images/family-04.png',
      '/images/family-05.png',
      '/images/family-06.jpg',
    ],
    featured: true,
  },
  {
    id: 'smash-cake',
    slug: 'smash-cake',
    title: 'SMASH CAKE //.',
    category: 'Smash Cake',
    subtitle: 'Servizio fotografico',
    cover: '/images/service-smash-cake.jpg',
    heroTag: '04 —',
    excerpt:
      'Il primo anno. La torta. La gioia pura di un bambino che scopre il mondo.',
    description:
      'Una celebrazione piena di colore, dolcezza e risate. Lo smash cake è un momento iconico del primo anno di vita — da immortalare con immagini autentiche e vivaci.',
    pricing: [
      {
        name: 'Smash Cake',
        price: '€400',
        includes:
          'Sessione da 2 ore · studio · 25 immagini ritoccate · Gallery privata online',
      },
    ],
    gallery: [
      '/images/smash-cake-01.jpg',
      '/images/smash-cake-02.jpg',
      '/images/smash-cake-03.jpg',
      '/images/smash-cake-04.jpg',
    ],
    featured: false,
  },
  {
    id: 'natale',
    slug: 'natale',
    title: 'CHRISTMAS //.',
    category: 'Christmas',
    subtitle: 'Servizio fotografico',
    cover: '/images/service-christmas.jpg',
    heroTag: '05 —',
    excerpt: 'La magia delle feste catturata per sempre.',
    description:
      'Un ritratto di famiglia in chiave natalizia. Atmosfera calda, luci soffuse, ricordi per tutta la vita. Perfetto come regalo o come auguri da condividere.',
    pricing: [
      {
        name: 'Christmas',
        price: '€250',
        includes:
          'Sessione da 1 ora · studio tematizzato · 15 immagini ritoccate · Gallery privata online',
      },
    ],
    gallery: [
      '/images/christmas-01.jpg',
      '/images/christmas-02.jpg',
      '/images/christmas-03.jpg',
      '/images/christmas-04.jpg',
    ],
    featured: false,
  },
  {
    id: 'natura',
    slug: 'natura',
    title: 'MOTHERNATURE //.',
    category: 'Mothernature',
    subtitle: 'Servizio fotografico',
    cover: '/images/service-mother-nature.jpg',
    heroTag: '06 —',
    excerpt: 'La bellezza della natura catturata in immagini senza tempo.',
    description:
      "Servizi fotografici immersi nella natura, per catturare la bellezza dei paesaggi e dei momenti speciali all'aria aperta.",
    pricing: [
      {
        name: 'Mothernature',
        price: 'Su richiesta',
        includes:
          'Preventivo personalizzato in base alla durata e alle esigenze del servizio',
      },
    ],
    gallery: [
      '/images/mother-nature-01.jpg',
      '/images/mother-nature-02.jpg',
      'images/nature-01.jpg',
      '/images/mother-nature-03.jpg',
      '/images/nature-02.jpg',
    ],
    featured: false,
  },

  {
    id: 'mommy-me',
    slug: 'mommy-me',
    title: 'MOMMY & ME //.',
    category: 'Mommy & Me',
    subtitle: 'Servizio fotografico',
    cover: '/images/mommy-me-01.png',
    heroTag: '07 —',
    excerpt: 'to be written',
    description: 'to be written',
    pricing: [
      {
        name: 'Mommy & Me',
        price: 'Su richiesta',
        includes:
          'Preventivo personalizzato in base alla durata e alle esigenze del servizio',
      },
    ],
    gallery: [
      '/images/mommy-me-01.png',
      '/images/mommy-me-02.jpg',
      '/images/mommy-me-03.jpg',
    ],
    featured: false,
  },
  {
    id: 'matrimonio',
    slug: 'matrimonio',
    title: 'WEDDING //.',
    category: 'Wedding',
    subtitle: 'Servizio fotografico',
    cover: '/images/service-matrimonio.jpg',
    heroTag: '08 —',
    excerpt: "Il giorno più importante merita un racconto visivo all'altezza.",
    description:
      'Ogni matrimonio è una storia unica. Lavoro in modo discreto e documentaristico, per restituirvi le emozioni vere di quella giornata — senza pose artificiali.',
    pricing: [
      {
        name: 'Wedding',
        price: 'Su richiesta',
        includes:
          'Preventivo personalizzato in base alla durata e alle esigenze della coppia',
      },
    ],
    gallery: [],
    featured: false,
  },
];

export function useServices() {
  const featuredServices = services.filter((s) => s.featured);

  function getService(slug: string): Service | null {
    return services.find((s) => s.slug === slug) ?? null;
  }

  return { services, featuredServices, getService };
}
