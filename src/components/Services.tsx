"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  Code,
  Smartphone,
  Monitor,
  Wrench,
  Gauge,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Services",
    description:
      "Dominate search rankings with our holistic SEO approach. We optimize your website for higher visibility, more traffic, and better conversions.",
    features: [
      "Technical SEO",
      "On-Page SEO",
      "Off-Page SEO",
      "Local SEO",
      "SEO Audits",
      "Keyword Research",
    ],
  },
  {
    icon: Code,
    title: "Website Development",
    description:
      "Modern, fast, and responsive websites built with cutting-edge technologies. From simple landing pages to complex web applications.",
    features: [
      "Business Websites",
      "E-Commerce",
      "CMS Solutions",
      "Landing Pages",
      "Portfolio Sites",
      "Custom Systems",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Engaging mobile experiences for Android and iOS users. Native and cross-platform apps that your customers will love.",
    features: [
      "Android Apps",
      "iOS Apps",
      "Flutter Development",
      "React Native",
      "App Maintenance",
      "App Store Optimization",
    ],
  },
  {
    icon: Monitor,
    title: "Desktop Applications",
    description:
      "Powerful desktop software to streamline your business operations. Custom solutions for Windows, macOS, and more.",
    features: [
      "Windows Software",
      "Inventory Systems",
      "POS Systems",
      "ERP Solutions",
      "CRM Systems",
      "Billing Software",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Keep your digital products running smoothly with our ongoing maintenance and dedicated support packages.",
    features: [
      "Regular Updates",
      "Security Patches",
      "Backup Solutions",
      "Performance Tuning",
      "24/7 Monitoring",
      "Technical Support",
    ],
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Supercharge your website speed and performance. We optimize every aspect to deliver blazing-fast user experiences.",
    features: [
      "Speed Optimization",
      "Core Web Vitals",
      "Image Optimization",
      "Code Minification",
      "Caching Strategies",
      "CDN Integration",
    ],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 md:py-28 bg-bg-subtle">
      <div className="container-section">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4 border border-blue-100">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>
          <p className="text-lg text-text-secondary">
            End-to-end services to take your business from concept to market leadership
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-100 card-hover hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-5 group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
