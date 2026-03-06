"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  Star,
  Shield,
  Award,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Accueil" },
    { href: "/reservation", label: "Réservez" },
    { href: "/prices", label: "Nos Tarifs" },
    { href: "/gallery", label: "Galerie" },
    { href: "/contact", label: "Contact" },
  ];

  const legalLinks = [
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/cookies", label: "Cookie Policy" },
    { href: "/cancellation", label: "Cancellation Policy" },
  ];

  const tourTypes = [
    { href: "reservation/0", label: "Demi-journée, plein d'adrénaline" },
    { href: "reservation/desert-adventure", label: "L'aventure vous appelle" },
    {
      href: "reservation/parapente-atlas",
      label: "Prenez votre envol avec Parapente Atlas",
    },
    { href: "reservation/agafay-camel", label: "Un voyage sensoriel à Agafay" },
    {
      href: "reservation/optimum-buggy-expedition",
      label: "Développez-vous vers de nouveaux horizons",
    },
    
  ];

  const certifications = [
    { name: "Guides Licenciés", icon: <Shield className="w-5 h-5" /> },
    { name: "Sécurité Certifiée", icon: <Award className="w-5 h-5" /> },
    // { name: "Top Rated 2024", icon: <Star className="w-5 h-5" /> },
  ];

  const socialLinks = [
    {
      href: "https://facebook.com/quadmarrakech",
      icon: <Facebook />,
      name: "Facebook",
      followers: "15K+",
      bgColor: "hover:bg-[#1877f2]",
    },
    {
      href: "https://instagram.com/quadmarrakech",
      icon: <Instagram />,
      name: "Instagram",
      followers: "25K+",
      bgColor: "hover:bg-[#e4405f]",
    },
    {
      href: "https://youtube.com/quadmarrakech",
      icon: <Youtube />,
      name: "YouTube",
      followers: "10K+",
      bgColor: "hover:bg-[#ff0000]",
    },
    {
      href: "https://tripadvisor.com/quadmarrakech",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 8.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8.9-3.3c-.3-2-2-3.5-4-3.5h-9.8c-2 0-3.7 1.5-4 3.5-.1.5-.1 1.1 0 1.7.3 2 2 3.5 4 3.5h.1c.8 1.6 2.5 2.7 4.4 2.7s3.6-1.1 4.4-2.7h.1c2 0 3.7-1.5 4-3.5.1-.5.1-1.1 0-1.7zm-10.4 6.7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm7-4.7c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
        </svg>
      ),
      name: "TripAdvisor",
      rating: "4.9",
      bgColor: "hover:bg-[#00af87]",
    },
  ];

  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Company Info - Large Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Quad Marrakech - Meilleures excursions en quad à Marrakech"
                  width={180}
                  height={60}
                  className="object-contain"
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </div>
            </Link>

            <p className="text-sand/80 leading-relaxed">
              Vivez l&apos;excitation du quad à travers les paysages
              époustouflants de Marrakech. Guides professionnels, équipement
              premium et aventures inoubliables depuis 2014.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg text-sm"
                >
                  <span className="text-primary">{cert.icon}</span>
                  <span>{cert.name}</span>
                </div>
              ))}
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3">
              <a
                href="tel:+212777527159"
                className="flex items-center gap-3 text-sand/80 hover:text-primary transition-colors group p-2 rounded-lg hover:bg-white/5"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-sm text-sand/60">
                    Appelez-nous 24/7
                  </span>
                  <p className="font-semibold">+212 777 527 159</p>
                </div>
              </a>

              <a
                href="mailto:ymofid18@gmail.com"
                className="flex items-center gap-3 text-sand/80 hover:text-primary transition-colors group p-2 rounded-lg hover:bg-white/5"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-sm text-sand/60">Email</span>
                  <p className="font-semibold">ymofid18@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-3 text-sand/80 p-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-sm text-sand/60">Visitez-nous</span>
                  <p className="font-semibold">
                    Marrakech, Maroc
                    <br />
                    District de la Palmeraie
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Liens Rapides
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sand/70 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Types - SEO Important */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Nos Prestations
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {tourTypes.map((tour) => (
                <li key={tour.href}>
                  <Link
                    href={tour.href}
                    className="text-sand/70 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors" />
                    {tour.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Horaires & Réseaux
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>

            {/* Business Hours */}
            <div className="mb-6 space-y-2">
              <div className="flex items-center gap-2 text-sand/70">
                <Clock className="w-4 h-4 text-primary" />
                <span>Lundi - Dimanche</span>
              </div>
              <div className="flex items-center gap-2 text-sand/70 ml-6">
                <span>Matin: 8:00 - 12:00</span>
              </div>
              <div className="flex items-center gap-2 text-sand/70 ml-6">
                <span>Après-midi: 14:00 - 18:00</span>
              </div>
            </div>

            {/* Social Links with Stats */}
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={``}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors group ${social.bgColor} hover:scale-105 transform duration-300`}
                  aria-label={`Suivez-nous sur ${social.name}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <span className="text-primary w-4 h-4">
                        {social.icon}
                      </span>
                    </div>
                    <span className="text-sand/70 group-hover:text-primary transition-colors">
                      {social.name}
                    </span>
                  </div>
                  <span className="text-xs text-sand/50 bg-white/5 px-2 py-1 rounded-full group-hover:bg-white/10">
                    {social.followers || social.rating} ⭐
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section - Trust Badges & Reviews */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            {/* Partner Logos */}
            <div className="flex items-center gap-6">
              <span className="text-sm text-sand/50">
                Ils nous font confiance:
              </span>
              <div className="flex items-center gap-4">
                <div className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity">
                  <span className="text-sand/70 font-semibold">
                    TripAdvisor
                  </span>
                </div>
                <div className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity">
                  <span className="text-sand/70 font-semibold">Google</span>
                </div>
                <div className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity">
                  <span className="text-sand/70 font-semibold">
                    Booking.com
                  </span>
                </div>
              </div>
            </div>

            {/* Live Review Counter */}
            <div className="flex items-center gap-4 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold">
                4.9/5 sur 2,500+ avis
              </span>
              <ExternalLink className="w-4 h-4 text-sand/50" />
            </div>
          </div>
        </div>

        {/* Bottom Section - Legal & Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright with Dynamic Year */}
            <div className="text-sm text-sand/50 text-center lg:text-right">
              <p>© {currentYear} Quad Marrakech. Tous droits réservés.</p>
              <p className="text-xs mt-1">Conçu & Développé au Maroc 🇲🇦</p>
            </div>
          </div>
        </div>

        {/* SEO Hidden Keywords (invisible but present) */}
        <div className="sr-only">
          <h2>
            Quad Marrakech - Excursions en quad de prestige à Marrakech, Maroc
          </h2>
          <p>
            Meilleurs circuits en quad dans la Palmeraie et le Désert. Guides
            professionnels, équipement de sécurité, couchers de soleil,
            aventures en groupe. Réservez votre expérience quad à Marrakech dès
            aujourd'hui.
          </p>
          <p>
            Mots-clés: quad Marrakech, quad Palmeraie, quad désert, excursions
            Marrakech, quad Maroc, aventures Marrakech
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        aria-label="Retour en haut"
      >
        <ChevronRight className="w-5 h-5 rotate-[-90deg]" />
      </button>
    </footer>
  );
}
