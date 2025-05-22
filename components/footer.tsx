"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "../public/Logo.jpg";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Send,
  YoutubeIcon,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="text-2xl font-bold text-green-400 mb-6 inline-block "
            >
              <Image
                src={Logo}
                alt="Techgicus Logo"
                style={{ borderRadius: "0.375rem" }}
                priority
              />
            </Link>
            <p className="text-gray-400 mb-6">
              TECHNOLOGY WITH GROOVY
              <br />
              INNOVATION FOR CUSTOMERS
            </p>
            <div className="flex space-x-4  justify-center md:justify-start">
              <a
                href="https://www.facebook.com/profile.php?id=100086395346471"
                className="bg-gray-800 hover:bg-green-400 text-white hover:text-black p-2 rounded-full transition-colors duration-300"
                target="_blank"
              >
                <Facebook className="h-5 w-5" />
              </a>
              {/* <a
                href="#"
                className="bg-gray-800 hover:bg-green-400 text-white hover:text-black p-2 rounded-full transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a> */}
              <a
                href="https://www.instagram.com/techgicus/"
                className="bg-gray-800 hover:bg-green-400 text-white hover:text-black p-2 rounded-full transition-colors duration-300"
                target="_blank"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/techgicus-software-solutions-pvt-ltd"
                className="bg-gray-800 hover:bg-green-400 text-white hover:text-black p-2 rounded-full transition-colors duration-300"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@techgicus6310"
                className="bg-gray-800 hover:bg-green-400 text-white hover:text-black p-2 rounded-full transition-colors duration-300"
                target="_blank"
              >
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Mobile App Services
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Web Services
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  UI/UX Desinging
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Product/Software Development Services
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  AI & Machine Learning
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates and insights on the latest technology trends.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
                />
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-black font-bold px-4 rounded-r-lg transition-colors duration-300"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div> */}
        </div>

        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-center md:justify-between items-center text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} <a href="/">Techgicus</a>. All
            rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 justify-center">
            <Link
              href="#"
              className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-black p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
