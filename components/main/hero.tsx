"use client";

import dynamic from "next/dynamic";
import { HeroContent } from "@/components/sub/hero-content";

// 👇 dynamically load Three.js canvas (NO SSR)
const StarsCanvas = dynamic(
  () =>
    import("@/components/main/star-background").then(
      (mod) => mod.StarsCanvas
    ),
  { ssr: false }
);

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden">
      {/* ⭐ Three.js star background */}
      <StarsCanvas />

      {/* 🎥 background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
      >
        {/* IMPORTANT: GitHub Pages basePath */}
        <source
          src="/space-portfolio/videos/blackhole.webm"
          type="video/webm"
        />
      </video>

      {/* 🧠 Hero content */}
      <HeroContent />
    </div>
  );
};
