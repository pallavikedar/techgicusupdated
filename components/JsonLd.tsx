"use client";
import Script from "next/script";

export default function JsonLd() {
  return (
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Techgicus Software Solutions Pvt. Ltd.",
          url: "https://techgicus.com",
          logo: "https://techgicus.com/Logo.jpg",
          sameAs: [
            "https://www.facebook.com/people/Techgicus-software-solutions-pvt-ltd/100086395346471/",
            "https://www.instagram.com/techgicus/",
            "https://www.linkedin.com/company/techgicus-software-solutions-pvt-ltd/posts/?feedView=all",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-9284614144",
            contactType: "Customer Service",
          },
        }),
      }}
    />
  );
}
