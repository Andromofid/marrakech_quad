import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import prestations from "../prestations.json";
import BookingForm from "./BookingForm";
import {
  Clock,
  Users,
  Bike,
  MapPin,
  Star,
  Shield,
  Camera,
  Coffee,
  Sun,
  Moon,
  TrendingUp,
  CheckCircle,
  Gift,
  Award,
  Sparkles,
} from "lucide-react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const prestation = prestations.find((p) => String(p.id) === String(id));

  if (!prestation) {
    return {
      title: "Prestation non trouvée | Quad Marrakech",
    };
  }

  return {
    title: `${prestation.title} | Réserver à Marrakech | Quad Marrakech`,
    description:
      prestation.subtitle ||
      `Réservez votre excursion ${prestation.title} à Marrakech. Guides professionnels, équipement inclus, meilleur prix garanti.`,
    keywords: `quad Marrakech, ${prestation.title}, excursion quad, réservation quad Marrakech, activité Marrakech`,
    openGraph: {
      title: prestation.title,
      description: prestation.subtitle,
      images: ["/og-reservation.jpg"],
    },
  };
}

export default async function ReservationDetailPage({ params }) {
  const { id } = await params;
  const prestation = prestations.find((p) => String(p.id) === String(id));

  if (!prestation) return notFound();

  // Enrichir les données de la prestation
  const enrichedPrestation = {
    ...prestation,
    duration: prestation.duration || "2 heures",
    maxPeople: prestation.maxPeople || 4,
    rating: 4.9,
    reviews: 528,
    availableToday: true,
    highlights: prestation.highlights || [
      "Guide francophone professionnel",
      "Équipement premium inclus",
      "Thé berbère offert",
      "Photos souvenirs",
      "Assurance incluse",
    ],
    included: [
      { icon: <Bike />, text: "Quad 500cc" },
      { icon: <Shield />, text: "Casque & gants" },
      { icon: <Camera />, text: "Photos" },
      { icon: <Coffee />, text: "Thé berbère" },
    ],
    schedule: [
      "Matin: 9h00 - 11h00",
      "Midi: 12h00 - 14h00",
      "Après-midi: 15h00 - 17h00",
      "Coucher soleil: 18h00 - 20h00",
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-light to-white">
      {/* Hero Section avec image de fond */}
      <section className="relative bg-charcoal text-white overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src={`/prestations/${prestation.id}.jpg`}
            alt={prestation.title}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent"></div>
        </div>

        {/* Éléments décoratifs */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Fil d'Ariane */}
          <nav className="flex items-center gap-2 text-sm text-sand/70 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <span>›</span>
            <Link
              href="/reservation"
              className="hover:text-white transition-colors"
            >
              Prestations
            </Link>
            <span>›</span>
            <span className="text-white">{prestation.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            {/* Info principale */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                {prestation.isNew && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Nouveau
                  </span>
                )}
                <span className="bg-primary/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {enrichedPrestation.rating} ({enrichedPrestation.reviews}{" "}
                  avis)
                </span>
                {enrichedPrestation.availableToday && (
                  <span className="bg-green-500/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Disponible aujourd'hui
                  </span>
                )}
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                {prestation.title}
              </h1>

              {prestation.subtitle && (
                <p className="text-xl text-sand/90 mb-6">
                  {prestation.subtitle}
                </p>
              )}

              {/* Métriques rapides */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>{enrichedPrestation.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Jusqu'à {enrichedPrestation.maxPeople} personnes</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Départ de Marrakech</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Vague décorative */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 50C840 60 960 70 1080 70C1200 70 1320 60 1380 55L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
              fill="#F9FAFB"
            />
          </svg>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Colonne de gauche - Détails */}
          <div className="lg:col-span-1 space-y-6">
            {/* Ce qui est inclus */}
            {/* <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-charcoal mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Ce qui est inclus
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {enrichedPrestation.included.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-zinc-600"
                  >
                    <span className="text-primary">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Horaires disponibles */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-charcoal mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Horaires disponibles
              </h2>
              <div className="space-y-2">
                {enrichedPrestation.schedule.map((time, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-2 border-b border-zinc-100 last:border-0"
                  >
                    <span className="text-sm text-zinc-600">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            

            {/* Badge de confiance */}
            {/* <div className="bg-primary/5 rounded-2xl p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-charcoal mb-1">
                Garantie satisfait
              </h3>
              <p className="text-sm text-zinc-600">
                Annulation gratuite jusqu'à 24h avant
              </p>
            </div> */}
          </div>

          {/* Colonne de droite - Formulaire de réservation */}
          <div className="lg:col-span-2">
            <BookingForm prestation={enrichedPrestation} />
          </div>
        </div>
      </section>
    </main>
  );
}
