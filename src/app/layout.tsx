import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LankanSEO | Professional SEO & Software Development Services in Sri Lanka",
    template: "%s | LankanSEO",
  },
  description:
    "LankanSEO offers professional SEO services, website development, mobile applications, and desktop software solutions. Grow your business with expert digital services in Sri Lanka. Get a free consultation today!",
  keywords: [
    "SEO services Sri Lanka",
    "web development",
    "mobile app development",
    "desktop software",
    "digital marketing",
    "SEO company",
    "software development company",
    "Lanka SEO",
    "website design Sri Lanka",
    "e-commerce development",
  ],
  authors: [{ name: "LankanSEO" }],
  creator: "LankanSEO",
  publisher: "LankanSEO",
  metadataBase: new URL("https://lankanseo.dpdns.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "LankanSEO",
    title: "LankanSEO | Professional SEO & Software Development Services",
    description:
      "Grow your business with professional SEO, web development, mobile apps & desktop software. Expert solutions tailored for your success.",
    url: "https://lankanseo.dpdns.org",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrxy4kf0koiVoLkR4zV_N36d3_Nci_qQwql-klcrt5LIhxWb2Skdv76c&s=10",
        width: 1200,
        height: 630,
        alt: "LankanSEO - Digital Agency Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LankanSEO | Professional SEO & Software Development Services",
    description:
      "Grow your business with professional SEO, web development, mobile apps & desktop software.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrxy4kf0koiVoLkR4zV_N36d3_Nci_qQwql-klcrt5LIhxWb2Skdv76c&s=10",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://lankanseo.dpdns.org",
  },
  verification: {
    google: "b2WSc05OuTFP8wLVvjyB1P0yhzIThF3wYZGJXHgkNsg",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  other: {
    "google-analytics": "G-XXXXXXXXXX",
    "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://lankanseo.dpdns.org/#organization",
      name: "LankanSEO",
      url: "https://lankanseo.dpdns.org",
      logo: "https://lankanseo.dpdns.org/images/logo.png",
      description:
        "Professional SEO & Software Development Services in Sri Lanka",
      address: {
        "@type": "PostalAddress",
        addressCountry: "LK",
        addressLocality: "Colombo",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+94-123-456-789",
        contactType: "customer service",
        availableLanguage: ["English", "Sinhala", "Tamil"],
      },
      sameAs: [
        "https://facebook.com/lankanseo",
        "https://twitter.com/lankanseo",
        "https://linkedin.com/company/lankanseo",
        "https://instagram.com/lankanseo",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://lankanseo.dpdns.org/#website",
      url: "https://lankanseo.dpdns.org",
      name: "LankanSEO",
      description:
        "Professional SEO & Software Development Services in Sri Lanka",
      publisher: { "@id": "https://lankanseo.dpdns.org/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://lankanseo.dpdns.org/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://lankanseo.dpdns.org/#localbusiness",
      name: "LankanSEO",
      image: "https://lankanseo.dpdns.org/images/logo.png",
      url: "https://lankanseo.dpdns.org",
      telephone: "+94-123-456-789",
      email: "hello@lankanseo.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "LK",
        addressLocality: "Colombo",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      priceRange: "$$",
      servesCuisine: "Digital Services",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://lankanseo.dpdns.org/#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://lankanseo.dpdns.org" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://lankanseo.dpdns.org/#services" },
        { "@type": "ListItem", position: 3, name: "Contact", item: "https://lankanseo.dpdns.org/#contact" },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://lankanseo.dpdns.org/#service",
      name: "SEO & Software Development Services",
      provider: { "@id": "https://lankanseo.dpdns.org/#organization" },
      description:
        "Professional SEO, web development, mobile app development, and desktop software services.",
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Search Engine Optimization",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile Application Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Desktop Application Development",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth`}
    >
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f172a" />
        {/* Microsoft Clarity placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
            `,
          }}
        />
        {/* Google Analytics 4 placeholder */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
