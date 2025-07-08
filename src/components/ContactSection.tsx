"use client";

import React, { useState, useEffect } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Check for empty fields
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    setStatus({ type: "success", message: "Sending..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: "Failed to send message." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Something went wrong. Please try again later." });
    }
  };

  // 3. Auto-hide status message after 4s
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section id="contact" className="bg-[#1c1e21] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Left Text Section */}
        <div>
          <div className="w-10 h-[2px] bg-white mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in <br /> working together? <br />
            Let&apos;s talk <span className="text-emerald-400">→</span>
          </h2>
        </div>

        {/* Right Form Section */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">

          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="peer bg-transparent border-b-2 border-gray-500 w-full py-2 text-white focus:outline-none focus:border-emerald-400 placeholder-transparent"
              placeholder="Your name"
            />
            <label
              htmlFor="name"
              className={`absolute left-0 transition-all text-sm text-gray-400
                ${formData.name ? "-top-4 text-xs text-emerald-400" : "top-2 text-sm"}
                peer-focus:-top-4 peer-focus:text-xs peer-focus:text-emerald-400`}
            >
              Your name
            </label>
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="peer bg-transparent border-b-2 border-gray-500 w-full py-2 text-white focus:outline-none focus:border-emerald-400 placeholder-transparent"
              placeholder="Your email"
            />
            <label
              htmlFor="email"
              className={`absolute left-0 transition-all text-sm text-gray-400
                ${formData.email ? "-top-4 text-xs text-emerald-400" : "top-2 text-sm"}
                peer-focus:-top-4 peer-focus:text-xs peer-focus:text-emerald-400`}
            >
              Your email address
            </label>
          </div>

          {/* Project Description */}
          <div className="relative">
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="peer bg-transparent border-b-2 border-gray-500 w-full py-2 text-white focus:outline-none focus:border-emerald-400 resize-none"
              placeholder=" "
            ></textarea>
            <label
              htmlFor="message"
              className={`absolute left-0 transition-all text-sm text-gray-400
                ${formData.message ? "-top-4 text-xs text-emerald-400" : "top-2 text-sm"}
                peer-focus:-top-4 peer-focus:text-xs peer-focus:text-emerald-400`}
            >
              Describe your project
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 text-left font-semibold text-white group inline-flex flex-col items-start"
          >
            <span className="inline-flex items-center relative">
              CONTACT ME
              <span className="ml-2 text-emerald-400 transition-transform duration-300 group-hover:translate-x-1">→</span>
              <span className="absolute bottom-0 left-0 h-0.5 bg-emerald-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </span>
          </button>

          {/* 2. Status Message Box */}
          {status && (
            <div
              className={`mt-4 px-4 py-2 rounded-md text-sm transition-all duration-300 ${
                status.type === "success"
                  ? "bg-green-800 text-green-200"
                  : "bg-red-800 text-red-200"
              }`}
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
