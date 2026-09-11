import React, { useState, useEffect } from 'react';
import { SERVICES_LIST, DOCTORS_LIST, CLINIC_INFO } from '../data/eledentData';
import { X, Calendar, User, Phone, Mail, Stethoscope, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose, defaultService = '', defaultDoctor = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: defaultService || '',
    doctor: defaultDoctor || '',
    preferredDate: '',
    preferredTime: 'Morning (9:30 AM - 12:00 PM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (defaultService) setFormData(prev => ({ ...prev, service: defaultService }));
    if (defaultDoctor) setFormData(prev => ({ ...prev, doctor: defaultDoctor }));
  }, [defaultService, defaultDoctor]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      setErrorMsg('Please enter a valid phone number.');
      return;
    }
    if (!formData.service) {
      setErrorMsg('Please select a preferred service.');
      return;
    }

    // Set submitted state
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: '',
      doctor: '',
      preferredDate: '',
      preferredTime: 'Morning (9:30 AM - 12:00 PM)',
      message: ''
    });
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8 animate-fade-in border border-slate-100 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={resetForm}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00A896] uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200 mb-2">
                <Calendar className="w-3.5 h-3.5" />
                Appointment Request
              </div>
              <h2 className="text-2xl font-extrabold text-[#0A2540]">
                Book an Appointment
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Banjara Hills Branch • Consultation Fee ₹300
              </p>
            </div>

            {/* Error Notification */}
            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      name="fullName"
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] outline-none"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Preferred Service <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] outline-none bg-white"
                >
                  <option value="">-- Select Dental Service --</option>
                  {SERVICES_LIST.map(s => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              {/* Doctor Preference */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Preferred Doctor (Optional)
                </label>
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] outline-none bg-white"
                >
                  <option value="">Any Available Specialist</option>
                  {DOCTORS_LIST.map(d => (
                    <option key={d.id} value={d.name}>{d.name} ({d.specialization})</option>
                  ))}
                </select>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] outline-none bg-white"
                  >
                    <option value="Morning (9:30 AM - 12:00 PM)">Morning (9:30 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 9:00 PM)">Evening (4:00 PM - 9:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Message / Symptom Notes (Optional)
                </label>
                <textarea
                  name="message"
                  rows="2"
                  placeholder="Describe your dental concern or preference..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] outline-none"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#00A896] hover:bg-[#028090] text-white font-bold text-base shadow-md transition-all"
                >
                  Request Appointment
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-400">
                Note: Appointment availability is subject to confirmation by the clinic desk.
              </div>

            </form>

          </div>
        ) : (
          /* Submission Confirmation Notice strictly complying with source requirements */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-teal-100 text-[#00A896] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <h3 className="text-2xl font-extrabold text-[#0A2540]">
              Request Received
            </h3>

            <p className="text-base text-slate-700 font-medium max-w-md mx-auto leading-relaxed bg-teal-50 p-4 rounded-2xl border border-teal-100">
              “Thank you. Your appointment request has been received. The clinic team will contact you for confirmation.”
            </p>

            <div className="text-xs text-slate-500 space-y-1 pt-2">
              <p>Requested Service: <strong>{formData.service}</strong></p>
              {formData.doctor && <p>Preferred Doctor: <strong>{formData.doctor}</strong></p>}
              <p>Contact Phone: <strong>{formData.phone}</strong></p>
            </div>

            <div className="pt-4">
              <button
                onClick={resetForm}
                className="px-6 py-2.5 rounded-xl bg-[#0A2540] text-white text-xs font-bold hover:bg-[#16365C]"
              >
                Back to Website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
