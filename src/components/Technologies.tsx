"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiPhp,
  SiNodedotjs,
  SiFlutter,
  SiAndroid,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiCloudflare,
} from "@icons-pack/react-simple-icons";
import { Cloud } from "lucide-react";

const techs = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Android", icon: SiAndroid, color: "#3DDC84" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: Cloud, color: "#FF9900" },
  { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 md:py-28 bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4 border border-blue-100">
            Technologies
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Tools &amp;{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-lg text-text-secondary">
            We work with modern, proven technologies to build robust solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4"
        >
          {techs.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-bg-light border border-gray-100 card-hover hover:border-blue-100 cursor-default"
            >
              <tech.icon
                className="w-8 h-8 transition-colors duration-300"
                style={{ color: tech.color }}
              />
              <span className="text-xs font-medium text-text-secondary text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
