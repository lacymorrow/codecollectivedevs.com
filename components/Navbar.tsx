"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Case Studies", href: "/case-studies/artisan" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur border-b border-zinc-200 fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/code-collective-logo.png"
            alt="Code Collective Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="font-bold text-lg text-violet-800 tracking-tight">
            Code Collective
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-zinc-700 hover:text-violet-700 font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button className="ml-4 bg-violet-700 hover:bg-violet-800 text-white px-6 py-2 rounded-lg shadow-md transition-transform hover:scale-105">
            Start Your Project
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-zinc-100 transition"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-zinc-200 shadow-lg absolute w-full left-0 top-16 z-40 animate-fade-in">
          <div className="flex flex-col gap-2 py-4 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-zinc-700 py-2 font-medium hover:text-violet-700 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="mt-2 bg-violet-700 hover:bg-violet-800 text-white w-full" onClick={() => setMenuOpen(false)}>
              Start Your Project
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
} 