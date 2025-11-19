import React from "react";

export default function TaskCard({ task }) {
  return (
    <div className="p-3 border rounded shadow hover:shadow-md transition">
      <h3 className="font-semibold">{task.title}</h3>
      <p className="text-gray-600">{task.description}</p>
      <p className="text-sm mt-1 text-gray-500">
        Status: <span className="capitalize">{task.status}</span>
      </p>
      {task.assignedTo && (
        <p className="text-sm text-gray-500">Assigned to: {task.assignedTo.name}</p>
      )}
    </div>
  );
}
