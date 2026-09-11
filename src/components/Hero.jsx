import React from 'react';
import { CLINIC_INFO } from '../data/eledentData';
import { Calendar, Phone, Navigation, ShieldCheck, Award, Users, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white py-12 md:py-20 overflow-hidden">
      
      {/* Background Decorative SVG Graphic Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-100/50 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-sky-100/50 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F6F4] border border-[#00A896]/30 text-[#00A896] text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#00A896] animate-pulse"></span>
              {CLINIC_INFO.eyebrow}
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.15]">
              Advanced Dental Care in <span className="text-[#00A896]">Banjara Hills</span>
            </h1>

            {/* Supporting Text strictly from official source */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              {CLINIC_INFO.heroDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-[#00A896] hover:bg-[#028090] shadow-lg shadow-teal-500/25 hover:shadow-xl transition-all flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-5 h-5" />
                Book an Appointment
              </button>

              <a
                href={`tel:${CLINIC_INFO.contact.phoneClean}`}
                className="px-6 py-3.5 rounded-xl text-base font-semibold text-[#0A2540] bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-5 h-5 text-[#00A896]" />
                Call +91 7799619994
              </a>
            </div>

            {/* Secondary Direct Link */}
            <div className="pt-1">
              <a
                href="#location"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0284C7] hover:text-[#0A2540] transition-colors group"
              >
                <Navigation className="w-4 h-4 text-[#00A896] group-hover:translate-x-0.5 transition-transform" />
                Get Directions to Banjara Hills Clinic
                <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Verified Source Trust Badges */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-1.5 text-[#00A896] font-bold text-xl md:text-2xl">
                  <Award className="w-5 h-5 text-[#00A896]" />
                  20+
                </div>
                <div className="text-xs text-slate-500 font-medium">Years Experience</div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-1.5 text-[#0A2540] font-bold text-xl md:text-2xl">
                  <Users className="w-5 h-5 text-[#0284C7]" />
                  30,000+
                </div>
                <div className="text-xs text-slate-500 font-medium">Successful Cases</div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-1.5 text-[#00A896] font-bold text-xl md:text-2xl">
                  <ShieldCheck className="w-5 h-5 text-[#00A896]" />
                  10X
                </div>
                <div className="text-xs text-slate-500 font-medium">Sterilization</div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm">
                <div className="text-[#0A2540] font-bold text-base md:text-lg">
                  Mon – Sun
                </div>
                <div className="text-xs text-slate-500 font-medium">9:30 AM – 9 PM</div>
              </div>
            </div>

          </div>

          {/* Right Column - Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-slate-900 to-[#0A2540] text-white p-8 space-y-6">
                
                {/* Clinical Badge */}
                <div className="flex items-center justify-between">
                  <div className="px-3 py-1 rounded-md bg-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-wider border border-teal-500/30">
                    Banjara Hills Center
                  </div>
                  <span className="text-xs text-slate-300 font-medium">Hyderabad</span>
                </div>

                {/* Imagery / Clinical Graphics Container */}
                <div className="relative h-56 rounded-2xl bg-gradient-to-tr from-[#0A2540] via-[#16365C] to-[#00A896] p-6 flex flex-col justify-between overflow-hidden shadow-inner">
                  <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="text-xs uppercase font-bold text-teal-300 tracking-wider mb-1">
                      Advanced Technology
                    </div>
                    <div className="text-xl font-bold text-white">
                      Digital Workflows & Modern Microscopic Care
                    </div>
                  </div>

                  <div className="relative z-10 grid grid-cols-2 gap-2 text-xs bg-slate-900/60 backdrop-blur-md p-3 rounded-xl border border-white/10">
                    <div>
                      <span className="text-slate-400 block">Consultation Fee</span>
                      <span className="font-bold text-teal-300 text-sm">₹300</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Visiting Hours</span>
                      <span className="font-semibold text-white text-xs">9:30 AM – 9:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Factual Highlight Items */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <div className="w-2 h-2 rounded-full bg-[#00A896]"></div>
                    <span>3D CBCT Scans & Digital Intraoral Workflows</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <div className="w-2 h-2 rounded-full bg-[#00A896]"></div>
                    <span>Single-Visit Dentistry & CEREC CAD/CAM</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <div className="w-2 h-2 rounded-full bg-[#00A896]"></div>
                    <span>Microscopic Root Canals & Laser Gum Therapy</span>
                  </div>
                </div>

                {/* Quick Action Button */}
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-3 rounded-xl bg-white text-[#0A2540] font-bold text-sm hover:bg-slate-100 transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#00A896]" />
                  Schedule Consultation (₹300)
                </button>

              </div>

              {/* Floating Floating Stat Pill */}
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex animate-float">
                <div className="w-10 h-10 rounded-xl bg-[#E6F6F4] flex items-center justify-center text-[#00A896]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0A2540]">Structured Slots</div>
                  <div className="text-[11px] text-slate-500">Reduced Waiting Times</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
