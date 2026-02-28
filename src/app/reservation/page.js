import prestations from "./prestations.json";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Users,
  Bike,
  MapPin,
  Star,
  Shield,
  Camera,
  Gift,
  Coffee,
  Sunset,
  ChevronRight,
  CheckCircle,
  Info,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Réservation | Excursions en Quad à Marrakech | Meilleurs Tarifs",
  description:
    "Réservez votre excursion en quad à Marrakech. Choisissez parmi nos prestations : Palmeraie, Désert, Coucher de soleil. Guides professionnels et équipement inclus. Meilleurs prix garantis !",
  keywords:
    "réservation quad Marrakech, excursion quad Palmeraie, quad désert Marrakech, tarifs quad Maroc, activité Marrakech",
  openGraph: {
    title: "Réservez votre aventure en quad à Marrakech",
    description: "Vivez une expérience unique dans le désert marocain",
    images: ["/og-reservation.jpg"],
  },
};

// Données enrichies pour le SEO et l'expérience client
const features = [
  { icon: <Shield className="w-5 h-5" />, text: "Sécurité garantie" },
  { icon: <Users className="w-5 h-5" />, text: "Guides francophones" },
  { icon: <Camera className="w-5 h-5" />, text: "Photos incluses" },
  { icon: <Coffee className="w-5 h-5" />, text: "Thé berbère offert" },
];

const popularAddons = [
  { name: "Photos professionnelles", price: "€20", icon: <Camera /> },
  { name: "Déjeuner traditionnel", price: "€15", icon: <Coffee /> },
  { name: "Tour privé", price: "+€30", icon: <Users /> },
];

