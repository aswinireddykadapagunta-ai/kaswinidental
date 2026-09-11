// ELEDENT DENTAL HOSPITAL - BANJARA HILLS, HYDERABAD
// SOURCE OF TRUTH DATASET
// Official Banjara Hills Page: https://eledenthospitals.com/banjara-hills
// Official Doctors Page: https://eledenthospitals.com/doctors

export const CLINIC_INFO = {
  name: "Eledent Dental Hospital",
  branch: "Banjara Hills, Hyderabad",
  tagline: "Advanced Dental Care in Banjara Hills",
  eyebrow: "Eledent Dental Hospital — Banjara Hills",
  heroDescription: "Eledent Dental Hospital's Banjara Hills branch provides advanced orthodontic and routine dental care with modern technology, clear treatment planning and patient-focused care.",
  
  address: {
    building: "Raichandani Construction",
    street: "Road No. 12, Sri Ram Nagar Colony",
    locality: "Banjara Hills",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500034",
    fullAddress: "Raichandani Construction, Road No. 12, Sri Ram Nagar Colony, Banjara Hills, Hyderabad, Telangana – 500034"
  },
  
  contact: {
    phone: "+91 7799619994",
    phoneClean: "+917799619994",
    email: "contact@eledenthospitals.com",
    whatsapp: "+917799619994"
  },
  
  timings: {
    visitingHours: "Mon – Sun, 9:30 AM – 9:00 PM",
    generalOpd: "9:00 AM – 9:00 PM"
  },
  
  consultationFee: "₹300",
  consultationDetails: "The consultation fee is ₹300. It includes a clinical examination and treatment discussion, with X-rays or scans advised only if needed.",
  
  stats: [
    { label: "Years of Experience", value: "20+", description: "Delivering specialist dental care" },
    { label: "Successful Cases", value: "30,000+", description: "Patients treated across specialties" },
    { label: "Sterilization Standard", value: "10X", description: "Rigorous safety and hygiene protocols" },
    { label: "Visiting Days", value: "7 Days", description: "Mon – Sun: 9:30 AM – 9:00 PM" }
  ],
  
  landmarks: [
    "Sri Ram Nagar Colony Park",
    "Road No. 12 Junction",
    "Opposite Century Hospitals",
    "Beside TX Hospital",
    "AP Mahesh Co-operative Bank",
    "Police Commissionate",
    "Nilofer Cafe",
    "Virinchi Hospitals"
  ]
};

