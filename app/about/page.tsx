"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      {/* Background Glow Effects */}
      <div className="absolute w-72 h-72 bg-blue-300 dark:bg-blue-500 opacity-20 blur-3xl top-1/4 left-1/4 -z-10"></div>
      <div className="absolute w-60 h-60 bg-purple-300 dark:bg-purple-500 opacity-20 blur-3xl bottom-1/4 right-1/4 -z-10"></div>

      {/* About Me Card */}
      <motion.div
        className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl text-center transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Me
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-700 dark:text-gray-300 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I'm{" "}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">
            Mohammed Kiani
          </span>
          , a passionate developer specializing in{" "}
          <span className="text-blue-600 dark:text-blue-400">
            React, Next.js, and Django
          </span>
          . I love solving problems and building cool things on the web.
        </motion.p>

        {/* Interests */}
        <motion.p
          className="mt-4 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          Outside of coding, I enjoy game development, fitness, and exploring
          new tech trends.
        </motion.p>
      </motion.div>
    </div>
  );
}
