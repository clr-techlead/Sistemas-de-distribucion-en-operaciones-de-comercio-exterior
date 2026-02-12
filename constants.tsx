
import { TransportMode, TransportModeId } from './types';

export interface TransportRating {
  label: string;
  value: string;
  level: 'high' | 'medium' | 'low' | 'neutral';
}

export interface TransportModeExtended extends TransportMode {
  ratings: {
    cost: TransportRating;
    speed: TransportRating;
    capacity: TransportRating;
    flexibility: TransportRating;
    eco: TransportRating;
  };
}

export const TRANSPORT_MODES: TransportModeExtended[] = [
  {
    id: TransportModeId.TERRESTRE,
    title: 'Logística Terrestre',
    description: 'La solución definitiva para la última milla. Destaca por su flexibilidad operativa y capacidad de penetración en cualquier punto geográfico.',
    means: ['Camiones articulados', 'Furgones refrigerados', 'Semicamas', 'Portavehículos', 'Camiones cisterna'],
    advantages: ['Flexibilidad total de horarios', 'Reducción de manipulación de carga', 'Ideal para "Just-in-Time"'],
    disadvantages: ['Alta huella de carbono', 'Sensibilidad a precios de combustible', 'Riesgos de congestión urbana'],
    icon: 'fa-truck-fast',
    color: 'bg-amber-500',
    imageUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200',
    ratings: {
      cost: { label: 'Medio', value: '$$', level: 'medium' },
      speed: { label: 'Alta', value: '4/5', level: 'high' },
      capacity: { label: 'Baja', value: '2/5', level: 'low' },
      flexibility: { label: 'Máxima', value: '5/5', level: 'high' },
      eco: { label: 'Baja', value: '1/5', level: 'low' }
    }
  },
  {
    id: TransportModeId.MARITIMO,
    title: 'Logística Marítima',
    description: 'El motor de la globalización. Permite el transporte de cargas masivas a distancias intercontinentales con una eficiencia de costos inmejorable.',
    means: ['Buques Post-Panamax', 'Portacontenedores', 'Buques Ro-Ro', 'Graneleros', 'Buques Tanque'],
    advantages: ['Economía de escala masiva', 'Versatilidad para carga peligrosa', 'Estabilidad en grandes volúmenes'],
    disadvantages: ['Tiempos de tránsito extensos', 'Costos portuarios variables', 'Baja frecuencia de salidas'],
    icon: 'fa-ship',
    color: 'bg-blue-600',
    imageUrl: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1200',
    ratings: {
      cost: { label: 'Muy Bajo', value: '$', level: 'high' },
      speed: { label: 'Baja', value: '1/5', level: 'low' },
      capacity: { label: 'Inmensa', value: '5/5', level: 'high' },
      flexibility: { label: 'Media', value: '3/5', level: 'medium' },
      eco: { label: 'Alta', value: '4/5', level: 'high' }
    }
  },
  {
    id: TransportModeId.AEREO,
    title: 'Logística Aérea',
    description: 'Alta velocidad para un mundo conectado. Esencial para mercancías críticas, productos de lujo y suministros médicos urgentes.',
    means: ['Aviones de fuselaje ancho (Cargo)', 'Belly Cargo (Aviones comerciales)', 'Helicópteros pesados'],
    advantages: ['Máxima prioridad de entrega', 'Bajos niveles de inventario en tránsito', 'Seguridad superior contra robos'],
    disadvantages: ['Costo unitario extremadamente alto', 'Limitaciones de peso crítico', 'Dependencia total de aeropuertos'],
    icon: 'fa-plane-departure',
    color: 'bg-indigo-500',
    imageUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1200',
    ratings: {
      cost: { label: 'Muy Alto', value: '$$$$', level: 'low' },
      speed: { label: 'Máxima', value: '5/5', level: 'high' },
      capacity: { label: 'Muy Baja', value: '1/5', level: 'low' },
      flexibility: { label: 'Media', value: '3/5', level: 'medium' },
      eco: { label: 'Muy Baja', value: '1/5', level: 'low' }
    }
  },
  {
    id: TransportModeId.FERREO,
    title: 'Logística Ferroviaria',
    description: 'Sostenibilidad y potencia. Una alternativa equilibrada para el transporte terrestre de larga distancia con menor impacto ambiental.',
    means: ['Trenes de carga unitarios', 'Trenes intermodales', 'Vagones tolva', 'Vagones plataforma'],
    advantages: ['Alta regularidad y puntualidad', 'Independencia de congestión vial', 'Eficiencia energética superior'],
    disadvantages: ['Inflexibilidad de la red fija', 'Necesidad de transporte complementario', 'Alta inversión en infraestructura'],
    icon: 'fa-train',
    color: 'bg-emerald-600',
    imageUrl: 'https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?auto=format&fit=crop&q=80&w=1200&sig=train_cargo_real',
    ratings: {
      cost: { label: 'Bajo', value: '$$', level: 'high' },
      speed: { label: 'Media', value: '3/5', level: 'medium' },
      capacity: { label: 'Alta', value: '4/5', level: 'high' },
      flexibility: { label: 'Baja', value: '2/5', level: 'low' },
      eco: { label: 'Muy Alta', value: '5/5', level: 'high' }
    }
  }
];

export const LEGAL_REFERENCES = [
  "DECRETO 2324 DE 1984: Reorganización de la Dirección General Marítima.",
  "LEY 105 DE 1993: Disposiciones básicas sobre el transporte en Colombia.",
  "LEY 336 DE 1996: Estatuto Nacional de Transporte.",
  "DECRETO 1079 DE 2015: Decreto Único Reglamentario del Sector Transporte.",
  "DECISIÓN 399 DE 1997: Transporte Internacional de Mercancías por Carretera (Comunidad Andina)."
];
