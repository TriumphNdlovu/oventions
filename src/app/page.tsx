import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <>
    <Navbar />
      <Head>
        <title>Oventions</title>
        <meta name="Oventions" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`flex flex-col items-center justify-center min-h-screen bg-gray-50 ${inter.className}`}>
        {/* Hero Section */}
        <section className="w-full bg-blue-600 text-white py-20 px-5 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Oventions</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-6">
            We help businesses grow with innovative solutions and cutting-edge technology.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-blue-100">
            Get Started
          </Button>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-16 px-5 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">About Us</h2>
          <p className="text-lg text-gray-700">
            Our mission is to deliver high-quality services that drive success and innovation
            for our clients. Learn more about our team and what we do.
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full bg-gray-100 py-16 px-5 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Service 1</h3>
              <p className="text-gray-600">
                Description of the service and how it benefits your clients.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Service 2</h3>
              <p className="text-gray-600">
                Description of the service and how it benefits your clients.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Service 3</h3>
              <p className="text-gray-600">
                Description of the service and how it benefits your clients.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 px-5 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Get in touch with us to learn more about our services or start a project.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 md:col-span-2"
            ></textarea>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 md:col-span-2">
              Send Message
            </Button>
          </form>
        </section>
      </main>
    </>
  );
}
