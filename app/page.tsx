"use client"; // Required for animations in Next.js App Router

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const skills = [
    "Python",
    "HTML/CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Django",
    "PostgreSQL",
    "MongoDB",
  ];

  return (
    <>
      <style jsx>{`
        @keyframes pulseGlow {
          0% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1);
          }
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
        }
        .animate-pulseGlow {
          animation: pulseGlow 3s infinite ease-in-out;
        }
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .hover\\:animate-shimmer:hover {
          animation: shimmer 1.5s infinite linear;
        }
      `}</style>

      <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-100 dark:from-gray-900 dark:to-gray-800 opacity-90 -z-10"></div>

        {/* Animated Glow Effect */}
        <div className="absolute w-72 h-72 bg-blue-300 dark:bg-blue-500 opacity-20 blur-3xl top-1/4 left-1/4 -z-10 animate-pulseGlow"></div>
        <div className="absolute w-60 h-60 bg-purple-300 dark:bg-purple-500 opacity-20 blur-3xl bottom-1/4 right-1/4 -z-10 animate-pulseGlow"></div>

        {/* Animated Title */}
        <motion.h1
          className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm{" "}
          <span className="relative inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_auto] bg-clip-text text-transparent transition-all duration-500 hover:animate-shimmer">
            Mohammed Kiani
          </span>{" "}
          👋
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A passionate{" "}
          <span className="text-blue-500 dark:text-blue-300 font-semibold">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "Software Engineer",
                "Tech Enthusiast",
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </span>{" "}
          creating modern, scalable web applications. I love turning ideas into
          reality through{" "}
          <span className="text-blue-500 dark:text-blue-300 font-semibold">
            clean code
          </span>{" "}
          and innovative solutions.
        </motion.p>

        {/* Skills Section */}
        <motion.div
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-white py-2 px-4 rounded-lg shadow-md transition-all duration-200 cursor-default"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>

        {/* Call-To-Action Button */}
        <motion.a
          href="/projects"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            className="mt-6 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-transform transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ x: [0, 2, -2, 2, 0], y: [0, 1, -1, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            View My Projects 🚀
          </motion.button>
        </motion.a>
      </div>
    </>
  );
}
