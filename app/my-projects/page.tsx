"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "../data/projects"; // Importing projectsData

export default function MyProjects() {
    // Sort projects by year in descending order
    const sortedProjects = [...projectsData].sort((a, b) => {
      // Extract the last year if there's a range (e.g., "2022-2023" → "2023")
      const getLatestYear = (year: string) => {
        const years = year.split(/[-\s]+/);
        return parseInt(years[years.length - 1]);
      };
  
      return getLatestYear(b.year) - getLatestYear(a.year);
    });
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.h1 
        className="text-4xl font-semibold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Journey
      </motion.h1>
      
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>

        {sortedProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex items-center justify-between mb-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Timeline Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                <Link href={`/projects/${project.slug}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 cursor-pointer">
                    <span className="text-sm text-blue-500 font-semibold">{project.year}</span>
                    <h2 className="text-xl font-bold mb-2">{project.keyProject}</h2>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <span className="text-blue-500 font-semibold hover:underline">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white transition-all duration-300 group-hover:scale-125 group-hover:bg-blue-600"></div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            href="/" 
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}