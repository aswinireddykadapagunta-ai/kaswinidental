import React from 'react';
import { Users, Cpu, Stethoscope, MapPin } from 'lucide-react';

export default function QuickInfoBar() {
  const quickCards = [
    {
      icon: Users,
      title: "Experienced Dental Team",
      desc: "Specialist doctors across orthodontic, endodontic, implant & surgical dental disciplines."
    },
    {
      icon: Cpu,
      title: "Advanced Technology",
      desc: "CBCT 3D X-rays, CEREC CAD/CAM digital workflows & microscopic treatment systems."
    },
    {
      icon: Stethoscope,
      title: "Specialist Dental Care",
      desc: "Gentle procedures, clear treatment planning & patient-focused clinical comfort."
    },
    {
      icon: MapPin,
      title: "Convenient Banjara Hills Location",
      desc: "Raichandani Construction, Road No. 12 with daily OPD visiting hours from 9:30 AM to 9 PM."
    }
  ];

  return (
    <section className="bg-white py-8 border-y border-slate-200/80 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-[#E6F6F4]/50 border border-slate-100 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#00A896] shadow-sm group-hover:scale-105 group-hover:bg-[#00A896] group-hover:text-white transition-all shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#0A2540] group-hover:text-[#00A896] transition-colors mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
