"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Resume() {
  return (
    <div
      className="w-screen min-h-screen relative py-16 px-4"
      style={{ 
        backgroundImage: "url('/main-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
        {/* Header Section */}
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative w-48 h-48">
            <Image
              src="https://i.ibb.co/vwG4WW7/outfit.jpg"
              alt="Profile Picture"
              fill
              className="rounded-full object-cover border-4 border-blue-500"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">Marius Radulescu</h1>
            <h2 className="text-2xl text-blue-600 mb-4">Enterprise Architect</h2>
            <p className="text-gray-600">
            Enterprise Architect with 8+ years of business leadership and more than 20 years IT presence, specializing in secure system design 
            and full-stack development. 
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Docker", "GraphQL"]
              .map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full"
                >
                  {skill}
                </span>
              ))
            }
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4">Experience</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-xl font-semibold">Senior Developer</h4>
              <p className="text-blue-600">Company Name • 2020 - Present</p>
              <p className="text-gray-600 mt-2">
                Led development of multiple successful projects using modern technologies.
                Mentored junior developers and implemented best practices.
              </p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-xl font-semibold">Full Stack Developer</h4>
              <p className="text-blue-600">Previous Company • 2018 - 2020</p>
              <p className="text-gray-600 mt-2">
                Developed and maintained various web applications.
                Collaborated with cross-functional teams to deliver high-quality solutions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <div className="border-l-2 border-blue-500 pl-4">
            <h4 className="text-xl font-semibold">Bachelor in Computer Science</h4>
            <p className="text-blue-600">University Name • 2014 - 2018</p>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex justify-center space-x-4">
            <Link 
              href="https://github.com/yourusername" 
              target="_blank"
              className="text-blue-600 hover:text-blue-800"
            >
              GitHub
            </Link>
            <Link 
              href="https://linkedin.com/in/yourusername" 
              target="_blank"
              className="text-blue-600 hover:text-blue-800"
            >
              LinkedIn
            </Link>
            <Link 
              href="mailto:your.email@example.com"
              className="text-blue-600 hover:text-blue-800"
            >
              Email
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}