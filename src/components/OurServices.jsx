"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bike,
  Users,
  Clock,
  ChevronRight,
  Star,
  MapPin,
  Flame,
  Sparkles,
  Award,
  TrendingUp,
  Calendar,
  CheckCircle,
  Heart,
  Share2,
  Info,
  X,
  Eye,
  DollarSign,
  User,
  Car,
  Sun,
  Moon,
  Coffee,
  Camera,
} from "lucide-react";

// Import des données
import prestations from "../app/reservation/prestations.json";

// Catégories d'icônes par type d'activité
const getActivityIcon = (activity) => {
  if (activity.toLowerCase().includes("quad"))
    return <Bike className="w-7 h-7" />;
  if (activity.toLowerCase().includes("buggy"))
    return <Car className="w-7 h-7" />;
  if (activity.toLowerCase().includes("passager"))
    return <User className="w-7 h-7" />;
  if (activity.toLowerCase().includes("dromadaire"))
    return <Camera className="w-7 h-7" />;
  if (activity.toLowerCase().includes("dîner"))
    return <Coffee className="w-7 h-7" />;
  return <Flame className="w-7 h-7" />;
};

// Couleurs par type
const getActivityColor = (index) => {
  const colors = [
    "from-orange-400 to-red-500",
    "from-blue-400 to-indigo-500",
    "from-green-400 to-emerald-500",
    "from-purple-400 to-pink-500",
    "from-yellow-400 to-orange-500",
    "from-red-400 to-rose-500",
  ];
  return colors[index % colors.length];
};

export default function OurServices() {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
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
      className="relative py-12 overflow-hidden bg-gray-50"
    >
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      </div>

      {/* Pattern de points */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #e85d04 1px, transparent 0)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Vivez l'Aventure Ultime
          </h2>

          <p className="text-md text-gray-600">
            Des expériences uniques à Marrakech, adaptées à tous les niveaux
          </p>
        </div>

        {/* Services Row - Responsive Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mt-10">
          {prestations.map((service, index) => {
            const isLast = index === prestations.length - 1;

            return (
              <Link
                key={service.id}
                href={`/reservation/${service.id}`}
                className={`group bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center hover:-translate-y-1 p-4 
      
      ${isLast ? "col-span-2 sm:col-span-1" : ""}
      
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="text-primary mb-3 group-hover:scale-110 transition-transform">
                  {getActivityIcon(service.title)}
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 leading-tight">
                  {service.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
