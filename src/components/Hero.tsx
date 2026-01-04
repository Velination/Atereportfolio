"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden ">
      {/* Background Image */}
      <Image
        src="/assets/temidayo-2.png"
        alt="Bisola Atere"
        fill
        priority
        className="object-contain brightness-[0.4]"
      />

      {/* Overlay Content */}
      <div className="z-10 text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          IFEOLUWA ATERE
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mt-4 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I build full-stack applications that turn ideas into usable products
        </motion.p>
      </div>

      {/* Scroll Indicator */}
<a
  href="#about"
  className="absolute bottom-10 z-10 flex flex-col items-center cursor-pointer group"
>
  <div className="h-8 w-[2px] bg-white animate-bounce mb-2 group-hover:bg-emerald-400" />
  <span className="text-xs text-gray-400 group-hover:text-emerald-400 transition">
    SCROLL
  </span>
</a>

    </section>
  );
}
