// Datos reales por municipio para las páginas de SEO local.
// Cada "angulo" es contenido GENUINO y distinto (evita thin/doorway pages).
export interface Municipio {
  slug: string;
  nombre: string;
  departamento: string;
  operador: string;        // empresa de energía que opera la zona
  habitantes: string;      // aprox., dato público
  distanciaKm: number;     // desde la base en Barranquilla
  hsp: number;             // horas de sol pico promedio (kWh/m²/día)
  referencia: string;      // barrio / punto de referencia local
  angulo: string;          // párrafo único por municipio
  faqLocal: { q: string; a: string };
}

export const municipios: Municipio[] = [
  {
    slug: 'soledad',
    nombre: 'Soledad',
    departamento: 'Atlántico',
    operador: 'Air-e',
    habitantes: '~680.000',
    distanciaKm: 8,
    hsp: 5.2,
    referencia: 'sectores como Ciudadela Metropolitana, Villa Muriel y Hipódromo',
    angulo:
      'Soledad es prácticamente una continuación de Barranquilla, así que nuestros equipos llegan el mismo día y la instalación es ágil. Es un municipio muy residencial y con altísimo uso de aire acondicionado, lo que dispara las facturas de Air-e en los meses más calientes. Precisamente por eso los paneles solares rinden tanto aquí: producen más justo cuando más energía consumes.',
    faqLocal: {
      q: '¿Instalan paneles solares en Soledad?',
      a: 'Sí. Soledad es una de nuestras zonas de cobertura principal por su cercanía a Barranquilla. Hacemos el diagnóstico, el diseño y la instalación completa, normalmente en 1 a 3 días.',
    },
  },
  {
    slug: 'puerto-colombia',
    nombre: 'Puerto Colombia',
    departamento: 'Atlántico',
    operador: 'Air-e',
    habitantes: '~65.000',
    distanciaKm: 15,
    hsp: 5.3,
    referencia: 'zonas como Villa Campestre, Country Mar y el casco histórico',
    angulo:
      'Puerto Colombia combina viviendas campestres, casas de playa y conjuntos nuevos frente al mar. La brisa marina exige estructuras y anclajes resistentes a la corrosión, y por eso usamos materiales pensados para ambiente salino que alargan la vida del sistema. Es un municipio ideal para energía solar: mucho sol, techos amplios y propietarios que valoran la sostenibilidad.',
    faqLocal: {
      q: '¿Los paneles resisten la brisa marina de Puerto Colombia?',
      a: 'Sí. Para las zonas costeras usamos estructuras y tornillería resistentes a la corrosión, aptas para ambiente salino, de modo que el sistema conserva su rendimiento y garantía durante toda su vida útil.',
    },
  },
  {
    slug: 'malambo',
    nombre: 'Malambo',
    departamento: 'Atlántico',
    operador: 'Air-e',
    habitantes: '~130.000',
    distanciaKm: 12,
    hsp: 5.2,
    referencia: 'la zona industrial de PIMSA y los barrios residenciales del centro',
    angulo:
      'Malambo tiene un fuerte componente industrial alrededor del parque PIMSA, además de una gran zona residencial. Para las empresas, los sistemas solares comerciales aprovechan el alto consumo diurno y recortan costos operativos; para los hogares, reducen una factura que pesa cada vez más. Diseñamos tanto instalaciones residenciales como sistemas de mayor potencia para bodegas y locales.',
    faqLocal: {
      q: '¿Hacen instalaciones para empresas en Malambo?',
      a: 'Sí. En Malambo trabajamos tanto viviendas como sistemas comerciales de mayor potencia para bodegas, locales e industria, dimensionados según el consumo diurno del negocio.',
    },
  },
  {
    slug: 'galapa',
    nombre: 'Galapa',
    departamento: 'Atlántico',
    operador: 'Air-e',
    habitantes: '~55.000',
    distanciaKm: 13,
    hsp: 5.2,
    referencia: 'las nuevas urbanizaciones y conjuntos de vivienda del municipio',
    angulo:
      'Galapa es uno de los municipios de mayor crecimiento urbano del área metropolitana, con muchas urbanizaciones y conjuntos nuevos. Cuando la vivienda es reciente, instalar paneles solares es aún más sencillo: el techo suele estar despejado y bien orientado. Asesoramos desde la etapa de construcción para dejar el sistema listo y empezar a ahorrar desde el primer recibo.',
    faqLocal: {
      q: '¿Puedo instalar paneles en una casa nueva en Galapa?',
      a: 'Claro. En viviendas y conjuntos nuevos de Galapa la instalación es muy sencilla porque el techo está despejado. Incluso podemos asesorarte desde la construcción para dejar todo previsto.',
    },
  },
  {
    slug: 'sabanalarga',
    nombre: 'Sabanalarga',
    departamento: 'Atlántico',
    operador: 'Air-e',
    habitantes: '~100.000',
    distanciaKm: 55,
    hsp: 5.4,
    referencia: 'el casco urbano y las fincas de los alrededores',
    angulo:
      'Sabanalarga es el principal centro del sur del Atlántico, rodeado de fincas y zonas rurales. Aquí ofrecemos dos caminos: sistemas conectados a la red para el casco urbano y sistemas con baterías (híbridos u off-grid) para fincas donde la red es débil o hay cortes frecuentes. El sur del departamento tiene excelente radiación solar, lo que hace muy rentable la inversión.',
    faqLocal: {
      q: '¿Sirven paneles solares para una finca cerca de Sabanalarga?',
      a: 'Sí, y suelen ser muy convenientes. Para fincas con red débil o cortes instalamos sistemas híbridos u off-grid con baterías, que dan autonomía y respaldo de energía.',
    },
  },
  {
    slug: 'baranoa',
    nombre: 'Baranoa',
    departamento: 'Atlántico',
    operador: 'Air-e',
    habitantes: '~60.000',
    distanciaKm: 30,
    hsp: 5.3,
    referencia: 'el casco urbano y los negocios de la vía Oriental',
    angulo:
      'Baranoa mezcla hogares y pequeños comercios a lo largo de su casco urbano y la vía. Para las familias, la energía solar estabiliza el gasto mensual frente a las alzas de tarifa; para tiendas, panaderías y talleres, baja un costo operativo importante. Dimensionamos cada sistema al consumo real para que la inversión se recupere lo antes posible.',
    faqLocal: {
      q: '¿Conviene energía solar para un negocio pequeño en Baranoa?',
      a: 'Mucho. Negocios como tiendas, panaderías o talleres tienen consumo de día, justo cuando los paneles más producen, así que el ahorro es inmediato y la inversión se recupera rápido.',
    },
  },
];

export function municipioPath(slug: string) {
  return `/paneles-solares/${slug}/`;
}
