"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/skills", label: "Skills", icon: Code },
  { href: "/work", label: "Work", icon: Briefcase },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* DESKTOP / LAPTOP NAV */}
      <nav
        className="
          hidden md:flex
          fixed left-0 top-0 z-50 h-screen w-24
          bg-gradient-to-b from-[#0e1628]/90 to-[#050814]/90
          backdrop-blur-xl
          border-r border-white/10
          flex-col items-center justify-center gap-8
        "
      >
        {/* NAV LINKS */}
        {links.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                flex flex-col items-center transition
                ${isActive ? "text-cyan-400" : "text-gray-400 hover:text-white"}
              `}
            >
              <Icon size={28} className="mb-1" />
              <span className="text-xs">{link.label}</span>
            </Link>
          );
        })}

        {/* CONTACT ICONS at bottom of sidebar */}
        <div className="flex flex-col items-center gap-6 w-full px-2 mb-4 mt-8">
          <a
            href="tel:+919540701111"
            className="flex flex-col items-center text-green-400 hover:text-green-500 transition transform hover:scale-125 animate-pulse"
            aria-label="Call"
          >
            <Phone size={28} />
          </a>

          <Link
            href="/contact"
            className="flex flex-col items-center text-cyan-400 hover:text-cyan-500 transition transform hover:scale-125 animate-bounce"
            aria-label="Chat"
          >
            <MessageCircle size={28} />
          </Link>
        </div>
      </nav>
 <nav
      className="
        md:hidden
        fixed bottom-0 left-0 right-0 z-50
        flex justify-around items-center
        bg-[#0e1628]/90 backdrop-blur-xl
        rounded-t-xl p-2 shadow-lg
      "
    >
      {links.map((link) => {
        const isActive = pathname === link.href;
        const Icon = link.icon;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`
              flex flex-col items-center transition
              ${isActive ? "text-cyan-400" : "text-gray-400 hover:text-white"}
            `}
          >
            <Icon size={24} className="mb-1" />
            <span className="text-xs">{link.label}</span>
          </Link>
        );
      })}
    </nav>
    </>
  );
}
