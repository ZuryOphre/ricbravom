'use client';

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-1 left-1/2 transform -translate-x-1/2 w-full md:w-3/4 bg-gray-100/70 backdrop-blur-lg text-black shadow-lg rounded-none md:rounded-2xl z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="relative w-32 h-12 flex-shrink-0 overflow-hidden">
            <Link href="/">
              <Image
                src="/logo.png" 
                alt="Logo"
                height={30}
                width={150}
                priority
                className="-mt-10"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link legacyBehavior href="/">
              <a className="hover:text-gray-300 transition-colors duration-300 text-lg">Inicio</a>
            </Link>
            <Link legacyBehavior href="/gallery">
              <a className="hover:text-gray-300 transition-colors duration-300 text-lg">Galeria</a>
            </Link>
            <Link legacyBehavior href="/products">
              <a className="hover:text-gray-300 transition-colors duration-300 text-lg">Productos</a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="hover:text-gray-300 transition-colors duration-300 text-lg">Contacto</a>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-8 h-8" />
              ) : (
                <Bars3Icon className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.nav
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 80 }}
          className="fixed top-0 right-0 w-2/5 h-full bg-white shadow-2xl z-50 rounded-l-2xl"
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
              <span className="text-xl font-medium text-gray-800">Menu</span>
              <button
                onClick={toggleMobileMenu}
                aria-label="Close menu"
                className="hover:text-gray-500 transition-colors duration-300"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <ul className="flex flex-col space-y-6 p-6 text-lg text-gray-700">
              <li>
                <Link legacyBehavior href="/">
                  <a
                    className="block hover:text-gray-900 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Inicio
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/gallery">
                  <a
                    className="block hover:text-gray-900 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Galeria
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/products">
                  <a
                    className="block hover:text-gray-900 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Productos
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/contact">
                  <a
                    className="block hover:text-gray-900 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contacto
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </motion.nav>
      )}
    </>
  );
};

export default Header;
