'use client'
import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-blue-600 text-2xl font-bold">
          <Link href="/">Oventions</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="#about" className="text-gray-700 hover:text-blue-600">
            About Us
          </Link>
          <Link href="#services" className="text-gray-700 hover:text-blue-600">
            Services
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600">
            Contact Us
          </Link>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Get Started
          </Button>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden flex items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-gray-700"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 p-4">
            <Link
              href="#about"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700 w-full"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
