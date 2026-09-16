import React, { useState, useRef, useEffect } from 'react';
import { getLogisticsAdvice } from '../services/geminiService';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, loading]);

  const handleSend = async () => {
    const prompt = input.trim();
    if (!prompt || loading) return;
    setMessages(prev => [...prev, { role: 'user', content: prompt }]);
    setInput('');
    setLoading(true);
    try {
      const response = await getLogisticsAdvice(prompt);
      setMessages(prev => [...prev, { role: 'assistant', content: response || 'No response was returned.' }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'We could not process your question. Please try again.' }]);
    } finally { setLoading(false); }
  };

  return (
    <>
      <button type="button" aria-label={isOpen ? 'Close AI assistant' : 'Open AI assistant'} onClick={() => setIsOpen(!isOpen)} className={`fixed bottom-8 right-8 w-16 h-16 rounded-2xl shadow-2xl flex items-center justify-center z-50 ${isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-indigo-600 text-white hover:scale-110'}`}><i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-robot'} text-2xl`}></i></button>
      <div className={`fixed top-0 right-0 h-full bg-white/95 z-40 transition-all duration-500 w-full sm:w-[450px] flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 border-b bg-slate-900 text-white"><h3 className="text-2xl font-extrabold">Logistics Hub AI</h3><p className="text-xs text-indigo-400 font-bold uppercase tracking-widest mt-1">Multimodal intelligence</p></div>
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.length === 0 && <div className="h-full flex flex-col items-center justify-center text-center px-10"><div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center mb-6 text-indigo-500"><i className="fa-solid fa-brain text-4xl"></i></div><h4 className="text-xl font-bold text-slate-800 mb-2">How can I help?</h4><p className="text-slate-500 text-sm leading-relaxed">Ask about routes, international regulations, or transport-mode costs.</p></div>}
          {messages.map((m, idx) => <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}><div className={`max-w-[90%] p-4 rounded-3xl ${m.role === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-slate-100 text-slate-800 rounded-bl-none'}`}><p className="text-sm leading-relaxed whitespace-pre-wrap">{m.content}</p></div></div>)}
          {loading && <div className="flex justify-start"><div className="bg-slate-100 p-4 rounded-3xl text-sm text-slate-500">Thinking...</div></div>}
          <div ref={chatEndRef} />
        </div>
        <div className="p-6 bg-slate-50 border-t"><div className="relative"><input aria-label="Logistics question" type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} placeholder="Ask a logistics question..." className="w-full bg-white border rounded-2xl pl-5 pr-14 py-4 text-sm" /><button type="button" aria-label="Send question" onClick={handleSend} disabled={loading || !input.trim()} className="absolute right-2 top-2 w-10 h-10 bg-indigo-600 text-white rounded-xl disabled:opacity-20"><i className="fa-solid fa-paper-plane text-sm"></i></button></div><p className="text-[10px] text-center text-slate-400 mt-4 uppercase tracking-widest">Powered by Google Gemini</p></div>
      </div>
    </>
  );
};

export default AIAssistant;
