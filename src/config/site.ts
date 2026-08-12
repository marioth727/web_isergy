// Datos centrales del negocio — cámbialos aquí y se actualizan en todo el sitio.
export const site = {
  name: 'Isergy',
  legalName: 'Isergy Energía Solar',
  tagline: 'Energía solar para tu hogar y tu negocio',
  description:
    'Instalación de paneles solares en Barranquilla y la costa Caribe. Ahorra hasta 95% en tu factura de luz con sistemas fotovoltaicos on-grid, off-grid e híbridos. Diseño, instalación y mantenimiento profesional.',
  url: 'https://isergy.com',

  // Contacto
  whatsapp: '573009588452', // formato internacional sin '+' ni espacios
  whatsappDisplay: '+57 300 958 8452',
  email: 'contacto@isergy.com', // TODO: confirmar correo real

  // Ubicación / NAP para SEO local
  city: 'Barranquilla',
  region: 'Atlántico',
  country: 'Colombia',
  address: 'Barranquilla, Atlántico, Colombia', // TODO: dirección exacta si aplica
  geo: { lat: 10.9685, lng: -74.7813 }, // Barranquilla (aprox.)

  // Prueba social (datos reales)
  stats: {
    installs: '+10',
    years: '2',
  },

  // Redes (TODO: enlazar reales)
  social: {
    instagram: '',
    facebook: '',
  },
} as const;

// Mensaje precargado para el botón de WhatsApp
export function whatsappLink(message = 'Hola Isergy, quiero cotizar un sistema de energía solar.') {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
