"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const projects = [
  {
    id: 1,
    name: "DeFi X",
    title: "Crypto Website Development for DeFi X",
    tags: ["React JS", "Web Development"],
    image: "/assets/farmstore.jpg",
  },
  {
    id: 2,
    name: "Dev X",
    title: "Agency Website Development for Dev X",
    tags: ["React JS", "Web Development"],
    image: "/assets/farmstore.jpg",
  },
  {
    id: 3,
    name: "Dark X",
    title: "Trading Website Development for Dark X",
    tags: ["Webflow", "Web Development"],
    image: "/assets/farmstore.jpg",
  },
  {
    id: 4,
    name: "Fintech X",
    title: "Banking Website Optimization for Fintech X",
    tags: ["HTML/CSS", "Web Development"],
    image: "/assets/farmstore.jpg",
  },
];

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#1c1e21]  text-white px-6 py-20">
        <Header />
      <div className="max-w-7xl mx-auto border-t border-b border-white pt-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="h-[2px] w-10 bg-emerald-400 mx-auto mb-4 "></div>
          <h2 className="text-4xl font-bold mb-8">Portfolio</h2>

          
          <p className="text-gray-400 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit fames turpis pretium bibendum
            nisl est sagittis aliquam pretium nunc.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 border-b border-white">
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const isDimmed = hoveredIndex !== null && !isHovered;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`rounded-3xl p-6 flex flex-col transition duration-300 ${
                  isHovered
                    ? "bg-[#3a3f4a] shadow-2xl scale-[1.02]"
                    : "bg-[#2e323c]"
                } ${isDimmed ? "opacity-30 blur-[1px]" : "opacity-100"}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#3e434e] text-xs text-white px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Name */}
                <p className="text-sm text-gray-400 mb-1">{project.name}</p>

                {/* Title */}
                <h3 className="text-lg font-bold mb-4 leading-snug">{project.title}</h3>

                {/* Image */}
                <div className="rounded-xl overflow-hidden mt-auto border border-gray-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <ContactSection /> 
      </div>


      
    <Footer />
    </section>
  );
};

export default Portfolio;
