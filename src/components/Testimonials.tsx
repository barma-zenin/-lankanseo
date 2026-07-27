"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "LankanSEO increased our organic traffic by 320% in just 6 months. Their SEO expertise and dedication transformed our online presence completely. Highly recommended!",
    author: "John Doe",
    role: "CEO, TechVista Solutions",
    initials: "JD",
  },
  {
    quote:
      "The website LankanSEO built for us is absolutely stunning — fast, beautiful, and generates leads daily. Best investment we've made for our business this year.",
    author: "Sarah Khan",
    role: "Founder, GreenLeaf Enterprises",
    initials: "SK",
  },
  {
    quote:
      "Professional, responsive, and incredibly skilled. Our mobile app was delivered on time, within budget, and exceeded all our expectations. A true partner in growth.",
    author: "Mike Richards",
    role: "CTO, OceanFront Technologies",
    initials: "MR",
  },
  {
    quote:
      "Their desktop POS system streamlined our entire retail operation. Inventory management, sales tracking, reporting — everything works flawlessly. Outstanding quality.",
    author: "Priya Sharma",
    role: "Owner, PrimeCore Retail",
    initials: "PS",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(59,130,246,0.4) 0%, transparent 50%),
                              radial-gradient(circle at 70% 50%, rgba(6,182,212,0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-4 border border-white/10">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-blue-200/70">
            Don&apos;t just take our word for it — hear from our satisfied clients
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          <div className="min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 text-center w-full"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="font-heading text-lg md:text-xl text-white/90 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-sm font-bold text-white">
                    {testimonials[current].initials}
                  </div>
                  <div className="text-left">
                    <cite className="block text-sm font-semibold text-white not-italic">
                      {testimonials[current].author}
                    </cite>
                    <span className="text-xs text-blue-300/70">
                      {testimonials[current].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-blue-400 w-8"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
