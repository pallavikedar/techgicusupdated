"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image"
import { X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Enterprise Cloud Migration",
    category: "Cloud Infrastructure",
    // image: "/placeholder.svg?height=400&width=600",
    description:
      "Migrated a multinational corporation's legacy systems to a scalable cloud infrastructure, reducing operational costs by 40%.",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Web Development",
    // image: "/placeholder.svg?height=400&width=600",
    description:
      "Built a high-performance e-commerce platform with advanced analytics and personalization features.",
  },
  {
    id: 3,
    title: "Cybersecurity Framework",
    category: "Cybersecurity",
    // image: "/placeholder.svg?height=400&width=600",
    description:
      "Developed a comprehensive security framework for a financial institution, ensuring compliance with industry regulations.",
  },
  {
    id: 4,
    title: "AI-Powered Analytics Dashboard",
    category: "AI & Machine Learning",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Created an intelligent analytics platform that provides predictive insights and automated reporting.",
  },
  // {
  //   id: 5,
  //   title: "Healthcare Management System",
  //   category: "Custom Software",
  //   image: "/placeholder.svg?height=400&width=600",
  //   description: "Designed a secure and efficient patient management system for a network of hospitals.",
  // },
  // {
  //   id: 6,
  //   title: "Supply Chain Optimization",
  //   category: "Data Analytics",
  //   image: "/placeholder.svg?height=400&width=600",
  //   description:
  //     "Implemented data-driven solutions to optimize supply chain operations, resulting in 25% improved efficiency.",
  // },
];

const categories = [
  "All",
  "Cloud Infrastructure",
  "Web Development",
  "Cybersecurity",
  "AI & Machine Learning",
  "Custom Software",
  "Data Analytics",
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[0]
  >(null);
  const constraintsRef = useRef(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-20 bg-white"
      // bg-gradient-to-b from-gray-900 to-black
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-green-400">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses
            achieve their goals through innovative technology solutions.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-green-500 text-black font-bold"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`project-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative h-60 overflow-hidden">
                  {/* <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <p className="text-green-400 text-sm mb-2">
                        {project.category}
                      </p>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-green-400 text-sm mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              ref={constraintsRef}
              layoutId={`project-${selectedProject.id}`}
              className="bg-gray-900 rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              drag
              dragConstraints={constraintsRef}
            >
              <div className="relative h-80">
                {/* <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                /> */}
              </div>
              <div className="p-8">
                <p className="text-green-400 text-sm mb-2">
                  {selectedProject.category}
                </p>
                <h3 className="text-2xl font-bold mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {selectedProject.description}
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-full transition-all duration-300">
                  View Case Study
                </button>
              </div>
              <button
                className="absolute top-4 right-4 bg-black/50 rounded-full p-2"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Portfolio;
