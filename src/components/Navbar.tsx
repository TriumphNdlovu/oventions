'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaMoon, FaSun } from "react-icons/fa6";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    isDarkMode
      ? htmlElement.classList.add("dark")
      : htmlElement.classList.remove("dark");
  }, [isDarkMode]);

  return (
    <nav className="bg-background mx-auto mt-2 text-foreground shadow-xl backdrop-blur-lg bg-opacity-30 fixed w-[95%] z-10 rounded-3xl border border-gray-300 dark:bg-opacity-40 dark:border-gray-600">

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="text-2xl font-extrabold text-blue-500 hover:text-blue-600 transition-all duration-300 ease-in-out"
        >
          Oventions
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          <Link
            href="#home"
            className="text-gray-800 hover:text-teal-500 transition-all duration-300 ease-in-out dark:text-gray-200"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-gray-800 hover:text-teal-500 transition-all duration-300 ease-in-out dark:text-gray-200"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-gray-800 hover:text-teal-500 transition-all duration-300 ease-in-out dark:text-gray-200"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="text-gray-800 hover:text-teal-500 transition-all duration-300 ease-in-out dark:text-gray-200"
          >
            Contact
          </Link>

          <button
            className="p-2 rounded-lg border border-gray-500 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out"
            aria-label="Toggle Dark Mode"
            aria-expanded={isDarkMode}
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? (
              <FaSun className="text-yellow-300" />
            ) : (
              <FaMoon className="text-gray-600" />
            )}
          </button>
        </div>

        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars className="text-gray-600 dark:text-gray-200 text-2xl" />
        </button>
      </div>

      <div
        className={`md:hidden flex flex-col items-center justify-center bg-background text-foreground p-4 backdrop-blur-lg bg-opacity-30 dark:bg-opacity-40 rounded-b-2xl transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"
        }`}
      >
        <Link
          href="#home"
          className="block text-gray-800 hover:text-teal-500 py-2 transition-all duration-300 ease-in-out dark:text-gray-200"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          href="#about"
          className="block text-gray-800 hover:text-teal-500 py-2 transition-all duration-300 ease-in-out dark:text-gray-200"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          href="#services"
          className="block text-gray-800 hover:text-teal-500 py-2 transition-all duration-300 ease-in-out dark:text-gray-200"
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          href="#contact"
          className="block text-gray-800 hover:text-teal-500 py-2 transition-all duration-300 ease-in-out dark:text-gray-200"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>

        <button
          className="p-2 w-full flex justify-center items-center rounded-lg border border-gray-500 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? (
            <span className="flex items-center">
              <FaSun className="text-yellow-300 text-2xl mr-2" /> Light Mode
            </span>
          ) : (
            <span className="flex items-center">
              <FaMoon className="text-gray-600 text-2xl mr-2" /> Dark Mode
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
