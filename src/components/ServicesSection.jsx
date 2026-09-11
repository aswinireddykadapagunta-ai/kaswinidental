import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/eledentData';
import { 
  Baby, ShieldCheck, Zap, Sparkles, Smile, Layers, Sun, Activity, 
  Crown, HeartPulse, Award, Scissors, CheckCircle2, Feather, Clock, 
  Search, FileCheck, Moon, Grid, ChevronRight, X, Calendar 
} from 'lucide-react';

const ICON_MAP = {
  Baby, ShieldCheck, Zap, Sparkles, Smile, Layers, Sun, Activity,
  Crown, HeartPulse, Award, Scissors, CheckCircle2, Feather, Clock,
  Search, FileCheck, Moon, Grid
};

export default function ServicesSection({ onSelectServiceForBooking }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalService, setActiveModalService] = useState(null);

  const categories = ['All', ...new Set(SERVICES_LIST.map(s => s.category))];

  const filteredServices = SERVICES_LIST.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00A896] uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            <Sparkles className="w-3.5 h-3.5" />
            Official Banjara Hills Services
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            Our Dental Services
          </h2>

          <p className="text-base text-slate-600">
            Official treatments and specialized dental procedures available at our Banjara Hills hospital.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200/80 mb-10 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] outline-none"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Service Count Badge */}
            <div className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg shrink-0">
              Showing {filteredServices.length} of {SERVICES_LIST.length} Services
            </div>

          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#00A896] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of 19 Official Services */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-slate-500 text-sm mb-3">No services found matching your search term.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="text-xs font-bold text-[#00A896] underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const IconComponent = ICON_MAP[service.icon] || Sparkles;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#00A896]/40 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#E6F6F4] text-[#00A896] flex items-center justify-center group-hover:bg-[#00A896] group-hover:text-white transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                        {service.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg text-[#0A2540] group-hover:text-[#00A896] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mt-2 line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalService(service)}
                      className="text-xs font-semibold text-slate-600 hover:text-[#0A2540] flex items-center gap-1"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onSelectServiceForBooking(service.title)}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#00A896] bg-[#E6F6F4] hover:bg-[#00A896] hover:text-white transition-all flex items-center gap-1"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-fade-in border border-slate-100">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#E6F6F4] text-[#00A896] flex items-center justify-center shrink-0">
                {React.createElement(ICON_MAP[activeModalService.icon] || Sparkles, { className: "w-7 h-7" })}
              </div>
              <div>
                <span className="text-xs font-semibold text-[#00A896] bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-100">
                  {activeModalService.category}
                </span>
                <h3 className="text-xl font-bold text-[#0A2540] mt-1">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p>{activeModalService.description}</p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                <strong>Source:</strong> Officially listed under services at Eledent Dental Hospital Banjara Hills branch.
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  onSelectServiceForBooking(title);
                }}
                className="flex-1 py-3 rounded-xl bg-[#00A896] text-white font-semibold text-sm hover:bg-[#028090] transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book for {activeModalService.title}
              </button>
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
