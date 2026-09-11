import React from 'react';
import { ShieldCheck, Award, Users, Cpu, Clock, Calendar, CheckCircle2, MapPin } from 'lucide-react';

export default function WhyChooseSection({ onOpenBooking }) {
  const reasons = [
    {
      icon: Award,
      title: "20+ Years of Experience",
      desc: "Extensive clinical track record in delivering multi-disciplinary dental treatments."
    },
    {
      icon: Users,
      title: "30,000+ Successful Cases",
      desc: "Proven clinical experience across routine, orthodontic, endodontic, and surgical cases."
    },
    {
      icon: Cpu,
      title: "Advanced Technology & Digital Workflows",
      desc: "3D CBCT imaging, CEREC digital scanning, and microscopic operating systems."
    },
    {
      icon: ShieldCheck,
      title: "Specialist-Led Dental Care",
      desc: "Treatments planned and delivered by specialized dentists and surgeons (BDS & MDS)."
    },
    {
      icon: Clock,
      title: "Structured Appointment Slots",
      desc: "Organized appointment scheduling to help reduce patient waiting times."
    },
    {
      icon: Calendar,
      title: "Same-Day Crowns in Suitable Cases",
      desc: "CEREC CAD/CAM technology enables single-visit restorations where clinically suitable."
    },
    {
      icon: CheckCircle2,
      title: "Daily OPD Visiting Hours",
      desc: "Visiting hours available Mon – Sun from 9:30 AM to 9:00 PM for patient convenience."
    },
    {
      icon: MapPin,
      title: "Accessible Banjara Hills Location",
      desc: "Located on Road No. 12 at Raichandani Construction with nearby hospital and park landmarks."
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00A896] uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Factual Practice Advantages
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            Why Patients Choose Eledent Dental Hospital
          </h2>

          <p className="text-base text-slate-600">
            Key clinical standards, convenience factors, and source-verified capabilities of our Banjara Hills hospital.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#00A896]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E6F6F4] text-[#00A896] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-[#0A2540] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-[#00A896] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Source
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-[#0A2540] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Ready to schedule your consultation in Banjara Hills?
            </h3>
            <p className="text-sm text-slate-300">
              Consultation fee is ₹300. Includes detailed examination and clear treatment planning.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="px-6 py-3.5 rounded-xl bg-[#00A896] hover:bg-[#028090] text-white font-bold text-sm shadow-md whitespace-nowrap transition-all"
          >
            Book Appointment Now
          </button>
        </div>

      </div>
    </section>
  );
}
