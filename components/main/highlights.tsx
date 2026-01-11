"use client";

import { HighlightCard } from "@/components/sub/highlight-card";

const HIGHLIGHTS = [
  {
    title: "Frontend Excellence",
    desc:
      "I architect responsive, performant user interfaces using React, Next.js, and modern CSS with a focus on usability and accessibility.",
  },
  {
    title: "Backend Architecture",
    desc:
      "I build scalable backend systems with Node.js and API-first design that handle real-world production workloads.",
  },
  {
    title: "Database Design",
    desc:
      "I design optimized schemas and queries using MongoDB and SQL to support high-performance applications.",
  },
  {
    title: "DevOps & Deployment",
    desc:
      "I implement CI/CD pipelines and deployment strategies that ensure reliability and scalability.",
  },
];

export const Highlights = () => {
  return (
    <section
      id="highlights"
      className="flex flex-col items-center justify-center gap-10 py-24 relative"
    >
      <div className="flex flex-row justify-around flex-wrap gap-6 items-center">
        {HIGHLIGHTS.map((item, i) => (
          <HighlightCard
            key={item.title}
            title={item.title}
            description={item.desc}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};
