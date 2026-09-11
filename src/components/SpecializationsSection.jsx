import React from 'react';
import { SPECIALIZATIONS_LIST } from '../data/eledentData';
import { Stethoscope, Activity, Crown, Sparkles, ShieldCheck, Zap, Baby, Scissors, Smile } from 'lucide-react';

const SPEC_ICONS = [
  Stethoscope, Activity, Crown, Sparkles, ShieldCheck,
  Zap, Baby, Scissors, Scissors, Smile
];

export default function SpecializationsSection() {
  return (
    <section className="py-16 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0284C7] uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Official Eledent Departments
          </div>
          <h2 className="text-3xl font-extrabold text-[#0A2540]">
            Our Dental Specializations
          </h2>
          <p className="text-sm text-slate-600">
            Multidisciplinary specialist dental care categories published on the official Eledent doctors directory.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {SPECIALIZATIONS_LIST.map((spec, idx) => {
            const Icon = SPEC_ICONS[idx % SPEC_ICONS.length];
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#00A896]/40 hover:bg-[#E6F6F4]/30 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-[#00A896] border border-slate-200 flex items-center justify-center mb-3 shadow-xs group-hover:bg-[#00A896] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#0A2540] mb-1 group-hover:text-[#00A896] transition-colors">
                  {spec.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {spec.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
