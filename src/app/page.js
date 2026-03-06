import Image from "next/image";
import Link from "next/link";
import prestations from "./reservation/prestations.json";

import {
  Star,
  Clock,
  Shield,
  MapPin,
  ChevronRight,
  Phone,
  Mail,
  Sparkles,
  Award,
  Clock1,
  Users,
  Bike,
  Euro,
  ChevronRightCircle,
  User,
} from "lucide-react";

export const metadata = {
  title: "Quad Marrakech | Excursion en Quad Palmeraie & Désert",
  description:
    "Vivez une aventure inoubliable en quad à Marrakech. Découvrez la Palmeraie et le désert avec des guides professionnels. Réservation rapide et sécurisée.",
};

export default function Home() {
  const features = [
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Guides Experts",
      description:
        "Guides locaux professionnels avec plusieurs années d'expérience.",
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Horaires Flexibles",
      description: "Choisissez entre 1h, 2h ou une excursion demi-journée.",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Sécurité Garantie",
      description: "Quads récents et équipement de sécurité inclus.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Meilleurs Parcours",
      description: "Accès exclusif aux plus beaux paysages de Marrakech.",
    },
  ];
  // Équipe
  const teamMembers = [
    {
      name: "Karim Benjelloun",
      role: "Guide Principal",
      experience: "10 ans d'expérience",
      languages: ["Français", "Arabe", "Anglais", "Espagnol"],
      image: "/team/karim.jpg",
      specialty: "Expert désert",
    },
    {
      name: "Youssef Amrani",
      role: "Guide & Formateur",
      experience: "8 ans d'expérience",
      languages: ["Français", "Arabe", "Anglais"],
      image: "/team/youssef.jpg",
      specialty: "Spécialiste Palmeraie",
    },
    {
      name: "Hassan Idrissi",
      role: "Guide & Photographe",
      experience: "6 ans d'expérience",
      languages: ["Français", "Arabe", "Anglais", "Allemand"],
      image: "/team/hassan.jpg",
      specialty: "Photos & vidéos",
    },
  ];
  const testimonials = [
    {
      name: "Sophie Martin",
      country: "France",
      rating: 5,
      comment:
        "Une expérience incroyable ! Les guides sont professionnels et les paysages sont magnifiques.",
    },
    {
      name: "Thomas Dubois",
      country: "France",
      rating: 5,
      comment:
        "Organisation parfaite et quad en excellent état. Je recommande vivement.",
    },
    {
      name: "Isabella Rossi",
      country: "Italie",
      rating: 5,
      comment:
        "Une aventure exceptionnelle dans le désert. Nous reviendrons sans hésiter !",
    },
  ];

  return (
    <main className="min-h-screen bg-light mt-16">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-quad.jpg"
            alt="Excursion en quad à Marrakech"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-charcoal/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            Vivez l’Aventure en Quad à Marrakech
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-sand/90">
            Découvrez la Palmeraie et le désert de Marrakech avec nos guides
            professionnels et vivez une expérience inoubliable,
          </p>

          {/* <div className="flex items-center justify-center gap-2 mb-10">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-white/90">4.9 (2 500+ avis clients)</span>
          </div> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation"
              className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              Réserver Maintenant
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/prices"
              className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Voir les Tarifs
            </Link>
          </div>
          <div className="mt-4 text-sm text-sand">
            * Réservation rapide et sécurisée.
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-sand/80">Années d’expérience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">5K+</div>
              <div className="text-sm text-sand/80">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-sand/80">Guides professionnels</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-sand/80">Sécurité garantie</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Pourquoi Nous Choisir
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous offrons la meilleure expérience en quad à Marrakech, avec des
              guides professionnels et un équipement de qualité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-light rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section Tarifs - Style cartes prix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
            Choisissez votre aventure
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Des formules adaptées à tous les niveaux, de la Palmeraie au désert
          </p>
        </div>

        {/* Grille prix */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prestations.map((activity) => {
            const minPrice = Math.min(...activity.pricing.map((p) => p.price));
            const isPopular = activity.id === 1; // Premier = populaire

            return (
              <div
                key={activity.id}
                className={`
            relative bg-white rounded-2xl transition-all duration-300
            ${
              isPopular
                ? "shadow-xl border-2 border-primary scale-[1.02]"
                : "shadow-md hover:shadow-xl border border-gray-100"
            }
          `}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    🌟 Plus populaire
                  </div>
                )}

                <div className="p-6">
                  {/* En-tête */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-charcoal mb-1">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {activity.subtitle}
                    </p>
                  </div>

                  {/* Prix */}
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

                  {/* Bouton */}
                  <Link
                    href={`/reservation/${activity.id}`}
                    className={`
                block w-full py-3 px-4 rounded-xl text-center font-medium transition-all
                bg-primary text-white hover:bg-primary-dark shadow-md`}
                  >
                    Réserver maintenant
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Section Équipe */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-4">
              Nos Guides Professionnels
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une équipe passionnée et expérimentée à votre service pour vivre
              la meilleure expérience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 bg-gradient-to-br from-primary/30 to-primary/10">
                  {/* Avatar placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                      <User className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  {/* Badge spécialité */}
                  <div className="absolute bottom-4 left-4 bg-primary text-white text-xs px-3 py-1.5 rounded-full">
                    {member.specialty}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-3">
                    {member.experience}
                  </p>

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

                  <button className="w-full border border-primary text-primary hover:bg-primary hover:text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Contacter {member.name.split(" ")[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Prêt pour l’Aventure ?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Réservez dès aujourd’hui et vivez une expérience unique à Marrakech.
          </p>

          <Link
            href="/reservation"
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-xl"
          >
            Réserver Maintenant
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
