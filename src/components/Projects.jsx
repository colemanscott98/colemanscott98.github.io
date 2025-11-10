import React from "react";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-700 mb-2">{p.description}</p>
            <a href={p.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
