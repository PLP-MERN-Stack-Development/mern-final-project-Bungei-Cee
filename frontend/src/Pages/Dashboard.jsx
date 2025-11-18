import React from "react";

function Dashboard({ onLogout }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:block">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">TaskFlow</h2>
          <nav className="space-y-3">
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-200 transition">
              Dashboard
            </button>
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-200 transition">
              Projects
            </button>
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-200 transition">
              Tasks
            </button>
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-200 transition">
              Teams
            </button>
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-200 transition">
              Messages
            </button>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center bg-white shadow px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </header>

        {/* Stats cards */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Projects</h2>
            <p className="text-gray-600 mt-2">12 Active</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Tasks</h2>
            <p className="text-gray-600 mt-2">45 Pending</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Teams</h2>
            <p className="text-gray-600 mt-2">3 Teams</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Messages</h2>
            <p className="text-gray-600 mt-2">7 New</p>
          </div>
        </div>

        {/* Recent activity table */}
        <div className="p-6">
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="px-4 py-2">Project</th>
                  <th className="px-4 py-2">Task</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">Project Alpha</td>
                  <td className="px-4 py-2">Design Homepage</td>
                  <td className="px-4 py-2 text-green-600 font-semibold">Completed</td>
                  <td className="px-4 py-2">2025-11-18</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">Project Beta</td>
                  <td className="px-4 py-2">API Integration</td>
                  <td className="px-4 py-2 text-yellow-600 font-semibold">In Progress</td>
                  <td className="px-4 py-2">2025-11-17</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">Project Gamma</td>
                  <td className="px-4 py-2">Testing Module</td>
                  <td className="px-4 py-2 text-red-600 font-semibold">Delayed</td>
                  <td className="px-4 py-2">2025-11-16</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
