"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  BuildingStorefrontIcon,
  CloudIcon,
} from "@heroicons/react/24/solid";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const brands = [
  { name: "HTML", icon: BriefcaseIcon },
  { name: "CSS", icon: BriefcaseIcon },
  { name: "JAVASCRIPT", icon: BriefcaseIcon },
  { name: "REACT", icon: BuildingStorefrontIcon },
  { name: "GIT", icon: CloudIcon },
  { name: "PHP", icon: BriefcaseIcon },
  { name: "LARAVEL", icon: BuildingStorefrontIcon },
  { name: "NODEJS", icon: BuildingStorefrontIcon },
  { name: "NEXTJS", icon: BuildingStorefrontIcon },
  { name: "TAILWINDCSS", icon: BuildingStorefrontIcon },
  { name: "ADONISJS", icon: BuildingStorefrontIcon },
  { name: "POSTGRESQL", icon: CloudIcon },
  { name: "MYSQL", icon: CloudIcon },
];

const educations = [
    {
  school: "ARDEN UNIVERSITY",
  date: "MAY 2026 – MAY 2027",
  title: "MSc Project Management",
  desc: "Developing advanced knowledge in project planning, risk management, leadership, stakeholder management, and project delivery, with a focus on applying structured project management principles to real-world business and technology projects.",
},
  {
    school: "STRINGIFY CONSULTANT",
    date: "MAR 2025",
    title: "Full-Stack Developer",
    desc: "Working as a full-stack developer, building and maintaining scalable web applications and APIs. Responsible for developing frontend interfaces, backend services, and contributing to system architecture with a focus on performance, security, and clean code.",
  },
  {
    school: "DESIGN WITH BLOCKS ACADEMY",
    date: "JUN 2021",
    title: "Programming & UX Foundations",
    desc: "Began formal training in programming and user experience design, learning the fundamentals of building functional, user-centered digital products through hands-on projects.",
  },
  {
    school: "LADOKE AKINTOLA UNIVERSITY OF TECHNOLOGY",
    date: "SEPT 2016",
    title: "Bachelor of Technology",
    desc: "Completed a Bachelor of Technology degree with a strong foundation in engineering principles, problem-solving, and applied technical skills.",
  },
  

];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-black text-white px-6 py-20">
      <Header />

      {/* Common page container */}
      <div className="max-w-6xl mx-auto">

        {/* ========================================= */}
        {/* IMAGE + STORY SECTION */}
        {/* ========================================= */}

        <div className="flex flex-col md:flex-row items-center pt-10 gap-12 mb-16">

          {/* Image */}
          <motion.div
            className="relative w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/assets/temidayo-1.png"
              alt="Developer photo"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">
  My Story
