'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1c1e21] text-white px-6 py-10 mt-3">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {/* Profile Section */}
         <motion.div
      className="md:col-span-5"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
    >
        <div className="flex flex-col items-center">
          {/* Image + Name Side by Side */}
          <div className="flex items-center gap-4">
            <Image
              src="/assets/temidayo-1.png"
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full object-contain"
            />
            <h2 className="text-lg font-bold">IFEOLUWA ATERE</h2>
          </div>

          {/* Social Icons Underneath */}
          <div className="flex gap-4 mt-4 text-lg">
  <a
    href="https://wa.me/2348125654079?text=Hello%20I%20found%20your%20portfolio"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-emerald-400 transition-colors"
    aria-label="Facebook"
  >
     <FaWhatsapp />
  </a>

  <a
    href="https://x.com/AtereJeffrey"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-emerald-400 transition-colors"
    aria-label="Twitter"
  >
    <FaXTwitter />

  </a>

  <a
    href="https://instagram.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-emerald-400 transition-colors"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="www.linkedin.com/in/ifeoluwa-atere-1b2704231"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-emerald-400 transition-colors"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="mailto:ifeoluwaatere1@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-emerald-400 transition-colors"
    aria-label="YouTube"
  >
    <FaEnvelope />
  </a>

  <a
    href="https://github.com/Velination"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-emerald-400 transition-colors"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>
</div>

        </div>
        </motion.div>

        {/* Contact Section */}

        <motion.div
          className="text-center md:text-left md:col-span-5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Get in Touch Heading */}
          <div className="inline-block group mb-10">
            <Link
              href="#contact"
              className="font-bold text-2xl inline-flex items-center transition-transform duration-300 group-hover:translate-x-1 mb-1"
            >
              Get in touch <span className="text-emerald-400 ml-1">→</span>
            </Link>
            <span className="block h-0.5 bg-emerald-400 w-0 group-hover:w-full transition-all duration-300 mt-[-2px]" />
          </div>

          {/* Contact Info: Email & Phone Side by Side */}
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-start md:justify-start">
            {/* Email */}
            <div>
              <p className="text-xs text-gray-400">EMAIL ME:</p>
              <div className="inline-block group">
                <a
                  href="mailto:ifeoluwaatere1@gmail.com"
                  className="font-bold inline-flex items-center transition-transform duration-300 group-hover:translate-x-1"
                >
                  ifeoluwaatere1@gmail.com
                  <span className="text-emerald-400 ml-1">→</span>
                </a>
                <span className="block h-0.5 bg-emerald-400 w-0 group-hover:w-full transition-all duration-300" />
              </div>
            </div>

            {/* Phone */}
            <div>
              <p className="text-xs text-gray-400">CALL ME:</p>
              <div className="inline-block group">
                <a
                  href="tel:+2348125654079"
                  className="font-bold inline-flex items-center transition-transform duration-300 group-hover:translate-x-1"
                >
                  +234 812 565 4079
                  <span className="text-emerald-400 ml-1">→</span>
                </a>
                <span className="block h-0.5 bg-emerald-400 w-0 group-hover:w-full transition-all duration-300" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Links */}
      <div className="max-w-6xl mx-auto mt-10 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <div className="flex gap-6 mb-4 md:mb-0">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p>
          Copyright © V.A.I Technologies | Designed by{" "}
          <a href="#" className="underline">
            Ifeoluwa Atere
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
