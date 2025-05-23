import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/custom-cursor";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Techgicus Software Solutions Pvt. Ltd. | Best IT Company in India",
  description: "Techgicus offers cutting-edge web development, mobile app development, digital marketing, and logo design services. Transform your business with our innovative IT solutions.",
  icons: {
    icon: "/LOGO.svg",
  },
  generator: "Next.js",
  keywords: [
    "Techgicus",
    "IT Solutions India",
    "Web Development Company",
    "Mobile App Development",
    "Digital Marketing",
    "Logo Design",
    "Best IT Company in India",
    "Custom Software Development",
    "Startup IT Services",
    "Techgicus Software",
  ],
  authors: [{ name: "Techgicus Software Solutions Pvt. Ltd.", url: "https://techgicus.com" }],
  robots: "index, follow",
  charset: "UTF-8",
  openGraph: {
    title: "Techgicus Software Solutions Pvt. Ltd.",
    description: "Empowering businesses with innovative IT solutions. Explore our services today!",
    url: "https://techgicus.com",
    siteName: "Techgicus",
    images: [
      {
        url: "/Logo.jpg",
        width: 800,
        height: 600,
        alt: "Techgicus Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techgicus Software Solutions Pvt. Ltd.",
    description: "Web and Mobile App Development, SEO, Branding — Your Digital Partner.",
    site: "@Techgicus",
    creator: "@Techgicus",
    images: ["/Logo.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <JsonLd />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
