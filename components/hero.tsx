
// "use client";

// import { useRef, useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Head from "next/head";
// import { ArrowRight } from "lucide-react";

// // Custom hook to detect touch devices
// const useIsTouchDevice = () => {
//   const [isTouch, setIsTouch] = useState(false);
//   useEffect(() => {
//     const checkTouch = () => setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
//     checkTouch();
//   }, []);
//   return isTouch;
// };

// const Hero = () => {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const isTouchDevice = useIsTouchDevice();
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"],
//   });

//   // Scroll-based animation for parallax effect on mobile
//   const parallax1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
//   const parallax2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
//   const parallax3 = useTransform(scrollYProgress, [0, 1], [0, 25]);

//   useEffect(() => {
//     if (isTouchDevice) return; // Skip mousemove effect on touch devices

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!heroRef.current) return;

//       const { clientX, clientY } = e;
//       const { left, top, width, height } = heroRef.current.getBoundingClientRect();

//       const x = (clientX - left) / width - 0.5;
//       const y = (clientY - top) / height - 0.5;

//       const elements = heroRef.current.querySelectorAll(".parallax");
//       elements.forEach((el) => {
//         const speed = Number.parseFloat(el.getAttribute("data-speed") || "0");
//         const xOffset = x * speed * 100;
//         const yOffset = y * speed * 100;

//         el.setAttribute("style", `transform: translate(${xOffset}px, ${yOffset}px)`);
//       });
//     };

//     document.addEventListener("mousemove", handleMouseMove);
//     return () => document.removeEventListener("mousemove", handleMouseMove);
//   }, [isTouchDevice]);

//   return (
//     <>
//       {/* SEO Meta Tags */}
//       <Head>
//         <title>TT TechGicus - Technology with Groovy Innovation</title>
//         <meta
//           name="description"
//           content="Transform your business with TT TechGicus. We offer cutting-edge technology and strategic innovation for customers."
//         />
//         <meta
//           name="keywords"
//           content="TT TechGicus, technology, innovation, web development, mobile app development, business transformation"
//         />
//         <meta name="robots" content="index, follow" />
//         <meta charSet="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta property="og:title" content="TT TechGicus - Technology with Groovy Innovation" />
//         <meta
//           property="og:description"
//           content="Transform your business with TT TechGicus. We offer cutting-edge technology and strategic innovation for customers."
//         />
//         <meta property="og:image" content="/hero-image.jpg" />
//         <meta property="og:url" content="https://techgicus.com" />
//         <meta property="og:type" content="website" />
//       </Head>

//       <section
//         ref={heroRef}
//         className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-20"
//         style={{ background: "linear-gradient(to bottom right, #000000, #0a1f0a)" }}
//       >
//         <div className="absolute inset-0 z-0">
//           <div className="absolute top-0 left-0 w-full h-full">
//             <motion.div
//               className="absolute top-10 sm:top-16 lg:top-20 left-10 sm:left-16 lg:left-20 w-48 sm:w-64 lg:w-64 h-48 sm:h-64 lg:h-64 rounded-full bg-green-500/10 blur-3xl parallax"
//               data-speed="-0.2"
//               style={isTouchDevice ? { y: parallax1 } : {}}
//             ></motion.div>
//             <motion.div
//               className="absolute bottom-20 sm:bottom-32 lg:bottom-40 right-10 sm:right-16 lg:right-20 w-56 sm:w-72 lg:w-80 h-56 sm:h-72 lg:h-80 rounded-full bg-green-400/10 blur-3xl parallax"
//               data-speed="0.3"
//               style={isTouchDevice ? { y: parallax2 } : {}}
//             ></motion.div>
//             <motion.div
//               className="absolute top-1/2 left-1/3 w-32 sm:w-36 lg:w-40 h-32 sm:h-36 lg:h-40 rounded-full bg-green-300/20 blur-2xl parallax"
//               data-speed="0.1"
//               style={isTouchDevice ? { y: parallax3 } : {}}
//             ></motion.div>
//           </div>
//         </div>

//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
//           <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               viewport={{ once: true }}
//             >
//               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
//                 <span className="text-green-400">TECHNOLOGY</span> WITH GROOVY INNOVATION FOR{" "}
//                 <span className="text-green-400">CUSTOMERS</span>
//               </h1>
//             </motion.div>

