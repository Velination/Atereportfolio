// components/Services.tsx

"use client";

import { motion } from "framer-motion";

import {
  FaLaptopCode,
  FaPalette,
  FaServer,
  FaCode,
  FaShoppingCart,
  FaTasks,
} from "react-icons/fa";


const services = [
  {
    icon: <FaLaptopCode className="text-3xl text-emerald-400" />,
    title: "Full-Stack Web Development",
    desc: "Building production-ready web applications across frontend and backend, with a focus on performance, scalability, security, and maintainable code.",
  },
  {
    icon: <FaPalette className="text-3xl text-emerald-400" />,
    title: "UI/UX & Web Design",
    desc: "Designing modern, responsive, and intuitive interfaces that create clear user experiences across websites, dashboards, and digital platforms.",
  },
  {
    icon: <FaServer className="text-3xl text-emerald-400" />,
    title: "API & Backend Development",
    desc: "Developing secure and scalable backend systems, RESTful APIs, authentication, databases, and integrations that power reliable digital products.",
  },
  {
    icon: <FaCode className="text-3xl text-emerald-400" />,
    title: "Web Applications",
    desc: "Turning ideas into functional web applications such as marketplaces, booking systems, business platforms, and customer-facing products.",
  },
  {
    icon: <FaShoppingCart className="text-3xl text-emerald-400" />,
    title: "E-commerce Solutions",
    desc: "Building secure and user-friendly e-commerce platforms with product management, payments, customer workflows, and backend integrations.",
  },
  {
    icon: <FaTasks className="text-3xl text-emerald-400" />,
    title: "Project Management",
    desc: "Planning, coordinating, and delivering digital projects with a focus on scope, timelines, risks, resources, stakeholders, and successful outcomes.",
  },
];

const Services = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14 group">
          <h2 className="text-4xl font-bold inline-block relative">
            My Services

            <span className="block h-1 w-10 bg-emerald-400 mx-auto mt-2 transition-all duration-500 group-hover:w-full"></span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-black border border-gray-800 p-6 rounded-lg hover:bg-[#111] transition duration-300 hover:border-emerald-400/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;