"use client";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Resume() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "https://i.ibb.co/vwG4WW7/outfit.jpg",
        "https://i.ibb.co/ccSq0ZZ/me2.jpg",
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
        <div className="w-screen min-h-screen relative py-16 px-4"
            style={{ 
                backgroundImage: "url('/main-bg.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
            <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
                {/* Header Section */}
                <motion.div 
                    className="flex flex-col md:flex-row items-center gap-8 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}>
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
                        <p className="text-gray-600 mb-4">
                            20+ years of IT excellence, architecting secure systems, 8+ years of business leadership, former MVP for Symantec, and a Microsoft Partner Network consultant.
                        </p>
                        <div className="flex flex-col space-y-2">
                            <a href="mailto:marius.radulescu@outlook.com" 
                                className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
                                <EnvelopeIcon className="h-5 w-5 text-gray-600" />
                                <span className="text-gray-600 hover:text-blue-600">marius.radulescu@outlook.com</span>
                            </a>
                            <a href="tel:+491639069470"
                                className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
                                <PhoneIcon className="h-5 w-5 text-gray-600" />
                                <span className="text-gray-600 hover:text-blue-600">+49 163 906 9470</span>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Skills Section */}
                <motion.div 
                    className="mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {["Identity Master", "Next.js", "M365 Master", "Node.js", "Azure", "Security Master", "Forensics", "Legal investigation", "Compliance", "Auth Middleware[Clerk, Auth0, MSAL]", "Cryptography","GraphQL","Mail Server Migration Specialist", "Digitalization"]
                            .map((skill, index) => (
                                <span 
                                    key={index}
                                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
                                    {skill}
                                </span>
                            ))}
                    </div>
                </motion.div>

                {/* Experience Section */}
                <motion.div 
                    className="mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Experience</h3>
                    <div className="space-y-6">
                        {/* BMW Experience */}
                        <div className="border-l-2 border-blue-500 pl-4">
                            <h4 className="text-xl font-semibold text-gray-800">Application & Security Architect</h4>
                            <div className="flex flex-col space-y-1">
                                <p className="text-blue-600 font-semibold">BMW Group AG</p>
                                <p className="text-blue-500">Munich and South Carolina</p>
                                <p className="text-blue-400 text-sm">2024 - Present</p>
                            </div>
                            <div className="space-y-2 mt-2">
                                <p className="text-gray-600">Technical Leader and main developer for the SharePoint Statistics app (Next JS, Microsoft Graph API).</p>
                                <p className="text-gray-600">Technical Leader and main developer for the app and digitalization of legal investigation processes (React, PostgreSQL, Express, Azure SAS, Service Now).</p>
                                <p className="text-gray-600">Privileged Access Management for Exchange Online - design and implementation.</p>
                                <p className="text-gray-600">Migration of OnPrem Exchange Mail Search Export to Purview eDiscovery - process design and approval with external audit companies.</p>
                            </div>
                        </div>

                        {/* Skynet Experience */}
                        <div className="border-l-2 border-blue-500 pl-4">
                            <h4 className="text-xl font-semibold text-gray-800">Technical Migration Manager & Migration Consultant</h4>
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

                        {/* Microsoft Experience */}
                        <div className="border-l-2 border-blue-500 pl-4">
                            <h4 className="text-xl font-semibold text-gray-800">Technical consultant & event speaker</h4>
                            <div className="flex flex-col space-y-1">
                                <p className="text-blue-600 font-semibold">Microsoft</p>
                                <p className="text-blue-500">Munich, Germany</p>
                                <p className="text-blue-400 text-sm">2012 - 2016</p>
                            </div>
                            <p className="text-gray-600 mt-2">
                            As a technical consultant, my mission was to upgrade
Microsoft's partner companies to the latest technologies in
various ways, such as 1:1 consulting, workshops, events,
strategy meetings and migration roadmaps. The main
technologies that I was allowed to accompany, were Exchange
and Skype for Business, Azure, Intune and many more.
                            </p>
                        </div>

                        {/* Symantec Experience */}
                        <div className="border-l-2 border-blue-500 pl-4">
                            <h4 className="text-xl font-semibold text-gray-800">Security Consultant and MVP</h4>
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
                    transition={{ delay: 0.6 }}>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Education</h3>
                    <div className="border-l-2 border-blue-500 pl-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800">MBA Strategic Planning</h4>
                                <p className="text-blue-600">University of Edinburgh • 2018 - 2019</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800">Bachelor Information Technology</h4>
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
                    transition={{ delay: 0.8 }}>
                    <div className="flex justify-center items-center divide-x divide-blue-200">
                        <Link href="/" className="text-blue-600 hover:text-blue-800 px-4">
                            Home
                        </Link>
                        <Link href="https://github.com/DiTomaso7777" target="_blank" className="text-blue-600 hover:text-blue-800 px-4">
                            GitHub
                        </Link>
                        <Link href="https://linkedin.com/in/marius-radulescu-51784046" target="_blank" className="text-blue-600 hover:text-blue-800 px-4">
                            LinkedIn
                        </Link>
                        <Link href="/contact-me" className="text-blue-600 hover:text-blue-800 px-4">
                            Book a Meeting
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}