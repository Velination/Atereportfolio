"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { motion } from "framer-motion";
import { BriefcaseIcon, BuildingStorefrontIcon, CloudIcon } from "@heroicons/react/24/solid";
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
    school: "LADOKE AKINTOLA UNIVERSITY OF TECHNOLOGY",
    date: "SEPT 2016",
    title: "Bachelor of Technology ",
    desc: "Completed a Bachelor of Technology degree with a strong foundation in engineering principles, problem-solving, and applied technical skills.",
  },
  {
    school: "DESIGN WITH BLOCKS ACADEMY",
    date: "JUN 2021",
    title: "Programming & UX Foundations",
    desc: "Began formal training in programming and user experience design, learning the fundamentals of building functional, user-centered digital products through hands-on projects.",
  },
  {
  school: "HOUSE OF FUNKE",
  date: "FEB 2022",
  title: "Web Developer (Freelance)",
  desc: "Worked as a freelance web developer, optimizing PHP and SQL-based systems for performance and reliability. Implemented secure authentication workflows, role-based access control, and caching strategies to improve application speed, scalability, and overall user experience."
}
,
 {
  school: "STRINGIFY CONSULTANT",
  date: "MAR 2025",
  title: "Full-Stack Developer",
  desc: "Working as a full-stack developer, building and maintaining scalable web applications and APIs. Responsible for developing frontend interfaces, backend services, and contributing to system architecture with a focus on performance, security, and clean code."
}

];

export default function AboutPage() {
  return (

    
    <main className="min-h-screen  w-full bg-black text-gray-800 px-6 md:px-20 py-20">
      <Header />

      {/* Image + Story Section */}
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
          <h2 className="text-2xl font-semibold mb-4 text-emerald-400">My Story</h2>
          <p className="text-gray-600 mb-4">
            I’m Ifeoluwa Atere, a developer who builds production-ready web applications and digital products. My experience spans portfolio websites, marketplaces, and business platforms designed for performance, scalability, and usability.
          </p>
          <p className="text-gray-600">
            I focus on clean architecture, maintainable code, and turning ideas into reliable, real-world solutions.
          </p>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-20 
        bg-[#2e323c] rounded-3xl px-6 md:px-20 py-20 text-white mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div>
          <h3 className="text-4xl font-bold text-emerald-600">3+</h3>
          <p className="text-gray-500">Years of Experience</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-emerald-600">15</h3>
          <p className="text-gray-500">Projects Delivered</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-emerald-600">15</h3>
          <p className="text-gray-500">Happy Clients</p>
        </div>
      </motion.div>


<section className="px-6 md:px-20 py-20 text-white space-y-24">

  {/* Row 1 */}
  <div className="grid md:grid-cols-12 gap-6 items-center">
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
      <p className="text-sm text-emerald-400 font-semibold mb-2">/ MY STORY</p>
      <h3 className="text-3xl md:text-4xl font-bold mb-4">
        How I started as a web developer
      </h3>
      <p className="text-gray-300 leading-relaxed">
        I started my journey into web development out of curiosity and a desire to build things that actually work. What began as simple websites quickly grew into building full applications as I learned how the web truly functions behind the scenes.
        Over time, I moved from basic layouts to creating functional platforms, focusing on performance, structure, and real user needs. That curiosity eventually became a craft I continue to refine every day.
      </p>
    </motion.div>
  </div>

  {/* Row 2 */}
  <div className="grid md:grid-cols-12 gap-6 items-center">
    {/* Text */}
    <motion.div
      className="md:col-span-5 order-2 md:order-1"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="text-sm text-emerald-400 font-semibold mb-2">/ MY STORY</p>
      <h3 className="text-3xl md:text-4xl font-bold mb-4">
        My early web development journey
      </h3>
      <p className="text-gray-300 leading-relaxed">
       I began building websites using basic HTML and CSS, driven by curiosity about how the web works. Over time, that foundation evolved into creating full-stack web applications with a strong focus on performance, accessibility, and clean design.
      </p>
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


    <motion.section
      className="bg-[#2e323c] rounded-3xl px-6 md:px-20 py-20 text-white text-center mt-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="text-sm text-emerald-400 font-semibold mb-2">/ MY SKILL SETS</p>
      <h3 className="text-3xl md:text-4xl font-bold mb-10 leading-snug">
        Technologies and frameworks i work wth
      </h3>

      {/* Icon Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 place-items-center mb-10">
        {brands.map(({ name, icon: Icon }, index) => (
          <motion.div
            key={name}
            className="flex items-center gap-2 text-gray-200 capitalize"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Icon className="w-6 h-6 text-emerald-400" />
            <span className="text-sm font-medium">{name}</span>
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

  {/* underline */}
  <div className="h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-emerald-400 mt-1" />
</motion.a>

    </motion.section>


    <motion.section
      className="px-6 md:px-20 py-20 text-white "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row justify-between mb-10">
        <div>
          <p className="text-sm text-emerald-400 font-semibold mb-1">/ MY BACKGROUND</p>
          <h3 className="text-3xl md:text-4xl font-bold">Education / Experience </h3>
        </div>
        {/* <p className="text-gray-400 max-w-md mt-4 md:mt-0">
          Lorem ipsum dolor sit amet consectetur adipiscing elit et et eget tortor lacus aliquam pulvinar senectus ut sapien sed nun
        </p> */}
      </div>

      <hr className="border-gray-700 mb-10" />

      {/* Experience Grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 divide-y  divide-gray-700">
        {educations.map((edu, idx) => (
          <motion.div
            key={idx}
            className={`p-6 md:p-10 border-b  border-gray-700`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase text-gray-400 font-medium">
              {edu.school} / {edu.date}
            </p>
            <h4 className="text-xl font-bold mt-2 mb-2">{edu.title}</h4>
            <p className="text-gray-400 text-sm">{edu.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Download CV Button */}
      <div className="text-center mt-10">
        <a
          href="/assets/Atere-Ifeoluwa-CV.pdf"
          download
          className="inline-block border border-white px-6 py-2 rounded-full text-white hover:bg-emerald-400 hover:text-black transition duration-300"
        >
          Download CV
        </a>
      </div>
    </motion.section>



  
<ContactSection />


 <Footer />

    </main>
  );
}
