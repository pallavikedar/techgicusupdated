
"use client";

import { motion } from "framer-motion";
import {
  Code,
  Blocks,
  Brain,
  Network,
  Box,
  GitBranch,
  Server,
  Database,
  HardDrive,
  CircuitBoard,
} from "lucide-react";

import { CiMobile2 } from "react-icons/ci";
import { AiOutlineApple } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { BiLogoFlutter } from "react-icons/bi";
import { FaAngular } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { FaEmber } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaMeteor } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa6";
import { TbBrandBackbone } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { GrOracle } from "react-icons/gr";
import { SiPostgresql } from "react-icons/si";
import { SiElasticsearch } from "react-icons/si";
import { DiRedis } from "react-icons/di";


const technologies = [
  {
    category: "Mobile Application",
    items: [
      { icon: CiMobile2, title: "Android" },
      { icon: AiOutlineApple, title: "iOS" },
      { icon: FaReact, title: "React Native" },
      { icon: BiLogoFlutter, title: "Flutter" },
    ],
  },
  {
    category: "Cognitive",
    items: [
      { icon: Blocks, title: "Blockchain" },
      { icon: Brain, title: "AI" },
    ],
  },
  {
    category: "Full Stack Javascript Tech",
    items: [
      { icon: FaAngular, title: "Angular" },
      { icon: FaReact, title: "React" },
      { icon: FaNode, title: "NodeJS" },
      { icon: FaEmber, title: "EmberJS" },
      { icon: SiExpress, title: "Express" },
      { icon: FaMeteor, title: "MeteorJS" },
      { icon: FaVuejs, title: "VueJS" },
      { icon: TbBrandBackbone, title: "BackBoneJS" },
    ],
  },
  {
    category: "Database",
    items: [
      { icon: SiMysql, title: "MySQL" },
      { icon: BiLogoMongodb, title: "MongoDB" },
      { icon: GrOracle, title: "Oracle" },
      { icon: SiPostgresql, title: "PostgreSQL" },
      { icon: SiElasticsearch, title: "Elasticsearch" },
      { icon: DiRedis, title: "Redis" },
    ],
  },
];

export default function Technologies() {
  return (
    <section className="py-20 bg-black text-center relative overflow-hidden">
      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(34,_197,_94,_0.1),_transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-green-500 mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Technologies <span className="text-white">We Expertise</span>
        </motion.h2>
        <div className="w-20 h-1 bg-green-500 mx-auto mb-8 rounded-full"></div>

        {/* Categories */}
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-green-500 mb-8 uppercase tracking-wide">
              {tech.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
              {tech.items.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    className="relative w-[140px] h-[140px] perspective-1000" // Set perspective for 3D effect
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    {/* Card Container with Flip Animation */}
                    <motion.div
                      className="relative w-full h-full transition-all duration-500 preserve-3d"
                      whileHover={{ rotateY: 180 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Front Face */}
                      <div
                        className="absolute w-full h-full flex flex-col items-center justify-center bg-gray-800 rounded-xl p-4 border border-gray-700 group"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <motion.div
                          className="mb-4 flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent
                            className="h-10 w-10 text-green-500 group-hover:text-green-400 transition-colors duration-300"
                            strokeWidth={1.5}
                          />
                        </motion.div>
                        <h4 className="text-sm font-medium text-white text-center group-hover:text-green-400 transition-colors duration-300">
                          {item.title}
                        </h4>
                      </div>

                      {/* Back Face */}
                      <div
                        className="absolute w-full h-full flex flex-col items-center justify-center bg-gradient-to-r from-green-500 to-green-300 rounded-xl p-4 border border-green-700"
                        style={{
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                        }}
                      >
                        <motion.div
                          className="mb-4 flex items-center justify-center"
                          initial={{ scale: 1 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent
                            className="h-10 w-10 text-white"
                            strokeWidth={1.5}
                          />
                        </motion.div>
                        <h4 className="text-sm font-medium text-white text-center">
                          {item.title}
                        </h4>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}