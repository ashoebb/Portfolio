import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdubuilds.vercel.app"),
  title: "Abdu Ibra — DevOps & Cloud Engineer",
  description:
    "Portfolio of Abdu Ibra, DevOps & Cloud Engineer in Cairo, Egypt (remote) specializing in AWS, Terraform, Kubernetes, and CI/CD.",
  keywords: [
    "DevOps Engineer", "Cloud Engineer", "AWS", "Terraform",
    "Kubernetes", "CI/CD", "GitHub Actions", "Docker",
    "Abdu Ibra", "Abdelrahman Ibrahim", "Portfolio",
  ],
  authors: [{ name: "Abdu Ibra" }],
  creator: "Abdu Ibra",
  openGraph: {
    title: "Abdu Ibra — DevOps & Cloud Engineer",
    description:
      "DevOps & Cloud Engineer building AWS infrastructure, automating with Terraform & GitHub Actions, and shipping software end-to-end.",
    type: "website",
    locale: "en_US",
    siteName: "Abdu Ibra · Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdu Ibra — DevOps & Cloud Engineer",
    description: "AWS · Terraform · Kubernetes · CI/CD",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdu Ibra",
    alternateName: "Abdu Ibra",
    jobTitle: "DevOps & Cloud Engineer",
    email: "abduswedev@gmail.com",
    url: "https://abdubuilds.vercel.app",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
    sameAs: [
      "https://github.com/abdu",
      "https://www.linkedin.com/in/abdu",
    ],
  };

  return (
    <html lang="en" className={jetbrains.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </head>
      <body className="bg-black text-terminal-text font-mono antialiased crt vignette">
        {children}
      </body>
    </html>
  );
}