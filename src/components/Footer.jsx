import React from 'react';
import { CLINIC_INFO } from '../data/eledentData';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-[#0A2540] text-white pt-16 pb-24 md:pb-12 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Positioning Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00A896] flex items-center justify-center text-white font-extrabold text-xl shadow-md">
                E
              </div>
              <div>
                <div className="font-extrabold text-xl text-white tracking-tight leading-none">
                  ELEDENT
                </div>
                <div className="text-xs font-semibold text-teal-400 tracking-wider uppercase">
                  Dental Hospital • Banjara Hills
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              {CLINIC_INFO.heroDescription}
            </p>

            <div className="flex items-center gap-2 text-xs text-teal-300 font-semibold bg-white/5 p-3 rounded-xl border border-white/10 w-fit">
              <ShieldCheck className="w-4 h-4 text-[#00A896]" />
              20+ Years Experience • 30,000+ Cases
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider text-teal-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#hero" className="hover:text-teal-300 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Services</a></li>
              <li><a href="#doctors" className="hover:text-teal-300 transition-colors">Doctors</a></li>
              <li><a href="#technology" className="hover:text-teal-300 transition-colors">Technology</a></li>
              <li><a href="#why-us" className="hover:text-teal-300 transition-colors">Why Eledent</a></li>
              <li><a href="#location" className="hover:text-teal-300 transition-colors">Location & Map</a></li>
              <li><a href="#faq" className="hover:text-teal-300 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact & Address Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider text-teal-400">
              Banjara Hills Clinic
            </h4>
            <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                <span>
                  <strong>Raichandani Construction</strong><br />
                  Road No. 12, Sri Ram Nagar Colony,<br />
                  Banjara Hills, Hyderabad, Telangana – 500034
                </span>
              </div>
              
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#00A896] shrink-0" />
                <a href={`tel:${CLINIC_INFO.contact.phoneClean}`} className="hover:text-teal-300 transition-colors font-semibold text-white">
                  {CLINIC_INFO.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00A896] shrink-0" />
                <a href={`mailto:${CLINIC_INFO.contact.email}`} className="hover:text-teal-300 transition-colors">
                  {CLINIC_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Visiting Hours & CTA */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider text-teal-400">
              Visiting Hours
            </h4>
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-white/10 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-white font-bold">
                <Clock className="w-4 h-4 text-[#00A896]" />
                Mon – Sun: 9:30 AM – 9:00 PM
              </div>
              <p className="text-[11px] text-slate-400">
                Consultation Fee: ₹300 (Clinical examination & consultation included).
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 rounded-xl bg-[#00A896] hover:bg-[#028090] text-white font-bold text-xs shadow-md transition-colors"
            >
              Book Appointment
            </button>
          </div>

        </div>

        {/* Bottom Bar: Legal & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Eledent Dental Hospital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#faq" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <a href="#faq" className="hover:text-slate-200 transition-colors">Terms & Conditions</a>
            <a href="#location" className="hover:text-slate-200 transition-colors">Sitemap</a>
          </div>
        </div>

        <div className="mt-4 text-[10px] text-slate-500 text-center border-t border-slate-800/60 pt-4">
          Disclaimer: Information displayed is sourced exclusively from the official Eledent Dental Hospital website. Clinical evaluation by a qualified dentist is required for diagnosis.
        </div>

      </div>
    </footer>
  );
}
