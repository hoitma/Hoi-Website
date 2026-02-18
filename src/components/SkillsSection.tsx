
const languages = [
  {
    name: 'German',
    level: 'C1 (Business Fluent)'
  },
  {
    name: 'English',
    level: 'C1 (Business Fluent)'
  },
  {
    name: 'Chinese Mandarin',
    level: 'Near Native'
  },
  {
    name: 'Cantonese',
    level: 'Native'
  }
];

const tools = [
  'Zapier',
  'Canva',
  'Figma',
  'SQL',
  'Tableau',
  'Google Analytics',
  'Meta Business Suite'
];

import { useScrollPop } from "./ui/useScrollPop";
export function SkillsSection() {
  const { ref, isVisible, animationClass } = useScrollPop();
  return (
    <section id="skills" className="py-24 px-6">
      <div
        ref={ref as any}
        className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? animationClass : 'opacity-0 translate-y-10'}`}
      >
        <h2 className="text-center text-4xl md:text-5xl text-foreground mb-14">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Languages */}
          <div className="border border-border rounded-2xl p-8 bg-card border-dashed">
            <h3 className="text-xl text-foreground mb-6">Languages</h3>
            <div className="space-y-0">
              {languages.map((l, i) => (
                <div
                  key={l.name}
                  className={`flex justify-between items-center py-4 ${
                    i < languages.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="text-foreground text-xs">{l.name}</span>
                  <span className="text-muted-foreground text-xs">{l.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="border border-border rounded-2xl p-8 bg-card border-dashed">
            <h3 className="text-xl text-foreground mb-6">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}