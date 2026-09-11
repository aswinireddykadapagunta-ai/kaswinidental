import React, { useState } from 'react';
import { DOCTORS_LIST, DOCTOR_DISCLAIMER } from '../data/eledentData';
import { UserCheck, Search, Filter, Calendar, Info, Award, GraduationCap } from 'lucide-react';

export default function DoctorsSection({ onSelectDoctorForBooking }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const specialties = ['All', ...new Set(DOCTORS_LIST.map(d => d.specialization))];

  const filteredDoctors = DOCTORS_LIST.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialization === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <section id="doctors" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00A896] uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            <UserCheck className="w-3.5 h-3.5" />
            Verified Eledent Specialists
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            Meet Our Dental Specialists
          </h2>

          <p className="text-base text-slate-600">
            Doctors officially listed on the Eledent Hospital directory spanning BDS and MDS specializations.
          </p>
        </div>

        {/* Factual Disclaimer Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3 shadow-xs">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Notice on Doctor Availability:</strong> {DOCTOR_DISCLAIMER}
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200/80 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search doctor name or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] outline-none"
              />
            </div>

            <div className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg shrink-0">
              Showing {filteredDoctors.length} of {DOCTORS_LIST.length} Doctors
            </div>

          </div>

          {/* Specialty Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedSpecialty === spec
                    ? 'bg-[#00A896] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor) => {
            // Generate initials for avatar representation
            const initials = doctor.name.replace('Dr. ', '').split(' ').map(n => n[0]).join('').slice(0, 2);

            return (
              <div 
                key={doctor.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#00A896]/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  {/* Doctor Profile Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A2540] to-[#16365C] text-white font-bold text-base flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                      {initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#0A2540] group-hover:text-[#00A896] transition-colors leading-tight">
                        {doctor.name}
                      </h3>
                      <span className="inline-block text-[11px] font-semibold text-[#00A896] bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100 mt-1">
                        {doctor.specialization}
                      </span>
                    </div>
                  </div>

                  {/* Qualification Badge */}
                  <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Qualification</span>
                      <span className="font-semibold text-slate-700">{doctor.qualification}</span>
                    </div>
                  </div>

                </div>

                {/* Booking Trigger */}
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onSelectDoctorForBooking(doctor.name)}
                    className="w-full py-2.5 rounded-xl text-xs font-semibold text-[#0A2540] bg-slate-100 hover:bg-[#00A896] hover:text-white transition-all flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book with Dr. {doctor.name.split(' ')[1] || doctor.name}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
