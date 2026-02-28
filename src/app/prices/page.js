import prestations from "../reservation/prestations.json";
import Image from "next/image";
import Link from "next/link";
import {
  Euro,
  Users,
  Clock,
  CheckCircle,
  Star,
  Shield,
  Camera,
  Coffee,
  Bike,
  Gift,
  Sparkles,
  TrendingUp,
  Award,
  ChevronRight,
  Calendar,
  ThumbsUp,
  Percent,
} from "lucide-react";

export const metadata = {
  title: "Tarifs & Prestations | Excursions Quad à Marrakech | Meilleurs Prix",
  description:
    "Découvrez nos tarifs transparents pour toutes nos excursions en quad à Marrakech. Palmeraie, désert, coucher de soleil. Guides professionnels, équipement inclus. Meilleurs prix garantis !",
  keywords:
    "tarifs quad Marrakech, prix excursion quad, quad Palmeraie prix, quad désert Marrakech tarif, activité Marrakech prix, réserver quad pas cher",
  openGraph: {
    title: "Tarifs Quad Marrakech - Excursions à partir de 45€",
    description:
      "Comparez nos offres et réservez votre aventure en quad au meilleur prix",
    images: ["/og-prices.jpg"],
  },
  alternates: {
    canonical: "https://quadmarrakech.com/prices",
  },
};

// Données enrichies pour les cartes
const features = [
  { icon: <Shield className="w-4 h-4" />, text: "Sécurité garantie" },
  { icon: <Camera className="w-4 h-4" />, text: "Photos incluses" },
  { icon: <Coffee className="w-4 h-4" />, text: "Thé berbère" },
  { icon: <Bike className="w-4 h-4" />, text: "Quad 500cc" },
];

const guarantees = [
  {
    icon: <ThumbsUp />,
    text: "Meilleur prix garanti",
    subtext: "Ou nous remboursons la différence",
  },
  {
    icon: <Calendar />,
    text: "Annulation gratuite",
    subtext: "Jusqu'à 24h avant",
  },
  {
    icon: <Award />,
    text: "Guides certifiés",
    subtext: "Expérience et professionnalisme",
  },
  {
    icon: <Shield />,
    text: "Assurance incluse",
    subtext: "Protection complète",
  },
];

