"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

// You can add/adjust fields per project for the modal content
type Project = {
  id: number;
  name: string;
  title: string;
  tags: string[];
  image: string;
  description?: string;
  description2?: string;
  type?: string;
  languages?: string[];
  platform?: string;
  country?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Beauty By Miemie",
    title: "Booking application for a Hair salon",
    tags: ["E-commerce", "Beauty Brand", "Web Application"],
    image: "/assets/beautybymiemie.png",
    description:
      "BBM is a boutique beauty studio dedicated to enhancing natural radiance through bespoke skincare, lash, brow, and wellness treatments. With a focus on refined techniques, high-quality products, and personalized care, we strive to create a confident glow and lasting impression with every service.",
    
    type: "Web App",
    languages: ["Next JS", "Node JS", "Express JS", ],
    platform: "Via-Technologies",
    country: "USA",
    liveUrl: "https://www.beautybymiemie.com",
  },
  {
    id: 2,
    name: "FarmFest Connect",
    title: "A Marketplace Bridging Farmers and Buyers",
   tags: ["AgriTech", "Marketplace", "Payment", "Web App"],
    image: "/assets/farmstore.jpg",
    description:
      "FarmConnect is a modern marketplace web app designed to connect farmers and buyers seamlessly. It enables farmers to list and sell produce directly, while buyers can discover, connect, and transact in a secure and transparent environment.",
    type: "Web App",
    languages: [ "HTML", "CSS", "JAVASCRIPT"],
    platform: "Via-Technologies",
    country: "Nigeria",
    liveUrl: "Still in production",
  },
 {
  id: 3,
  name: "Thenod",
  title: "Mobile Development for Thenod HQ",
  tags: [ "Brand Website", "Mobile Development"],
  image: "/assets/Thenod.png", // Replace with your actual Thenod project image
  description:
    "A modern, high-performance Webflow website built for Thenod HQ, showcasing their brand, mission, and service offerings with a minimal and elegant aesthetic.",
  description2:
    "The project focused on smooth animations, clean layout structure, SEO-friendly pages, and a responsive design optimized for both mobile and desktop experiences.",
  type: "Mobile App",
  languages: ["Adonis.js", "React Native"],
  platform: "Stringify Consultant",
  country: "Canada",
  liveUrl: "https://thenodhq.com/",
},
 {
  id: 4,
  name: "Surebase",
  title: "Insurtech Platform Development for Surebase",
  tags: ["Fintech", "Insurtech", "Web Development", "API"],
  image: "/assets/surebase.png", // Replace with actual Surebase screenshot
  description:
    "A scalable fintech–insurtech web platform built to manage insurance products, policies, claims, and wallets within a multi-tenant architecture.",
  description2:
    "The system was designed with a strong focus on security, modular APIs, and domain-driven architecture to support insurers, brokers, and merchants efficiently.",
  type: "Web Application",
  languages: ["C#", ".NET", "Angular"],
  platform: "Stringify Consultant",
  country: "Nigeria",
  liveUrl: "still in production", // Update if private or staging
},
{
  id: 5,
  name: "MyQura",
  title: "Health & Wellness Platform Development for MyQura",
  tags: ["HealthTech", "Mobile Application", "API"],
  image: "/assets/myqura.png", // Replace with actual MyQura screenshot
  description:
    "A digital health and wellness platform designed to provide users with access to curated wellbeing resources, health information, and guided support in a user-friendly environment.",
  description2:
    "The platform emphasizes accessibility, clean user experience, and scalable backend services, enabling seamless content delivery, user engagement, and future health service integrations.",
  type: "Web Application",
  languages: ["Laravel","React Native"],
  platform: "Stringify Consultant",
  country: "Nigeria",
  liveUrl: "https://myqura.org/",
}
];

// ---- Portal so the modal renders into <body> (avoids stacking issues)
function Portal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="bg-[#1c1e21] text-white px-6 py-20">
      <Header />
      <div className="max-w-7xl mx-auto border-t border-b border-white/10 pt-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="h-[2px] w-10 bg-emerald-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-8">Portfolio</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A collection of real-world products and platforms I’ve built, spanning web applications, marketplaces, and scalable digital solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 border-b border-white/10">
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const isDimmed = hoveredIndex !== null && !isHovered;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedProject(project)} // open modal on card click
                className={`rounded-3xl p-6 flex flex-col transition duration-300 cursor-pointer ${
                  isHovered ? "bg-[#3a3f4a] shadow-2xl scale-[1.02]" : "bg-[#2e323c]"
                } ${isDimmed ? "opacity-30 blur-[1px]" : "opacity-100"}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07, duration: 0.45 }}
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
                <div className="relative rounded-xl overflow-hidden mt-auto border border-gray-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full block"
                  />
                  {/* Optional hover CTA */}
                  <div className="absolute inset-0 hidden sm:flex items-center justify-center bg-black/0 hover:bg-black/40 transition">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="hidden sm:block rounded-full px-4 py-2 bg-emerald-500 text-white text-sm font-medium"
                    >
                      View project
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <ContactSection />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Portal>
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          </Portal>
        )}
      </AnimatePresence>

      <Footer />
    </section>
  );
};

export default Portfolio;

// ---- Modal matching the reference layout
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999]"
      role="dialog"
      aria-modal="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} aria-hidden />

      {/* Dialog */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
      >
        <div className="relative w-full max-w-6xl bg-white text-[#111] rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Close X */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 text-2xl leading-none text-black/70 hover:text-black"
            title="Close"
          >
            ×
          </button>

          {/* Left: large image */}
          <div className="relative min-h-[320px] lg:min-h-[560px] bg-[#f5f5f5]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right: content (light theme to match screenshot) */}
          <div className="p-6 sm:p-8 lg:p-10 overflow-y-auto max-h-[80vh]">
            <h3 className="text-2xl font-semibold">{project.title}</h3>

            {/* Divider */}
            <div className="h-px bg-black/10 my-6" />

            {/* Descriptions */}
            {(project.description || project.description2) && (
              <div className="space-y-4 text-[15px] leading-relaxed text-black/80">
                {project.description && <p>{project.description}</p>}
                {project.description2 && <p>{project.description2}</p>}
              </div>
            )}

            {/* Meta list like the screenshot */}
            <dl className="mt-8 grid grid-cols-[100px_1fr] gap-y-4 text-[15px]">
              {project.type && (
                <>
                  <dt className="text-black/60">Type:</dt>
                  <dd className="text-black/80">{project.type}</dd>
                </>
              )}
              {project.languages && (
                <>
                  <dt className="text-black/60">Languages:</dt>
                  <dd className="text-black/80">
                    {project.languages.join(", ")}
                  </dd>
                </>
              )}
              {project.platform && (
                <>
                  <dt className="text-black/60">Platform:</dt>
                  <dd className="text-black/80">{project.platform}</dd>
                </>
              )}
              {project.country && (
                <>
                  <dt className="text-black/60">Country:</dt>
                  <dd className="text-black/80">{project.country}</dd>
                </>
              )}
              {project.liveUrl && (
                <>
                  <dt className="text-black/60">Live URL:</dt>
                  <dd className="text-black/80">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 decoration-black/30 hover:decoration-black"
                    >
                      {project.liveUrl.replace(/^https?:\/\//, "")}
                    </a>
                  </dd>
                </>
              )}
            </dl>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
