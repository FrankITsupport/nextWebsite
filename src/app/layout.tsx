import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Woodnork Green Ltd - Event Branding, Fabrication & Printing in Nairobi',
  description: 'Nairobi-based event branding, fabrication, printing, and creative production partner delivering corporate event environments, exhibition stands, signage, activations, custom displays, and installation support for brands, agencies, institutions, NGOs, and premium clients.',
  keywords: [
    'event branding Nairobi',
    'fabrication Kenya',
    'printing services Nairobi',
    'corporate events Kenya',
    'exhibition stands',
    'creative production',
    'woodnork green',
    'event management',
    'brand activation',
    'custom displays',
    'signage production',
    'installation services'
  ],
  authors: [{ name: 'Woodnork Green Ltd' }],
  creator: 'Woodnork Green Ltd',
  publisher: 'Woodnork Green Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.woodnorkgreen.co.ke'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Woodnork Green Ltd - Event Branding, Fabrication & Printing in Nairobi',
    description: 'Nairobi-based event branding, fabrication, printing, and creative production partner delivering corporate event environments, exhibition stands, signage, activations, custom displays, and installation support.',
    url: 'https://www.woodnorkgreen.co.ke',
    siteName: 'Woodnork Green Ltd',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Woodnork Green Ltd - Event Branding & Production Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Woodnork Green Ltd - Event Branding, Fabrication & Printing in Nairobi',
    description: 'Nairobi-based event branding, fabrication, printing, and creative production partner delivering corporate event environments, exhibition stands, signage, activations, custom displays.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#C5E139" />
        <meta name="msapplication-TileColor" content="#111211" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        {/* Structured Data for Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Woodnork Green Ltd",
              "description": "Nairobi-based event branding, fabrication, printing, and creative production partner",
              "url": "https://www.woodnorkgreen.co.ke",
              "telephone": "+254780397798",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Karen Village, Ngong Road",
                "addressLocality": "Nairobi",
                "addressCountry": "Kenya"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-1.2921",
                "longitude": "36.8219"
              },
              "openingHours": "Mo-Fr 08:00-18:00",
              "sameAs": [
                "https://www.facebook.com/woodnorkgreen",
                "https://www.instagram.com/woodnorkgreen",
                "https://www.linkedin.com/company/woodnork-green"
              ],
              "services": [
                "Event Branding",
                "Fabrication",
                "Printing Services",
                "Corporate Event Production",
                "Exhibition Stands",
                "Signage Production",
                "Brand Activation",
                "Custom Displays",
                "Installation Services"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased bg-[#0e0f0e] text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
