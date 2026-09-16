import { TransportMode } from '../types';

const escapeCsv = (value: string) => `"${value.replaceAll('"', '""')}"`;

export const downloadTransportModesCsv = (modes: TransportMode[]) => {
  const header = ['Mode', 'Description', 'Means', 'Advantages', 'Disadvantages', 'Cost', 'Speed', 'Capacity', 'Flexibility', 'Environmental impact'];
  const rows = modes.map(mode => [mode.title, mode.description, mode.means.join(' | '), mode.advantages.join(' | '), mode.disadvantages.join(' | '), mode.ratings.cost.label, mode.ratings.speed.label, mode.ratings.capacity.label, mode.ratings.flexibility.label, mode.ratings.eco.label]);
  const csv = [header, ...rows].map(row => row.map(value => escapeCsv(value)).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'transport-mode-analysis.csv';
  link.click();
  URL.revokeObjectURL(url);
};
