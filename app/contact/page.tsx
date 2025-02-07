"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("https://formspree.io/f/xdkaddor", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg text-center transition-all duration-300">
        {/* Background Glow Effects */}
        <div className="absolute w-72 h-72 bg-blue-300 dark:bg-blue-500 opacity-20 blur-3xl top-1/4 left-1/4 -z-10"></div>
        <div className="absolute w-60 h-60 bg-purple-300 dark:bg-purple-500 opacity-20 blur-3xl bottom-1/4 right-1/4 -z-10"></div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Contact Me
        </h1>
        <p className="text-gray-700 dark:text-gray-400 mb-6">
          Feel free to reach out via email or social media.
        </p>

        {/* Form */}
        {submitted ? (
          <p className="text-green-600 dark:text-green-400">
            Message sent successfully! ✅
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="w-full p-3 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        )}

        {/* Contact Info */}
        <div className="mt-6 space-y-2">
          <p>
            📧{" "}
            <a
              href="mailto:faisal.mk321@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              faisal.mk321@gmail.com
            </a>
          </p>
          <p>
            💼{" "}
            <a
              href="https://linkedin.com/in/yourprofile"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