export default function PricesPage() {
  // Trouver le prix minimum pour le badge
  const allPrices = prestations.flatMap((p) => p.pricing.map((pr) => pr.price));
  const minPrice = Math.min(...allPrices);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section avec vague */}
      <section className="relative bg-gradient-to-r from-charcoal to-charcoal/90 text-white overflow-hidden mt-16">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge de confiance */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Percent className="w-4 h-4 text-primary" />
              <span className="text-sm">
                À partir de {minPrice}€ - Réservez maintenant
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Nos Tarifs Transparents
              <span className="text-primary block mt-2">Sans Surprise</span>
            </h1>

            <p className="text-xl text-sand/90 mb-8 max-w-2xl mx-auto">
              Des prix clairs pour des aventures inoubliables. Comparez nos
              offres et choisissez l'expérience qui vous correspond.
            </p>

            {/* Statistiques rapides */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-xs text-sand/70">Années d'exp</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">5K+</div>
                <div className="text-xs text-sand/70">Clients</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">4.9</div>
                <div className="text-xs text-sand/70">/5 (2K avis)</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-sand/70">Satisfaits</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vague décorative */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

  

      {/* Grille des prestations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {prestations.map((activity, index) => {
            // Calculer le prix minimum pour cette activité
            const minActivityPrice = Math.min(
              ...activity.pricing.map((p) => p.price),
            );

            return (
              <div
                key={activity.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                {/* En-tête avec image */}
                <div className="relative h-56 bg-gradient-to-br from-primary/30 to-primary/10 overflow-hidden">
                  {/* Image de fond (à remplacer par vos vraies images) */}
                  <div className="absolute inset-0 bg-charcoal/40"></div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                    {index === 0 && (
                      <span className="bg-primary text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                        <Sparkles className="w-3 h-3" />
                        Plus populaire
                      </span>
                    )}
                    {activity.isNew && (
                      <span className="bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                        <Award className="w-3 h-3" />
                        Nouveau
                      </span>
                    )}
                  </div>

                  {/* Prix à partir de */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className="text-sm text-gray-600">À partir de</span>
                    <span className="text-xl font-bold text-primary ml-1">
                      {minActivityPrice}€
                    </span>
                  </div>

                  {/* Informations rapides */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                      <Clock className="w-3 h-3 text-primary" />
                      {activity.duration || "2h"}
                    </span>
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                      <Users className="w-3 h-3 text-primary" />
                      Max {activity.maxPeople || 4} pers
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-8">
                  {/* Titre et description */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">
                      {activity.title}
                    </h2>
                    {activity.subtitle && (
                      <p className="text-gray-600">{activity.subtitle}</p>
                    )}
                  </div>


                  {/* Grille des prix */}
                  <div className="space-y-3 mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Options disponibles
                    </h3>
                    {activity.pricing.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors group/price"
                      >
                        <div className="flex items-center gap-3">
                          <Bike className="w-4 h-4 text-primary" />
                          <span className="font-medium text-gray-700">
                            {item.activity}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-primary">
                            {item.price}
                          </span>
                          <Euro className="w-4 h-4 text-primary" />
                          {item.currency && (
                            <span className="text-xs text-gray-400">
                              /{item.currency}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Inclus */}
                  {/* <div className="mb-6">
                    <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      Ce qui est inclus :
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="text-xs text-gray-600 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        Guide francophone
                      </span>
                      <span className="text-xs text-gray-600 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        Équipement premium
                      </span>
                      <span className="text-xs text-gray-600 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        Assurance
                      </span>
                      <span className="text-xs text-gray-600 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        Photos
                      </span>
                    </div>
                  </div> */}

                  {/* Disponibilité */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600">
                      Disponible 
                    </span>
                  </div>

                  {/* Bouton d'action */}
                  <Link
                    href={`/reservation/${activity.id}`}
                    className="block w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 text-center group/btn relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Réserver maintenant
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section comparaison rapide */}
      <section className="bg-white py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-4">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des garanties solides pour une expérience sans souci
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary w-6 h-6">{item.icon}</div>
                </div>
                <h3 className="font-semibold text-charcoal mb-1">
                  {item.text}
                </h3>
                <p className="text-sm text-gray-500">{item.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section FAQ rapide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-4">
              Questions sur les Tarifs ?
            </h2>
            <p className="text-gray-600 mb-6">
              Consultez notre FAQ ou contactez-nous directement pour toute
              question
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold"
            >
              Voir la FAQ
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 shadow-md">
              <h3 className="font-semibold text-charcoal mb-2">
                Y a-t-il des frais cachés ?
              </h3>
              <p className="text-sm text-gray-600">
                Non, tous nos prix sont TTC. L'équipement et l'assurance sont
                inclus.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-md">
              <h3 className="font-semibold text-charcoal mb-2">
                Puis-je annuler gratuitement ?
              </h3>
              <p className="text-sm text-gray-600">
                Oui, jusqu'à 24h avant votre excursion. Remboursement 100%.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-md">
              <h3 className="font-semibold text-charcoal mb-2">
                Les photos sont-elles incluses ?
              </h3>
              <p className="text-sm text-gray-600">
                Oui, nous offrons des photos professionnelles de votre aventure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à Vivre l'Aventure ?
          </h2>
          <p className="text-white/90 mb-8">
            Réservez maintenant et bénéficiez de 10% de réduction sur votre
            première excursion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-light px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Nous contacter
            </Link>
            <Link
              href="/reservation"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Voir les disponibilités
            </Link>
          </div>
        </div>
      </section>

      {/* Données structurées pour SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Excursions Quad Marrakech",
            description:
              "Tarifs transparents pour toutes nos excursions en quad",
            brand: {
              "@type": "Brand",
              name: "Quad Marrakech",
            },
            offers: {
              "@type": "AggregateOffer",
              lowPrice: minPrice,
              highPrice: Math.max(...allPrices),
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
              offerCount: allPrices.length,
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "2500",
            },
          }),
        }}
      />
    </main>
  );
}
