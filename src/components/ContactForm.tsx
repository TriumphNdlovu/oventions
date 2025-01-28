
"use client";

import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section
          id="contact"
          className="w-full py-16 px-5 text-center max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg"
        >
          <h2 className="text-3xl font-bold text-blue-600 dark:text-teal-400 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Get in touch with us to learn more about our services or start a project.
          </p>
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 backdrop-blur-md"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 backdrop-blur-md"
      />
      <textarea
        name="message"
        rows={4}
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 md:col-span-2 backdrop-blur-md"
      ></textarea>
      <Button
        type="submit"
        className="bg-blue-600 text-white hover:bg-blue-700 md:col-span-2 rounded-lg shadow-lg"
      >
        Send Message
      </Button>
    </form>
    </section>
    
  );
}
