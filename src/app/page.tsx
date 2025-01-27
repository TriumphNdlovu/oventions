'use client';
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Button from "../components/Button";
import { FaCog, FaLightbulb, FaRocket } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) setDarkMode(storedTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <Head>
        <title>Oventions</title>
        <meta name="description" content="Innovative solutions for business growth." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex flex-col items-center justify-center min-h-screen bg-background text-foreground transition-colors ${inter.className}`}
      >
        
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20 px-5 text-center rounded-b-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-opacity-40 bg-black"></div>
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down pt-20">
              Welcome to Oventions
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-6 animate-fade-in-up">
              We help businesses grow with innovative solutions and cutting-edge technology.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-100 rounded-lg shadow-lg animate-bounce">
              Get Started
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full py-16 px-5 text-center max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg"
        >
          <h2 className="text-3xl font-bold text-blue-600 dark:text-teal-400 mb-4">About Us</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Our mission is to deliver high-quality services that drive success and innovation
            for our clients. Learn more about our team and what we do.
          </p>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg">
            Learn More
          </Button>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full bg-gray-100 dark:bg-gray-900 py-16 px-5 text-center">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-teal-400 mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg backdrop-blur-md">
              <FaLightbulb className="text-blue-600 dark:text-teal-400 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Innovative Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We provide creative solutions tailored to your business needs.
              </p>
              <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700 rounded-lg">
                Learn More
              </Button>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg backdrop-blur-md">
              <FaCog className="text-blue-600 dark:text-teal-400 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Technology Integration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Harness cutting-edge technology to streamline your operations.
              </p>
              <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700 rounded-lg">
                Learn More
              </Button>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg backdrop-blur-md">
              <FaRocket className="text-blue-600 dark:text-teal-400 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Scalable Growth</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Empower your business to scale efficiently and effectively.
              </p>
              <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700 rounded-lg">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-16 px-5 text-center max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg"
        >
          <h2 className="text-3xl font-bold text-blue-600 dark:text-teal-400 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Get in touch with us to learn more about our services or start a project.
          </p>
          <ContactForm />
        </section>
      </main>
    </>
  );
}
