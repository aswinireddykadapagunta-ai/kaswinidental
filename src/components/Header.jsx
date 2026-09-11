import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/eledentData';
import { Phone, Calendar, Menu, X, Clock, MapPin, ChevronRight } from 'lucide-react';

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Specialists', href: '#doctors' },
    { name: 'Technology', href: '#technology' },
    { name: 'Why Eledent', href: '#why-us' },
    { name: 'Location', href: '#location' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <>
      {/* Top Banner - Factual Visiting Hours & Address */}
      <div className="bg-[#0A2540] text-white text-xs py-2 px-4 border-b border-slate-700/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6 text-slate-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#00A896]" />
              Road No. 12, Banjara Hills, Hyderabad - 500034
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#00A896]" />
              Visiting Hours: Mon – Sun: 9:30 AM – 9:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${CLINIC_INFO.contact.phoneClean}`}
              className="text-slate-200 hover:text-white font-medium flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#00A896]" />
              {CLINIC_INFO.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A2540] to-[#00A896] flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              E
            </div>
            <div>
              <div className="font-extrabold text-lg md:text-xl text-[#0A2540] tracking-tight leading-none">
                ELEDENT
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-[#00A896] tracking-wider uppercase">
                Dental Hospital • Banjara Hills
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-[#00A896] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00A896] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.contact.phoneClean}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-[#0A2540] bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#00A896]" />
              Call Now
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#00A896] hover:bg-[#028090] shadow-md shadow-teal-500/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${CLINIC_INFO.contact.phoneClean}`}
              aria-label="Call Eledent Hospital"
              className="p-2.5 rounded-lg text-[#0A2540] bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-5 h-5 text-[#00A896]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2.5 rounded-lg text-[#0A2540] hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[60px] bg-white z-50 overflow-y-auto border-t border-slate-100 p-6 flex flex-col justify-between animate-fade-in">
            <div className="space-y-4">
              <div className="pb-4 border-b border-slate-100">
                <div className="text-xs font-semibold text-[#00A896] uppercase tracking-wider mb-1">
                  Banjara Hills Branch
                </div>
                <div className="text-sm text-slate-600">
                  Raichandani Construction, Road No. 12
                </div>
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-base font-semibold text-slate-800 hover:text-[#00A896] py-3 px-2 rounded-lg hover:bg-slate-50 border-b border-slate-50"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="mt-8 space-y-3 pt-6 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-4 rounded-xl text-base font-semibold text-white bg-[#00A896] flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-5 h-5" />
                Book an Appointment
              </button>
              <a
                href={`tel:${CLINIC_INFO.contact.phoneClean}`}
                className="w-full py-3.5 px-4 rounded-xl text-base font-semibold text-[#0A2540] bg-slate-100 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-[#00A896]" />
                Call +91 7799619994
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
