
import React from 'react';
import { TRANSPORT_MODES, LEGAL_REFERENCES, TransportRating } from './constants';
import ModeCard from './components/ModeCard';
import AIAssistant from './components/AIAssistant';

const RatingBadge: React.FC<{ rating: TransportRating }> = ({ rating }) => {
  const colors = {
    high: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    medium: 'bg-amber-50 text-amber-700 border-amber-200',
    low: 'bg-rose-50 text-rose-700 border-rose-200',
    neutral: 'bg-slate-50 text-slate-700 border-slate-200'
  };

  return (
    <div className={`inline-flex flex-col items-center px-4 py-2.5 rounded-2xl border ${colors[rating.level]} transition-all hover:scale-105 shadow-sm w-full max-w-[110px]`}>
      <span className="text-[10px] uppercase font-black tracking-tighter opacity-60 mb-1">{rating.value}</span>
      <span className="text-[11px] font-bold whitespace-nowrap">{rating.label}</span>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-indigo-100 bg-[#fbfcfd]">
      {/* Dynamic Header */}
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
            alt="Logistic background" 
            className="w-full h-full object-cover opacity-30 scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in">
            Guía Estratégica {new Date().getFullYear()}
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            Sistemas de <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400">Distribución</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl font-medium leading-relaxed mb-12 mx-auto lg:mx-0">
            Domina los medios y modos de transporte para optimizar las cadenas de suministro globales. Eficiencia, costo y velocidad en un solo lugar.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {TRANSPORT_MODES.map((mode) => (
              <a 
                key={mode.id} 
                href={`#${mode.id}`} 
                className="group flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl hover:bg-white/10 transition-all hover:translate-y-[-4px]"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${mode.color.replace('bg-', 'bg-opacity-20 ')} ${mode.color.replace('bg-', 'text-')}`}>
                   <i className={`fa-solid ${mode.icon}`}></i>
                </div>
                <span className="text-white font-bold text-sm tracking-wide">{mode.title}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <i className="fa-solid fa-chevron-down text-slate-500 text-xl"></i>
        </div>
      </header>

      {/* Core Concepts */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-blue-500/10 text-8xl transition-transform group-hover:scale-110">
                <i className="fa-solid fa-box-archive"></i>
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl font-extrabold text-slate-800 mb-6 tracking-tight">El Medio</h2>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                  Corresponde al <span className="text-blue-600 font-bold">elemento físico</span> que permite el traslado. Es la herramienta tangible: el vehículo, la aeronave, el buque o el tren que porta la carga.
                </p>
              </div>
            </div>
            
            <div className="relative p-10 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 text-indigo-500/10 text-8xl transition-transform group-hover:scale-110">
                <i className="fa-solid fa-route"></i>
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl font-extrabold mb-6 tracking-tight">El Modo</h2>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  Es el <span className="text-indigo-400 font-bold">sistema operativo</span>. Engloba la infraestructura técnica, la gestión, las normativas y las terminales que permiten el flujo constante de los medios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix Section */}
      <section className="py-24 bg-white border-y border-slate-100 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-indigo-600 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Visión Comparativa</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Matriz de Decisión Estratégica</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto italic">Selecciona el modo ideal basado en indicadores clave de rendimiento (KPI).</p>
          </div>
          
          <div className="relative bg-white rounded-[3rem] border border-slate-200/60 shadow-2xl shadow-slate-200/30 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[950px]">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-8 text-xs uppercase tracking-widest font-bold border-b border-slate-800 w-1/5">Criterio Logístico</th>
                  {TRANSPORT_MODES.map(mode => (
                    <th key={mode.id} className="p-8 text-center border-b border-slate-800">
                      <div className="flex flex-col items-center gap-2">
                        <i className={`fa-solid ${mode.icon} opacity-50 text-xl`}></i>
                        <span className="text-xs font-black uppercase tracking-wider">{mode.title.split(' ')[1]}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { label: 'Costo Operativo', key: 'cost' as const },
                  { label: 'Tiempo de Tránsito', key: 'speed' as const },
                  { label: 'Capacidad de Carga', key: 'capacity' as const },
                  { label: 'Flexibilidad Rutas', key: 'flexibility' as const },
                  { label: 'Sostenibilidad', key: 'eco' as const }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-8">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                        <span className="text-sm font-black text-slate-700 uppercase tracking-tight">{row.label}</span>
                      </div>
                    </td>
                    {TRANSPORT_MODES.map(mode => (
                      <td key={mode.id} className="p-6 text-center">
                        <div className="flex justify-center">
                          <RatingBadge rating={mode.ratings[row.key]} />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Analysis Section */}
      <section className="py-24 px-6 bg-[#fbfcfd]">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-sm uppercase tracking-[0.4em] font-black text-slate-400 whitespace-nowrap">Exploración de Modos</h2>
            <div className="h-px w-full bg-slate-200"></div>
          </div>
          
          {TRANSPORT_MODES.map((mode) => (
            <ModeCard key={mode.id} mode={mode} />
          ))}
        </div>
      </section>

      {/* Legal & Footer */}
      <footer className="bg-white py-24 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-20 border-b border-slate-100 pb-20">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-widest">Marco Normativo</h3>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                {LEGAL_REFERENCES.map((ref, idx) => (
                  <div key={idx} className="flex gap-4 p-5 rounded-3xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all group">
                    <i className="fa-solid fa-scale-balanced text-indigo-400 mt-1 opacity-40 group-hover:opacity-100 transition-opacity"></i>
                    <p className="text-slate-500 text-sm leading-relaxed font-semibold">
                      {ref}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col justify-center bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl border border-indigo-500/20">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400 mb-4">Información del Proyecto</span>
              <div className="space-y-1 mb-6">
                <p className="text-xs text-indigo-300 font-bold uppercase tracking-widest">Aprendiz:</p>
                <h4 className="text-2xl font-black leading-tight text-white">Camilo Andres Leon Rubriche</h4>
              </div>
              <div className="space-y-1 mb-8">
                <p className="text-xs text-indigo-300 font-bold uppercase tracking-widest">Formación:</p>
                <p className="text-slate-200 text-sm font-bold leading-relaxed">
                  Técnico en operaciones de comercio exterior 2026
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                  <i className="fa-brands fa-linkedin-in text-sm"></i>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                  <i className="fa-solid fa-envelope text-sm"></i>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Logistics Hub Pro · Concept Infographic
            </p>
            <div className="flex items-center gap-2 text-slate-300 text-[10px] font-bold uppercase tracking-widest">
              <span>Desarrollado con</span>
              <i className="fa-solid fa-heart text-rose-500 animate-pulse"></i>
              <span>para Comercio Exterior</span>
            </div>
          </div>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;
