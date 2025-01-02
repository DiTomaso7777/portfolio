"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "This is a brief description of Project One. It showcases some amazing features.",
    link: "/projects/project-one",
  },
  {
    title: "Project Two",
    description: "This project highlights the use of modern technologies in web development.",
    link: "/projects/project-two",
  },
  {
    title: "Project Three",
    description: "A brief overview of what Project Three is all about.",
    link: "/projects/project-three",
  },
  {
    title: "AI Image Generator",
    description: "An AI-powered application that generates unique images from text descriptions.",
    link: "/projects/ai-image-generator",
  },
  {
    title: "Cloud Storage Solution",
    description: "Secure cloud storage platform with advanced encryption and sharing capabilities.",
    link: "/projects/cloud-storage",
  },
  {
    title: "Smart Home Dashboard",
    description: "IoT dashboard for controlling and monitoring smart home devices in real-time.",
    link: "/projects/smart-home",
  },
  {
    title: "Blockchain Wallet",
    description: "Cryptocurrency wallet supporting multiple chains with built-in DEX integration.",
    link: "/projects/blockchain-wallet",
  },
  {
    title: "Virtual Reality Game",
    description: "Immersive VR experience built with Unity and OpenXR for modern headsets.",
    link: "/projects/vr-game",
  },
  {
    title: "Machine Learning API",
    description: "RESTful API service providing ML models for natural language processing.",
    link: "/projects/ml-api",
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory and payment processing.",
    link: "/projects/ecommerce",
  },
  {
    title: "Social Media Analytics",
    description: "Dashboard for tracking and analyzing social media engagement metrics.",
    link: "/projects/social-analytics",
  },
  {
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking application with personalized workout plans.",
    link: "/projects/fitness-app",
  },
  {
    title: "Weather Forecast",
    description: "Real-time weather forecasting app using machine learning for accurate predictions.",
    link: "/projects/weather-forecast",
  }
];

export default function MyProjects() {
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
          {/* Timeline Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>

          {projects.map((project, index) => (
            <motion.div
              key={index}
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
                <Link href={project.link}>
                  <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 cursor-pointer">
                    <span className="text-sm text-blue-500 font-semibold">2023</span>
                    <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <span className="text-blue-500 font-semibold hover:underline">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
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