"use client";

const SKILL_SECTIONS = [
  {
    title: "Core Web",
    skills: [
      { label: "HTML / HTML5", level: 95 },
      { label: "CSS / CSS3", level: 90 },
      { label: "JavaScript (ES6+)", level: 85 },
      { label: "TypeScript", level: 85 },
    ],
  },
  {
    title: "library / Frameworks",
    skills: [
      { label: "React", level: 90 },
      { label: "Next.js", level: 88 },
      { label: "Angular", level: 70 },
    ],
  },
  {
    title: "Styling",
    skills: [
      { label: "SCSS", level: 90 },
      { label: "Tailwind CSS", level: 95 },
      { label: "Bootstrap", level: 90 },
      { label: "MUI", level: 70 },
    ],
    
    
  },
  {
    title: "Backend / CMS",
    skills: [
      { label: "WordPress", level: 65 },
      { label: "Strapi (Headless CMS)", level: 50 },
      { label: "Node.js", level: 30 },
      { label: "PHP", level: 20 },
      { label: "Dot Net", level: 10 },
    ],
  },
];

export default function Skills() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0e1628] to-[#0b0f1a] text-white px-6 md:px-16 py-16">
      <header className="max-w-7xl mx-auto mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          Skills & Experience
        </h1>
        <p className="text-gray-300 leading-relaxed max-w-3xl">
          I build fast, responsive, and user-friendly web applications using modern frontend technologies.
          Strong experience in scalable UI architecture, headless CMS, and enterprise-grade systems.
        </p>
      </header>
 <article className="bg-[#111a2e]/80 border border-white/10 rounded-2xl p-8 mb-8 shadow-lg flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2">Senior Frontend Developer</h2>
          <time className="text-xs text-gray-400 mb-4" dateTime="2014-01-01">
            2014 – Present
          </time>
          <p className="text-gray-300 leading-relaxed">
            Specialized in high-performance web applications using React, Next.js, TypeScript, and Tailwind CSS.
            Experienced in enterprise UI systems, headless CMS, and scalable frontend architecture.
          </p>
        </article>
      <section className="max-w-full mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Card */}
       

        {/* Right Skills */}
        
          {SKILL_SECTIONS.map((section) => (
            <div key={section.title} className="bg-[#111a2e]/60 border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-cyan-400/30 transition">
              <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                {section.title}
              </h3>
              <div className="space-y-4">
                {section.skills.map((skill) => (
                  <div key={skill.label} className="group">
                    <div className="flex justify-between mb-1">
                      <span>{skill.label}</span>
                      <span className="text-xs text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:scale-y-105 transition-transform duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
         
      </section>
    </main>
  );
}
