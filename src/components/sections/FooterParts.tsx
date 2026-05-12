import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, ArrowRight, Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import {
  PHONE_LABEL,
  PHONE_TEL,
  BRAND_NAME,
  BRAND_FULL_NAME,
  BRAND_LEGAL_NAME,
  BRAND_EMAIL,
  BRAND_ADDRESS,
  BRAND_LICENSE,
  BRAND_ICON,
  BRAND_LOGO_DARK,
  SERVICE_AREAS,
} from "../../config";

// --- FAQ Accordion ---
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    {
      q: `Do you offer service in ${SERVICE_AREAS[0]} and the surrounding areas?`,
      a: `Yes — ${BRAND_FULL_NAME} has been proudly serving the area for years. Most appointments are booked the same week you call, and our service call department is open Monday through Friday, 8:00 AM – 5:00 PM.`,
    },
    {
      q: "Are you licensed, bonded, and insured?",
      a: `Absolutely. ${BRAND_LEGAL_NAME} is fully licensed, bonded, and insured. Every technician on our team is trained, professional, and treats your home with respect.`,
    },
    {
      q: "What does the 100% Satisfaction Guarantee actually cover?",
      a: "Our satisfaction guarantee applies to every repair, maintenance visit, and installation we perform. If you're not completely satisfied, we'll come back and make it right — that's our Promise, in writing.",
    },
    {
      q: "Do you offer financing for new systems?",
      a: "Yes. We offer flexible financing through our manufacturer partners on qualifying high-efficiency systems, including heat pumps and full AC and furnace replacements. Pre-qualification is fast and won't impact your credit score.",
    },
    {
      q: "What services do you provide?",
      a: "We provide air conditioning, furnace, heat pump, indoor air quality, and duct repair and replacement services — for both residential and commercial properties. Installations, replacements, repairs, and maintenance are all covered.",
    },
    {
      q: "What brands do you service?",
      a: "We're an independent contractor — meaning we service and install every major HVAC brand including Carrier, Lennox, Trane, Daikin, Mitsubishi, Rheem, Goodman, and American Standard. Existing manufacturer warranty? We'll honor it.",
    },
  ];

  return (
    <section aria-labelledby="faq-heading" className="section-padding bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-luxury-gold text-[10px] font-bold tracking-[0.4em] uppercase block mb-6 px-4 py-1 border border-luxury-gold/20 inline-block">Consultation FAQ</span>
            <h2 id="faq-heading" className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight mt-8">Frequently Asked <span className="font-bold italic underline decoration-luxury-gold/20 underline-offset-8">Questions</span></h2>
          </motion.div>

          <div className="space-y-4">
            {questions.map((item, i) => {
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-button-${i}`;
              const isOpen = openIndex === i;
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="border-b border-charcoal/5"
                >
                  <h3 className="m-0">
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="w-full py-8 flex justify-between items-center text-left group text-xl md:text-2xl font-medium tracking-tight"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                    >
                      <span className="group-hover:text-luxury-gold transition-colors">
                        {item.q}
                      </span>
                      <span aria-hidden="true" className="flex-shrink-0 ml-4">
                        {isOpen ? <Minus size={24} className="text-luxury-gold" /> : <Plus size={24} />}
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-10 text-lg text-charcoal/60 leading-relaxed max-w-3xl">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Contact Form ---
const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 900);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-padding bg-stone relative">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <span className="text-luxury-gold text-xs font-bold tracking-[0.3em] uppercase block mb-4">Book in 60 Seconds</span>
          <h2 id="contact-heading" className="text-5xl lg:text-7xl font-light mb-6 leading-[1.05]">
            Get a Free <br /><span className="font-bold italic">In-Home</span> Estimate.
          </h2>
          <p className="text-charcoal/60 leading-relaxed mb-12 max-w-md">
            Send us a message or give us a call to set up an appointment. Our service call department typically responds the same business day — office hours Monday through Friday, 7:30 AM – 4:30 PM.
          </p>
          
          <div className="space-y-10">
            {[
              { icon: <Phone aria-hidden="true" size={20} />, label: "Main Office Phone", value: PHONE_LABEL, href: PHONE_TEL },
              { icon: <Mail aria-hidden="true" size={20} />, label: "Email", value: BRAND_EMAIL, href: `mailto:${BRAND_EMAIL}` },
              { icon: <MapPin aria-hidden="true" size={20} />, label: "Local HQ", value: BRAND_ADDRESS, href: null as string | null }
            ].filter(item => {
              if (!item.value || item.value.trim() === "" || item.value.includes("[") || item.value.toLowerCase().includes("no email") || item.value.toLowerCase().includes("no phone")) return false;
              return true;
            }).map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div aria-hidden="true" className="w-12 h-12 bg-white flex items-center justify-center text-luxury-gold border border-charcoal/5">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-charcoal/40 uppercase mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-2xl font-bold tracking-tighter hover:text-luxury-gold transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-2xl font-bold tracking-tighter">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="bg-white p-10 lg:p-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-charcoal/5 relative overflow-hidden"
        >
          {/* Subtle accent corner */}
          <div aria-hidden="true" className="absolute top-0 right-0 w-24 h-24 bg-luxury-gold/5 -translate-y-12 translate-x-12 rotate-45" />

          <form className="space-y-10 relative z-10" onSubmit={handleSubmit} noValidate aria-labelledby="contact-heading">
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label htmlFor="cf-name" className="block text-[9px] font-bold tracking-[0.3em] uppercase text-charcoal/40">
                  Full Name <span aria-hidden="true" className="text-luxury-gold">*</span>
                </label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  aria-required="true"
                  className="w-full bg-stone/50 border-b border-charcoal/10 py-5 px-4 focus:border-luxury-gold focus:bg-white outline-none transition-all font-light min-h-[44px]"
                  placeholder="Julian Vance"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="cf-phone" className="block text-[9px] font-bold tracking-[0.3em] uppercase text-charcoal/40">Direct Phone</label>
                <input
                  id="cf-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  className="w-full bg-stone/50 border-b border-charcoal/10 py-5 px-4 focus:border-luxury-gold focus:bg-white outline-none transition-all font-light min-h-[44px]"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label htmlFor="cf-email" className="block text-[9px] font-bold tracking-[0.3em] uppercase text-charcoal/40">
                Email <span aria-hidden="true" className="text-luxury-gold">*</span>
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                aria-required="true"
                className="w-full bg-stone/50 border-b border-charcoal/10 py-5 px-4 focus:border-luxury-gold focus:bg-white outline-none transition-all font-light min-h-[44px]"
                placeholder="you@domain.com"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="cf-system" className="block text-[9px] font-bold tracking-[0.3em] uppercase text-charcoal/40">What do you need help with?</label>
              <select
                id="cf-system"
                name="system"
                className="w-full bg-stone/50 border-b border-charcoal/10 py-5 px-4 focus:border-luxury-gold outline-none transition-all appearance-none cursor-pointer font-light min-h-[44px]"
              >
                <option>AC not cooling / repair</option>
                <option>Heating / furnace repair</option>
                <option>New system install &amp; financing</option>
                <option>Seasonal tune-up ($89)</option>
                <option>Indoor air quality / purification</option>
                <option>Ductwork / airflow</option>
                <option>Other — I'll explain below</option>
              </select>
            </div>
            <div className="space-y-3">
              <label htmlFor="cf-vision" className="block text-[9px] font-bold tracking-[0.3em] uppercase text-charcoal/40">Tell us briefly what's going on</label>
              <textarea
                id="cf-vision"
                name="vision"
                rows={4}
                className="w-full bg-stone/50 border-b border-charcoal/10 py-5 px-4 focus:border-luxury-gold focus:bg-white outline-none transition-all resize-none font-light"
                placeholder="e.g. AC stopped cooling last night, house is 80°F, two-story in Willow Glen…"
              />
            </div>
            <button
              type="submit"
              disabled={status !== "idle"}
              aria-busy={status === "submitting"}
              className="w-full py-7 bg-charcoal text-white font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-luxury-gold transition-all duration-700 shadow-2xl group flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {status === "idle" && (<>Book My Free Estimate <ArrowRight aria-hidden="true" size={14} className="transition-transform group-hover:translate-x-2" /></>)}
              {status === "submitting" && "Sending…"}
              {status === "success" && "We'll Call You Within 1 Hour"}
            </button>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-[10px] uppercase tracking-[0.25em] text-charcoal/50">
              <span>No obligation · Free estimate · 1-hour response</span>
              <a href={PHONE_TEL} className="inline-flex items-center gap-2 font-bold text-charcoal hover:text-luxury-gold transition-colors">
                <Phone aria-hidden="true" size={12} /> Emergency? Call {PHONE_LABEL}
              </a>
            </div>
            <p role="status" aria-live="polite" className="sr-only">
              {status === "submitting" ? "Submitting your request." : ""}
              {status === "success" ? "Thank you. Our team will call you within one hour." : ""}
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-charcoal pt-32 pb-16 text-white/40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-4 gap-16 lg:gap-24 mb-32">
          <div className="lg:col-span-1">
            <a href="#" aria-label={`${BRAND_FULL_NAME} — home`} className="inline-flex items-center gap-2 mb-8">
              <img
                src={BRAND_ICON}
                alt=""
                aria-hidden="true"
                className="h-12 w-auto object-contain flex-shrink-0"
              />
              <span
                className="block"
                style={{
                  color: "#dfdad1ff",
                  fontFamily: "'Staatliches', sans-serif",
                  fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)",
                  lineHeight: "1",
                  letterSpacing: "0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                {(() => {
                  const words = BRAND_FULL_NAME.trim().split(/\s+/);
                  if (words.length <= 2) {
                    return words.join(" ").toUpperCase();
                  }
                  const mid = Math.ceil(words.length / 2);
                  const line1 = words.slice(0, mid).join(" ").toUpperCase();
                  const line2 = words.slice(mid).join(" ").toUpperCase();
                  return <>{line1}<br />{line2}</>;
                })()}
              </span>
            </a>
            <p className="text-lg text-white/50 leading-relaxed mb-12">
              Leading HVAC professionals — exceptional heating, air conditioning, heat pump, and indoor air quality services.
            </p>
            <div className="flex gap-6">
              <a href="#" aria-label={`${BRAND_FULL_NAME} on Facebook`} rel="noopener" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-charcoal transition-all duration-300">
                <Facebook aria-hidden="true" size={20} />
              </a>
              <a href="#" aria-label={`${BRAND_FULL_NAME} on Instagram`} rel="noopener" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-charcoal transition-all duration-300">
                <Instagram aria-hidden="true" size={20} />
              </a>
              <a href="#" aria-label={`${BRAND_FULL_NAME} on LinkedIn`} rel="noopener" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-charcoal transition-all duration-300">
                <Linkedin aria-hidden="true" size={20} />
              </a>
            </div>
          </div>

          <nav aria-labelledby="footer-services" className="space-y-8">
            <h4 id="footer-services" className="text-xs font-bold tracking-[0.4em] uppercase text-white">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-luxury-gold transition-colors">Air Conditioning</a></li>
              <li><a href="#services" className="hover:text-luxury-gold transition-colors">Furnaces</a></li>
              <li><a href="#services" className="hover:text-luxury-gold transition-colors">Heat Pumps</a></li>
              <li><a href="#services" className="hover:text-luxury-gold transition-colors">Indoor Air Quality</a></li>
              <li><a href="#services" className="hover:text-luxury-gold transition-colors">Duct Repair &amp; Replacement</a></li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-areas" className="space-y-8">
            <h4 id="footer-areas" className="text-xs font-bold tracking-[0.4em] uppercase text-white">Service Area</h4>
            <ul className="space-y-4">
              {SERVICE_AREAS.slice(0, 6).map((area, i) => (
                <li key={i}><a href="#service-area" className="hover:text-luxury-gold transition-colors">{area}</a></li>
              ))}
            </ul>
          </nav>

          <div className="space-y-8">
            <h4 className="text-xs font-bold tracking-[0.4em] uppercase text-white">Book Service</h4>
            <address className="not-italic space-y-4 text-sm font-light">
              {BRAND_ADDRESS && !BRAND_ADDRESS.includes("[") && <p>{BRAND_ADDRESS}</p>}
              {PHONE_LABEL && !PHONE_LABEL.includes("[") && !PHONE_LABEL.toLowerCase().includes("no phone") && (
                <p className="text-xl text-white font-medium mt-6">
                  <a href={PHONE_TEL} className="hover:text-luxury-gold transition-colors">{PHONE_LABEL}</a>
                </p>
              )}
              {BRAND_EMAIL && !BRAND_EMAIL.includes("[") && !BRAND_EMAIL.toLowerCase().includes("no email") && (
                <p className="text-white font-medium">
                  <a href={`mailto:${BRAND_EMAIL}`} className="hover:text-luxury-gold transition-colors">{BRAND_EMAIL}</a>
                </p>
              )}
              <p className="text-white/50">Mon–Fri · 7:30 AM – 4:30 PM</p>
              <div className="pt-4">
                 <span className="inline-block px-2 py-1 border border-white/10 text-[8px] font-bold tracking-widest uppercase">{BRAND_LICENSE} · C-20 Licensed</span>
              </div>
            </address>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold tracking-widest uppercase">
          <p>© 2026 {BRAND_LEGAL_NAME}. All Rights Reserved.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <p className="text-white/20">{BRAND_LICENSE}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Sticky mobile CTA bar (CTA density — a top-5 conversion pattern on mobile) ---
const MobileCtaBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-white/10 bg-charcoal/95 backdrop-blur-md">
      <div className="grid grid-cols-2">
        <a
          href={PHONE_TEL}
          aria-label={`Call ${BRAND_FULL_NAME} now at ${PHONE_LABEL}`}
          className="flex items-center justify-center gap-2 py-4 text-white text-[10px] font-bold uppercase tracking-[0.25em] border-r border-white/10 hover:text-luxury-gold transition-colors"
        >
          <Phone aria-hidden="true" size={14} /> Call Now
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 py-4 bg-luxury-gold text-white text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-charcoal transition-colors"
        >
          Book Service <ArrowRight aria-hidden="true" size={14} />
        </a>
      </div>
    </div>
  );
};

export { FAQ, ContactForm, Footer, MobileCtaBar };
