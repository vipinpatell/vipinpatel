"use client";

import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="min-h-screen flex items-center bg-gradient-to-br from-[#0b0f1a] via-[#0e1628] to-[#0b0f1a] text-white px-6 md:px-16 py-16">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl w-full">

        {/* LEFT CONTENT */}
        <header aria-label="Introduction">
          {loading ? (
            <div className="space-y-6">
              <Skeleton className="h-4 w-32 bg-cyan-400/30" />
              <Skeleton className="h-14 w-80" />
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-20 w-full" />
              <div className="flex gap-4">
                <Skeleton className="h-12 w-36" />
                <Skeleton className="h-12 w-36" />
              </div>
            </div>
          ) : (
            <>
              <p className="text-cyan-400 mb-4 tracking-widest text-sm">
                HELLO, I’M
              </p>

              <h1 className="text-6xl font-bold mb-6">
                Vipin Patel
              </h1>

              <h2 className="text-3xl text-gray-300 mb-8">
                Senior Frontend Developer
              </h2>

              <p className="text-gray-400 leading-relaxed mb-10">
                I build high-performance, scalable, and user-focused web
                applications using React, Next.js, and TypeScript. With 9+ years
                of experience, I focus on clean UI architecture, performance
                optimization, and maintainable frontend systems.
              </p>

              <div className="flex gap-4">
                <a className="px-6 py-3 bg-cyan-400 text-black rounded font-semibold">
                  View My Work
                </a>
                <a className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded font-semibold">
                  Contact Me
                </a>
              </div>
            </>
          )}
        </header>

        {/* RIGHT PROFILE IMAGE */}
        <aside className="flex justify-center">
          {loading && (
            <Skeleton className="w-72 h-72 rounded-full" />
          )}

          <div
            className={`relative w-72 h-72 rounded-full overflow-hidden
              border-4 border-cyan-400/40
              shadow-[0_0_60px_rgba(34,211,238,0.25)]
              ${loading ? "hidden" : "block"}
            `}
          >
            <Image
              src="/profile.jpg"
              alt="Profile picture of Vipin Patel"
              fill
              className="object-cover"
              priority
              onLoad={() => setLoading(false)}
            />
          </div>
        </aside>

      </div>
    </main>
  );
}