// 19 OFFICIAL SERVICES (Source: https://eledenthospitals.com/banjara-hills)
export const SERVICES_LIST = [
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    category: "Preventive & Child Care",
    icon: "Baby",
    description: "Specialized dental care for infants, children, and adolescents focusing on gentle preventive treatments and oral health guidance."
  },
  {
    id: "dental-implants",
    title: "Advanced and Painless Dental Implants",
    category: "Implantology",
    icon: "ShieldCheck",
    description: "Modern tooth replacement solutions using biocompatible titanium implants for durable, natural-looking tooth restoration."
  },
  {
    id: "laser-gum-treatment",
    title: "Laser Gum Treatment",
    category: "Periodontics",
    icon: "Zap",
    description: "Minimally invasive laser therapy for gum disease, reshaping, and periodontal maintenance with enhanced precision."
  },
  {
    id: "orthodontic-treatment",
    title: "Orthodontic Treatment",
    category: "Orthodontics",
    icon: "Sparkles",
    description: "Comprehensive tooth alignment solutions including conventional braces and modern alignment systems for proper occlusion."
  },
  {
    id: "smile-makeover",
    title: "Smile Makeover",
    category: "Cosmetic Dentistry",
    icon: "Smile",
    description: "Custom aesthetic dental treatment plans combining whitening, veneers, and alignment to enhance overall smile aesthetics."
  },
  {
    id: "teeth-gap-treatment",
    title: "Teeth Gap Treatment",
    category: "Cosmetic & Orthodontics",
    icon: "Layers",
    description: "Targeted orthodontic or aesthetic procedures designed to close gaps (diastema) between teeth comfortably."
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    category: "Cosmetic Dentistry",
    icon: "Sun",
    description: "In-office professional dental whitening treatments including the Zoom whitening system to remove tooth discolorations."
  },
  {
    id: "root-canal-treatment",
    title: "Root Canal Treatment",
    category: "Endodontics",
    icon: "Activity",
    description: "Endodontic therapy using microscopic and laser-assisted systems to clear tooth pulp infections and preserve natural teeth."
  },
  {
    id: "dental-crowns",
    title: "Dental Crowns",
    category: "Prosthodontics",
    icon: "Crown",
    description: "Custom dental caps manufactured for restoring damaged teeth, including CEREC CAD/CAM digital workflow options in suitable cases."
  },
  {
    id: "tooth-pain-treatment",
    title: "Tooth Pain Treatment",
    category: "General Dentistry",
    icon: "HeartPulse",
    description: "Detailed diagnostic evaluation and prompt care to address acute tooth pain, sensitivity, and underlying oral discomfort."
  },
  {
    id: "dental-veneers",
    title: "Dental Veneers",
    category: "Cosmetic Dentistry",
    icon: "Award",
    description: "Thin porcelain or composite shells crafted to cover the front surface of teeth to correct discoloration, chips, or minor misalignment."
  },
  {
    id: "wisdom-teeth-removal",
    title: "Wisdom Teeth Removal",
    category: "Oral Surgery",
    icon: "Scissors",
    description: "Surgical and non-surgical extraction of impacted or troublesome wisdom teeth under strict aseptic conditions."
  },
  {
    id: "invisalign-treatment",
    title: "Invisalign Treatment",
    category: "Orthodontics",
    icon: "CheckCircle2",
    description: "Clear, removable aligner systems engineered for transparent orthodontic tooth movement without metal brackets."
  },
  {
    id: "atraumatic-extraction",
    title: "Atraumatic Extraction",
    category: "Oral Surgery",
    icon: "Feather",
    description: "Gentle tooth extraction techniques designed to preserve surrounding bone and soft tissues for faster healing."
  },
  {
    id: "single-visit-dentistry",
    title: "Single-Visit Dentistry",
    category: "Digital Dentistry",
    icon: "Clock",
    description: "Streamlined treatment workflows utilizing CEREC digital scanning and milling technology for select crowns and restorations."
  },
  {
    id: "microscopic-dentistry",
    title: "Microscopic Dentistry",
    category: "Advanced Technology",
    icon: "Search",
    description: "High-magnification surgical operating microscopes providing enhanced visualization for precise endodontic and restorative procedures."
  },
  {
    id: "dental-fillings",
    title: "Dental Fillings",
    category: "Restorative Dentistry",
    icon: "FileCheck",
    description: "Tooth-colored composite resin fillings used to restore structure damaged by decay or minor tooth fractures."
  },
  {
    id: "conscious-sedation",
    title: "Conscious Sedation",
    category: "Patient Comfort",
    icon: "Moon",
    description: "Relaxation-assisted dental care options designed for patients with dental anxiety or undergoing extensive procedures."
  },
  {
    id: "braces-and-aligners",
    title: "Braces & Aligners",
    category: "Orthodontics",
    icon: "Grid",
    description: "Complete range of fixed metal, ceramic braces, and clear alignment systems tailored for children and adults."
  }
];

// 10 OFFICIAL SPECIALIZATIONS (Source: https://eledenthospitals.com/doctors)
export const SPECIALIZATIONS_LIST = [
  { title: "General Dentistry", description: "Routine dental care, diagnostics, cleanings, fillings, and oral health maintenance." },
  { title: "Endodontics", description: "Specialized root canal treatment and inner tooth pulp therapy using magnification." },
  { title: "Prosthodontics", description: "Restoration of teeth with dental crowns, bridges, dentures, and prosthetics." },
  { title: "Orthodontics", description: "Diagnosis and alignment of irregular teeth, bite correction, braces, and aligners." },
  { title: "Implantology", description: "Advanced titanium implant placement and surgical tooth replacement." },
  { title: "Periodontics", description: "Treatment of gum disease, periodontal maintenance, and laser gum therapy." },
  { title: "Pedodontics", description: "Dedicated pediatric dental care tailored for children's oral development." },
  { title: "Oral and Maxillofacial Surgery", description: "Surgical care for complex jaw, facial, wisdom teeth, and oral structure conditions." },
  { title: "Oral Surgery", description: "Surgical extraction of problematic teeth and minor intraoral surgical procedures." },
  { title: "Cosmetic Dentistry", description: "Aesthetic smile enhancements, teeth whitening, veneers, and smile makeovers." }
];

