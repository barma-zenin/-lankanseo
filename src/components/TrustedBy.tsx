"use client";

import { motion } from "framer-motion";

const logos = [
  "TechVista",
  "GreenLeaf",
  "OceanFront",
  "SkyBridge",
  "PrimeCore",
  "NovaSpark",
];

export default function TrustedBy() {
  return (
    <section className="py-14 md:py-20 bg-white border-b border-gray-100">
      <div className="container-section">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-text-muted uppercase tracking-wider mb-8"
        >
          Trusted by innovative companies
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-lg md:text-xl font-bold text-gray-300 hover:text-gray-400 transition-colors select-none"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
