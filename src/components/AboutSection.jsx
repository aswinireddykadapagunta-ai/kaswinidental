import React from 'react';
import { CLINIC_INFO } from '../data/eledentData';
import { CheckCircle2, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    { title: "Accurate Diagnosis", desc: "Digital 3D scanning and CBCT imaging ensure precision evaluation before treatment." },
    { title: "Gentle Treatment", desc: "Patient-centered approaches focusing on physical comfort and reduced treatment anxiety." },
    { title: "Clear Treatment Planning", desc: "Transparent step-by-step guidance so patients fully understand their care options." },
    { title: "Digital Workflows", desc: "Modern intraoral scanners and CEREC CAD/CAM digital dental workflows." },
    { title: "Patient Comfort", desc: "Comfortable clinical suites, conscious sedation availability, and structured OPD slots." },
    { title: "Long-Term Oral Health", desc: "Comprehensive preventive and restorative procedures focused on lasting clinical outcomes." }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Factual Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00A896] uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              <Sparkles className="w-3.5 h-3.5" />
              About Eledent Dental Hospital
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight">
              Comprehensive Dental Care in <span className="text-[#00A896]">Banjara Hills</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Eledent Dental Hospital operates in Banjara Hills, Hyderabad, delivering advanced orthodontic, endodontic, implantological, and routine dental care. Equipped with contemporary technology and structured clinical workflows, our team prioritizes accurate diagnostics and patient convenience.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-[#00A896] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-[#0A2540]">{item.title}</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A2540] text-white text-sm font-semibold hover:bg-[#16365C] transition-all shadow-md group"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4 text-[#00A896] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Factual Overview Banner */}
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-br from-[#0A2540] to-[#16365C] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl"></div>

              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A896]"></span>
                Hospital Positioning & Factual Notice
              </h3>

              <div className="space-y-4 text-sm text-slate-200">
                <p className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 leading-relaxed">
                  "Eledent Dental Hospital's Banjara Hills branch provides advanced orthodontic and routine dental care with modern technology, clear treatment planning and patient-focused care."
                </p>

                <div className="grid grid-cols-2 gap-4 text-xs pt-2">
                  <div className="bg-slate-900/50 p-3 rounded-lg border border-white/10">
                    <span className="text-slate-400 block mb-1">Established Practice</span>
                    <span className="font-bold text-teal-300 text-sm">20+ Years Experience</span>
                  </div>
                  <div className="bg-slate-900/50 p-3 rounded-lg border border-white/10">
                    <span className="text-slate-400 block mb-1">Clinical Record</span>
                    <span className="font-bold text-white text-sm">30,000+ Cases</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-teal-500/15 border border-teal-500/30 text-teal-200 text-xs">
                  <strong>Consultation & Diagnostic Notice:</strong> Consultation fee is ₹300. Clinical examination and treatment discussion are included; X-rays or scans advised only if clinically required.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
