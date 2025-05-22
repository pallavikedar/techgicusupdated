
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import idea from "../public/img/idea.png";
import requirement from "../public/img/requirement.png";
import tech from "../public/img/tech.png";
import businessproposal from "../public/img/businessproposal.png";
import agreement from "../public/img/agreement.png";
import wireframe from "../public/img/wireframe.png";
import webdesign from "../public/img/webdesign.png";
import planning from "../public/img/planning.png";
import development from "../public/img/development.png";
import testing from "../public/img/testing.png";
import deployment from "../public/img/deployment.png";
import maintenance from "../public/img/maintenance.png";
import { AnimatePresence } from "framer-motion";

// Define the steps array
const steps = [
  { icon: idea, title: "Ideation", description: "1. Brainstorming creative ideas." },
  { icon: requirement, title: "Requirement Analysis", description: "2. Gathering project needs." },
  { icon: tech, title: "Tech Stack Selection", description: "3. Choosing suitable technologies." },
  { icon: businessproposal, title: "Business Proposal", description: "4. Presenting project strategies." },
  { icon: agreement, title: "Negotiation & Agreement", description: "5. Finalizing terms & conditions." },
  { icon: wireframe, title: "Wire Framing", description: "6. Outlining the project design." },
  { icon: webdesign, title: "Design UI/UX", description: "7. Crafting intuitive interfaces." },
  { icon: planning, title: "Planning & Sprinting", description: "8. Strategizing project execution." },
  { icon: development, title: "Development", description: "9. Writing and testing code." },
  { icon: testing, title: "Testing", description: "10. Ensuring product quality." },
  { icon: deployment, title: "Deployment & Release", description: "11. Launching the project." },
  { icon: maintenance, title: "Maintenance & Support", description: "12. Providing continuous updates." },
];

// StepCard Component to manage individual hover state
function StepCard({ step, index }: { step: { icon: any; title: string; description: string }; index: number }) {
  const [isHovering, setIsHovering] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Track window width for responsive sizing
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine dimensions based on window width
  const hoverWidth = windowWidth < 640 ? "9rem" : "12rem"; // w-36 on mobile, w-48 on larger screens
  const hoverHeight = windowWidth < 640 ? "4.5rem" : "6rem"; // h-18 on mobile, h-24 on larger screens

  return (
      <motion.div
      className="flex flex-col items-center text-center relative cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeInOut" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Tooltip Description Above Icon */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="absolute top-3 left-1 -translate-x-1/2 bg-green-600 text-white text-xs sm:text-sm font-medium px-3 py-2 rounded-lg shadow-lg z-20 w-44 sm:w-56 pointer-events-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {step.description}
          </motion.div>
        )}
      </AnimatePresence>

        {/* Conditional Rendering: Show Icon or Description */}
          {/* Icon Container */}
      <motion.div
        className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-20 lg:h-20 bg-gray-800 border-4 border-green-500 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300"
        animate={isHovering ? { scale: 1.08, borderColor: "#22c55e" } : { scale: 1, borderColor: "#22c55e" }}
      >
        <Image
          src={step.icon}
          alt={step.title}
          width={40}
          height={40}
          className="filter grayscale invert transition-all duration-300"
        />
      </motion.div>

      {/* Step Title */}
      <p className="mt-4 text-xs sm:text-sm font-medium text-white">{step.title}</p>
    </motion.div>
      
  );
}

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-10 sm:py-20 bg-black text-center relative overflow-hidden">
      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(34,_197,_94,_0.1),_transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
          How We <span className="text-green-500">Work</span>
        </h2>
        <div className="w-20 h-1 bg-green-500 mx-auto mb-8 sm:mb-12"></div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Grid for Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}