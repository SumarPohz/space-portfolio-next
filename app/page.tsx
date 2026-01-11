import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Contact } from "@/components/main/contact";
import { Highlights } from "@/components/main/highlights";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-15">
        <Hero />

        {/* ✨ Highlights right after Hero */}
        <Highlights />

        <Skills />
        <Encryption />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
