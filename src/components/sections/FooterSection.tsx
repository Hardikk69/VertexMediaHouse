import { useState } from "react";

export default function FooterSection(): JSX.Element {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const currentYear = new Date().getFullYear();

  const social_media_links = [
    { name: "Instagram", url: "https://www.instagram.com/faiz_rajput_15" },
    { name: "X (Twitter)", url: "https://twitter.com/faiz_rajput_15" },
    { name: "Email", url: "mailto:faizrajput@email.com" },
    { name: "LinkedIn", url: "https://www.linkedin.com" },
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    await fetch("/api/save-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setEmail("");
    setLoading(false);
  }

  return (
    <footer className="bg-black text-white px-10 py-20">
      {/* ================= TOP ================= */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-20">
        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Vertex Media House
          </h3>
          <p className="text-white/60 text-sm">
          Creative solutions for brands and creators that move fast and scale smarter.
          </p>
        </div>

        {/* Mini sections */}
        <div>
          <h4 className="font-medium mb-3">Services</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>Pitch Deck Designing </li>
            <li>Video Editing </li>
            <li>Website Designing </li>
            <li>AI & Automation </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-3">Resources</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Docs</li>
          </ul>
        </div>

        {/* Blank colored block */}
        <div className="bg-white/10 rounded-2xl h-[160px]" />
      </div>

      {/* ================= QUOTE ================= */}
      <div className="mb-16">
        <p className="text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
        From idea to execution - fast, clean, and scalable.
        </p>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">

        {/* Social Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {social_media_links.map(link => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white/60 text-sm
                transition-all duration-300
                hover:text-white
                hover:-translate-y-[2px]
                relative
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[1px]
                after:w-0
                after:bg-white
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact input */}
        <form
          onSubmit={handleSubmit}
          className="relative w-full md:w-[320px]"
        >
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="
              w-full
              bg-white/5
              border border-white/10
              rounded-full
              px-5 py-3
              pr-12
              text-sm
              outline-none
            "
          />
          <button
            type="submit"
            disabled={loading}
            className="
              absolute right-2 top-1/2 -translate-y-1/2
              w-8 h-8
              rounded-full
              bg-white/20
              flex items-center justify-center
              hover:bg-white/30
              transition
            "
          >
            →
          </button>
        </form>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="pt-6 border-t border-white/10 text-center text-white/40 text-sm">
        © {currentYear} Vertex Media House. All rights reserved.
      </div>
    </footer>
  );
}
