
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
  );
}
