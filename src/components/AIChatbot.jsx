import React, { useState, useRef, useEffect } from 'react';
import { CHATBOT_KNOWLEDGE, CLINIC_INFO, SERVICES_LIST, DOCTORS_LIST, FAQ_LIST } from '../data/eledentData';
import { Bot, X, Send, Sparkles, User, RefreshCw, Phone, Calendar, Shield } from 'lucide-react';

export default function AIChatbot({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: CHATBOT_KNOWLEDGE.greeting,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping, isOpen]);

  // Robust Intent Resolution Engine
  const processQuery = (rawQuery) => {
    const q = rawQuery.toLowerCase().trim();

    // 1. System Prompt Protection Guard
    if (
      q.includes('system prompt') || 
      q.includes('developer instruction') || 
      q.includes('internal instruction') || 
      q.includes('api key') || 
      q.includes('reveal prompt')
    ) {
      return CHATBOT_KNOWLEDGE.systemPromptProtectionReply;
    }

    // 2. Medical Diagnosis Safety Guardrail
    if (
      q.includes('do i have a cavity') || 
      q.includes('do i need a root canal') || 
      q.includes('diagnose') || 
      q.includes('prescribe') || 
      q.includes('medicine for pain') || 
      q.includes('what antibiotic')
    ) {
      return `${CHATBOT_KNOWLEDGE.medicalSafetyDisclaimer}`;
    }

    // 3. Ambiguous Price Query
    if (q === 'how much does it cost?' || q === 'how much cost' || q === 'price' || q === 'cost' || q === 'fees') {
      return "Could you tell me which treatment you mean—for example, a root canal, implant, braces or crown?";
    }

    // 4. Consultation Fee
    if (q.includes('consultation fee') || q.includes('consultation cost') || q.includes('doctor fee') || q.includes('opd fee')) {
      return CLINIC_INFO.consultationDetails;
    }

    // 5. Timings & Visiting Hours
    if (q.includes('timing') || q.includes('hours') || q.includes('open') || q.includes('visiting hours') || q.includes('sunday')) {
      return `Banjara Hills Visiting Hours are: ${CLINIC_INFO.timings.visitingHours}. General hospital OPD hours are ${CLINIC_INFO.timings.generalOpd}.`;
    }

    // 6. Location & Address
    if (q.includes('location') || q.includes('address') || q.includes('where') || q.includes('direction') || q.includes('landmark')) {
      return `Our Banjara Hills address is: ${CLINIC_INFO.address.fullAddress}. Landmarks include near ${CLINIC_INFO.landmarks.slice(0, 4).join(', ')}.`;
    }

    // 7. Appointment Booking Handoff
    if (q.includes('book') || q.includes('appointment') || q.includes('schedule') || q.includes('slot')) {
      return CHATBOT_KNOWLEDGE.bookingHandoffReply;
    }

    // 8. Doctors / Dentists Directory
    if (q.includes('doctor') || q.includes('dentist') || q.includes('specialist') || q.includes('who are your dentists')) {
      const sampleDocs = DOCTORS_LIST.slice(0, 5).map(d => `${d.name} (${d.specialization}, ${d.qualification})`).join('\n• ');
      return `We have 20 specialists listed on the official page, including:\n• ${sampleDocs}\n\nNote: Doctor availability may vary by branch and appointment schedule. Contact +91 7799619994 for current availability.`;
    }

    // 9. Specific Services / Invisalign / Implants / Sedation / Root Canal
    if (q.includes('invisalign')) {
      return "Yes. Invisalign Treatment is listed among the official Banjara Hills orthodontic services. For detailed consultation, please schedule a visit (Fee: ₹300).";
    }
    if (q.includes('implant')) {
      return "Yes. Advanced and Painless Dental Implants are listed among our hospital services.";
    }
    if (q.includes('sedation') || q.includes('conscious sedation')) {
      return "Yes. Conscious Sedation is listed as a service on the Banjara Hills page. For suitability, availability and cost, please contact the clinic at +91 7799619994.";
    }
    if (q.includes('root canal') || q.includes('rct')) {
      return "Yes. Root Canal Treatment with microscopic and laser-assisted systems is officially available at our Banjara Hills branch.";
    }

    // 10. All Services Summary
    if (q.includes('services') || q.includes('treatments') || q.includes('what do you offer')) {
      const topServices = SERVICES_LIST.slice(0, 6).map(s => s.title).join(', ');
      return `We offer 19 official services including: ${topServices}, and more. You can view the complete list in our Services section.`;
    }

    // 11. Technology
    if (q.includes('technology') || q.includes('equipment') || q.includes('cbct') || q.includes('laser') || q.includes('3d scanner')) {
      return "Our Banjara Hills clinic is equipped with 3D Scanners, CBCT 3D X-Ray, CEREC CAD/CAM, Microscopic & Laser Root Canal Systems, Laser Gum Care, Self-cleaning chairs, and a 10X Sterilization Process.";
    }

    // 12. Contact Number
    if (q.includes('phone') || q.includes('contact') || q.includes('call') || q.includes('number') || q.includes('email')) {
      return `You can reach Eledent Dental Hospital Banjara Hills directly at Phone: ${CLINIC_INFO.contact.phone} or Email: ${CLINIC_INFO.contact.email}.`;
    }

    // Fallback: Unknown Info
    return CHATBOT_KNOWLEDGE.unknownInfoReply;
  };

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Append User Message
    const userMsg = { sender: 'user', text: query, timestamp: time };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate natural response latency
    setTimeout(() => {
      const replyText = processQuery(query);
      const botMsg = { sender: 'bot', text: replyText, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      {/* Mobile: bottom-24 (above mobile sticky bottom bar); Desktop: bottom-6 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Eledent AI Care Assistant Chatbot"
        className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-40 p-4 rounded-full bg-[#00A896] hover:bg-[#028090] text-white shadow-2xl flex items-center gap-2.5 transition-all transform hover:scale-105 active:scale-95 animate-pulse-glow"
      >
        <Bot className="w-6 h-6" />
        <span className="hidden sm:inline font-bold text-xs">Eledent AI Assistant</span>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping"></span>
      </button>

      {/* Chat Window Container */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:bottom-20 md:right-6 z-50 w-[92vw] sm:w-[380px] h-[520px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-fade-in">
          
          {/* Chatbot Header */}
          <div className="bg-gradient-to-r from-[#0A2540] to-[#16365C] p-4 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/40 text-teal-300 flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight flex items-center gap-1.5">
                  {CHATBOT_KNOWLEDGE.name}
                  <Shield className="w-3.5 h-3.5 text-teal-300" />
                </h3>
                <span className="text-[10px] text-teal-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Verified Official Knowledge Base
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-lg bg-[#00A896] text-white flex items-center justify-center text-xs shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] p-3 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#0A2540] text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-200/80 shadow-xs rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span
                    className={`block text-[9px] mt-1 ${
                      msg.sender === 'user' ? 'text-slate-300 text-right' : 'text-slate-400'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-xs text-slate-400 pl-9">
                <span className="animate-pulse">Eledent Assistant is typing...</span>
              </div>
            )}
          </div>

          {/* Quick Suggestion Prompt Chips */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {CHATBOT_KNOWLEDGE.samplePrompts.slice(0, 4).map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(prompt)}
                className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-slate-100 hover:bg-teal-50 hover:text-[#00A896] text-slate-600 border border-slate-200/60 whitespace-nowrap transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about treatments, timings, fee..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#00A896] outline-none"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim()}
              className="p-2.5 rounded-xl bg-[#00A896] hover:bg-[#028090] text-white disabled:opacity-40 transition-all shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* Direct Booking Link Footer inside Chat */}
          <div className="bg-slate-100 px-3 py-1.5 text-center text-[10px] text-slate-500 border-t border-slate-200 flex justify-between items-center">
            <span>Direct helpline: +91 7799619994</span>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="font-bold text-[#00A896] underline"
            >
              Book Appointment
            </button>
          </div>

        </div>
      )}
    </>
  );
}
