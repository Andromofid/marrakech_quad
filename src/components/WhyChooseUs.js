"use client";

import {
  Award,
  Clock,
  CreditCard,
  HeadphonesIcon,
  Shield,
  Sparkles,
  Compass,
  Calendar,
  Star,
  CheckCircle,
  ThumbsUp,
  Heart,
  Users,
  Map,
  PhoneCall,
  Zap,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const featuresData = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Les plus récompensés",
    description:
      "De belles prestations originales, avec une solide réputation sur toutes les plateformes de voyages",
    color: "from-yellow-400 to-orange-500",
    bgLight: "bg-yellow-50",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Confirmation instantanée",
    description:
      "Recevez une confirmation immédiate, sécurisant votre place pour les aventures",
    color: "from-blue-400 to-blue-600",
    bgLight: "bg-blue-50",

  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Paiement en ligne",
    description:
      "Effectuez votre paiement en ligne dans le confort de votre foyer",
    color: "from-green-400 to-green-600",
    bgLight: "bg-green-50",

  },
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    title: "24/7 Support",
    description:
      "Notre équipe qualifiée et dédiée est disponible pour vous aider 24h/24 et 7j/7",
    color: "from-purple-400 to-purple-600",
    bgLight: "bg-purple-50",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Sécurité de haute qualité",
    description:
      "La sécurité est notre priorité absolue et nos fournisseurs sont toujours fidèles à leurs engagements.",
    color: "from-red-400 to-red-600",
    bgLight: "bg-red-50",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "100% personnalisable",
    description:
      "Parlez-nous de vos besoins en matière de voyage et nous vous accompagnons ensemble.",
    color: "from-pink-400 to-pink-600",
    bgLight: "bg-pink-50",
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: "Meilleurs guides experts",
    description:
      "Nos guides experts vous guideront à travers les sentiers les plus spectaculaires",
    color: "from-indigo-400 to-indigo-600",
    bgLight: "bg-indigo-50",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Flexible schedule",
    description:
      "Nos voyages sont quotidiens, vous êtes assuré de disposer du meilleur moment qui vous convient.",
    color: "from-teal-400 to-teal-600",
    bgLight: "bg-teal-50",
  },
];

// Statistiques supplémentaires
const statsData = [
  {
    value: "2500+",
    label: "Avis 5 étoiles",
    icon: <Star className="w-4 h-4" />,
  },
  {
    value: "10+",
    label: "Ans d'expérience",
    icon: <Clock className="w-4 h-4" />,
  },
  {
    value: "50+",
    label: "Guides experts",
    icon: <Users className="w-4 h-4" />,
  },
  {
    value: "100%",
    label: "Satisfaction",
    icon: <ThumbsUp className="w-4 h-4" />,
  },
];

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gray-50"
    >
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary rounded-full filter blur-3xl"></div>
      </div>

      {/* Pattern de points */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #e85d04 1px, transparent 0)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Pourquoi Nous Choisir
          </h2>

          <p className="text-md text-gray-600 leading-relaxed">
            Raisons pour lesquelles vous devriez réserver avec nous
          </p>
        </div>

        {/* Grille des fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Effet de gradient au survol */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Bordure supérieure décorative */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              ></div>

              {/* Icône avec animation */}
              <div
                className={`
                relative w-14 h-14 rounded-xl flex items-center justify-center mb-5
                ${feature.bgLight} text-primary group-hover:scale-110 group-hover:rotate-3
                transition-all duration-300
              `}
              >
                {feature.icon}

                {/* Cercle de notification pour le premier élément */}
                {feature.highlight && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                )}
              </div>

              {/* Contenu */}
              <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        {/* Données structurées pour SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Quad Marrakech - Pourquoi nous choisir",
              description:
                "Raisons de choisir nos excursions en quad à Marrakech",
              provider: {
                "@type": "LocalBusiness",
                name: "Quad Marrakech",
                url: "https://quadmarrakech.com",
              },
              areaServed: "Marrakech, Maroc",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services",
                itemListElement: featuresData.map((feature, index) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: feature.title,
                    description: feature.description,
                  },
                })),
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "2500",
              },
            }),
          }}
        />
      </div>
    </section>
  );
}
