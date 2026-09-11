import React from 'react';
import { CLINIC_INFO } from '../data/eledentData';
import { MapPin, Phone, Mail, Clock, Navigation, Compass, ExternalLink } from 'lucide-react';

export default function LocationSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_INFO.address.fullAddress)}`;

  return (
    <section id="location" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00A896] uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            <MapPin className="w-3.5 h-3.5" />
            Clinic Location & Hours
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            Visit Our Banjara Hills Clinic
          </h2>

          <p className="text-base text-slate-600">
            Conveniently located on Road No. 12, Banjara Hills with daily visiting hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Visiting Hours & Landmarks */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Address Card */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00A896] text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#0A2540]">
                    {CLINIC_INFO.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#00A896] mb-2">
                    {CLINIC_INFO.branch}
                  </p>
                  <address className="not-italic text-xs sm:text-sm text-slate-600 leading-relaxed space-y-0.5">
                    <p className="font-semibold text-slate-800">{CLINIC_INFO.address.building}</p>
                    <p>{CLINIC_INFO.address.street}</p>
                    <p>{CLINIC_INFO.address.locality}</p>
                    <p>{CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} – {CLINIC_INFO.address.pincode}</p>
                  </address>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[#00A896] hover:bg-[#028090] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
                <a
                  href={`tel:${CLINIC_INFO.contact.phoneClean}`}
                  className="py-2.5 px-3 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-[#0A2540] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#00A896]" />
                  Call Hospital
                </a>
              </div>
            </div>

            {/* Visiting Hours Card */}
            <div className="bg-[#0A2540] p-6 rounded-2xl text-white space-y-3 shadow-md">
              <div className="flex items-center gap-2 text-teal-300 font-bold text-sm">
                <Clock className="w-4 h-4" />
                Banjara Hills Visiting Hours
              </div>
              <div className="text-xl font-extrabold text-white">
                {CLINIC_INFO.timings.visitingHours}
              </div>
              <p className="text-xs text-slate-300">
                Open 7 days a week for consultations, treatments & emergencies.
              </p>
            </div>

            {/* Landmarks List */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0A2540] uppercase tracking-wider">
                <Compass className="w-4 h-4 text-[#00A896]" />
                Nearby Location References
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                {CLINIC_INFO.landmarks.map((landmark, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] shrink-0"></span>
                    <span className="truncate">{landmark}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Simulation */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[400px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-md relative bg-slate-100 flex flex-col">
              
              {/* Embed / Visual Map Container */}
              <iframe
                title="Eledent Dental Hospital Banjara Hills Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.88566378418!2d78.4415!3d17.4172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974751ed42a7%3A0x6b2e10dbb1edb95f!2sRoad%20No.%2012%2C%20Banjara%20Hills%2C%20Hyderabad%2C%20Telangana%20500034!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>

              {/* Map Footer Bar */}
              <div className="bg-white p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="text-slate-600 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#00A896]" />
                  <span>Raichandani Construction, Road No. 12, Banjara Hills</span>
                </div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#00A896] hover:text-[#028090] flex items-center gap-1 shrink-0"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
