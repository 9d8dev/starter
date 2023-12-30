import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import site from "@/site.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: site.title,
    default: `%s | ${site.name}`,
    absolute: `Home | ${site.name}`,
  },
  description: site.description,
  generator: "Next.js",
  applicationName: site.app_name,
  referrer: "origin-when-cross-origin",
  keywords: site.keywords,
  authors: site.authors,
  metadataBase: new URL(site.url),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: `${site.url}/og.png`, // Must be an absolute URL
        width: 800,
        height: 600,
        alt: site.description,
      },
      {
        url: `${site.url}/og-alt.png`, // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: site.description,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  manifest: `${site.url}/manifest.json`, // Must be an absolute URL
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    // siteId: "1467726470533754880",
    // creator: "@nextjs",
    // creatorId: "1467726470533754880",
    images: [`${site.url}/og.png`], // Must be an absolute URL
  },
  icons: {
    icon: [
      { url: "/icon.png" },
      new URL("/icon.png", "https://example.com"),
      { url: "/icon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: ["/shortcut-icon.png"],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-x3.png", sizes: "180x180", type: "image/png" },
    ],
    // other: [
    //   {
    //     rel: "apple-touch-icon-precomposed",
    //     url: "/apple-touch-icon-precomposed.png",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
