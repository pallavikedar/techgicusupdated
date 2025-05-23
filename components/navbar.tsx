// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import Logo from "../public/Logo.jpg";
// import Image from "next/image";

// const navItems = [
//   { name: "Home", href: "#" },
//   { name: "Services", href: "#services" },
//   { name: "About", href: "#about" },
//   // { name: "Portfolio", href: "#portfolio" },
//   { name: "Team", href: "#team" },
//   { name: "Contact", href: "#contact" },
// ];

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//    <motion.header
//   className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
//     isScrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
//   }`}
//   initial={{ y: -100 }}
//   animate={{ y: 0 }}
//   transition={{ type: "spring", stiffness: 100, damping: 20 }}
// >
//   <div className="container mx-auto  flex justify-between items-center">
//     <Link
//       href="/"
//       className="text-2xl font-bold text-green-400 rounded-md overflow-hidden inline-block min-w-[40px] min-h-[40px]"
//     >
//       <Image
//         src={Logo}
//         alt="Techgicus Logo"
//         style={{ borderRadius: "0.375rem" }}
//         priority
//         className="w-30 h-30  xs:w-12 xs:h-12 object-contain"
//       />
//     </Link>

//     {/* Desktop Nav */}
//     <nav className="hidden md:flex space-x-4 lg:space-x-8">
//       {navItems.map((item) => (
//         <Link
//           key={item.name}
//           href={item.href}
//           className="text-white hover:text-green-400 transition-colors duration-300 text-sm xs:text-sm uppercase tracking-wider"
//         >
//           {item.name}
//         </Link>
//       ))}
//     </nav>

//     {/* Mobile Menu Button */}
//     <button
//       className="md:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
//       onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//       aria-label="Toggle menu"
//     >
//       {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//     </button>
//   </div>

//   {/* Mobile Nav */}
//   <AnimatePresence>
//     {mobileMenuOpen && (
//       <motion.div
//         className="fixed inset-0 bg-black/95 z-50 pt-20"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -20 }}
//         transition={{ duration: 0.2 }}
//       >
//         <div className="container mx-auto px-4 flex flex-col space-y-6 items-center">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className="text-white hover:text-green-400 transition-colors duration-300 text-lg xs:text-xl"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       </motion.div>
//     )}
//   </AnimatePresence>
// </motion.header>
//   );
// }

// export default Navbar;

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../public/Logo.jpg";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto  sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="inline-block">
  <Image
    src={Logo}
    alt="Techgicus Logo"
    // Responsive width: 40px (w-10) on mobile, 100px (w-25) on md and up
    className="w-40 h-auto rounded-xl object-contain md:w-52 transition-all duration-300"
    priority
  />
</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 lg:space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-green-400 text-sm font-medium tracking-wide uppercase transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center pt-24 space-y-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-xl font-semibold hover:text-green-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
