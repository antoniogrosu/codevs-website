import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export const metadata = {
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-icon",
      url: "/apple-icon.png",
    },
  },
  generator: "Codevs",
  applicationName: "Codevs Romania",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Realizare website",
    "Creare site de prezentare",
    "Creare website",
    "Creare site personalizat",
    "Vânzare site-uri web",
    "Vânzare site-uri web și aplicații web",
    "Cumpărare site-uri web",
    "Achiziție aplicații web",
    "Site-uri web de vânzare online",
    "Vânzare site-uri de afaceri",
    "Platformă de vânzare site-uri web",
    "Piața de site-uri web",
    "Magazin online de site-uri web",
    "Vânzare site-uri cu venit pasiv",
    "Site-uri web cu potențial de venit",
    "Site-uri web cu trafic crescut",
    "Aplicații web premium de vânzare",
    "Dezvoltare site-uri web personalizate",
    "Vânzarea site-urilor cu tematică specifică",
    "Site-uri web cu design profesional",
    "Portofoliu de site-uri web de vânzare",
    "Oportunități de afaceri online",
    "Investiții în site-uri web",
    "Cumpărare și vânzare de aplicații web",
    "Site-uri web de încredere",
    "Vânzare site-uri web de calitate",
    "Aplicații web personalizate",
    "Dezvoltatori de site-uri web",
    "Vânzare site-uri web profitabile",
    "Vânzarea aplicațiilor mobile",
    "Cumpărare site-uri web profitabile",
    "Piața de site-uri web premium",
    "Site-uri web cu trafic organic crescut",
    "Portofoliu de site-uri web de vânzare",
    "Investiții în proiecte web",
    "Site-uri web cu monetizare",
    "Platformă de licitații pentru site-uri web",
    "Site-uri web cu potențial de creștere",
    "Evaluare site-uri web",
    "Strategii de creștere a site-urilor web",
    "Vânzare site-uri web la cheie",
    "Cumpărare și vânzare de platforme web",
    "Site-uri web pentru afaceri online",
    "Optimizare site-uri web pentru conversii",
  ],
  authors: [{ name: "Antonio Grosu" }],
  colorScheme: "dark",
  creator: "Antonio Grosu",
  publisher: "Codevs Romania",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "black",

  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className="px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-40  bg-gray-950">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
