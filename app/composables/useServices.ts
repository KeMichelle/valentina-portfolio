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
      "L'essere madre, ancora prima di vedere l'amore nei suoi occhi. L'essenza che si racconta prima di essere svelata al mondo.",
    description:
      "Un momento fotografico che racconta la tua essenza in questa fase speciale, un amore incondizionato raccontato attraverso immagini che svelano l'arte di una gravidanza meravigliosa. Qui ti sentirai nella fase migliore di te stessa.",
    pricing: [
      {
        name: 'Studio',
        price: '€350',
        includes:
          'Sessione da 2 ore · Studio confortevole · 100 immagini editate · Gallery privata online · Guardaroba Clienti - abiti sartoriali mamma e piccini',
      },
      {
        name: 'Outdoor',
        price: '€400',
        includes:
          'Sessione da 2 ore · Location esterna · 100 immagini editate · Mini clip video · Gallery privata online · Guardaroba Clienti - abiti sartoriali mamma e piccini',
      },
    ],
    gallery: [
      '/images/maternity-01.jpg',
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
      "I suoi primi attimi nel mondo, la vostra gioia e il vostro amore sono diventati qualcosa di concreto, un'esplosione di gioia e nient'altro che il vostro amore nei suoi e vostri occhi.",
    description:
      'Un momento fotografico tra i più speciali che verranno raccontati. Insieme trasformeremo i primi attimi della sua vita nel ricordo più prezioso che vi accompagnerà sempre come la cosa più bella al mondo.',
    pricing: [
      {
        name: 'Newborn',
        price: '€400',
        includes:
          'Sessione da 3/4 ore · Studio confortevole · 100 immagini editate · Gallery privata online · Mini clip video · Guardaroba clienti - abiti sartoriali mamma e piccini',
      },
    ],
    gallery: [
      '/images/newborn-01.jpg',
      '/images/newborn-02.jpg',
      '/images/newborn-03.jpg',
      '/images/oldborn-01.jpg',
      '/images/oldborn-02.jpg',
      '/images/oldborn-03.jpg',
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
      'Il vostro amore si completa qui, nel disordine di quella che è la vita vera.',
    description:
      'Un momento fotografico che racconta la vostra vera essenza, con naturalezza. Le fotografie di Famiglia parlano del vostro amore, nel momento più completo della vostra vita.',
    pricing: [
      {
        name: 'Studio',
        price: '€350',
        includes:
          'Sessione da 2 ore · Studio confortevole · 100 immagini editate · Gallery privata online · Mini clip video · Guardaroba Clienti - abiti sartoriali mamma e piccini',
      },
      {
        name: 'Outdoor',
        price: '€400',
        includes:
          'Sessione da 2 ore · Location esterna · 100 immagini editate · Mini clip video · Gallery privata online · Guardaroba clienti - abiti sartoriali mamma e piccini',
      },
    ],
    gallery: [
      '/images/family-01.jpg',
      '/images/family-02.jpg',
      '/images/family-03.jpg',
      '/images/family-04.jpg',
      '/images/family-05.jpg',
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
      'È il suo primo giro completo intorno al sole e va ricordato come la cosa più bella al mondo.',
    description:
      'Un momento fotografico che racchiude il suo primo anno di vita. Ti ricorderai di questo momento fatto di gioia e stupore, fatto di colori e profumi dei fiori freschi e quella torta tutta dedicata a loro.',
    pricing: [
      {
        name: 'Smash Cake',
        price: '€400',
        includes:
          'Sessione da 2 ore · Studio confortevole · 100 immagini editate · Gallery privata online · Mini clip video · Guardaroba clienti - abiti sartoriali mamma e piccini · Cake topper personalizzato · Fiori freschi · Torta di cake designer personalizzata',
      },
    ],
    gallery: [
      '/images/smash-cake-01.jpg',
      '/images/smash-cake-02.jpg',
      '/images/smash-cake-03.jpg',
      '/images/smash-cake-04.jpg',
      '/images/smash-cake-05.jpg',
      '/images/smash-cake-06.jpg',
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
    excerpt: "Il momento più atteso e magico dell'anno.",
    description:
      'Il momento fotografico per eccellenza, il Natale qui visto nelle sue due sfaccettature più famose, in chiave Classica ed Elegante, e in chiave Bianca e pura.',
    pricing: [
      {
        name: 'Christmas',
        price: '€250',
        includes:
          'Sessione da 2 ore massimo · Studio allestito a tema · 50 immagini ritoccate · Gallery privata online',
      },
    ],
    gallery: [
      '/images/christmas-01.jpg',
      '/images/christmas-02.jpg',
      '/images/christmas-03.jpg',
      '/images/christmas-04.jpg',
      '/images/christmas-05.jpg',
      '/images/christmas-06.jpg',
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
    excerpt:
      'Raccontami la tua storia, vedremo insieme come valorizzare al meglio la tua essenza e trasformarla in immagini poetiche.',
    description:
      'Un Momento fotografico per raccontare la vera te, nelle cornici Naturali di luoghi selezionati per valorizzare al meglio quello che sei o in studio, per rendere ancora più elegante questo progetto. Creiamo questa poesia insieme.',
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
      '/images/nature-01.jpg',
      '/images/mother-nature-03.jpg',
      '/images/nature-02.jpg',
      '/images/mother-nature-04.jpg',
    ],
    featured: false,
  },

  {
    id: 'mommy-me',
    slug: 'mommy-me',
    title: 'MOMMY & ME //.',
    category: 'Mommy & Me',
    subtitle: 'Servizio fotografico',
    cover: '/images/mommy-me-01.jpg',
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
      '/images/mommy-me-01.jpg',
      '/images/mommy-me-02.jpg',
      '/images/mommy-me-03.jpg',
      '/images/outdoor.jpg',
      '/images/mommy-me-05.jpg',
      '/images/mommy-me-06.jpg',
    ],
    featured: false,
  },
  {
    id: 'matrimonio',
    slug: 'matrimonio',
    title: 'WEDDING //.',
    category: 'Wedding',
    subtitle: 'Servizio fotografico',
    cover: '/images/service-wedding.jpg',
    heroTag: '08 —',
    excerpt: "Il giorno più importante merita un racconto visivo all'altezza.",
    description:
      'Ogni matrimonio è una storia unica. Lavoro in modo discreto e documentaristico, per restituirvi le emozioni vere di quella giornata, senza pose artificiali.',
    pricing: [
      {
        name: 'Wedding',
        price: 'Su richiesta',
        includes:
          'Preventivo personalizzato in base alla durata e alle esigenze della coppia',
      },
    ],
    gallery: [
      '/images/wedding-01.jpg',
      '/images/wedding-02.jpg',
      '/images/wedding-03.jpg',
      '/images/wedding-04.jpg',
      '/images/wedding-05.jpg',
      '/images/wedding-06.jpg',
    ],
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
