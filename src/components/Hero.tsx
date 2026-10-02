"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden">

      {/* Background Image */}
      <Image
        src="/assets/temidayo-2.png"
        alt="Ifeoluwa Atere"
        fill
        priority
        className="object-contain brightness-[0.35]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Overlay Content */}
      <div className="relative z-10 text-center px-4">

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          IFEOLUWA ATERE
        </motion.h1>

        {/* Accent Line */}
        <motion.div
          className="h-1 w-16 bg-emerald-400 mx-auto mt-5"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 64, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-2xl mt-5 text-gray-200 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Full-Stack Developer building scalable digital products
          and real-world solutions.
        </motion.p>

      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 z-10 flex flex-col items-center cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="text-emerald-400 text-xl mb-2 transition-transform duration-300 group-hover:translate-y-1">
          ↓
        </div>

        <span className="text-xs tracking-[0.25em] text-gray-300 group-hover:text-emerald-400 transition">
          SCROLL TO EXPLORE
        </span>
      </motion.a>

    </section>
  );
}