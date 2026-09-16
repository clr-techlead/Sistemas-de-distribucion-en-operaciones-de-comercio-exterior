import React from 'react';
import { TransportMode } from '../types';
import { downloadTransportModesCsv } from '../services/exportService';

interface ExportButtonProps {
  modes: TransportMode[];
}

const ExportButton: React.FC<ExportButtonProps> = ({ modes }) => (
  <button
    type="button"
    aria-label="Export transport analysis as CSV"
    onClick={() => downloadTransportModesCsv(modes)}
    className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
  >
    <i className="fa-solid fa-file-csv" aria-hidden="true"></i>
    Export CSV
  </button>
);

export default ExportButton;
