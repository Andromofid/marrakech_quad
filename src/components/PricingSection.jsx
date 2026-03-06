"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function PricingSection({ prestations }) {
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
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Header */}
      <div
        className={`text-center mb-10 transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
          Choisissez votre aventure
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto">
          Des formules adaptées à tous les niveaux, de la Palmeraie au désert
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {prestations.map((activity) => {
          const minPrice = Math.min(...activity.pricing.map((p) => p.price));
          const isPopular = activity.id === 1;

          return (
            <div
              key={activity.id}
              className={`relative bg-white rounded-2xl transition-all duration-700 transform
  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  ${
    isPopular
      ? "shadow-xl border-2 border-primary scale-[1.02]"
      : "shadow-md hover:shadow-xl border border-gray-100"
  }`}
            >
              {/* Popular badge */}
              {isPopular && (
                <div cFlassName="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  🌟 Plus populaire
                </div>
              )}

              <div className="p-6">
                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-charcoal mb-1">
                    {activity.title}
                  </h3>

                  <p className="text-sm text-gray-500 line-clamp-2">
                    {activity.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">
                    {minPrice}€
                  </span>

                  <span className="text-gray-400 text-sm ml-1">/pers</span>
                </div>

                {/* Options */}
                <div className="space-y-2 mb-4">
                  {activity.pricing.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-gray-600">{item.activity}</span>

                      <span className="font-semibold text-gray-800">
                        {item.price}€
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Link
                  href={`/reservation/${activity.id}`}
                  className="block w-full py-3 px-4 rounded-xl text-center font-medium transition-all bg-primary text-white hover:bg-primary-dark shadow-md"
                >
                  Réserver maintenant
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
