"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { name: "Stringify", icon: "/stringify-consulting.png" },
  { name: "House Of Funke", icon: "/house-Of-funke.PNG" },
  { name: "Tintech", icon: "/tintech.jpg" },
  { name: "FarmFest Connect", icon: "/farm-connect.png" },
  // Add more if needed
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full  text-white py-20 px-6 md:px-20"
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-sm text-emerald-400 mb-2">/ ABOUT ME</h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            I build scalable, production-ready web and mobile applications
          </h1>
          <p className="text-gray-400 text-base mb-6">
            I’m a full-stack developer with experience building web applications, marketplaces, and business platforms. I focus on clean architecture, maintainable code, and delivering reliable solutions that scale.
          </p>
          <div className="inline-block group mb-10">
            <a
              href="tel:+2348125654079"
              className="font-semibold text-2xl inline-flex items-center transition-transform duration-300 group-hover:translate-x-1 mb-1"
            >
              More About Me <span className="text-emerald-400 ml-1">→</span>
            </a>
            <span className="block h-0.5 bg-emerald-400 w-0 group-hover:w-full transition-all duration-300 mt-[-2px]" />
          </div>
        </div>

        {/* Stats */}
        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 p-20">
          <div>
            <p className="text-4xl font-bold">3+</p>
            <p className="text-gray-400">Years of experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold">15</p>
            <p className="text-gray-400">Successful projects</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-12 h-[1px] bg-gray-700" />

      {/* Companies / Previously Worked */}
      <div>
        {/* Previously Worked On */}
<motion.div
  className="flex flex-col items-center justify-center text-center"
  initial={{ x: -150, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <h3 className="text-sm font-bold mb-6 text-gray-300">
    PREVIOUSLY WORKED ON
  </h3>

  <div className="flex justify-center items-center flex-wrap gap-10">
    {companies.map((company) => (
      <Image
        key={company.name}
        src={company.icon}
        alt={company.name}
        width={100}
        height={40}
        className="object-contain grayscale-0"
      />
    ))}
  </div>
</motion.div>


      </div>
    </section>
  );
}