// 20 OFFICIAL DOCTORS (Source: https://eledenthospitals.com/doctors)
export const DOCTORS_LIST = [
  { id: 1, name: "Dr. Manchana Ashok Kumar", specialization: "General Dentist", qualification: "BDS" },
  { id: 2, name: "Dr. Matham Charan Kumar", specialization: "Dentist", qualification: "BDS" },
  { id: 3, name: "Dr. Suhaas Pradhyumna", specialization: "Oral And Maxillofacial Surgeon", qualification: "MDS" },
  { id: 4, name: "Dr. E Santhosh Kumar", specialization: "Oral And Maxillofacial Surgeon", qualification: "MDS" },
  { id: 5, name: "Dr. Haneesh Mudra", specialization: "General Dentist", qualification: "BDS" },
  { id: 6, name: "Dr. Ruchira Ganachari", specialization: "General Dentist", qualification: "BDS" },
  { id: 7, name: "Dr. B Dharanija", specialization: "General Dentist", qualification: "BDS" },
  { id: 8, name: "Dr. Himasree Kasireddy", specialization: "Endodontist", qualification: "MDS" },
  { id: 9, name: "Dr. Mounica", specialization: "Orthodontist", qualification: "MDS" },
  { id: 10, name: "Dr. Borugadda Sujan Sekhar", specialization: "Oral Surgeon", qualification: "MDS" },
  { id: 11, name: "Dr. Nagajyothi Namilikonda", specialization: "General Dentist", qualification: "BDS" },
  { id: 12, name: "Dr. Tarun Nalam", specialization: "Implantologist", qualification: "BDS" },
  { id: 13, name: "Dr. Sai Nikitha Arakari", specialization: "Pedodontist", qualification: "MDS" },
  { id: 14, name: "Dr. Malathi", specialization: "Implantologist", qualification: "Information not available on official page" },
  { id: 15, name: "Dr. Vani", specialization: "General Dentist", qualification: "BDS" },
  { id: 16, name: "Dr. Kaduluri Rajith", specialization: "General Dentist", qualification: "BDS" },
  { id: 17, name: "Dr. Satish P", specialization: "General Dentist", qualification: "BDS" },
  { id: 18, name: "Dr. Priyanka Reddy Pinninti", specialization: "General Dentist", qualification: "BDS" },
  { id: 19, name: "Dr. N Sreevani", specialization: "General Dentist", qualification: "BDS" },
  { id: 20, name: "Dr. Sushna Komuravelli", specialization: "Prosthodontist", qualification: "MDS" }
];

export const DOCTOR_DISCLAIMER = "Doctor availability may vary by branch and appointment schedule. Please contact Eledent Dental Hospital for current availability.";

// 11 OFFICIAL TECHNOLOGIES (Source: https://eledenthospitals.com/banjara-hills)
export const TECHNOLOGIES_LIST = [
  { name: "3D Scanners", category: "Digital Scanning", detail: "Detailed intraoral digital scanning for accurate impressions without traditional putty molds." },
  { name: "CBCT 3D X-Ray", category: "3D Imaging", detail: "Cone Beam Computed Tomography providing high-resolution 3D dental and jaw bone imaging." },
  { name: "Zoom Tooth Whitening System", category: "Cosmetic Tech", detail: "Advanced light-accelerated in-office whitening procedure designed to lift stains." },
  { name: "Microscopic Root Canal Systems", category: "Endodontic Tech", detail: "High-magnification optical systems for precise canal location and thorough cleaning." },
  { name: "Laser Root Canal Systems", category: "Endodontic Tech", detail: "Laser energy application to assist in root canal disinfection and bacterial reduction." },
  { name: "Laser-Assisted Gum Care", category: "Periodontal Tech", detail: "Targeted laser light therapy for soft tissue procedure precision and minimal bleeding." },
  { name: "CEREC CAD/CAM", category: "Digital Restorations", detail: "Computer-aided design and manufacturing system supporting digital crown workflows." },
  { name: "Self-Cleaning Dental Chairs", category: "Infection Control", detail: "Automated chair sanitation and internal water line cleansing features." },
  { name: "10X Sterilization Process", category: "Safety Protocol", detail: "Multi-stage instrument sterilization and packaging protocol following strict hygienic standards." },
  { name: "Biofilm Therapy", category: "Preventive Care", detail: "Guided biofilm removal technology for gentle prophylactic plaque and calculus cleaning." },
  { name: "Multiple Operating Rooms", category: "Clinical Setup", detail: "Dedicated clinical operatory suites equipped for specialized dental and surgical procedures." }
];

