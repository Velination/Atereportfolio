// components/Services.tsx
"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaPalette, FaUserAlt, FaCode, FaWordpress, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-3xl text-emerald-400" />,
    title: "Digital Strategy",
    desc: "I help define and execute digital strategies that align technology with business goals, focusing on scalable solutions, performance, and long-term growth."
  },
  {
    icon: <FaPalette className="text-3xl text-emerald-400" />,
    title: "Web Design",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: <FaUserAlt className="text-3xl text-emerald-400" />,
    title: "User Experience",
    desc: "Designing clean, responsive, and user-focused interfaces that balance aesthetics with usability across modern web platforms."
  },
  {
    icon: <FaCode className="text-3xl text-emerald-400" />,
    title: "Web Development",
    desc: "Building scalable, high-performance web applications using modern frameworks, clean architecture, and proven development best practices."
  },
  {
    icon: <FaWordpress className="text-3xl text-emerald-400" />,
    title: "WordPress Solutions",
    desc: "Building and customizing WordPress websites tailored to business needs, focusing on performance, security, and ease of content management."
  },
  {
    icon: <FaMobileAlt className="text-3xl text-emerald-400" />,
    title: "Mobile Applications",
    desc: "Developing modern mobile applications with a focus on performance, usability, and seamless integration with backend services."
  },
];

const Services = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="text-center mb-14 group">
  <h2 className="text-4xl font-bold inline-block relative">
    My Services
    <span className="block h-1 w-10 bg-emerald-400 mx-auto mt-2 transition-all duration-500 group-hover:w-full"></span>
  </h2>
</div>


        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-black border border-gray-800 p-6 rounded-lg hover:bg-[#111] transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      
    </section>
  );
};

export default Services;
