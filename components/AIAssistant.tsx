
import React, { useState, useRef, useEffect } from 'react';
import { getLogisticsAdvice } from '../services/geminiService';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const response = await getLogisticsAdvice(input);
    const aiMsg: Message = { role: 'assistant', content: response || "Lo siento, hubo un error técnico." };
    
    setMessages(prev => [...prev, aiMsg]);
    setLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 w-16 h-16 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 z-50 group ${isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-indigo-600 text-white hover:scale-110'}`}
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-robot'} text-2xl`}></i>
        {!isOpen && (
           <span className="absolute -top-2 -right-2 flex h-4 w-4">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-500"></span>
           </span>
        )}
      </button>

      <div className={`fixed top-0 right-0 h-full bg-white/95 backdrop-blur-xl shadow-[-20px_0_50px_-12px_rgba(0,0,0,0.1)] z-40 transition-all duration-500 ease-in-out w-full sm:w-[450px] flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 border-b bg-slate-900 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight">Logistics Hub AI</h3>
              <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest mt-1">Inteligencia Multimodal</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center px-10">
              <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center mb-6 text-indigo-500">
                <i className="fa-solid fa-brain text-4xl"></i>
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">¿En qué puedo ayudarte hoy?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Pregúntame sobre optimización de rutas, regulaciones internacionales o comparativas de costos por modo.
              </p>
            </div>
          )}
          
          {messages.map((m, idx) => (
            <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[90%] p-4 rounded-3xl ${m.role === 'user' ? 'bg-indigo-600 text-white rounded-br-none shadow-lg' : 'bg-slate-100 text-slate-800 rounded-bl-none'}`}>
                <p className="text-sm font-medium leading-relaxed whitespace-pre-wrap">{m.content}</p>
              </div>
            </div>
          ))}
          
          {loading && (
            <div className="flex justify-start">
              <div className="bg-slate-100 p-4 rounded-3xl rounded-bl-none flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-100">
          <div className="relative group">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe tu consulta logística..."
              className="w-full bg-white border border-slate-200 rounded-2xl pl-5 pr-14 py-4 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm"
            />
            <button 
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="absolute right-2 top-2 w-10 h-10 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all disabled:opacity-20 flex items-center justify-center shadow-md"
            >
              <i className="fa-solid fa-paper-plane text-sm"></i>
            </button>
          </div>
          <p className="text-[10px] text-center text-slate-400 mt-4 font-semibold uppercase tracking-widest">Powered by Google Gemini 3</p>
        </div>
      </div>
    </>
  );
};

export default AIAssistant;
