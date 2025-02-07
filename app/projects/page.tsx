"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      name: "Project 1",
      description: "A web app for modern development.",
      image: "/project1.jpg",
      link: "https://github.com/yourproject",
    },
    {
      name: "Project 2",
      description: "A beautiful UI/UX project.",
      image: "/project2.jpg",
      link: "https://github.com/yourproject2",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto text-center mt-14 px-4">
      {/* Animated Title */}
      <motion.h1
        className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8 relative">
        {/* Background Glow Effects */}
        <div className="absolute w-72 h-72 bg-blue-300 dark:bg-blue-500 opacity-20 blur-3xl top-1/4 left-1/4 -z-10"></div>
        <div className="absolute w-60 h-60 bg-purple-300 dark:bg-purple-500 opacity-20 blur-3xl bottom-1/4 right-1/4 -z-10"></div>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Project Image */}
            <Image
              src={project.image}
              alt={project.name}
              width={500}
              height={300}
              className="rounded-md w-full h-48 object-cover mb-4"
            />

            {/* Project Title */}
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {project.name}
            </h2>

            {/* Project Description */}
            <p className="text-gray-700 dark:text-gray-400">
              {project.description}
            </p>

            {/* Project Link */}
            <a
              href={project.link}
              target="_blank"
              className="text-blue-600 dark:text-blue-400 hover:underline mt-3 inline-block"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
