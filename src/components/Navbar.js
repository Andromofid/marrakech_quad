"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/reservation", label: "Réservez" },
    { href: "/prices", label: "Nos Tarifs" },
    { href: "/gallery", label: "Galerie" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full bg-white/95 backdrop-blur-md shadow-lg fixed top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Quad Marrakech Logo"
            width={90}
            height={60}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-charcoal font-medium text-sm lg:text-base hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-6">
          {/* Phone */}
          <a
            href="tel:+212600000000"
            className="text-charcoal font-medium text-sm lg:text-base hover:text-primary transition"
          >
            ☎ +212 600 000 000
          </a>

          {/* CTA */}
          <Link
            href="/reservation"
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg font-semibold text-sm lg:text-base transition shadow-md hover:shadow-lg"
          >
            Réserver maintenant
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-2xl text-charcoal"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-charcoal font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-100 space-y-4">
              <a
                href="tel:+212600000000"
                className="block text-center px-4 py-3 text-charcoal font-medium hover:text-primary transition"
              >
                ☎ +212 600 000 000
              </a>

              <Link
                href="/reservation"
                className="block text-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Réserver maintenant
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
