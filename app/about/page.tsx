export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0e1628] to-[#0b0f1a] text-white px-6 md:px-16 py-16">
      {/* Page Header */}
      <header aria-label="About Me Section" className="mb-12">
        <h1 className="text-5xl font-bold text-cyan-400">
          About Me
        </h1>
      </header>

      <section className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left text content */}
        <article className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            I specialize in creating successful, responsive websites that are
            fast, user-friendly, and built with industry best practices.
          </p>

          <p>
            With strong expertise in frontend development — including HTML,
            CSS/SCSS, JavaScript, TypeScript, React, and Next.js — I build clean,
            scalable, and high-performance interfaces.
          </p>

          <p>
            I have experience working on enterprise-level applications,
            marketing platforms, CMS-based websites, and modern SPA solutions.
            I enjoy transforming complex problems into elegant UI solutions.
          </p>

          <p className="text-cyan-400 font-medium">
            Let’s collaborate and create something impactful.
          </p>
        </article>

        {/* Right card */}
        <aside
          className="rounded-2xl bg-[#111a2e]/80 border border-white/10 p-8 shadow-xl"
          aria-label="Frontend Developer Card"
        >
          <h2 className="text-xl font-semibold mb-2">
            Frontend Developer
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            React • Next.js • TypeScript
          </p>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li>• 9+ years of frontend experience</li>
            <li>• Component-driven architecture</li>
            <li>• Performance & Core Web Vitals</li>
            <li>• Clean UI & scalable design systems</li>
          </ul>
        </aside>
      </section>
    </main>
  );
}
