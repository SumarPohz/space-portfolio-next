"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 mt-32 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Top badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Full Stack Developer & SaaS Builder
          </h1>
        </motion.div>

        {/* Main headline */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px]"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Sumarbha Pohsnem
            </span>
            .
          </span>
          <span className="text-4xl">
            I build real-world web apps & AI-powered products.
          </span>
        </motion.div>

        {/* Sub text */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I’m a Full Stack Developer focused on building production-ready
          applications, scalable backends, and SaaS products like{" "}
          <span className="text-purple-400 font-medium"><a target="_blank" href="https://smrai-studio.onrender.com/">ResuCV</a></span>.
        </motion.p>

        {/* CTA + Play Store */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col gap-3"
        >
          {/* Actions row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Primary CTA */}
            <a
              href="https://smrai-studio.onrender.com/"
              target="_blank"
              className="h-[56px] px-6 button-primary flex items-center justify-center text-white cursor-pointer rounded-lg text-sm font-medium"
            >
              Build Resume with ResuCV
            </a>

            {/* Play Store Badge */}
            <a
              href="https://play.google.com/store/apps/details?id=com.smrai.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group h-[56px] flex items-center"
            >
              {/* Glow */}
              <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 blur opacity-40 group-hover:opacity-70 transition duration-300"></span>

              <Image
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                width={180}
                height={56}
                className="relative z-10 h-[56px] w-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="Developer illustration"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
