"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Surebase",
    title: "Insurtech Platform Development for Surebase",
    tags: ["Fintech", "Insurtech", "Web Development", "API"],
    image: "/assets/surebase.png",
  },
   {
    id: 2,
    name: "MyQura",
    title: "Health & Wellness Platform Development for MyQura",
    tags: ["HealthTech", "Mobile Application", "API"],
    image: "/assets/myqura.png",
  },
  {
    id: 3,
    name: "Beauty By Miemie",
    title: "Booking application for a Hair salon",
    tags: ["E-commerce", "Beauty Brand", "Web Application"],
    image: "/assets/beautybymiemie.png",
  },
];

const PortfolioSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="bg-[#1c1e21] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-emerald-400 font-bold mb-2">/ MY PORTFOLIO</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Take a look at the latest <br /> projects I&apos;ve done
          </h2>
          <div className="inline-block group mb-10">
            <a
              href="tel:+2348125654079"
              className="font-semibold text-2xl inline-flex items-center transition-transform duration-300 group-hover:translate-x-1 mb-1"
            >
              Browse all projects <span className="text-emerald-400 ml-1">→</span>
            </a>
            <span className="block h-0.5 bg-emerald-400 w-0 group-hover:w-full transition-all duration-300 mt-[-2px]" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
  const isHovered = hoveredId === project.id;

  return (
    <Link
      key={project.id}
      href="/portfolio"
      className="block"
    >
      <motion.div
        className={`rounded-3xl p-6 flex flex-col cursor-pointer transition duration-300 ${
          isHovered
            ? "bg-[#2e323c]"
            : hoveredId === null
            ? "bg-[#2e323c]"
            : "bg-[#1a1c20] opacity-60"
        }`}
        onMouseEnter={() => setHoveredId(project.id)}
        onMouseLeave={() => setHoveredId(null)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >

                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-700 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Name */}
                <p className="text-gray-400 text-sm mb-2">{project.name}</p>

                {/* Title */}
                <h3 className="font-bold mb-4">{project.title}</h3>

                {/* Image */}
                <div className="rounded-xl overflow-hidden mt-auto">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full"
                  />
                </div>
              </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
