import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Send,
  MessageSquare,
  User,
  CheckCircle,
  ChevronRight,
  Sparkles,
  Shield,
  Star,
  Globe,
  Calendar,
  Headphones,
  MessageCircle,
  Map,
  Navigation,
} from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contactez-nous | Quad Marrakech - Excursions en Quad à Marrakech",
  description:
    "Contactez l'équipe de Quad Marrakech pour réserver votre excursion ou poser vos questions. Réponse rapide sous 24h. Guides professionnels à votre écoute.",
  keywords:
    "contact quad Marrakech, réserver quad Marrakech, téléphone quad Marrakech, email quad Maroc, adresse quad Marrakech, guide quad Marrakech",
  openGraph: {
    title: "Contactez Quad Marrakech - Réservez votre aventure",
    description:
      "Une question ? Notre équipe est là pour vous aider à choisir la meilleure excursion",
    images: ["/og-contact.jpg"],
  },
  alternates: {
    canonical: "https://quadmarrakech.com/contact",
  },
};
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

// FAQ Contact
const faqItems = [
  {
    question: "Comment réserver une excursion ?",
    answer:
      "Vous pouvez réserver directement via notre formulaire en ligne, par téléphone ou par email. Nous confirmons votre réservation sous 24h.",
  },
  {
    question: "Quels sont les délais de réponse ?",
    answer:
      "Nous répondons à toutes vos demandes sous 24h maximum, souvent dans l'heure pour les appels téléphoniques.",
  },
  {
    question: "Puis-je modifier ma réservation ?",
    answer:
      "Oui, contactez-nous au moins 48h avant votre excursion pour modifier votre réservation sans frais.",
  },
  {
    question: "Proposez-vous des excursions de groupe ?",
    answer:
      "Oui, nous organisons des sorties pour groupes jusqu'à 20 personnes. Contactez-nous pour un devis personnalisé.",
  },
];

