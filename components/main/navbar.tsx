'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-between">
        {/* Logo + Name */}
        <Link
          href="#about-me"
          className="flex items-center shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
            draggable={false}
            className="cursor-pointer"
          />
          <div className="hidden md:flex font-bold ml-[10px] text-gray-300"><b>Sumar Pohz</b></div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-x-5 border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-6 py-2.5 rounded-full text-gray-200 text-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(252,244,1)] transition whitespace-nowrap"
              >
                {link.title}
              </a>
            ))}
            <Link
              href="https://smraistudio.sumarpohz.com/"
              target="_blank"
              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:opacity-90 transition whitespace-nowrap"
            >
              SmrAI Studio
            </Link>
            {/* Source Code */}
            <Link
              href="https://github.com/SumarPohz/space-portfolio-next"
              target="_blank"
              className="cursor-pointer hover:text-[rgb(252,248,4)] transition whitespace-nowrap"
            >
              Source Code
            </Link>
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex shrink-0 flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(235,252,3)] transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <Link
              href="https://smraistudio.sumarpohz.com/"
              target="_blank"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SmrAI Studio
            </Link>
            <Link
              href="https://github.com/SumarPohz/space-portfolio-next"
              target="_blank"
              className="cursor-pointer hover:text-[rgb(225,250,2)] transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Source Code
            </Link>
          </div>
          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};