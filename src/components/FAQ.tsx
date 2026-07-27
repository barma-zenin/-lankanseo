"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is SEO and why do I need it?",
    a: "SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results pages (SERPs), increasing organic traffic to your site. It involves technical optimization, content creation, link building, and ongoing analysis. For businesses in Sri Lanka, SEO is essential to compete in the digital marketplace and reach customers actively searching for your services.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long-term strategy. Typically, you can start seeing results within 3 to 6 months, depending on competition, keywords, and the current state of your website. Some improvements, like technical fixes, can show impact sooner. We provide monthly reports so you can track progress every step of the way.",
  },
  {
    q: "Do you build custom websites or use templates?",
    a: "We build 100% custom websites tailored to your business needs. No templates, no cookie-cutter solutions. Every project starts with a blank canvas and is built from the ground up using the latest technologies — giving you a unique, high-performing website that stands out from competitors.",
  },
  {
    q: "Do you develop both Android and iOS apps?",
    a: "Yes, we develop both Android and iOS apps using native technologies (Java/Kotlin for Android, Swift for iOS) and cross-platform frameworks like Flutter and React Native. We help you choose the right approach based on your budget, timeline, and target audience.",
  },
  {
    q: "What does website maintenance include?",
    a: "Our maintenance packages include regular updates, security patches, backups, performance monitoring, content updates, and technical support. We keep your website secure, fast, and up-to-date so you can focus on running your business.",
  },
  {
    q: "How much does a website or app cost?",
    a: "Costs vary based on complexity, features, and requirements. A simple business website starts at $499, while full-featured e-commerce platforms or custom applications range from $1,499 to $4,999+. Contact us for a free consultation and we'll provide a detailed, no-obligation quote tailored to your needs.",
  },
  {
    q: "Do you offer ongoing support after the project is delivered?",
    a: "Absolutely. We offer ongoing maintenance and support packages to keep your website, app, or software running smoothly. Our team is available for updates, troubleshooting, performance optimization, and any questions you may have — even after the project is complete.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-white"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4 border border-blue-100">
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-text-secondary">
            Everything you need to know about our services
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-bg-light rounded-xl border border-gray-100 overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex items-center justify-between gap-4 p-4 md:p-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span
                  className={`font-heading text-sm md:text-base font-semibold transition-colors duration-200 ${
                    openIndex === i ? "text-blue-600" : "text-primary"
                  }`}
                >
                  <span itemProp="name">{faq.q}</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 text-text-muted transition-transform duration-200 ${
                    openIndex === i ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div
                      className="px-4 md:px-5 pb-4 md:pb-5 text-sm text-text-secondary leading-relaxed"
                      itemProp="text"
                    >
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
