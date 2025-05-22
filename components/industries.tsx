"use client";

// import { motion } from "framer-motion";

import { motion } from "framer-motion";

import {
  ShoppingCart,
  Home,
  HeartPulse,
  Plane,
  GraduationCap,
  Car,
  Utensils,
  Film,
  Bus,
  Banknote,
  Dumbbell,
} from "lucide-react";

const industries = [
  { icon: <ShoppingCart />, title: "Ecommerce" },
  { icon: <Home />, title: "Real Estate" },
  { icon: <HeartPulse />, title: "HealthCare" },
  { icon: <Plane />, title: "Travel" },
  { icon: <GraduationCap />, title: "Education" },
  { icon: <Car />, title: "Automotive" },
  { icon: <Utensils />, title: "Food & Beverages" },
  { icon: <Film />, title: "Media & Entertainment" },
  { icon: <Bus />, title: "Transport & Logistics" },
  { icon: <Banknote />, title: "Banking & Finance" },
  { icon: <Dumbbell />, title: "Fitness & Sports" },
];

const Industries = () => {


  return (
    <section className="py-20 bg-black text-center">
      <div className="container mx-auto px-4">
        <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#3CD070]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Industries <span className="text-white">We Serve</span>
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#3CD070]">
        Industries <span className="text-white">We Serve</span>
           
        </h2> */}
        
        
        </motion.h2>

        <div className="w-20 h-1 bg-[#50FA7B] mx-auto mb-8"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-gradient-to-b from-gray-900 to-black p-6 rounded-lg shadow-md hover:bg-gradient-to-b hover:from-green-500/20 hover:to-black transition-all cursor-pointer backdrop-blur-sm border border-gray-800 hover:border-green-500/50 transition-all duration-300 group w-40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
            >
              <div className="text-green-500 text-4xl mb-4">
                {industry.icon}
              </div>
              <h3 className="text-lg font-medium text-white">
                {industry.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;