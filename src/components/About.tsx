"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { name: "Stringify", icon: "/stringify-consulting.png" },
  { name: "House Of Funke", icon: "/house-of-funke.PNG" },
  { name: "Tintech", icon: "/tintech.jpg" },
  { name: "FarmFest Connect", icon: "/farm-connect.png" },
  { name: "ProsHQ", icon: "/Logo.svg" },
  { name: "Celebration", icon: "/Celebrations.png" },
  { name: "Surebase", icon: "/Surebase_Logo.png" },
  { name: "Beauty By Miemie", icon: "/BBM.png" },
  { name: "Sturdie AI", icon: "/Sturdie.png" },

  // Add your two new logos here
  // { name: "Company Name", icon: "/company-logo.png" },
  // { name: "Company Name", icon: "/company-logo.png" },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-12">

          {/* Left Content */}
          <div className="md:w-1/2">

            <h2 className="text-sm text-emerald-400 mb-3 font-medium tracking-wide">
              / ABOUT ME
            </h2>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              I build scalable digital products that solve real-world problems
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
              I’m a full-stack developer focused on building reliable web
              applications, marketplaces, and business platforms. I combine
              clean architecture, modern technologies, and practical problem
              solving to turn ideas into production-ready products.
            </p>

            <div className="inline-block group mb-10">
              <a
                href="/about"
                className="font-semibold text-xl inline-flex items-center transition-transform duration-300 group-hover:translate-x-1"
              >
                More About Me
                <span className="text-emerald-400 ml-2">
                  →
                </span>
              </a>

              <span className="block h-0.5 bg-emerald-400 w-0 group-hover:w-full transition-all duration-300 mt-1" />
            </div>
          </div>

          {/* Stats */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-10 md:pt-10">

            <div>
              <p className="text-4xl md:text-5xl font-bold text-white">
                3+
              </p>

              <p className="text-gray-400 mt-2">
                Years of experience
              </p>
            </div>

            <div>
              <p className="text-4xl md:text-5xl font-bold text-white">
                15+
              </p>

              <p className="text-gray-400 mt-2">
                Projects delivered
              </p>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="my-14 h-[1px] bg-gray-800" />

        {/* Previously Worked On */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <h3 className="text-xs font-semibold tracking-[0.2em] mb-8 text-gray-400 text-center">
            PREVIOUSLY WORKED ON
          </h3>

          {/* Infinite Logo Marquee */}
          <div className="relative w-full overflow-hidden">

            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee">

              {/* First set of logos */}
              {companies.map((company, index) => (
                <div
                  key={`first-${company.name}-${index}`}
                  className="flex items-center justify-center mx-8 md:mx-12 shrink-0"
                >
                  <Image
                    src={company.icon}
                    alt={company.name}
                    width={120}
                    height={50}
                    className="object-contain"
                  />
                </div>
              ))}

              {/* Duplicate set for seamless looping */}
              {companies.map((company, index) => (
                <div
                  key={`second-${company.name}-${index}`}
                  className="flex items-center justify-center mx-8 md:mx-12 shrink-0"
                >
                  <Image
                    src={company.icon}
                    alt={company.name}
                    width={120}
                    height={50}
                    className="object-contain"
                  />
                </div>
              ))}

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}