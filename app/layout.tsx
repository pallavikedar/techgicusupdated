import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/custom-cursor";
 
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Techgicus Software Solutions Pvt. Ltd.",
  description: "Innovative IT Solutions for modern businesses. Specializing in Web Development, Mobile App Development, Digital Marketing, and Logo Design.",
  icons: {
    icon: "/LOGO.svg", // Path inside the public folder
  },
  generator: "Company based in India specialized in providing IT Services & Solutions.",
  keywords: "Techgicus, Software Solutions, IT Services, Web Development, Mobile Apps, Digital Marketing, Logo Design,it company near me, best it company",
  author: "Techgicus Software Solutions Pvt. Ltd.",
  robots: "index, follow",
  charset: "UTF-8",
  ogTitle: "Techgicus Software Solutions Pvt. Ltd.",
  ogDescription: "Empowering businesses with innovative IT solutions. Explore our services today!",
  ogImage: "/Logo.jpg",
  ogUrl: "https://techgicus.com",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// import "./globals.css";
