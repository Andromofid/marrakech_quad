"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  Shield,
  Zap,
  Trophy,
  ChevronRight,
  Star,
  Sparkles,
  CheckCircle,
  Award,
  Users,
  Wrench,
  Compass,
} from "lucide-react";
import Link from "next/link";

const equipmentBrands = [
  {
    name: "can-am",
    logo: "/brands/can-am.png",
    color: "#FF6B00",
    bgColor: "from-orange-500/20 to-orange-600/10",
  },
  {
    name: "YAMAHA",
    logo: "/brands/yamaha.png",
    color: "#4B4B4B",
    bgColor: "from-gray-500/20 to-gray-600/10",
  },
  {
    name: "POLARIS",
    logo: "/brands/polaris.png",
    color: "#DA291C",
    bgColor: "from-red-500/20 to-red-600/10",
  },
  {
    name: "OKYMCO",
    logo: "/brands/okymco.png",
    color: "#005BBB",
    bgColor: "from-blue-500/20 to-blue-600/10",
  },
  {
    name: "SUZUKI",
    logo: "/brands/suzuki.png",
    color: "#E60012",
    bgColor: "from-red-500/20 to-red-600/10",
  },
  {
    name: "DECATHLON",
    logo: "/brands/decathlon.png",
    color: "#0082C3",
    bgColor: "from-blue-500/20 to-blue-600/10",
  },
];

export default function EquipmentShowcase() {
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
      className="relative py-18 overflow-hidden bg-white"
    >
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      </div>

      {/* Pattern de points */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #e85d04 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête avec animation */}
        <div
          className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
            Équipement d'aventure
            <br />
            <span className="text-primary">
              {" "}
              des meilleures marques réputées
            </span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Nous sommes conscients que disposer du bon équipement et des
            véhicules appropriés peut être déterminant pour votre expérience
            d'aventure. C'est pourquoi nous investissons pleinement dans
            l'acquisition d'équipements d'aventure haut de gamme provenant de
            marques de renom. Nous sommes fiers de mettre à votre disposition
            les équipements et les véhicules les plus performants de leur
            catégorie afin de vous garantir sécurité, confort et plaisir tout au
            long de votre périple.
          </p>
        </div>

        {/* Grille des marques */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {equipmentBrands.map((brand, index) => (
              <div
                key={brand.name}
                className={`relative group  rounded-2xl p-6 transition-all duration-500 transform hover:scale-105 cursor-pointer`}
              >
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>

                {/* Logo */}
                <div className="relative h-24 flex items-center justify-center mb-4">
                  <div className="w-full h-20 relative filter grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={brand.logo}
                      alt={`Logo ${brand.name}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Nom de la marque */}
                <p className="text-center font-semibold text-gray-700 group-hover:text-primary transition-colors">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
