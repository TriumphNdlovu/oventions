'use client';

import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import DarkModeToggle from "./DarkModeToggle"; // Ensure this path is correct
import { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <nav className="bg-white mx-auto mt-2 text-gray-900 shadow-xl backdrop-blur-lg bg-opacity-30 fixed w-[95%] z-10 rounded-3xl border border-gray-300 dark:bg-gray-800 dark:bg-opacity-40 dark:text-gray-100 dark:border-gray-600 dark:backdrop-blur-md">
  <div className="container mx-auto px-6 py-4 flex justify-between items-center">
    <Link
      href="/"
      className="text-2xl font-extrabold text-blue-500 hover:text-blue-600 transition-all duration-300 ease-in-out"
    >
      {"<Oventions/>"}
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

      {/* DarkModeToggle component */}
      <DarkModeToggle />
    </div>

    <Button
        className="md:hidden "
        aria-label="Toggle Menu"
        aria-expanded={isOpen.toString()}
        onClick={() => setIsOpen(!isOpen)}
        >
        <FaBars className="text-2xl" />
    </Button>



  </div>

  {/* Mobile Menu */}
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
    <Link className="block"
    href="#"
    >
        <DarkModeToggle/>
</Link>
</div> 
</nav>

  );
};

export default Navbar;