// OFFICIAL FAQ ITEMS (Source: https://eledenthospitals.com/banjara-hills)
export const FAQ_LIST = [
  {
    q: "What is the consultation fee?",
    a: "The official Banjara Hills page lists the consultation fee as ₹300. It states that this includes a clinical examination and treatment discussion, with X-rays or scans advised only if needed."
  },
  {
    q: "What services are available at the Banjara Hills clinic?",
    a: "The Banjara Hills branch offers 19 core services including Pediatric Dentistry, Advanced and Painless Dental Implants, Laser Gum Treatment, Orthodontic Treatment, Smile Makeover, Teeth Gap Treatment, Teeth Whitening, Root Canal Treatment, Dental Crowns, Tooth Pain Treatment, Dental Veneers, Wisdom Teeth Removal, Invisalign Treatment, Atraumatic Extraction, Single-Visit Dentistry, Microscopic Dentistry, Dental Fillings, Conscious Sedation, and Braces & Aligners."
  },
  {
    q: "What are the clinic visiting hours?",
    a: "Banjara Hills Visiting Hours are Mon – Sun, 9:30 AM – 9:00 PM."
  },
  {
    q: "Where is the Banjara Hills clinic located?",
    a: "The address is: Raichandani Construction, Road No. 12, Sri Ram Nagar Colony, Banjara Hills, Hyderabad, Telangana – 500034 (Landmarks include near Sri Ram Nagar Colony Park, Road No. 12 Junction, opposite Century Hospitals, beside TX Hospital)."
  },
  {
    q: "How can I contact the clinic for appointments?",
    a: "You can call Eledent Dental Hospital directly at +91 7799619994 or send an email to contact@eledenthospitals.com."
  },
  {
    q: "Is conscious sedation available?",
    a: "Yes. Conscious Sedation is listed as a service on the Banjara Hills page. For suitability, availability and cost, please contact the clinic directly."
  },
  {
    q: "Are Invisalign treatments available?",
    a: "Yes. Invisalign Treatment is officially listed among the Banjara Hills orthodontic services."
  },
  {
    q: "Are dental implants available at Banjara Hills?",
    a: "Yes. Advanced and Painless Dental Implants are officially listed among the hospital's services."
  }
];

// CHATBOT KNOWLEDGE ENGINE RULES & SAFETY BOUNDARIES
export const CHATBOT_KNOWLEDGE = {
  name: "Eledent Care Assistant",
  greeting: "Hi! I’m the Eledent Care Assistant. I can help you find information about our Banjara Hills clinic, services, doctors, timings, location, technology and appointments. How can I help?",
  
  samplePrompts: [
    "What are your clinic timings?",
    "Where is the Banjara Hills clinic?",
    "What services do you offer?",
    "Who are your dentists?",
    "What is the consultation fee?",
    "Do you offer Invisalign?",
    "Do you provide dental implants?",
    "Do you offer root canal treatment?",
    "How do I book an appointment?",
    "What technology do you use?"
  ],

  medicalSafetyDisclaimer: "Only a dental professional can assess your condition and recommend the appropriate treatment. Please contact Eledent Dental Hospital at +91 7799619994 for a clinical evaluation.",

  systemPromptProtectionReply: "I can’t provide internal instructions, but I can help you with information about Eledent Dental Hospital.",
  
  unknownInfoReply: "I don’t have verified information about that on the official website. For the most accurate details, please contact Eledent Dental Hospital directly at +91 7799619994.",
  
  bookingHandoffReply: "I can help you start the appointment process. Please provide your name, phone number and preferred service in our booking form, or contact Eledent Dental Hospital directly at +91 7799619994."
};
