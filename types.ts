
export enum TransportModeId {
  TERRESTRE = 'terrestre',
  MARITIMO = 'maritimo',
  AEREO = 'aereo',
  FERREO = 'ferreo'
}

export interface TransportMode {
  id: TransportModeId;
  title: string;
  description: string;
  means: string[];
  advantages: string[];
  disadvantages: string[];
  icon: string;
  color: string;
  imageUrl: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
