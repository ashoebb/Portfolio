import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdushoeb.dev"),
  title: "Abdelrahman Shoeb — DevOps & Cloud Engineer",
  description:
    "Portfolio of Abdelrahman (Abdu) Shoeb — DevOps & Cloud Engineer specializing in AWS, Terraform, Kubernetes, and CI/CD.",
  keywords: [
    "DevOps Engineer", "Cloud Engineer", "AWS", "Terraform",
    "Kubernetes", "CI/CD", "GitHub Actions", "Docker",
    "Abdelrahman Shoeb", "Abdu Shoeb", "Portfolio",
  ],
  authors: [{ name: "Abdelrahman Shoeb" }],
  creator: "Abdelrahman Shoeb",
  openGraph: {
    title: "Abdelrahman Shoeb — DevOps & Cloud Engineer",
    description:
      "DevOps & Cloud Engineer building AWS infrastructure, automating with Terraform & GitHub Actions, and shipping software end-to-end.",
    type: "website",
    locale: "en_US",
    siteName: "Abdu Shoeb · Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Shoeb — DevOps & Cloud Engineer",
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
    name: "Abdelrahman Shoeb",
    alternateName: "Abdu Shoeb",
    jobTitle: "DevOps & Cloud Engineer",
    email: "abdelrahmanshoeb4@gmail.com",
    url: "https://abdushoeb.dev",
    sameAs: [
      "https://github.com/ashoebb",
      "https://www.linkedin.com/in/abdelrahman-shoeb-ba4230218/",
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
