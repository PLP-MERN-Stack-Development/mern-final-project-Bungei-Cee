import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition">
      <h2 className="text-lg font-bold">{project.name}</h2>
      <p className="text-gray-600">{project.description}</p>
      <p className="text-sm mt-2 text-gray-500">
        Members: {project.members.map(m => m.name).join(", ")}
      </p>
    </div>
  );
}
