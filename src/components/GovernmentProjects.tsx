"use client";

import { motion } from "framer-motion";
import { Building2, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const govProjects = [
  {
    title: "Provincial Council Digital Platform",
    description: "End-to-end digital transformation for regional government administration",
    category: "Web Application",
    image: "https://www.sab.ac.lk/sites/default/files/LMS/lms-login.PNG",
  },
  {
    title: "National Health Records System",
    description: "Secure centralized patient data management for public healthcare",
    category: "Desktop App",
    image: "https://ddi-dev.com/uploads/patient-medical-records.png",
  },
  {
    title: "Smart City IoT Dashboard",
    description: "Real-time monitoring and analytics for municipal infrastructure",
    category: "Web Application",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbpG1-kN4OVj5VWad-cYyvwr4jYi8X_o9S9dv3oDJmH7QRDkjrNZwYSApi&s=10",
  },
  {
    title: "E-Government Services Portal",
    description: "Unified citizen portal for accessing government services online",
    category: "SEO & Development",
    image:
      "https://cdn.dribbble.com/userupload/45756917/file/c386b0852beb1bef2767c0a6a2df0970.png?crop=156x101-1637x1211&format=webp&resize=400x300&vertical=center",
  },
  {
    title: "Public Transport Management",
    description: "Fleet tracking and route optimization for city transport authority",
    category: "Mobile App",
    image:
      "https://cdn.dribbble.com/userupload/37923557/file/still-c508fd2bef4ee88bb5d0545da6ed9598.png",
  },
  {
    title: "Land Registry Digitization",
    description: "Blockchain-based land record management for transparency",
    category: "Web Application",
    image:
      "https://www.inettutor.com/wp-content/uploads/2026/02/Digital-Land-Record-Management-System-landing.png",
  },
];

export default function GovernmentProjects() {
  return (
    <section id="government-projects" className="py-20 md:py-28 bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-4 border border-indigo-100">
            <Building2 className="w-4 h-4" />
            Government Projects
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Government Projects{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
              We Delivered
            </span>
          </h2>
          <p className="text-lg text-text-secondary">
            Trusted by government institutions for secure, scalable, and mission-critical digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {govProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-bg-light rounded-2xl overflow-hidden border border-gray-100 card-hover hover:border-indigo-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.description}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <span className="absolute top-3 left-3 z-10 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-indigo-700 rounded-full shadow-sm">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 group-hover:gap-2.5 transition-all">
                  View Project Details
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
