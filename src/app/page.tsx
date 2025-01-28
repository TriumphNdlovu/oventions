'use client';
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Button from "../components/Button";
import { FaArrowRight, FaCog, FaLightbulb, FaRocket } from "react-icons/fa";
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
      <div className="fixed inset-0 bg-black opacity-30"></div>
      <main
        className={`flex flex-col items-center justify-center min-h-screen bg-background bg-black bg-opacity-50 text-foreground transition-colors ${inter.className}`}
        style={{
          backgroundImage: 'url(/Hero.jpg)', display:'fixed',
                        backgroundAttachment: 'fixed', 
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
          }}
        >
        
        {/* Hero Section */}
        <section 
        className="text-white text-center overflow-hidden h-screen flex flex-col justify-center items-center w-full py-20 px-5 relative"
        
      >
  <div className="relative animate-fade-in-down bg-black bg-opacity-50 dark:bg-opacity-80 p-6 rounded-lg shadow-lg w-[90%]">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down pt-20 text-shadow-lg">
      Welcome to Oventions
    </h1>
    <h2 className="text-xl text-gray-300 mb-6 animate-fade-in-up">
      Helping your business stay ahead with personalized solutions.
      We help businesses grow with innovative solutions and cutting-edge technology.
    </h2>
    <Button className="bg-white text-blue-600 hover:bg-blue-100 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-700 rounded-lg shadow-lg animate-pulse hover:animate-tilt-right">
      {/* <FaArrowRight className="mr-2" /> */}
      Get Started
    </Button>
  </div>
  <div className="absolute bottom-10 animate-bounce flex flex-row jsutify-center items-center">
    <span className="text-teal-400 text-xl">↓</span>
  </div>

  {/* Scroll Down Indicator */}
</section>



        {/* About Section */}
        <section
          id="about"
          className="w-full py-20 px-5  relative"
        >
          

          {/* Content Container */}
          <div className="w-[90%] mx-auto relative z-10 flex flex-col-reverse md:flex-row items-center dark:bg-black bg-dark dark:bg-opacity-80 bg-opacity-40 backdrop-blur-lg p-4 rounded-md justify-between">
            {/* Text Content */}
            {/* Image or Visual Content */}
            <div className="flex-1 mb-6 md:mb-0 animate-fade-in-left rounded-lg">
              <img
                src="/About.jpg"
                alt="About Us"
                className="rounded-lg shadow-xl w-full max-w-sm md:max-w-md mx-auto transform transition duration-300 ease-in-out p-4"
              />
            </div>
            <div className="flex-1 text-center md:text-left text-gray-200 space-y-6 animate-fade-in-up ">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 animate-fade-in-up">
                Who We Are
              </h2>
              <p className="text-lg md:text-xl text-opacity-90 mb-8 px-4 md:px-0 animate-fade-in-up">
                We are a team of passionate professionals committed to delivering innovative solutions that push the boundaries of creativity and technology. Our goal is to transform ideas into meaningful results.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-100 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-700 rounded-lg shadow-lg hover:animate-tilt-right">
                Discover More
              </Button>
            </div>


          </div>
        </section>




        
        {/* Services Section */}
        <section id="services" className="py-16 px-5 relative w-[90%]">
              {/* Section Background */}
              <div className="relative z-10 dark:bg-black bg-dark dark:bg-opacity-80 bg-opacity-40 backdrop-blur-lg p-4 rounded-md ">
                {/* Section Heading */}
              <div>
              <div className="flex flex-row mb-6 md:mb-0 animate-fade-in-left rounded-lg justify-center items-center">
              <img
                src="/Team.jpg"
                alt="About Us"
                className="rounded-lg shadow-xl w-full max-w-sm md:max-w-md mx-auto transform transition duration-300 ease-in-out p-4"
              />
            <div className="flex flex-col text-center md:text-left text-gray-200 space-y-6 animate-fade-in-up ">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 animate-fade-in-up">
                What Services Do We Offer
              </h2>
              <p className="text-lg md:text-xl text-opacity-90 mb-8 px-4 md:px-0 animate-fade-in-up">
                We provide a wide range of services to help your business grow and succeed. Our team of experts is ready to assist you with any project, big or small.
              </p>
              </div>
            </div>

              </div>

                {/* Service Cards  */}
                 {/* <h2 className="text-3xl font-bold text-blue-600 dark:text-teal-400 text-center mb-6 animate-fade-in-up">
                  Our Services
                </h2>
                <div className="max-w-6xl mx-auto relative z-10 flex flex-col-reverse md:flex-row items-center  justify-between">
                  <div className="flex-1 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg backdrop-blur-md hover:scale-105 transition-all duration-300">
                    <FaLightbulb className="text-blue-600 dark:text-teal-400 text-4xl mb-4 mx-auto animate-fade-in-up" />
                    <h3 className="text-xl font-semibold mb-3">Innovative Solutions</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 animate-fade-in-up">
                      We provide creative solutions tailored to your business needs.
                    </p>
                    <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700 rounded-lg animate-tilt-right">
                      Learn More
                    </Button>
                  </div>

                  <div className="flex-1 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg backdrop-blur-md hover:scale-105 transition-all duration-300">
                    <FaCog className="text-blue-600 dark:text-teal-400 text-4xl mb-4 mx-auto animate-fade-in-up" />
                    <h3 className="text-xl font-semibold mb-3">Technology Integration</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 animate-fade-in-up">
                      Harness cutting-edge technology to streamline your operations.
                    </p>
                    <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700 rounded-lg animate-tilt-right">
                      Learn More
                    </Button>
                  </div>

                  <div className="flex-1 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg backdrop-blur-md hover:scale-105 transition-all duration-300">
                    <FaRocket className="text-blue-600 dark:text-teal-400 text-4xl mb-4 mx-auto animate-fade-in-up" />
                    <h3 className="text-xl font-semibold mb-3">Scalable Growth</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 animate-fade-in-up">
                      Empower your business to scale efficiently and effectively.
                    </p>
                    <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700 rounded-lg animate-tilt-right">
                      Learn More
                    </Button>
                  </div>  */}
                {/* </div> */}
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
