
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Bebas_Neue, Poppins } from "next/font/google";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Quad Marrakech | Excursion en Quad à Marrakech",
  description: "Vivez une aventure inoubliable en quad à Marrakech.",
};

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
