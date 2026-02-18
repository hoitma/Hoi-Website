"use client";

import { useState } from "react";
import { useScrollPop } from "./ui/useScrollPop";
import TwoHearts from "@/components/assets/image-2hearts.png";
import DTM from "@/components/assets/image-dtm.jpg";
import Stand from "@/components/assets/image-stand.jpg";
import { link } from "fs";

const categories = ['All', 'Social Media', 'Community Building', 'Event', 'Leadership', 'Arts'] as const;

const projects = [
  {
    title: "2hearts PR & Comms Team",
    image: TwoHearts,
    link: "https://www.2heartscommunity.com/",
    org: "2hearts Community",
    description: "2hearts is a community of tech professionals with immigration backgrounds. I supported mainly their social media campaigns.",
    tags: ["Social Media", "Community Building"]
  },
  {
    title: "Stage Team Team Lead",
    image: DTM,
    link: "https://www.deeptech.build/",
    org: "Deep Tech Momentum (DTM)",
    description: "Europe no.1 deep tech innovation event. I ensured smooth operations of the stage and a great experience for speakers and attendees.",
    tags: ["Leadership", "Event"]
  },
  {
    title: "Position - Hong Kong's Culture",
    image: Stand,
    link: "https://www.instagram.com/femrises/",
    org: "FemRises - Everything is possible",
    description: "I designed my own art products to promote Hong Kong's unique culture in Germany.",
    tags: ["Arts"]
  },
];

  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('All');
  const { ref, isVisible, animationClass } = useScrollPop();

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(selectedCategory));

  return (
    <section id="projects" className="py-24 px-6 bg-card">
      <div
        ref={ref as any}
        className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 transition-all duration-700 ${isVisible ? animationClass : 'opacity-0 translate-y-10'}`}
      >
        {/* Sidebar */}
        <div>
          <h3 className="font-bold text-foreground mb-2">About</h3>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            I enjoy community building and arts as hobbies. I volunteer in different events and create my own art pieces.
          </p>
          <h3 className="font-bold text-foreground mb-3">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-orange-500 text-foreground border-border hover:bg-orange-500/10 hover:text-orange-600 "
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl md:text-5xl text-foreground mb-10">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p) => (
              <div
                key={p.title}
                className="border border-border rounded-2xl overflow-hidden bg-background"
              >
                <img src={p.image} alt={p.title} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h4 className="font-serif text-lg text-foreground">{p.title}</h4>
                  <span className="text-accent text-sm">{p.org}</span>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );}