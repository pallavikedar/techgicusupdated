

"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";
import Abhishek_CEO from "../public/Abhishek_CEO.jpg";

const team = [
  {
    name: "Abhishek Ghushe",
    position: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "My journey is focused on revolutionizing lives, one individual at a time, with the power of innovation and thoughtful solutions, driving meaningful change and lasting impact.",
  },
];

const stats = [
  { value: 20, label: "Solution Delivered" },
  { value: 15, label: "Satisfied Clients" },
  { value: 10, label: "IT Geeks" },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartCount(true);
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="team"
      className="py-12 sm:py-16 lg:py-20 bg-[#0B0F19] text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Our <span className="text-[#50FA7B]">Team</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#50FA7B] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-400 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base">
            Meet the experts behind our innovative solutions.
          </p>
        </motion.div>

        {/* Image & Details Section */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
        >
          {/* Image Section with Smooth Scroll Animation */}
          <motion.div style={{ y, opacity }} className="w-full relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden border-none"
              style={{
                position: "relative",
              }}
            >
              {/* Top-Right Corner Border (Vertical and Horizontal) */}
              <div
                className="absolute top-0 right-0 w-1/2 h-[150px] sm:h-[200px] lg:h-[250px] border-t-4 border-r-4 border-green-500 rounded-tr-lg z-10 transition-all duration-300"
                style={{ borderLeft: "none", borderBottom: "none" }}
              ></div>
              <div
                className="absolute top-0 right-0 w-1/2 h-1 border-t-4 border-green-500 rounded-tr-lg z-20 transition-all duration-300 group-hover:w-3/4"
                style={{ borderRight: "none", borderBottom: "none" }}
              ></div>

              {/* Bottom-Left Corner Border (Vertical and Horizontal) */}
              <div
                className="absolute bottom-0 left-0 w-1/2 h-[150px] sm:h-[200px] lg:h-[250px] border-b-4 border-l-4 border-green-500 rounded-bl-lg z-10 transition-all duration-300"
                style={{ borderTop: "none", borderRight: "none" }}
              ></div>
              <div
                className="absolute bottom-0 left-0 w-1/2 h-1 border-b-4 border-green-500 rounded-bl-lg z-20 transition-all duration-300 group-hover:w-3/4"
                style={{ borderLeft: "none", borderTop: "none" }}
              ></div>

              <Image
                src={Abhishek_CEO}
                alt="Company Founder and CEO"
                fill
                className="object-cover object-[50%_25%] rounded-lg"
              />
              {/* Subtle Green Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent z-10 rounded-lg"></div>
            </motion.div>

            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-48 sm:w-64 h-48 sm:h-64 bg-green-500/10 rounded-full blur-2xl"></div>
          </motion.div>

          {/* Details & Stats Section */}
          <motion.div className="space-y-6 sm:space-y-8 group">
            {/* Name, Position & Bio */}
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold">{team[0].name}</h3>
              <p className="text-[#50FA7B] text-base sm:text-lg mb-2 sm:mb-4">
                {team[0].position}
              </p>
              <p className="text-gray-400 text-sm sm:text-base text-justify">
                {team[0].bio}
              </p>
            </div>

            {/* Stats Section with Staggered Animation */}
            
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.3, duration: 0.8 },
                },
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-4 sm:p-6 bg-gray-800 rounded-lg text-center"
                >
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">
                    <CountUp
                      start={startCount ? 0 : undefined}
                      end={stat.value}
                      duration={3}
                      delay={0.5}
                      suffix="+"
                    />
                  </h3>
                  <p className="text-base sm:text-lg text-green-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
