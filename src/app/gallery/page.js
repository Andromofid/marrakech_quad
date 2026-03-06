import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Heart,
  Share2,
  Download,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Grid,
  Film,
  Image as ImageIcon,
  Star,
  Clock,
  MapPin,
  Users,
  Sparkles,
  TrendingUp,
  Eye,
  DownloadCloud,
  ThumbsUp,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export const metadata = {
  title:
    "Galerie Photos & Vidéos | Excursions Quad à Marrakech | Quad Marrakech",
  description:
    "Découvrez notre galerie photos et vidéos des excursions en quad à Marrakech. Palmeraie, désert d'Agafay, couchers de soleil - Immortalisez vos futurs souvenirs.",
  keywords:
    "galerie quad Marrakech, photos quad Marrakech, vidéos quad Maroc, images quad Palmeraie, désert Agafay photos, excursion quad souvenirs",
  openGraph: {
    title: "Galerie Quad Marrakech - Immortalisez votre aventure",
    description:
      "Découvrez en images la beauté de nos excursions en quad à travers la Palmeraie et le désert",
    images: ["/og-gallery.jpg"],
  },
  alternates: {
    canonical: "https://quadmarrakech.com/gallery",
  },
};

// Données des images (placeholders)
const galleryImages = [
  // Palmeraie
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000",
    title: "Aventure dans la Palmeraie",
    description:
      "Traversez la magnifique palmeraie de Marrakech à bord de nos quads",
    category: "palmeraie",
    likes: 234,
    views: 1243,
    location: "Palmeraie, Marrakech",
    date: "2024-03-15",
    photographer: "Karim B.",
    featured: true,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1000",
    title: "Villages Berbères",
    description:
      "Découverte des villages traditionnels aux abords de la palmeraie",
    category: "palmeraie",
    likes: 156,
    views: 892,
    location: "Palmeraie, Marrakech",
    date: "2024-03-10",
    photographer: "Youssef A.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=1000",
    title: "Sous les palmiers",
    description: "Moment de détente sous les palmiers centenaires",
    category: "palmeraie",
    likes: 189,
    views: 1034,
    location: "Palmeraie, Marrakech",
    date: "2024-03-05",
    photographer: "Hassan I.",
  },

  // Désert
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000",
    title: "Désert d'Agafay",
    description: "Conquérez les étendues rocailleuses du désert d'Agafay",
    category: "desert",
    likes: 312,
    views: 2156,
    location: "Désert d'Agafay",
    date: "2024-03-12",
    photographer: "Karim B.",
    featured: true,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000",
    title: "Oasis cachée",
    description: "Découverte d'une oasis secrète au cœur du désert",
    category: "desert",
    likes: 178,
    views: 1456,
    location: "Désert d'Agafay",
    date: "2024-03-03",
    photographer: "Hassan I.",
  },

  // Coucher de soleil
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=80&w=1000",
    title: "Magie du couchant",
    description: "Les couleurs incroyables du soleil couchant sur le désert",
    category: "sunset",
    likes: 456,
    views: 3245,
    location: "Désert d'Agafay",
    date: "2024-03-14",
    photographer: "Karim B.",
    featured: true,
  },

  // Plus d'images
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=1000",
    title: "Thé berbère",
    description: "Pause traditionnelle avec du thé à la menthe",
    category: "palmeraie",
    likes: 167,
    views: 987,
    location: "Palmeraie, Marrakech",
    date: "2024-02-28",
    photographer: "Karim B.",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000",
    title: "Convoi dans le désert",
    description: "Notre convoi traversant les dunes du désert",
    category: "desert",
    likes: 234,
    views: 1678,
    location: "Désert d'Agafay",
    date: "2024-02-25",
    photographer: "Youssef A.",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000",
    title: "Panorama désertique",
    description: "Vue à 360° sur l'immensité du désert",
    category: "desert",
    likes: 198,
    views: 1432,
    location: "Désert d'Agafay",
    date: "2024-02-20",
    photographer: "Hassan I.",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-charcoal to-charcoal/90 text-white overflow-hidden mt-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
        </div>

        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000"
            alt="Galerie Quad Marrakech"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Camera className="w-4 h-4 text-primary" />
              <span className="text-sm">
                Galerie photos - Immortalisez vos souvenirs
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Nos Plus Beaux Moments
              <span className="text-primary block mt-2">En Images</span>
            </h1>

            <p className="text-xl text-sand/90 mb-8 max-w-2xl mx-auto">
              Plongez au cœur de nos aventures à travers notre galerie. Des
              paysages à couper le souffle, des sourires, et des souvenirs
              inoubliables.
            </p>
          </div>
        </div>

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

      {/* Grille principale */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Images en vedette */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-charcoal mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Moments en vedette
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {galleryImages
              .filter((img) => img.featured)
              .map((image) => (
                <div
                  key={image.id}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative h-96">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Actions */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white/90 backdrop-blur-sm text-charcoal p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="bg-white/90 backdrop-blur-sm text-charcoal p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Informations */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-semibold text-xl mb-1">
                        {image.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-3">
                        {image.description}
                      </p>

                      <div className="flex items-center gap-4 text-white/70 text-xs">
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {image.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {image.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {image.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Grille principale - Masonry style */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="break-inside-avoid group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500"
            >
              <div className="relative">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Actions */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 backdrop-blur-sm text-charcoal p-1.5 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <Heart className="w-3 h-3" />
                  </button>
                  <button className="bg-white/90 backdrop-blur-sm text-charcoal p-1.5 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <Download className="w-3 h-3" />
                  </button>
                </div>

                {/* Informations */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {image.title}
                  </h3>
                  <p className="text-white/70 text-xs mb-2 line-clamp-2">
                    {image.description}
                  </p>

                  <div className="flex items-center gap-3 text-white/60 text-[10px]">
                    <span className="flex items-center gap-1">
                      <Heart className="w-2.5 h-2.5" />
                      {image.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-2.5 h-2.5" />
                      {image.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Camera className="w-2.5 h-2.5" />
                      {image.photographer}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Instagram */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-4 flex items-center justify-center gap-2">
              <Instagram className="w-6 h-6 text-primary" />
              Suivez-nous sur Instagram
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              @quadmarrakech - Plus de 15K abonnés partagent leurs aventures
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.slice(0, 8).map((image) => (
              <a
                key={image.id}
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              Voir plus sur Instagram
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
            "@type": "ImageGallery",
            name: "Galerie Quad Marrakech",
            description: "Photos et vidéos des excursions en quad à Marrakech",
            url: "https://quadmarrakech.com/gallery",
            image: galleryImages.map((img) => ({
              "@type": "ImageObject",
              contentUrl: img.src,
              name: img.title,
              description: img.description,
              uploadDate: img.date,
            })),
            provider: {
              "@type": "LocalBusiness",
              name: "Quad Marrakech",
              url: "https://quadmarrakech.com",
            },
          }),
        }}
      />
    </main>
  );
}
