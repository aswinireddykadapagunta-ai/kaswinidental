import React, { useState } from 'react';
import { FAQ_LIST } from '../data/eledentData';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00A896] uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            <HelpCircle className="w-3.5 h-3.5" />
            Official Patient Information
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-base text-slate-600">
            Answers verified strictly against the official Eledent Dental Hospital Banjara Hills website.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left font-bold text-base text-[#0A2540] flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#E6F6F4] text-[#00A896] text-xs font-extrabold flex items-center justify-center shrink-0">
                      Q{index + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#00A896]' : ''
                    }`} 
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40 animate-fade-in">
                    <p className="pl-9">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom Note */}
        <div className="mt-10 text-center p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-500">
          Have more questions? Contact Eledent Dental Hospital directly at <a href="tel:+917799619994" className="font-bold text-[#00A896] underline">+91 7799619994</a> or email <a href="mailto:contact@eledenthospitals.com" className="font-bold text-[#00A896] underline">contact@eledenthospitals.com</a>.
        </div>

      </div>
    </section>
  );
}
