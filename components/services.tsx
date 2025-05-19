
"use client";

import React, { useState, useRef, ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import {
  TabletSmartphone,
  Globe,
  LayoutPanelLeft,
  FolderCode,
  Shield,
  Cpu,
  X,
  MessageSquare,
  Brain,
  FileText,
  Palette,
  Code,
  TestTube,
  Upload,
  BarChart,
  GitBranch,
  Wrench,
  ArrowUp,
  Map,
  Layout,
  PenTool,
  Layers,
  ShieldAlert,
  Server,
  Bot,
} from "lucide-react";

type Service = {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
  modules: { icon: ReactNode; text: string }[];
};

const services: Service[] = [
  {
    id: 1,
    icon: <TabletSmartphone className="h-8 w-8 sm:h-10 sm:w-10 text-green-400" />,
    title: "Mobile App Services",
    description: "Seamless, user-focused mobile apps to drive your business goals.",
    modules: [
      { icon: <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Consultation – Strategic insights for impact." },
      { icon: <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Strategy – Tailored roadmap for success." },
      { icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Wireframing – Intuitive app blueprints." },
      { icon: <Palette className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Designing – Stunning, user-friendly interfaces." },
      { icon: <Code className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Development – High-performance app building." },
      { icon: <TestTube className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Testing – Flawless functionality assured." },
      { icon: <Upload className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Publishing – Smooth app store launches." },
      { icon: <BarChart className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Marketing – Boost visibility and engagement." },
      { icon: <GitBranch className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Porting – Multi-platform expansion." },
      { icon: <Wrench className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Maintenance – Ongoing care and security." },
      { icon: <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Upgradation – Cutting-edge enhancements." },
    ],
  },
  {
    id: 2,
    icon: <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-green-400" />,
    title: "Web Services",
    description: "Dynamic websites and web apps, built to scale with your vision.",
    modules: [
      { icon: <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Consultation – Expert web guidance." },
      { icon: <Map className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Planning – Strategic site architecture." },
      { icon: <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Strategizing – Smart growth plans." },
      { icon: <Layout className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Responsive Design – Multi-device beauty." },
      { icon: <Code className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Development – Robust web solutions." },
      { icon: <TestTube className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Testing – Precision performance." },
      { icon: <Server className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Hosting – Fast, reliable hosting." },
      { icon: <Wrench className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Maintenance – Smooth operations." },
      { icon: <FolderCode className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Web Apps – Smart, scalable tools." },
    ],
  },
  {
    id: 3,
    icon: <LayoutPanelLeft className="h-8 w-8 sm:h-10 sm:w-10 text-green-400" />,
    title: "Designing - UI/UX",
    description: "Visually stunning, user-centric interfaces that captivate.",
    modules: [
      { icon: <Map className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Planning – Groundwork for brilliance." },
      { icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Wireframing – Clear design structure." },
      { icon: <PenTool className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Mockup Design – Eye-catching previews." },
      { icon: <Layers className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Templating – Consistent design flow." },
      { icon: <Palette className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Graphics – Show-stopping visuals." },
      { icon: <Layout className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Responsive Design – Flawless on all devices." },
    ],
  },
  {
    id: 4,
    icon: <FolderCode className="h-8 w-8 sm:h-10 sm:w-10 text-green-400" />,
    title: "Product/Software Development",
    description: "Innovative, robust software solutions for your big ideas.",
    modules: [
      { icon: <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Consultation – Brainstorm your vision." },
      { icon: <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Ideation – Concepts that innovate." },
      { icon: <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "SaaS – Scalable subscription solutions." },
      { icon: <PenTool className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Prototyping – Early-stage brilliance." },
      { icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "MVP – Launch-ready, fast." },
      { icon: <Code className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Development – Design and build." },
      { icon: <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Enhancement – Custom upgrades." },
      { icon: <TestTube className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Testing – Rock-solid reliability." },
      { icon: <Wrench className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Maintenance – Long-term support." },
    ],
  },
  {
    id: 5,
    icon: <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-green-400" />,
    title: "Cybersecurity",
    description: "Protect your business with cutting-edge security solutions.",
    modules: [
      { icon: <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Consultation – Assess and plan." },
      { icon: <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Ideation – Smart security strategies." },
      { icon: <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "SaaS – Scalable security tools." },
      { icon: <PenTool className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Prototyping – Test defenses early." },
      { icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "MVP – Core protection, fast." },
      { icon: <Code className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Development – Build secure systems." },
      { icon: <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Enhancement – Evolving protection." },
      { icon: <TestTube className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Testing – No vulnerabilities." },
      { icon: <ShieldAlert className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Maintenance – Constant vigilance." },
    ],
  },
  {
    id: 6,
    icon: <Cpu className="h-8 w-8 sm:h-10 sm:w-10 text-green-400" />,
    title: "AI & Machine Learning",
    description: "Intelligent solutions to automate and predict with precision.",
    modules: [
      { icon: <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Consultation – Unlock AI potential." },
      { icon: <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Ideation – Brilliant AI concepts." },
      { icon: <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "SaaS – Scalable AI tools." },
      { icon: <PenTool className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Prototyping – Early AI insights." },
      { icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "MVP – Smart solutions, fast." },
      { icon: <Code className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Development – Build intelligent systems." },
      { icon: <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Enhancement – Smarter upgrades." },
      { icon: <TestTube className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Testing – Accurate predictions." },
      { icon: <Wrench className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, text: "Maintenance – Keep AI sharp." },
    ],
  },
];

// Custom hook to detect touch devices
const useIsTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const checkTouch = () => setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    checkTouch();
  }, []);
  return isTouch;
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const constraintsRef = useRef(null);
  const isTouchDevice = useIsTouchDevice();

  return (
    <>
      {/* SEO Meta Tags (Removed viewport meta tag) */}
      <Head>
        <title>Services - TT TechGicus | Web, Mobile, AI, Cybersecurity Solutions</title>
        <meta
          name="description"
          content="Explore TT TechGicus' comprehensive services including mobile app development, web services, UI/UX design, software development, cybersecurity, and AI & machine learning solutions."
        />
        <meta
          name="keywords"
          content="TT TechGicus services, mobile app development, web development, UI/UX design, software development, cybersecurity, AI, machine learning"
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Services - TT TechGicus | Web, Mobile, AI, Cybersecurity Solutions" />
        <meta
          property="og:description"
          content="Explore TT TechGicus' comprehensive services including mobile app development, web services, UI/UX design, software development, cybersecurity, and AI & machine learning solutions."
        />
        <meta property="og:image" content="/services-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourwebsite.com/services" />
      </Head>

      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Our <span className="text-green-400">Services</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-green-400 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-300 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base">
              Techgicus provides a comprehensive suite of intuitive and reliable web and mobile application development solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
            }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 80 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                layoutId={`service-${service.id}`}
                onClick={() => setSelectedService(service)}
                className="bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-gray-800 hover:border-green-500/50 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-3 sm:mb-4 flex justify-center items-center">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl text-center font-bold mb-2 sm:mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-center text-sm sm:text-base">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Modal Popup */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                layoutId={`service-${selectedService.id}`}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden max-w-lg sm:max-w-2xl lg:max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-green-500/30"
                onClick={(e) => e.stopPropagation()}
                drag={!isTouchDevice} // Disable drag on touch devices
                dragConstraints={constraintsRef}
              >
                <div className="p-4 sm:p-6 lg:p-8 relative">
                  {/* Close Button */}
                  <button
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gray-700/50 rounded-full p-1 sm:p-2 hover:bg-gray-600 transition-all"
                    onClick={() => setSelectedService(null)}
                  >
                    <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </button>

                  {/* Header Section */}
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="flex justify-center mb-3 sm:mb-4">{selectedService.icon}</div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400">{selectedService.title}</h3>
                    <p className="text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">{selectedService.description}</p>
                  </div>

                  {/* Modules Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {selectedService.modules.map((module, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start p-3 sm:p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="mr-3 sm:mr-4">{module.icon}</div>
                        <p className="text-gray-300 text-xs sm:text-sm">{module.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Services;