export default function ReservationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-light to-white my-16">
      {/* Hero Section avec effet de surprise */}
      <section className="relative bg-charcoal text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge de confiance */}
              {/* <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm">
                  +2500 aventuriers nous ont fait confiance
                </span>
              </div> */}

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Choisissez Votre
                <span className="text-primary block mt-2">
                  Aventure en Quad
                </span>
              </h1>

              <p className="text-lg text-sand/90 mb-8 max-w-xl">
                Des excursions adaptées à tous les niveaux. Guides
                professionnels, équipement premium et souvenirs inoubliables
                garantis.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-sand/80"
                  >
                    <span className="text-primary">{feature.icon}</span>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              {/* <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-sand/70">
                    Années d'expérience
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">
                    5 étoiles
                  </div>
                  <div className="text-sm text-sand/70">Sur TripAdvisor</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-sand/70">
                    Satisfaction client
                  </div>
                </div>
              </div> */}
            </div>

            {/* Right Content - Offre Spéciale */}
            {/* <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full font-bold animate-pulse">
                  -20% CE MOIS-CI
                </div>

                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Gift className="w-6 h-6 text-primary" />
                  Offre Spéciale Ramadan
                </h3>

                <p className="text-sand/80 mb-6">
                  Réservez maintenant et bénéficiez de 20% de réduction sur
                  toutes nos excursions + thé berbère offert
                </p>

                <div className="flex items-center gap-4 text-sm mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Offre valable jusqu'au 30 Avril</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  {["J-7", "J-6", "J-5", "J-4", "J-3"].map((day) => (
                    <div
                      key={day}
                      className="flex-1 bg-white/5 rounded-lg p-2 text-center text-xs"
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F9FAFB"
            />
          </svg>
        </div>
      </section>

      {/* Filtres et Tri */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xl font-bold text-charcoal">
            <TrendingUp className="w-5 h-5 text-primary" />
            Choisissez Votre Prestation
          </div>
        </div>
      </section>

      {/* Grille des Prestations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {prestations.map((prestation, index) => (
            <article
              key={prestation.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Badge "Choix Populaire" ou "Nouveau" */}
              {index === 0 && (
                <div className="absolute top-4 left-4 z-10 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-white" />
                  Choix Populaire
                </div>
              )}
              {prestation.isNew && (
                <div className="absolute top-4 left-4 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Nouveau
                </div>
              )}

              {/* Image d'illustration (à remplacer par vos vraies images) */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2">
                    <span className="bg-white/90 backdrop-blur-sm text-charcoal text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {prestation.duration || "2h"}
                    </span>
                    <span className="bg-white/90 backdrop-blur-sm text-charcoal text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {prestation.maxPeople || "Jusqu'à 4"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Titre et Sous-titre */}
                <h2 className="text-xl font-bold text-charcoal mb-1 group-hover:text-primary transition-colors">
                  {prestation.title}
                </h2>
                {prestation.subtitle && (
                  <p className="text-sm text-zinc-600 mb-4">
                    {prestation.subtitle}
                  </p>
                )}

                {/* Description courte */}
                <p className="text-sm text-zinc-600 mb-4 line-clamp-2">
                  {prestation.description ||
                    "Excursion guidée avec équipement premium inclus. Adapté aux débutants."}
                </p>

                {/* Points forts */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {prestation.highlights?.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Tarifs */}
                {Array.isArray(prestation.pricing) &&
                  prestation.pricing.length > 0 && (
                    <div className="mb-4">
                      <div className="bg-light rounded-xl p-4">
                        {prestation.pricing.map((row, idx) => (
                          <div
                            key={`${prestation.id}-price-${idx}`}
                            className="flex items-center justify-between py-2 border-b border-zinc-100 last:border-0"
                          >
                            <span className="text-sm text-zinc-700">
                              {row.activity}
                            </span>
                            <div className="text-right">
                              <span className="font-bold text-primary">
                                {row.price}
                              </span>
                              {row.currency && (
                                <span className="text-xs text-zinc-500 ml-1">
                                  {row.currency}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Options populaires */}
                {prestation.id === 1 && (
                  <div className="mb-4">
                    <p className="text-xs text-zinc-500 mb-2 flex items-center gap-1">
                      <Info className="w-3 h-3" />
                      Options populaires :
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {popularAddons.map((addon, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-zinc-100 px-2 py-1 rounded-full flex items-center gap-1"
                        >
                          {addon.icon}
                          {addon.name}{" "}
                          <span className="font-medium text-primary">
                            {addon.price}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Disponibilité */}
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-green-600">
                    Disponible 
                  </span>
                </div>

                {/* Bouton de réservation */}
                <div className="flex items-center gap-3">
                  <Link
                    href={`/reservation/${prestation.id}`}
                    className="flex-1 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    Réserver
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  {/* <button
                    className="p-3 border border-zinc-200 rounded-xl hover:border-primary hover:text-primary transition-colors"
                    aria-label="Plus d'informations"
                  >
                    <Info className="w-5 h-5" />
                  </button> */}
                </div>
              </div>

              {/* Badge de garantie */}
              {/* <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/90 backdrop-blur-sm text-xs px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Shield className="w-3 h-3 text-primary" />
                  Annulation gratuite
                </div>
              </div> */}
            </article>
          ))}
        </div>
      </section>

      {/* Section FAQ Rapide */}
      <section className="bg-white py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Tout ce que vous devez savoir avant de réserver votre aventure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bike className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">
                Équipement fourni ?
              </h3>
              <p className="text-sm text-zinc-600">
                Casque, gants et combinaison inclus. Prévoyez des vêtements
                confortables.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">
                Débutants acceptés ?
              </h3>
              <p className="text-sm text-zinc-600">
                Bien sûr ! Formation de 15min avant le départ. Accessible à
                tous.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Annulation ?</h3>
              <p className="text-sm text-zinc-600">
                Annulation gratuite jusqu'à 24h avant. Remboursement 100%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA Final */}
      {/* <section className="bg-gradient-to-r from-primary to-primary-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt pour l'aventure ?
          </h2>
          <p className="text-white/90 mb-8">
            Réservez maintenant et recevez un code promo pour votre prochaine
            excursion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Votre email"
              className="px-6 py-3 rounded-lg flex-1 max-w-md mx-auto sm:mx-0 focus:outline-none"
            />
            <button className="bg-white text-primary hover:bg-light px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Obtenir mon code
            </button>
          </div>
        </div>
      </section> */}
    </main>
  );
}
