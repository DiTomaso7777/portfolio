"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

// Import projects data
const projects = [
  {
    title: "Project One",
    description: "This is a brief description of Project One. It showcases some amazing features.",
    link: "/project-one",
    details: {
      tech: ["React", "TypeScript", "Node.js"],
      duration: "3 months",
      role: "Lead Developer",
      challenge: "The main challenge was implementing real-time updates while maintaining performance.",
      solution: "Utilized WebSocket connections and implemented efficient data caching strategies.",
      outcome: "Improved system response time by 40% and increased user engagement by 25%."
    }
  },
  // ... other projects
];

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find(p => p.link === `/${params.slug}`);

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
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/my-projects" className="text-blue-500 hover:underline mb-8 inline-block">
            ← Back to Projects
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{project.description}</p>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.details?.tech.map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Duration</h3>
                <p>{project.details?.duration}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Role</h3>
                <p>{project.details?.role}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Project Journey</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">The Challenge</h3>
                <p className="text-gray-600">{project.details?.challenge}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">The Solution</h3>
                <p className="text-gray-600">{project.details?.solution}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">The Outcome</h3>
                <p className="text-gray-600">{project.details?.outcome}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}