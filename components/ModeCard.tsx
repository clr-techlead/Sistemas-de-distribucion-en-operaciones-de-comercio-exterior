
import React, { useState, useEffect } from 'react';
import { TransportMode } from '../types';

interface ModeCardProps {
  mode: TransportMode;
}

const ModeCard: React.FC<ModeCardProps> = ({ mode }) => {
  const [imageState, setImageState] = useState<'loading' | 'loaded' | 'error'>('loading');

  useEffect(() => {
    setImageState('loading');
    // Forzamos un pequeño timeout para asegurar que el navegador intente la carga
    const timer = setTimeout(() => {
      const img = new Image();
      img.src = mode.imageUrl;
      img.onload = () => setImageState('loaded');
      img.onerror = () => setImageState('error');
    }, 100);
    return () => clearTimeout(timer);
  }, [mode.imageUrl]);

  return (
    <div id={mode.id} className="group relative bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Visual Column */}
        <div className="lg:w-2/5 relative min-h-[350px] bg-slate-100 flex items-center justify-center overflow-hidden">
          {imageState === 'loading' && (
            <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
              <i className={`fa-solid ${mode.icon} text-slate-300 text-6xl animate-bounce`}></i>
            </div>
          )}
          
          {imageState === 'loaded' && (
            <img 
              src={mode.imageUrl} 
              alt={mode.title} 
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
            />
          )}

          {imageState === 'error' && (
            <div className={`absolute inset-0 flex flex-col items-center justify-center bg-slate-50 border-r border-slate-100`}>
               <div className={`w-24 h-24 rounded-full ${mode.color.replace('bg-', 'bg-opacity-10 ')} flex items-center justify-center mb-4`}>
                <i className={`fa-solid ${mode.icon} ${mode.color.replace('bg-', 'text-')} text-4xl opacity-40`}></i>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Vista Alternativa Activa</p>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80"></div>
          
          <div className={`absolute bottom-6 left-6 p-4 rounded-2xl text-white ${mode.color} shadow-xl transform group-hover:scale-110 transition-transform z-10`}>
            <i className={`fa-solid ${mode.icon} text-3xl`}></i>
          </div>
        </div>

        {/* Content Column */}
        <div className="lg:w-3/5 p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-6">
            <span className={`w-8 h-1.5 rounded-full ${mode.color}`}></span>
            <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">{mode.title}</h3>
          </div>
          
          <p className="text-slate-500 text-lg leading-relaxed mb-8 font-medium">
            {mode.description}
          </p>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <h4 className="flex items-center text-xs uppercase tracking-widest font-bold text-slate-400 mb-4">
                  <i className="fa-solid fa-layer-group mr-2"></i>
                  Ecosistema de Medios
                </h4>
                <div className="flex flex-wrap gap-2">
                  {mode.means.map((item, idx) => (
                    <span key={idx} className="bg-slate-50 text-slate-700 px-4 py-1.5 rounded-xl text-[11px] font-bold border border-slate-200 hover:bg-white hover:border-indigo-200 transition-all cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="flex items-center text-xs uppercase tracking-widest font-bold text-emerald-600 mb-4">
                  <i className="fa-solid fa-chart-line mr-2"></i>
                  Análisis de Ventajas
                </h4>
                <ul className="space-y-2">
                  {mode.advantages.map((adv, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                      <i className="fa-solid fa-check text-emerald-500 mt-1"></i>
                      <span className="font-medium">{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="flex items-center text-xs uppercase tracking-widest font-bold text-rose-500 mb-4">
                  <i className="fa-solid fa-triangle-exclamation mr-2"></i>
                  Limitaciones
                </h4>
                <ul className="space-y-2">
                  {mode.disadvantages.map((dis, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                      <i className="fa-solid fa-xmark text-rose-400 mt-1"></i>
                      <span className="font-medium">{dis}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModeCard;
