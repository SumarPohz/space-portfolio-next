"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showToast, setShowToast] = useState(false);

  // 🔦 Auto highlight on hash navigation
  useEffect(() => {
    if (window.location.hash === "#contact" && sectionRef.current) {
      sectionRef.current.classList.add("ring-highlight");
      setTimeout(() => {
        sectionRef.current?.classList.remove("ring-highlight");
      }, 1500);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // 🕵️ Honeypot check
    const botField = (form.elements.namedItem("company") as HTMLInputElement)
      .value;
    if (botField) return;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const mailto = `mailto:sumarpohz@gmail.com?subject=${encodeURIComponent(
      subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailto;
    form.reset();

    // 🔔 Toast
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      {/* 🔔 Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 right-6 z-50 rounded-xl bg-[#030014] border border-purple-500/40 px-6 py-3 text-green-400 shadow-lg"
          >
            ✅ Message ready to send!
          </motion.div>
        )}
      </AnimatePresence>

      <section
        id="contact"
        ref={sectionRef}
        className="relative w-full py-24 px-6 md:px-12 flex justify-center transition-all"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent blur-2xl" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 w-full max-w-3xl rounded-2xl border border-white/10 bg-[#030014]/80 backdrop-blur-xl p-8 md:p-12 shadow-[0_0_60px_-15px_rgba(112,66,248,0.6)]"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Contact Me
          </h2>
          <p className="mt-3 text-center text-gray-400">
            Let’s build something amazing together 🚀
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            {/* 🕵️ Honeypot (hidden field) */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input name="name" placeholder="Your Name" className="contact-input" required />
              <input name="email" type="email" placeholder="Your Email" className="contact-input" required />
            </div>

            <input name="subject" placeholder="Subject" className="contact-input" />

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              className="contact-input resize-none"
              required
            />

            {/* 🌌 Animated Glow Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative w-full rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 py-3 text-white font-semibold tracking-wide overflow-hidden group"
            >
              <span className="relative z-10">Send Message</span>
              <span className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition" />
            </motion.button>
          </form>

          <p className="mt-6 text-center text-gray-400 text-sm">
            Or reach me on{" "}
            <a
              href="https://wa.me/918787509536?text=Hi%20Sumar,%20I%20found%20your%20portfolio!"
              target="_blank"
              className="text-purple-400 hover:underline"
            >
              WhatsApp
            </a>
          </p>
        </motion.div>
      </section>
    </>
  );
};
