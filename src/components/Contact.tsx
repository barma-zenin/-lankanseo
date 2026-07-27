"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "gderan85@gmail.com", href: "mailto:gderan85@gmail.com" },
  { icon: Phone, label: "Phone", value: "+94 77 359 6465", href: "tel:+94773596465" },
  { icon: MapPin, label: "Location", value: "Colombo, Sri Lanka" },
  { icon: Clock, label: "Working Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM" },
];

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [formKey, setFormKey] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async () => {
    if (!formRef.current) return;

    const form = formRef.current;
    const name = (form.querySelector("#name") as HTMLInputElement)?.value.trim();
    const email = (form.querySelector("#email") as HTMLInputElement)?.value.trim();
    const phone = (form.querySelector("#phone") as HTMLInputElement)?.value.trim();
    const business = (form.querySelector("#business") as HTMLInputElement)?.value.trim();
    const service = (form.querySelector("#service") as HTMLSelectElement)?.value;
    const message = (form.querySelector("#message") as HTMLTextAreaElement)?.value.trim();

    // Client-side validation
    if (!name || !email || !service || !message) {
      setError("Please fill in all required fields.");
      return;
    }
    if (message.length < 10) {
      setError("Message must be at least 10 characters.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, business, service, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) {
    return <section id="contact" className="py-20 md:py-28 bg-bg-subtle"><div className="container-section"><div className="h-96" /></div></section>;
  }

  const formContent = (
    <div key={formKey} ref={formRef} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-sm font-medium text-primary">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            minLength={2}
            placeholder="John Doe"
            autoComplete="name"
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 bg-bg-light outline-none transition-all duration-200 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-medium text-primary">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            autoComplete="email"
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 bg-bg-light outline-none transition-all duration-200 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-sm font-medium text-primary">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+94 123 456 789"
            autoComplete="tel"
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 bg-bg-light outline-none transition-all duration-200 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="business" className="block text-sm font-medium text-primary">
            Business Name
          </label>
          <input
            id="business"
            name="business"
            placeholder="Your Business Ltd."
            autoComplete="organization"
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 bg-bg-light outline-none transition-all duration-200 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      <div className="mt-4 space-y-1.5">
        <label htmlFor="service" className="block text-sm font-medium text-primary">
          Service Required <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 bg-bg-light outline-none transition-all duration-200 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
        >
          <option value="">Select a service</option>
          <option value="seo">SEO Services</option>
          <option value="web-development">Website Development</option>
          <option value="web-application">Web Application</option>
          <option value="mobile-app">Mobile App Development</option>
          <option value="desktop-app">Desktop Application</option>
          <option value="maintenance">Maintenance &amp; Support</option>
          <option value="multiple">Multiple Services</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mt-4 space-y-1.5">
        <label htmlFor="message" className="block text-sm font-medium text-primary">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          minLength={10}
          placeholder="Tell us about your project, goals, and budget..."
          className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 bg-bg-light outline-none transition-all duration-200 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100 resize-none"
        />
      </div>

      {error && (
        <div className="mt-4 flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-100">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <button
        type="button"
        disabled={isSubmitting}
        onClick={handleSubmit}
        className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
      <p className="mt-3 text-xs text-center text-text-muted">
        We respect your privacy. Your information will never be shared.
      </p>
    </div>
  );

  return (
    <section id="contact" className="py-20 md:py-28 bg-bg-subtle">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4 border border-blue-100">
            Contact Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Get Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Free Consultation
            </span>
          </h2>
          <p className="text-lg text-text-secondary">
            Ready to grow your business? Fill out the form and we&apos;ll get back to you within 24 hours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-primary">{item.label}</h4>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-text-secondary hover:text-blue-600 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-text-secondary">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            {isSubmitted ? (
              <div className="bg-white rounded-2xl p-10 border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-text-secondary">
                  Thank you for reaching out! We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setError("");
                    setFormKey((k) => k + 1);
                  }}
                  className="mt-6 px-6 py-2.5 text-sm font-semibold text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              formContent
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
