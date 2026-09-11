import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickInfoBar from './components/QuickInfoBar';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import SpecializationsSection from './components/SpecializationsSection';
import DoctorsSection from './components/DoctorsSection';
import TechnologySection from './components/TechnologySection';
import WhyChooseSection from './components/WhyChooseSection';
import LocationSection from './components/LocationSection';
import FAQSection from './components/FAQSection';
import AppointmentModal from './components/AppointmentModal';
import AIChatbot from './components/AIChatbot';
import MobileStickyBar from './components/MobileStickyBar';
import Footer from './components/Footer';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const handleOpenBooking = (service = '', doctor = '') => {
    setSelectedService(service);
    setSelectedDoctor(doctor);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-[#00A896] selection:text-white pb-14 md:pb-0">
      {/* Sticky Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Quick Information Bar */}
        <QuickInfoBar />

        {/* 3. About / Introduction */}
        <AboutSection />

        {/* 4. Services Section */}
        <ServicesSection 
          onSelectServiceForBooking={(serviceTitle) => handleOpenBooking(serviceTitle, '')} 
        />

        {/* 5. Specializations Section */}
        <SpecializationsSection />

        {/* 6. Doctors Directory */}
        <DoctorsSection 
          onSelectDoctorForBooking={(doctorName) => handleOpenBooking('', doctorName)} 
        />

        {/* 7. Technology Section */}
        <TechnologySection />

        {/* 8. Why Choose Eledent */}
        <WhyChooseSection onOpenBooking={() => handleOpenBooking()} />

        {/* 9. Location & Visiting Hours */}
        <LocationSection />

        {/* 10. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive AI Chatbot ("Eledent Care Assistant") */}
      <AIChatbot onOpenBooking={() => handleOpenBooking()} />

      {/* Mobile Sticky Bottom CTA Bar */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Appointment Booking Modal Form */}
      <AppointmentModal 
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={selectedService}
        defaultDoctor={selectedDoctor}
      />
    </div>
  );
}
