"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  TrendingUp,
  Smartphone,
  Zap,
  Shield,
  Tag,
  Palette,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Custom Solutions",
    description: "Every project is built from scratch to match your unique business needs.",
  },
  {
    icon: TrendingUp,
    title: "SEO-First Approach",
    description: "We write clean code that search engines love and rank higher.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description: "Flawless experiences across all devices, from phones to 4K displays.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with 95+ Lighthouse scores across the board.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade security practices protecting your digital assets.",
  },
  {
    icon: Tag,
    title: "Transparent Pricing",
    description: "Premium quality at competitive rates with no hidden fees.",
  },
  {
    icon: Palette,
    title: "Modern UI/UX",
    description: "Beautiful interfaces designed for engagement and conversions.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "We're here for you long after your project goes live.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white">
      <div className="container-section">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4 border border-blue-100">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            What Makes{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              LankanSEO
            </span>{" "}
            Different
          </h2>
          <p className="text-lg text-text-secondary">
            We combine technical expertise with creative innovation to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group bg-bg-light rounded-2xl p-6 text-center border border-gray-100 card-hover hover:border-blue-100"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mx-auto mb-4 group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                <reason.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
