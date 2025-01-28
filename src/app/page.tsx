'use client';
import { useState, useEffect, useRef } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Button from "../components/Button";
import { FaArrowLeft, FaArrowRight, FaCog, FaLightbulb, FaRocket } from "react-icons/fa";
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

  const sliderRef = useRef<HTMLDivElement>(null); // Reference to the slider container

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -250 : 250;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  

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
        className={`flex flex-col items-center justify-center min-h-screen bg-background  bg-black bg-opacity-50 text-foreground transition-colors ${inter.className}`}
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
        <div className="relative animate-fade-in-down bg-black bg-opacity-50 dark:bg-opacity-80 p-6 rounded-lg shadow-lg w-[90%] backdrop-blur-lg">
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

<section
          id="about"
          className="w-full py-20 px-5  relative"
        >
          {/* Content Container */}
          <div className="w-[90%] mx-auto relative z-10 flex flex-col-reverse md:flex-row items-center dark:bg-black bg-dark dark:bg-opacity-80 bg-opacity-40 backdrop-blur-lg p-4 rounded-md justify-between">
  
            <div className="flex-1 mb-6 md:mb-0 animate-fade-in-left rounded-lg px-20">
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 animate-fade-in-up">
                What Services Do We Offer
              </h2>
              
              <p className="text-lg md:text-xl text-opacity-90 mb-8 px-4 md:px-0 animate-fade-in-up">
                We provide a wide range of services to help your business grow and succeed. Our team of experts is ready to assist you with any project, big or small.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-100 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-700 rounded-lg shadow-lg hover:animate-tilt-right">
                More Services
              </Button>
            </div>
            <div className="flex-1 text-center md:text-left text-gray-200 space-y-6 animate-fade-in-up ">
                  <img
                    src="/Team.jpg"
                    alt="Services"
                    className="rounded-lg shadow-xl w-full max-w-sm md:max-w-md mx-auto transform transition duration-300 ease-in-out p-4"
                  />
            </div>

             </div>
        </section>


          <section
              id="ServiceList"
              className="w-full py-20 px-5 relative overflow-x-hidden"
            >
              <div className="w-[90%] mx-auto relative z-10 dark:bg-black bg-dark dark:bg-opacity-80 bg-opacity-40 backdrop-blur-lg p-4 rounded-md">
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-center text-gray-200 mb-10">
                  Services
                </h2>

                {/* Horizontal Slider */}
                <div className="relative">
                  <div
                    className="flex gap-6 overflow-x-auto no-scrollbar px-4 py-6"
                    style={{
                      scrollBehavior: "smooth",
                    }}
                    ref={sliderRef}
                  >
                    {/* Service Cards */}
                    {[
                      { title: "Web Development", description: "Modern and responsive websites tailored to your needs." },
                      { title: "UI/UX Design", description: "Beautiful and functional interfaces for great user experiences." },
                      { title: "E-Commerce Solutions", description: "Robust and scalable online stores for your business." },
                      { title: "SEO Optimization", description: "Improve your website's visibility and search rankings." },
                      { title: "Mobile App Development", description: "Cross-platform apps with smooth performance." },
                    ].map((service, index) => (
                      <div
                        key={index}
                        className="min-w-[250px] md:min-w-[300px] border text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
                      >
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                        <p className="text-gray-300">{service.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Slider Controls */}
                  <div className="flex justify-between mt-4 px-4">
                    <button
                      className=" p-3 rounded-full bg-white text-blue-600 hover:bg-blue-100 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-700  shadow-lg  hover:animate-tilt-right"
                      onClick={() => scrollSlider("left")}
                    >
                      <FaArrowLeft />
                    </button>
                    <button
                      className=" p-3 rounded-full bg-white text-blue-600 hover:bg-blue-100 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-700  shadow-lg  hover:animate-tilt-right"
                      onClick={() => scrollSlider("right")}
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </section>





        {/* Contact Section */}
        
          <ContactForm />
      </main>
    </>
  );
}
