"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/app/data/projects";

export default function ProjectDetail() {
  const params = useParams();
  const project = projectsData.find(p => p.slug === params.slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <Link href="/my-projects" className="text-blue-500 hover:underline">
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-8 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 md:space-y-8"
        >
          <Link href="/my-projects" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            {project.keyProject}
          </h1>
  
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-4 md:p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Project Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50/50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-2">Partner</h3>
                <p className="text-gray-700">{project.partner}</p>
              </div>
              <div className="bg-blue-50/50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-2">Role</h3>
                <p className="text-gray-700">{project.role}</p>
              </div>
              <div className="bg-blue-50/50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-2">Duration</h3>
                <p className="text-gray-700">{project.duration}</p>
              </div>
              <div className="bg-blue-50/50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-2">Year</h3>
                <p className="text-gray-700">{project.year}</p>
              </div>
            </div>
          </div>
  
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-4 md:p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Project Description</h2>
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}