"use client";

import React from "react";

interface ProjectCardProps {
  title: string;
  tech: string;
  description: string;
  highlight: string;
}

function ProjectCard({ title, tech, description, highlight }: ProjectCardProps) {
  return (
    <article
      className="rounded-2xl bg-[#0f1629] border border-white/10 p-8 hover:border-cyan-400/40 transition shadow-lg"
      aria-label={`Project: ${title}`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-xs text-cyan-400 mb-4">{tech}</p>
      <p className="text-gray-300 text-sm leading-relaxed mb-4">{description}</p>
      <p className="text-sm text-gray-400 italic">{highlight}</p>
    </article>
  );
}

export default function WorkPage() {
  const experiences = [
    {
      role: "Senior Frontend Developer",
      period: "2014 – Present",
      points: [
        "9+ years of experience delivering responsive, scalable web applications.",
        "Built enterprise, product-based, e-commerce, and networking solutions with React, Next.js, Angular, and TypeScript.",
        "Developed reusable UI components and modern design systems for consistent UX.",
        "Integrated REST & GraphQL APIs with optimized performance and SEO.",
        "Collaborated with designers and backend teams in agile environments.",
      ],
    },
    {
      role: "UI Developer/Team Lead",
      period: "Select Projects",
     points: [
  "Led and mentored an 11-member frontend team to deliver enterprise-grade projects on time and within scope.",
  "Designed and implemented modern, component-driven interfaces for .NET MVC, PHP, and CMS platforms, ensuring consistency and scalability.",
  "Translated Figma and design prototypes into responsive, pixel-perfect, cross-browser UIs using HTML, CSS/SCSS, JavaScript, and Bootstrap.",
  "Optimized performance, accessibility, and maintainability across large-scale web applications, improving user experience and load times."
],

    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0e1628] to-[#0b0f1a] text-white px-6 md:px-16 py-16">
      {/* Page Header */}
      <header aria-label="My Work Section" className="mb-12 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-cyan-400 mb-6">My Work</h1>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          I’ve worked on diverse projects including enterprise platforms, marketing websites,
          product-based apps, e-commerce solutions, banking applications, and networking tools. 
          My focus is clean UI, performance, accessibility, and scalable frontend architecture.
        </p>
      </header>

      {/* Projects Grid */}
      <section
        aria-label="Projects"
        className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto"
      >
        <ProjectCard
          title="Enterprise Marketing Platform"
          tech="React • Next.js • Tailwind • REST API"
          description="Built and maintained large-scale marketing websites for global brands with reusable components, optimized performance, and SEO best practices."
          highlight="Improved page load by 35% and increased conversion rates."
        />
        <ProjectCard
          title="Incident Management System"
          tech="Angular • TypeScript • Enterprise UI"
          description="Worked on mission-critical enterprise systems used for incident tracking, reporting, and internal operations."
          highlight="Delivered stable UI for thousands of daily users."
        />
        <ProjectCard
          title="CMS-Based Business Websites"
          tech="WordPress • Drupal • Custom Themes"
          description="Developed custom CMS themes and plugins for content-heavy websites, ensuring scalability and ease of use for non-technical users."
          highlight="Reduced content publishing time by 40%."
        />
        <ProjectCard
          title="Modern SaaS Frontend"
          tech="Next.js • TypeScript • Design System"
          description="Created component-driven UI architecture with reusable design systems and consistent UX patterns."
          highlight="Accelerated feature development across teams."
        />
        <ProjectCard
          title="Banking Web Application"
          tech="React • TypeScript • Redux • REST API"
          description="Developed secure, scalable web apps for online banking, including account management, payments, and transaction dashboards."
          highlight="Enhanced performance for real-time financial data processing."
        />
        <ProjectCard
          title="Product-Based Marketplace"
          tech="Next.js • GraphQL • Tailwind • Stripe"
          description="Built a full-featured marketplace platform with product catalogs, shopping carts, and checkout integration."
          highlight="Optimized product listing pages, reducing load times by 40%."
        />
        <ProjectCard
          title="E-Commerce Platform"
          tech="React • Next.js • Node.js • MongoDB"
          description="Created end-to-end e-commerce solutions with responsive UI, order management, and customer dashboards."
          highlight="Implemented seamless checkout and payment workflows."
        />
        <ProjectCard
          title="Networking & Collaboration Application"
          tech="React • Next.js • Firebase • Socket.IO"
          description="Built real-time networking applications for professional collaboration and team communication."
          highlight="Enabled real-time messaging and notifications across multiple devices."
        />
      </section>

      {/* Professional Experience Section */}
      <section
        aria-label="Professional Experience"
        className="mt-20 max-w-7xl mx-auto space-y-8"
      >
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
          Professional Experience
        </h2>

        {experiences.map((exp, idx) => (
          <article
            key={idx}
            className="rounded-2xl bg-[#111a2e]/80 border border-white/10 p-8 shadow-lg"
          >
            <header className="mb-4">
              <h3 className="text-xl font-semibold text-cyan-400">{exp.role}</h3>
              <time className="text-xs text-gray-400">{exp.period}</time>
            </header>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
