export interface Tractor {
  id: string
  brand: 'John Deere' | 'New Holland' | 'Fendt' | 'Case IH'
  brandCode: 'JD' | 'NH' | 'F' | 'CI'
  model: string
  hp: number
  category: 'Alta Potenza' | 'Media Potenza' | 'Compatti / Serre'
  description: string
  features: string[]
  image: string
  colors: { name: string; hex: string }[]
}

export const tractors: Tractor[] = [
  // John Deere
  {
    id: 'jd-6r185',
    brand: 'John Deere',
    brandCode: 'JD',
    model: '6R 185',
    hp: 185,
    category: 'Media Potenza',
    description: 'Versatile e affidabile, perfetto per aziende agricole miste.',
    features: ['185 HP', 'CommandQuad™ Transmission', 'AutoTrac™ Ready', 'CommandView™ Cab'],
    image: '/assets/tractors/jd-6r185.jpg',
    colors: [
      { name: 'Verde John Deere', hex: '#367C2B' },
      { name: 'Nero Industrial', hex: '#1a1a1a' },
    ]
  },
  {
    id: 'jd-7r290',
    brand: 'John Deere',
    brandCode: 'JD',
    model: '7R 290',
    hp: 290,
    category: 'Alta Potenza',
    description: 'Potenza elevata per lavorazioni intensive su grandi superfici.',
    features: ['290 HP', 'e23™ PowerShift', 'ILS™ Suspension', 'Gen 4 CommandCenter™'],
    image: '/assets/tractors/jd-7r290.jpg',
    colors: [
      { name: 'Verde John Deere', hex: '#367C2B' },
      { name: 'Nero Industrial', hex: '#1a1a1a' },
    ]
  },
  {
    id: 'jd-8r410',
    brand: 'John Deere',
    brandCode: 'JD',
    model: '8R 410',
    hp: 410,
    category: 'Alta Potenza',
    description: 'Il massimo della potenza John Deere per operazioni su larga scala.',
    features: ['410 HP', 'e23™ PowerShift', 'ActiveSeat™', 'Section Control'],
    image: '/assets/tractors/jd-8r410.jpg',
    colors: [
      { name: 'Verde John Deere', hex: '#367C2B' },
      { name: 'Nero Industrial', hex: '#1a1a1a' },
    ]
  },
  // New Holland
  {
    id: 'nh-t6180',
    brand: 'New Holland',
    brandCode: 'NH',
    model: 'T6.180',
    hp: 180,
    category: 'Media Potenza',
    description: 'Tecnologia italiana al servizio dell\'agricoltura moderna.',
    features: ['180 HP', 'Auto Command™', 'PLM Intelligence™', 'Dynamic Rear Hitch'],
    image: '/assets/tractors/nh-t6180.jpg',
    colors: [
      { name: 'Blu New Holland', hex: '#003087' },
      { name: 'Grigio Titanio', hex: '#6B7280' },
    ]
  },
  {
    id: 'nh-t7315',
    brand: 'New Holland',
    brandCode: 'NH',
    model: 'T7.315',
    hp: 315,
    category: 'Alta Potenza',
    description: 'Performance superiore con tecnologia di precisione avanzata.',
    features: ['315 HP', 'Auto Command™ CVT', 'IntelliView™ IV', 'Auto Headland Management'],
    image: '/assets/tractors/nh-t7315.jpg',
    colors: [
      { name: 'Blu New Holland', hex: '#003087' },
      { name: 'Grigio Titanio', hex: '#6B7280' },
    ]
  },
  {
    id: 'nh-t8435',
    brand: 'New Holland',
    brandCode: 'NH',
    model: 'T8.435',
    hp: 435,
    category: 'Alta Potenza',
    description: 'Il flagship New Holland per le aziende più esigenti.',
    features: ['435 HP', 'PowerShift™ 18x4', 'Terraglide™', 'AFS Pro 700'],
    image: '/assets/tractors/nh-t8435.jpg',
    colors: [
      { name: 'Blu New Holland', hex: '#003087' },
      { name: 'Grigio Titanio', hex: '#6B7280' },
    ]
  },
  // Fendt
  {
    id: 'fendt-516',
    brand: 'Fendt',
    brandCode: 'F',
    model: '516 Vario',
    hp: 165,
    category: 'Media Potenza',
    description: 'Tecnologia tedesca di precisione, leader nei trattori ad alta potenza.',
    features: ['165 HP', 'Vario CVT', 'VarioDrive', 'Fendt ONE'],
    image: '/assets/tractors/fendt-516.jpg',
    colors: [
      { name: 'Verde Fendt', hex: '#4A7C3F' },
      { name: 'Nero Racing', hex: '#111111' },
    ]
  },
  {
    id: 'fendt-724',
    brand: 'Fendt',
    brandCode: 'F',
    model: '724 Vario',
    hp: 240,
    category: 'Alta Potenza',
    description: 'La serie 700 Vario, il riferimento mondiale per efficienza.',
    features: ['240 HP', 'Vario CVT', 'TMS Technology', 'Fendt iD'],
    image: '/assets/tractors/fendt-724.jpg',
    colors: [
      { name: 'Verde Fendt', hex: '#4A7C3F' },
      { name: 'Nero Racing', hex: '#111111' },
    ]
  },
  {
    id: 'fendt-942',
    brand: 'Fendt',
    brandCode: 'F',
    model: '942 Vario',
    hp: 435,
    category: 'Alta Potenza',
    description: 'Il più potente della gamma Fendt, per operazioni di massima scala.',
    features: ['435 HP', 'Vario CVT', 'VarioGrip', 'Comfort Cab'],
    image: '/assets/tractors/fendt-942.jpg',
    colors: [
      { name: 'Verde Fendt', hex: '#4A7C3F' },
      { name: 'Nero Racing', hex: '#111111' },
    ]
  },
  // Case IH
  {
    id: 'case-maxxum150',
    brand: 'Case IH',
    brandCode: 'CI',
    model: 'Maxxum 150',
    hp: 150,
    category: 'Media Potenza',
    description: 'Storico marchio americano, specialista in trattori ad alta performance.',
    features: ['150 HP', 'CVXDrive CVT', 'AFS Connect™', 'Multicontroller'],
    image: '/assets/tractors/case-maxxum150.jpg',
    colors: [
      { name: 'Rosso Case IH', hex: '#C8102E' },
      { name: 'Nero Industrial', hex: '#1a1a1a' },
    ]
  },
  {
    id: 'case-puma240',
    brand: 'Case IH',
    brandCode: 'CI',
    model: 'Puma 240',
    hp: 240,
    category: 'Alta Potenza',
    description: 'Versatilità e potenza per ogni tipo di lavorazione agricola.',
    features: ['240 HP', 'CVXDrive CVT', 'Active Suspension', 'AFS Pro 1200'],
    image: '/assets/tractors/case-puma240.jpg',
    colors: [
      { name: 'Rosso Case IH', hex: '#C8102E' },
      { name: 'Nero Industrial', hex: '#1a1a1a' },
    ]
  },
  {
    id: 'case-steiger620',
    brand: 'Case IH',
    brandCode: 'CI',
    model: 'Steiger 620',
    hp: 620,
    category: 'Alta Potenza',
    description: 'Il colosso Case IH per le grandi aziende cerealicole.',
    features: ['620 HP', 'Powershift 16x2', '4WD Articulated', 'AFS Connect™'],
    image: '/assets/tractors/case-steiger620.jpg',
    colors: [
      { name: 'Rosso Case IH', hex: '#C8102E' },
      { name: 'Nero Industrial', hex: '#1a1a1a' },
    ]
  },
]

export const brands = [
  { code: 'JD', name: 'John Deere', country: 'USA', description: 'Leader mondiale nella produzione di macchine agricole, sinonimo di innovazione e affidabilità dal 1837.' },
  { code: 'NH', name: 'New Holland', country: 'Italia', description: 'Tecnologia italiana al servizio dell\'agricoltura mondiale. Innovazione, efficienza, sostenibilità.' },
  { code: 'F', name: 'Fendt', country: 'Germania', description: 'Tecnologia tedesca di precisione, leader nei trattori ad alta potenza e trasmissione continua.' },
  { code: 'CI', name: 'Case IH', country: 'USA', description: 'Storico marchio americano, specialista in trattori ad alta performance e sistemi di precisione.' },
]

export const globalColors = [
  { name: 'Verde DSI', hex: '#1B4332' },
  { name: 'Nero Industrial', hex: '#1a1a1a' },
  { name: 'Rosso Agricolo', hex: '#C8102E' },
  { name: 'Grigio Titanio', hex: '#6B7280' },
  { name: 'Blu Tecnico', hex: '#003087' },
  { name: 'Bianco Premium', hex: '#F5F5F0' },
]
