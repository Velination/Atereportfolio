"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { motion } from "framer-motion";
import { BriefcaseIcon, BuildingStorefrontIcon, CloudIcon } from "@heroicons/react/24/solid";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const brands = [
  { name: "HTML", icon: BriefcaseIcon },
  { name: "CSS", icon: BuildingStorefrontIcon },
  { name: "JAVASCRIPT", icon: CloudIcon },
  { name: "REACT", icon: BriefcaseIcon },
  { name: "GIT", icon: BuildingStorefrontIcon },
  { name: "PHP", icon: CloudIcon },
  { name: "LARAVEL", icon: BriefcaseIcon },
  { name: "NODEJS", icon: BuildingStorefrontIcon },
  { name: "NEXTJS", icon: CloudIcon },
  { name: "TAILWINDCSS", icon: BriefcaseIcon },
   { name: "ADONISJS", icon: BriefcaseIcon },
    { name: "POSTGRESQL", icon: BriefcaseIcon },
     { name: "MYSQL", icon: BriefcaseIcon },
];

const educations = [
  {
    school: "STANFORD UNIVERSITY",
    date: "JAN 2016",
    title: "Frontend Web Developer Degree",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cill dolore eu fugiat nulla pariatur sint occaecat dolor.",
  },
  {
    school: "MIT UNIVERSITY",
    date: "AUG 2014",
    title: "User Experience Master",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl ut lacinia leo nuno id tellus. Orci, curabitur lorem massa cursus.",
  },
  {
    school: "GOOGLE",
    date: "APR 2011",
    title: "Javascript Basics Course",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas feugiat sagittis, nunc in hac faucibus in risus.",
  },
  {
    school: "NEW YORK UNIVERSITY",
    date: "MAY 2008",
    title: "Web Development Degree",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum senectus dis nunc fermentum tellus id. Eros tempor.",
  },
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
            Im Ifeoluwa Atere, a developer with a passion for designing and building beautiful, performant websites and apps. I’ve worked on projects ranging from portfolio sites to full-scale business platforms.
          </p>
          <p className="text-gray-600">
            I focus on writing clean, maintainable code and continuously improving my skill set.
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
          <h3 className="text-4xl font-bold text-emerald-600">12+</h3>
          <p className="text-gray-500">Years of Experience</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-emerald-600">150+</h3>
          <p className="text-gray-500">Projects Delivered</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-emerald-600">30+</h3>
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
        Exceptetur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat.
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
        My first website design back in 2001
      </h3>
      <p className="text-gray-300 leading-relaxed">
        I started creating websites with basic HTML & CSS in 2001. Over time,
        I’ve grown into building full-stack applications with performance,
        accessibility, and elegance in mind.
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
            <Icon className="w-6 h-6 text-white" />
            <span className="text-sm font-medium">{name}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.a
        href="#contact"
        className="inline-block text-white font-semibold text-lg group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Get in touch{" "}
        <span className="inline-block group-hover:translate-x-1 transition-transform">
          →
        </span>
        <div className="h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-white mt-1 mx-auto" />
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
          <h3 className="text-3xl md:text-4xl font-bold">Experience / Education</h3>
        </div>
        {/* <p className="text-gray-400 max-w-md mt-4 md:mt-0">
          Lorem ipsum dolor sit amet consectetur adipiscing elit et et eget tortor lacus aliquam pulvinar senectus ut sapien sed nun
        </p> */}
      </div>

      <hr className="border-gray-700 mb-10" />

      {/* Experience Grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-700">
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
          href="/assets/cv.pdf"
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
