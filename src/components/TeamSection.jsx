"use client";

import { useEffect, useRef, useState } from "react";
import { User } from "lucide-react";

export default function TeamSection({ teamMembers }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-heading text-3xl font-bold text-charcoal mb-4">
            Nos Guides Professionnels
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Une équipe passionnée et expérimentée à votre service pour vivre la
            meilleure expérience
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`group bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-700
              
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Image / avatar */}
              <div className="relative h-30 bg-gradient-to-br from-primary/30 to-primary/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-1">
                  {member.name}
                </h3>

                <p className="text-primary font-medium mb-2">{member.specialty}</p>

                <p className="text-sm text-gray-500 mb-3">
                  {member.experience}
                </p>

                {/* Languages */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button className="w-full border border-primary text-primary hover:bg-primary hover:text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Contacter {member.name.split(" ")[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