// Horaires détaillés
const hours = [
  {
    day: "Lundi - Vendredi",
    morning: "8h00 - 12h00",
    afternoon: "14h00 - 18h00",
  },
  { day: "Samedi", morning: "8h00 - 12h00", afternoon: "14h00 - 17h00" },
  { day: "Dimanche", morning: "9h00 - 12h00", afternoon: "Fermé" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-charcoal to-charcoal/90 text-white overflow-hidden mt-16">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
        </div>

        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact-hero.jpg"
            alt="Contact Quad Marrakech"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge de confiance */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Headphones className="w-4 h-4 text-primary" />
              <span className="text-sm">
                Support disponible 7j/7 - Réponse sous 24h
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Contactez Notre Équipe
              <span className="text-primary block mt-2">
                Guide Professionnel
              </span>
            </h1>

            <p className="text-xl text-sand/90 mb-8 max-w-2xl mx-auto">
              Une question ? Notre équipe de guides expérimentés est là pour
              vous conseiller et vous aider à choisir l'excursion qui vous
              correspond.
            </p>

            {/* Statistiques de réactivité */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">&lt; 24h</div>
                <div className="text-xs text-sand/70">Délai de réponse</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">5/5</div>
                <div className="text-xs text-sand/70">Satisfaction</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-xs text-sand/70">Langues parlées</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-xs text-sand/70">Années d'exp</div>
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

      {/* Section Contact Rapide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Carte Téléphone */}
          <a
            href="tel:+212777517159"
            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl p-6 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <Phone className="w-6 h-6 text-primary group-hover:text-white" />
            </div>
            <h3 className="text-lg font-semibold text-charcoal mb-1">
              Appelez-nous
            </h3>
            <p className="text-sm text-gray-500 mb-3">24h/24 - 7j/7</p>
            <p className="text-primary font-semibold group-hover:underline">
              +212 600 000 000
            </p>
          </a>

          {/* Carte Email */}
          <a
            href="mailto:ymofid18@gmail.com"
            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl p-6 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <Mail className="w-6 h-6 text-primary group-hover:text-white" />
            </div>
            <h3 className="text-lg font-semibold text-charcoal mb-1">
              Envoyez-nous un email
            </h3>
            <p className="text-sm text-gray-500 mb-3">Réponse sous 24h</p>
            <p className="text-primary font-semibold group-hover:underline">
              ymofid18@gmail.com
            </p>
          </a>

          {/* Carte WhatsApp */}
          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl p-6 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <MessageCircle className="w-6 h-6 text-primary group-hover:text-white" />
            </div>
            <h3 className="text-lg font-semibold text-charcoal mb-1">
              WhatsApp
            </h3>
            <p className="text-sm text-gray-500 mb-3">Réponse instantanée</p>
            <p className="text-primary font-semibold group-hover:underline">
              +212 600 000 000
            </p>
          </a>

          {/* Carte Adresse */}
          <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl p-6 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <MapPin className="w-6 h-6 text-primary group-hover:text-white" />
            </div>
            <h3 className="text-lg font-semibold text-charcoal mb-1">
              Notre adresse
            </h3>
            <p className="text-sm text-gray-500 mb-3">Venir nous rencontrer</p>
            <p className="text-gray-700 font-medium">
              Marrakech, Maroc
              <br />
              District de la Palmeraie
            </p>
          </div>
        </div>
      </section>

      {/* Section Formulaire et Carte */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          {/* Carte et informations */}
          <div className="space-y-6">
            {/* Carte Google Maps (iframe) */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108726.72854368994!2d-8.049865!3d31.629472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87e42!2sMarrakech!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte Marrakech - Localisation Quad Marrakech"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Comment venir
            <div className="bg-white rounded-3xl shadow-2xl p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-primary" />
                Comment venir ?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Map className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">En voiture</p>
                    <p className="text-sm text-gray-600">
                      À 15 min du centre-ville, parking gratuit sur place
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Navette</p>
                    <p className="text-sm text-gray-600">
                      Service de navette gratuit depuis votre hôtel
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Horaires détaillés */}
            <div className="bg-white rounded-3xl shadow-2xl p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Horaires d'ouverture
              </h3>
              <div className="space-y-3">
                {hours.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="font-medium text-charcoal">
                      {item.day}
                    </span>
                    <div className="text-right">
                      <span className="text-sm text-gray-600">
                        {item.morning}
                      </span>
                      {item.afternoon !== "Fermé" && (
                        <span className="text-sm text-gray-600 block">
                          {item.afternoon}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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

      {/* Section FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-charcoal mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="font-semibold text-charcoal mb-2 flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {item.question}
              </h3>
              <p className="text-sm text-gray-600 ml-4">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Réseaux Sociaux */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Suivez nos aventures sur les réseaux sociaux
          </h2>
          <p className="text-white/90 mb-8">
            Découvrez les photos et vidéos de nos excursions quotidiennes
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="https://facebook.com/quadmarrakech"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/quadmarrakech"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com/quadmarrakech"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Données structurées pour SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Quad Marrakech",
            description: "Service d'excursions en quad à Marrakech",
            url: "https://quadmarrakech.com",
            telephone: "+212777517159",
            email: "ymofid18@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Marrakech",
              addressCountry: "MA",
            },
            openingHoursSpecification: hours.map((h) => ({
              "@type": "OpeningHoursSpecification",
              dayOfWeek: h.day
                .split(" - ")
                .map((d) =>
                  d === "Lundi"
                    ? "Monday"
                    : d === "Mardi"
                      ? "Tuesday"
                      : d === "Mercredi"
                        ? "Wednesday"
                        : d === "Jeudi"
                          ? "Thursday"
                          : d === "Vendredi"
                            ? "Friday"
                            : d === "Samedi"
                              ? "Saturday"
                              : "Sunday",
                ),
              opens: h.morning.split(" - ")[0].replace("h", ":"),
              closes:
                h.morning.split(" - ")[1]?.replace("h", ":") ||
                h.afternoon.split(" - ")[1]?.replace("h", ":"),
            })),
            sameAs: [
              "https://facebook.com/quadmarrakech",
              "https://instagram.com/quadmarrakech",
              "https://youtube.com/quadmarrakech",
            ],
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
