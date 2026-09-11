import React from 'react';
import { TECHNOLOGIES_LIST } from '../data/eledentData';
import { Cpu, Scan, Zap, Eye, ShieldCheck, Sparkles, Layers, Activity, Settings, RefreshCw, Layers3 } from 'lucide-react';

const TECH_ICONS = [
  Scan, Cpu, Sparkles, Eye, Zap, Zap, Settings, RefreshCw, ShieldCheck, Activity, Layers3
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00A896] uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            <Cpu className="w-3.5 h-3.5" />
            Digital Workflows & Clinical Equipment
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            Advanced Dental Technology
          </h2>

          <p className="text-base text-slate-600">
            State-of-the-art diagnostic, imaging, and sterilization technology utilized at our Banjara Hills hospital.
          </p>
        </div>

        {/* 11 Factual Technology Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {TECHNOLOGIES_LIST.map((tech, idx) => {
            const Icon = TECH_ICONS[idx % TECH_ICONS.length];
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#00A896]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white text-[#00A896] border border-slate-200 flex items-center justify-center shadow-xs group-hover:bg-[#00A896] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-200/60 px-2 py-0.5 rounded-md">
                      {tech.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#0A2540] group-hover:text-[#00A896] transition-colors mb-2">
                    {tech.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tech.detail}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-medium text-slate-400">
                  Verified Equipment • Banjara Hills
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
