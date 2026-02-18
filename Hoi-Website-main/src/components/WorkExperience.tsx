const experiences = [
  {
    year: "2026",
    company: "SCENARIUM AI",
    role: "Founder's Associate Intern",
    period: "12/25 - present",
    description: [
      "Product Development: Managed QA testing and feedback analysis.",
      "Sales Outreach: Conducted LinkedIn and email campaigns, and delivered product demos.",
      "Operations Management: Oversaw financial statements, investor reporting, and employee management.",
    ],
    link: "https://scenarium.ai/",
  },
  {
    year: "2025",
    company: "AMAZON",
    role: "Account Representative Intern",
    period: "03/25 - 09/25",
    description: [
      "Marketing: Executed multi-channel marketing campaigns for EU marketplaces, including video content creation, SEO-optimized blog posts, and updates to websites and help pages.",
      "Account Management: Drove growth and expansion of German sellers in the US.",
      "Initiated an AI workshop for the team and an AI Agent project.",
    ],
    link: "https://sell.amazon.de/en/weltweit-verkaufen",
  },
  {
    year: "2024",
    company: "IDEALO",
    role: "International Business Development & Analytics Working Student",
    period: "09/24 - 02/25",
    description: [
      "Business Analysis: Analyzed monthly website performance, competitor activity, and financial reports across five European countries.",
      "Business Development: Generated new business leads and opportunities.",
    ],
    link: "https://www.idealo.de/",
  },
  {
    year: "2023",
    company: "REVENT",
    role: "Operations & Event Support Working Student",
    period: "03/23 - 08/24",
    description:[
      "Strategic Initiatives: Spearheaded projects under the VP of Operations, covering financial and operational matters.", 
      "Event Support: Assisted in organizing high-profile events."],
    link: "https://www.revent.vc/",
  },
];

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function WorkExperience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-24 px-6 bg-neutral-50">
      <div className="w-full max-w-5xl mx-auto">
        {/* Section Header */}
        <p className="text-sm text-violet-600 mb-6 text-center">
          Across pre-seed startup, e-commerce and impact VC
        </p>
        <h2 className="text-4xl md:text-5xl text-center mb-16 text-foreground">
          Working Experience
        </h2>

        {/* Timeline bar */}
        <div className="relative mb-16">
          {/* Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />
          <div
            className="absolute top-1/2 left-0 h-0.5 bg-violet-600 -translate-y-1/2 transition-all duration-500"
            style={{
              width: `${((activeIndex + 1) / experiences.length) * 100}%`,
            }}
          />

          <div className="relative flex justify-between">
            {experiences.map((exp, i) => {
              const isActive = i === activeIndex;

              return (
                <button
                  key={exp.company}
                  onClick={() => setActiveIndex(i)}
                  className="flex flex-col items-center gap-3 group cursor-pointer bg-transparent border-none outline-none"
                  type="button"
                  aria-pressed={isActive}
                >
                  {/* Dot */}
                  <span
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-violet-600 border-violet-600 scale-125"
                        : "bg-transparent border-border group-hover:border-violet-600"
                    }`}
                  />

                  {/* Label */}
                  <span
                    className={`text-xs md:text-sm tracking-wide transition-colors duration-300 ${
                      isActive ? "text-violet-600" : "text-muted-foreground"
                    }`}
                  >
                    {exp.year}
                    <span className="hidden md:inline"> · {exp.company}</span>
                  </span>

                  {/* Company name on mobile */}
                  <span
                    className={`text-[10px] md:hidden font-medium transition-colors ${
                      isActive ? "text-orange-500" : "text-muted-foreground"
                    }`}
                  >
                    {exp.company}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-card rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start border border-border"
          >
            {/* Text content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-muted-foreground font-medium mb-6">
                {experiences[activeIndex].period}
              </p>
              <h3 className="text-2xl md:text-3xl text-foreground mb-1">
                {experiences[activeIndex].company}
              </h3>
              <p className="text-sm text-violet-600 font-medium mb-4">
                {experiences[activeIndex].role}
              </p>
              <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground mb-4">
                {(Array.isArray(experiences[activeIndex].description)
                  ? experiences[activeIndex].description
                  : [experiences[activeIndex].description]
                ).map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <a
                href={experiences[activeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-violet-600 items-center gap-2 text-sm font-medium font-Google_Sans_Flex hover:underline"
              >
                Visit website <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => setActiveIndex((p) => Math.max(0, p - 1))}
            disabled={activeIndex === 0}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground disabled:opacity-30 hover:bg-secondary transition-colors"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            onClick={() =>
              setActiveIndex((p) => Math.min(experiences.length - 1, p + 1))
            }
            disabled={activeIndex === experiences.length - 1}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground disabled:opacity-30 hover:bg-secondary transition-colors"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;