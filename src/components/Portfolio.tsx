"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment gateway integration",
    tech: "React, Node.js, PostgreSQL",
    tag: "Web Development",
    image:
      "https://cdn.dribbble.com/userupload/23744972/file/original-f09ad4491cf30c1628e68083ad7d12ad.jpg?resize=400x0",
  },
  {
    title: "Enterprise ERP System",
    description: "Complete business management solution with analytics",
    tech: "Laravel, Vue.js, MySQL",
    tag: "Web Application",
    image:
      "https://ngenioussolutions.com/blog/wp-content/uploads/2024/10/Fishbowl-Manufacturing-Dashboard.webp",
  },
  {
    title: "Travel Agency SEO",
    description: "320% traffic increase for a Sri Lankan travel company",
    tech: "Technical SEO, Content Strategy",
    tag: "SEO",
    image:
      "https://travelagency-website.com/wp-content/uploads/2023/10/Scherm%C2%ADafbeelding-2023-10-03-om-18.56.38.png",
  },
  {
    title: "Clinic Management System",
    description: "Desktop application for patient and appointment management",
    tech: "Java, MySQL",
    tag: "Desktop App",
    image:
      "https://i.ytimg.com/vi/MYFHapcvQjw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDEJsWFo6zi9rkLJd1cNPIgngnjHA",
  },
  {
    title: "Retail POS System",
    description: "Point of sale with real-time inventory tracking",
    tech: "PHP, MySQL, JavaScript",
    tag: "Desktop App",
    image:
      "https://lh7-us.googleusercontent.com/xyCcBpMW0uNEsHoJmSnYuEdNVHRPk3ggEOv6fUp-lFoAQkvUK5mKD6HkXE1lmr2Mh8_TR8qsm2AdIPqdIWze--pFjfzvA0kWO2spsGaCACZ2AAN-G-AtNV0AZYSOIbVYM7IIbLrQ10lKcii8qYDRVE0",
  },
  {
    title: "Logistics Mobile App",
    description: "On-demand delivery tracking mobile application",
    tech: "Flutter, Node.js, MongoDB",
    tag: "Mobile App",
    image:
      "https://cdn.dribbble.com/userupload/18192333/file/original-d84fe6ccbab042d1a40a1e1fe61e5475.png?format=webp&resize=400x300&vertical=center",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-bg-subtle">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4 border border-blue-100">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Projects We&#39;ve{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Delivered
            </span>
          </h2>
          <p className="text-lg text-text-secondary">
            Showcasing our best work across different industries and technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover hover:border-blue-100"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.description}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-3 left-3 z-10 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-blue-700 rounded-full shadow-sm">
                  {project.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  {project.description}
                </p>
                <span className="text-xs font-medium text-blue-600">
                  {project.tech}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
