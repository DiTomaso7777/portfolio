"use client";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Resume() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "https://i.ibb.co/vwG4WW7/outfit.jpg",
        "https://i.ibb.co/ccSq0ZZ/me2.jpg",
        // Add more images as needed
      ];

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000);
    
        return () => clearInterval(interval);
      }, []);

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
                src={images[currentImageIndex]}
                alt="Profile Picture"
                fill
                className="rounded-full object-cover border-4 border-blue-500 transition-opacity duration-500"
            />
            </div>
          <div>
            <h1 className="text-4xl font-bold mb-2 text-gray-800">Marius Radulescu</h1>
            <h2 className="text-2xl text-blue-600 mb-4">Security Architect - Digitalization & AI Developer</h2>
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
            {["React", "Next.js", "TypeScript", "Node.js", "Azure", "Security Master", "Auth Middleware", "GraphQL", "Digitalization"]
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
              <h4 className="text-xl font-semibold">Security Architect</h4>
              <div className="flex flex-col space-y-1">
                  <p className="text-blue-600 font-semibold">BMW Group AG</p>
                  <p className="text-blue-500">Munich and South Carolina</p>
                  <p className="text-blue-400 text-sm">2024 - Present</p>
                </div>
              <p className="text-gray-600 mt-2">
                Digitalization and automation of the eDiscovery process: my role as a main developer of the eDiscovery app and integration with required platforms.
                Privileged Access Management: design and implementation of the PAM solution for the BMW Group Exchange Online.
                eDiscovery process 
              </p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-xl font-semibold">Technical Migration Manager & Migration Consultant</h4>
              <div className="flex flex-col space-y-1">
              <p className="text-blue-600 font-semibold">Skynet Cloud & Microsoft Partner Network</p>
              <p className="text-blue-500">Germany and Switzerland</p>
              <p className="text-blue-400 text-sm">2016 - 2024</p>
            </div>
              <p className="text-gray-600 mt-2">
                Technical Migration Manager & Migration Consultant for the Microsoft Partner Network and Skynet Cloud.
                Migration of the Exchange Servers to the Microsoft 365 platform.
                Implementation of the Microsoft Teams platform as a collaboration tool and PSTN solution - calling and meeting.
                Migration of the SharePoint Server to the Microsoft 365 platform. 
                Design of the SharePoint Online platform and implementation of the required security settings.
              </p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-xl font-semibold">Security Consultant and MVP</h4>
              <div className="flex flex-col space-y-1">
              <p className="text-blue-600 font-semibold">Symantec</p>
              <p className="text-blue-500">Athens, Greece</p>
              <p className="text-blue-400 text-sm">2010 - 2012</p>
            </div>
              <p className="text-gray-600 mt-2">
              Most Valuable Professional specializing in email security, backup solutions, and endpoint protection.
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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-xl font-semibold">MBA Strategic Planning</h4>
                <p className="text-blue-600">University of Edinburgh • 2018 - 2019</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Bachelor Information Technology</h4>
                <p className="text-blue-600">Henri Coanda Technical College • 2001 - 2005</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            >
            <div className="flex justify-center items-center divide-x divide-blue-200">
                <Link 
                href="/"
                className="text-blue-600 hover:text-blue-800 px-4"
                >
                Home
                </Link>
                <Link 
                href="https://github.com/DiTomaso7777" 
                target="_blank"
                className="text-blue-600 hover:text-blue-800 px-4"
                >
                GitHub
                </Link>
                <Link 
                href="https://linkedin.com/in/yourusername" 
                target="_blank"
                className="text-blue-600 hover:text-blue-800 px-4"
                >
                LinkedIn
                </Link>
                <Link 
                href="/contact-me"
                className="text-blue-600 hover:text-blue-800 px-4"
                >
                Book a Meeting
                </Link>
            </div>
            </motion.div>
      </div>
    </div>
  );
}