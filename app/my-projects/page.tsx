"use client";

import Link from "next/link";

const projects = [
  {
    title: "Project One",
    description: "This is a brief description of Project One. It showcases some amazing features.",
    link: "/project-one",
  },
  {
    title: "Project Two",
    description: "This project highlights the use of modern technologies in web development.",
    link: "/project-two",
  },
  {
    title: "Project Three",
    description: "A brief overview of what Project Three is all about.",
    link: "/project-three",
  },
  // Add more projects as needed
];

export default function MyProjects() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url(/main-bg.webp)" }}>
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl w-full z-10">
        <h1 className="text-4xl font-semibold text-center mb-8">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <Link href={project.link} className="text-blue-500 font-semibold hover:underline">
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-500 hover:underline text-lg">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
