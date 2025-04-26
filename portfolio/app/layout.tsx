import type { Metadata } from "next";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import Navbar from '@/components/Navbar';
import Script from 'next/script';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'シモネ',
  description: 'Portfolio di Simone - Full-stack developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <div className="main-content pt-3">
          <main role="main" className="main pb-3">
            <div className="container ps-4 pe-4">
              {children}
            </div>
          </main>
        </div>
        {/* Footer would go here */}
        <Footer />
        <Script src="https://code.jquery.com/jquery-3.7.1.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/CSSRulePlugin.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js" />
        <Script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" />
        <Script src="/js/site.js" />
      </body>
    </html>
  );
}