</h2>

            <p className="text-gray-200 mb-4 leading-relaxed">
              I’m Ifeoluwa Atere, a Full-Stack Developer who builds scalable, production-ready digital products that solve real-world problems. I work across frontend and backend development, transforming ideas and business requirements into reliable, high-performing applications.
            </p>

            <p className="text-gray-300">
              From marketplaces and business platforms to custom web applications, I focus on clean architecture, maintainable code, and exceptional user experiences. I’m driven by building technology that is practical, scalable, and built to create real value.
            </p>
          </motion.div>
        </div>

        {/* ========================================= */}
        {/* STATS SECTION */}
        {/* ========================================= */}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-20 bg-[#2e323c] rounded-3xl px-6 md:px-20 py-20 text-white mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-4xl font-bold text-emerald-400">
              3+
            </h3>
            <p className="text-gray-400">
              Years of Experience
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-emerald-400">
              15
            </h3>
            <p className="text-gray-400">
              Projects Delivered
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-emerald-400">
              15
            </h3>
            <p className="text-gray-400">
              Happy Clients
            </p>
          </div>
        </motion.div>

        {/* ========================================= */}
        {/* DEVELOPMENT JOURNEY */}
        {/* ========================================= */}

        <section className="py-20 text-white space-y-24">

          {/* Row 1 */}
          <div className="grid md:grid-cols-12 gap-8 items-center">

            {/* Image */}
            <motion.div
              className="md:col-span-7"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/temidayo-2.png"
                  alt="Development journey"
                  width={800}
                  height={600}
                  className="object-contain w-full h-full"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="md:col-span-5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-emerald-400 font-bold text-sm mb-2">
    / MY JOURNEY
  </p>

               <h2 className="text-3xl md:text-4xl font-bold mb-5">
    From Learning to Building
    <br />
    Real-World Products
  </h2>

              <p className="text-gray-200 leading-relaxed">
    I started my journey in web development with a curiosity to
    understand how digital products work and a determination to build
    them myself. What began with the fundamentals of HTML, CSS, and PHP
    evolved into full-stack development and building production-ready
    applications.
  </p>

  <p className="text-gray-200 leading-relaxed mt-4">
    Today, I work across frontend and backend technologies to create
    scalable web applications, marketplaces, and business platforms.
    I focus on clean architecture, performance, usability, and turning
    ideas into reliable products that solve real-world problems.
  </p>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-12 gap-8 items-center">

            {/* Text */}
            <motion.div
              className="md:col-span-5 order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-emerald-400 font-semibold mb-2">
                / MY SKILL SET
              </p>

              <h3 className="text-3xl md:text-4xl font-bold mb-5">
                Technologies I use to build modern digital products
              </h3>

              <p className="text-gray-300 leading-relaxed">
   I use a modern and versatile technology stack to turn ideas into production-ready digital products. From responsive interfaces and complex web applications to robust backend systems and APIs, I work across the stack to build solutions that are scalable, maintainable, and built around real user needs.
  </p>

 <div className="text-gray-200 leading-relaxed mt-4 space-y-2">
  <p>
    <span className="text-emerald-400 font-semibold">Frontend:</span>{" "}
    React, Next.js, Vue.js, JavaScript, TypeScript, HTML, CSS
  </p>

  <p>
    <span className="text-emerald-400 font-semibold">Backend:</span>{" "}
    Node.js, Express.js, PHP, Laravel, Adonis.js
  </p>

  <p>
    <span className="text-emerald-400 font-semibold">Database & APIs:</span>{" "}
    MySQL, PostgreSQL, REST APIs
  </p>

  <p>
    <span className="text-emerald-400 font-semibold">Tools:</span>{" "}
    Git, GitHub, Jira, ClickUp, Microsoft 365
  </p>
</div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="md:col-span-7 order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/temidayo-2.png"
                  alt="Old coding laptop"
                  width={800}
                  height={600}
                  className="object-contain w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================= */}
        {/* SKILL SETS */}
        {/* ========================================= */}

        <motion.section
          className="bg-[#2e323c] rounded-3xl px-6 md:px-20 py-20 text-white text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-emerald-400 font-semibold mb-2">
            / MY SKILL SETS
          </p>

          <h3 className="text-3xl md:text-4xl font-bold mb-10 leading-snug">
            Technologies and frameworks I work with
          </h3>

          {/* Icon Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 place-items-center mb-10">
            {brands.map(({ name, icon: Icon }, index) => (
              <motion.div
                key={name}
                className="flex items-center gap-2 text-gray-200 capitalize"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4,
                }}
                viewport={{ once: true }}
              >
                <Icon className="w-6 h-6 text-emerald-400" />

                <span className="text-sm font-medium">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#contact"
            className="inline-block text-white font-semibold text-lg group"
          >
            Get in touch{" "}

            <span className="inline-block group-hover:translate-x-1 transition-transform">
              →
            </span>

            <div className="h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-emerald-400 mt-1" />
          </motion.a>
        </motion.section>

        {/* ========================================= */}
        {/* EDUCATION / EXPERIENCE */}
        {/* ========================================= */}

        <motion.section
          className="py-20 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row justify-between mb-10">
            <div>
              <p className="text-sm text-emerald-400 font-semibold mb-1">
                / MY BACKGROUND
              </p>

              <h3 className="text-3xl md:text-4xl font-bold">
                Education / Experience
              </h3>
            </div>
          </div>

          <hr className="border-gray-700 mb-10" />

          {/* Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y divide-gray-700">
            {educations.map((edu, idx) => (
              <motion.div
                key={idx}
                className="p-6 md:p-10 border-b border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.1,
                }}
                viewport={{ once: true }}
              >
                <p className="text-xs uppercase text-gray-300 font-medium">
                  {edu.school} / {edu.date}
                </p>

                <h4 className="text-xl font-bold mt-2 mb-2">
                  {edu.title}
                </h4>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {edu.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Download CV */}
          <div className="text-center mt-10">
            <a
              href="/assets/Atere-Ifeoluwa-CV-New-Developer.pdf"
              download
              className="inline-block border border-white px-6 py-2 rounded-full text-white hover:bg-emerald-400 hover:text-black transition duration-300"
            >
              Download CV
            </a>
          </div>
        </motion.section>

      </div>

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}