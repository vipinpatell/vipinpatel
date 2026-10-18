export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0e1628] to-[#0b0f1a] text-white px-6 md:px-16 py-16">
      <h2 className="text-5xl font-bold text-cyan-400 mb-10">
        Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT: CONTACT DETAILS */}
        <div className="space-y-8 text-gray-300">
          <p className="leading-relaxed">
            I’m open to freelance opportunities, full-time roles, and
            professional collaborations. Feel free to connect with me
            through the details below.
          </p>

          {/* DETAILS */}
          <div className="space-y-5 text-sm">
            <div>
              <p className="text-gray-400">Mobile</p>
              <p className="text-cyan-400">+91 954070 1111</p>
            </div>

            <div>
              <p className="text-gray-400">Email</p>
              <p className="text-cyan-400">connect@vipinpatel.in</p>
            </div>
 
            <div>
              <p className="text-gray-400">LinkedIn</p>
              <a
                href="https://linkedin.com/in/vipinpatels"
                target="_blank"
                className="text-cyan-400 hover:underline"
              >
                linkedin.com/in/vipinpatels
              </a>
            </div>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <p className="text-gray-400 mb-3 text-sm">Social Media</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                className="px-4 py-2 rounded bg-white/5 border border-white/10 hover:border-cyan-400 text-sm"
              >
                GitHub
              </a>
            

    <a
      href="https://youtube.com/"
      target="_blank"
      className="px-4 py-2 rounded bg-white/5 border border-white/10 hover:border-cyan-400 text-sm"
    >
      YouTube
    </a>
            </div>
          </div>
        </div>

        {/* RIGHT: MAP */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg h-[420px]">
          <iframe
            title="Gurugram Location"
            src="https://www.google.com/maps?q=Gurugram,Haryana,India&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
