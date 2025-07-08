"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  "Home",
  "About",
  "Portfolio",
  
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold">
        A.I <span className="text-emerald-400">.</span>
      </h1>

      {/* Desktop Nav */}
    <nav className="hidden md:flex space-x-10 text-xl font-bold">
  {navLinks.map((link) => {
    let href = `#${link.toLowerCase()}`;
    if (link === "Home") href = "/";
    else if (link === "About") href = "/about";
    else if (link === "Portfolio") href = "/portfolio";

    return (
      <Link
        key={link}
        href={href}
        className="hover:text-emerald-400 relative group font-medium"
      >
        {link}
        <span className="block h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300"></span>
      </Link>
    );
  })}
</nav>


      {/* Hamburger Icon (Mobile) */}
      {!menuOpen && (
  <button
    className="md:hidden z-[60]"
    onClick={() => setMenuOpen(true)}
    aria-label="Open Menu"
  >
    <Bars3Icon className="w-6 h-6" />
  </button>
)}

      {/* AnimatePresence for menu mount/unmount */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Side panel */}
            <motion.div
              className="fixed top-0 right-0 w-64 h-full  z-50 p-6 flex flex-col gap-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Close button */}
              <div className="flex justify-end">
                <XMarkIcon
                  className="w-6 h-6 text-white cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                />
              </div>

              {/* Mobile Nav Links */}
             <nav className="flex flex-col gap-4 text-white mt-4">
  {navLinks.map((link) => {
    let href = `#${link.toLowerCase()}`;
    if (link === "Home") href = "/";
    else if (link === "About") href = "/about";
    else if (link === "Portfolio") href = "/portfolio";

    return (
      <Link
        key={link}
        href={href}
        onClick={() => setMenuOpen(false)}
        className="hover:text-emerald-400 text-lg"
      >
        {link}
      </Link>
    );
  })}
</nav>


            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
