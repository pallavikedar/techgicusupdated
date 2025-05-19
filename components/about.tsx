
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { ImProfile } from "react-icons/im";
import { BsTransparency } from "react-icons/bs";
import { IoIosRocket } from "react-icons/io";
import about from "../public/about.jpg";

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>About TT TechGicus - Our Vision and Mission</title>
        <meta
          name="description"
          content="Learn about TT TechGicus, a leading web and mobile app development company. Discover our vision, mission, and innovative tech solutions."
        />
        <meta
          name="keywords"
          content="about TT TechGicus, web development, mobile app development, tech solutions, innovation, vision, mission"
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <section
        id="about"
        ref={sectionRef}
        className="py-12 sm:py-16 lg:py-20 bg-black relative overflow-hidden"
      >
        {/* Background Blurs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-green-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Image Section (Left Side) */}
            <motion.div
              style={{ y, opacity }}
              className="w-full lg:w-1/2 relative"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden border-none"
                style={{
                  position: "relative",
                }}
              >
                {/* Top-Left Corner Border (Vertical and Horizontal) */}
                <div
                  className="absolute top-0 left-0 w-1/2 h-[150px] sm:h-[200px] lg:h-[250px] border-t-4 border-l-4 border-green-500 rounded-tl-lg z-10 transition-all duration-300"
                  style={{ borderRight: "none", borderBottom: "none" }}
                ></div>
                <div
                  className="absolute top-0 left-0 w-1/2 h-1 border-t-4 border-green-500 rounded-tl-lg z-20 transition-all duration-300 group-hover:w-3/4"
                  style={{ borderLeft: "none", borderBottom: "none" }}
                ></div>

                {/* Bottom-Right Corner Border (Vertical and Horizontal) */}
                <div
                  className="absolute bottom-0 right-0 w-1/2 h-[150px] sm:h-[200px] lg:h-[250px] border-b-4 border-r-4 border-green-500 rounded-br-lg z-10 transition-all duration-300"
                  style={{ borderTop: "none", borderLeft: "none" }}
                ></div>
                <div
                  className="absolute bottom-0 right-0 w-1/2 h-1 border-b-4 border-green-500 rounded-br-lg z-20 transition-all duration-300 group-hover:w-3/4"
                  style={{ borderRight: "none", borderTop: "none" }}
                ></div>

                <Image
                  src={about}
                  alt="About Techgicus"
                  fill
                  className="object-cover brightness-75 rounded-lg"
                />
                {/* Subtle Green Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent z-10 rounded-lg"></div>
              </motion.div>

              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-48 sm:w-64 h-48 sm:h-64 bg-green-500/10 rounded-full blur-2xl"></div>
            </motion.div>

            {/* Content + Number Counter Section (Right Side) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.3, delayChildren: 0.5 }}
              className="w-full lg:w-1/2 group"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">

                  About <span className="text-[#3CD070]">Techgicus</span>
                </h2> */}

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  About <span className="text-[#3CD070]">Techgicus</span>
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-green-400 mb-6 sm:mb-8"></div>

                <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg text-justify">
                  Techgicus is a reliable Web and Mobile App Development Company
                  dedicated to transforming clients into thriving businesses. We
                  deliver cutting-edge IT solutions, blending them with
                  research-driven insights to strengthen the connection between
                  customers and brands.
                </p>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                  Vision
                </h2>
                <p className="text-gray-300 mb-4 sm:mb-8 text-base sm:text-lg text-justify">
                  Resolving client challenges through innovation.
                </p>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                  Mission
                </h2>
                <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg text-justify">
                  Creating world-class software solutions while aspiring to
                  build the largest and most talented workforce globally.
                </p>

                {/* Number Counter Section */}
                <motion.div
                  className="flex flex-col sm:flex-row justify-center sm:justify-around gap-4 sm:gap-6 mt-8 sm:mt-10"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ staggerChildren: 0.4, duration: 1.2 }}
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    className="flex flex-col items-center"
                  >
                    <IoIosRocket className="text-[2.5rem] sm:text-[3rem] text-[#3CD070]" />
                    <h3 className="text-white text-lg sm:text-xl font-bold mt-2">
                      Innovative
                    </h3>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    className="flex flex-col items-center"
                  >
                    <BsTransparency className="text-[2.5rem] sm:text-[3rem] text-[#3CD070]" />
                    <h3 className="text-white text-lg sm:text-xl font-bold mt-2">
                      Transparency
                    </h3>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    className="flex flex-col items-center"
                  >
                    <ImProfile className="text-[2.5rem] sm:text-[3rem] text-[#3CD070]" />
                    <h3 className="text-white text-lg sm:text-xl font-bold mt-2">
                      Accountable
                    </h3>
                  </motion.div>
                </motion.div>

                

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                  className="bg-transparent hover:bg-green-500 text-green-400 hover:text-black border border-green-400 hover:border-transparent font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-300 mt-6 sm:mt-8 mx-auto block"
                  onClick={() => {
                    const team = document.getElementById("team");
                    if (team) {
                      team.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