//             <motion.p
//               className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               We transform businesses through cutting-edge technology and strategic innovation.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               <button
//                 className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105"
//                 onClick={() => {
//                   const about = document.getElementById("about");
//                   if (about) {
//                     about.scrollIntoView({ behavior: "smooth" });
//                   }
//                 }}
//               >
//                 Get Started
//                 <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
//               </button>
//             </motion.div>
//           </div>
//         </div>

//         <motion.div
//           className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 1,
//             delay: 1,
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "reverse",
//           }}
//         >
//           <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white rounded-full flex justify-center">
//             <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2 animate-bounce"></div>
//           </div>
//         </motion.div>
//       </section>
//     </>
//   );
// };

// export default Hero;


"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Head from "next/head";
import { ArrowRight } from "lucide-react";

// Custom hook to detect touch devices
const useIsTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const checkTouch = () => setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    checkTouch();
  }, []);
  return isTouch;
};

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isTouchDevice = useIsTouchDevice();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  // Scroll-based animation for parallax effect on mobile
  const parallax1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const parallax2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const parallax3 = useTransform(scrollYProgress, [0, 1], [0, 25]);

  useEffect(() => {
    if (isTouchDevice) return; // Skip mousemove effect on touch devices

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      const elements = heroRef.current.querySelectorAll(".parallax");
      elements.forEach((el) => {
        const speed = Number.parseFloat(el.getAttribute("data-speed") || "0");
        // Limit the xOffset to prevent overflow
        const xOffset = Math.min(Math.max(x * speed * 50, -50), 50); // Reduced range to prevent overflow
        const yOffset = Math.min(Math.max(y * speed * 50, -50), 50);

        el.setAttribute("style", `transform: translate(${xOffset}px, ${yOffset}px)`);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isTouchDevice]);

  return (
    <>
      {/* SEO Meta Tags (Removed viewport meta tag) */}
      <Head>
        <title>TT TechGicus - Technology with Groovy Innovation</title>
        <meta
          name="description"
          content="Transform your business with TT TechGicus. We offer cutting-edge technology and strategic innovation for customers."
        />
        <meta
          name="keywords"
          content="TT TechGicus, technology, innovation, web development, mobile app development, business transformation"
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="TT TechGicus - Technology with Groovy Innovation" />
        <meta
          property="og:description"
          content="Transform your business with TT TechGicus. We offer cutting-edge technology and strategic innovation for customers."
        />
        <meta property="og:image" content="/hero-image.jpg" />
        <meta property="og:url" content="https://techgicus.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://techgicus.com" />
      </Head>

      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-x-hidden py-12 sm:py-16 lg:py-20"
        style={{ background: "linear-gradient(to bottom right, #000000, #0a1f0a)" }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div
              className="absolute top-10 sm:top-16 lg:top-20 left-4 sm:left-16 lg:left-20 w-40 sm:w-64 lg:w-64 h-40 sm:h-64 lg:h-64 rounded-full bg-green-500/10 blur-3xl parallax"
              data-speed="-0.2"
              style={isTouchDevice ? { y: parallax1 } : {}}
            ></motion.div>
            <motion.div
              className="absolute bottom-20 sm:bottom-32 lg:bottom-40 right-4 sm:right-16 lg:right-20 w-48 sm:w-72 lg:w-80 h-48 sm:h-72 lg:h-80 rounded-full bg-green-400/10 blur-3xl parallax"
              data-speed="0.3"
              style={isTouchDevice ? { y: parallax2 } : {}}
            ></motion.div>
            <motion.div
              className="absolute top-1/2 left-1/4 sm:left-1/3 w-28 sm:w-36 lg:w-40 h-28 sm:h-36 lg:h-40 rounded-full bg-green-300/20 blur-2xl parallax"
              data-speed="0.1"
              style={isTouchDevice ? { y: parallax3 } : {}}
            ></motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative max-w-full">
          <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-green-400">TECHNOLOGY</span> WITH GROOVY INNOVATION FOR{" "}
                <span className="text-green-400">CUSTOMERS</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We transform businesses through cutting-edge technology and strategic innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button
                className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  const about = document.getElementById("about");
                  if (about) {
                    about.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                aria-label="Get Started with TT TechGicus"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;