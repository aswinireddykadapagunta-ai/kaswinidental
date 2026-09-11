import React from 'react';
import { CLINIC_INFO } from '../data/eledentData';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function MobileStickyBar({ onOpenBooking }) {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.contact.whatsapp}?text=${encodeURIComponent('Hi, I would like to inquire about an appointment at Eledent Dental Hospital Banjara Hills.')}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-2xl p-2 px-3 no-print">
      <div className="grid grid-cols-3 gap-2">
        
        {/* Call Action */}
        <a
          href={`tel:${CLINIC_INFO.contact.phoneClean}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 text-[#0A2540] font-semibold text-xs active:bg-slate-200 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#00A896] mb-0.5" />
          <span>Call</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 text-emerald-800 font-semibold text-xs active:bg-emerald-100 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book Appointment Action */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#00A896] text-white font-semibold text-xs shadow-md active:bg-[#028090] transition-colors"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span>Book</span>
        </button>

      </div>
    </div>
  );
}
