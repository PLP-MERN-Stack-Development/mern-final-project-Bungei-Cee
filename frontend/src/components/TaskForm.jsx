import { useState, useEffect } from "react";

export default function TaskForm({ initial = { title: "", description: "", status: "todo" }, onSubmit, submitLabel = "Save" }) {
  const [form, setForm] = useState(initial);

  useEffect(() => setForm(initial), [initial]);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handle = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handle} className="space-y-2">
      <input name="title" value={form.title} onChange={change} placeholder="Title" required className="border p-2 w-full" />
      <textarea name="description" value={form.description} onChange={change} placeholder="Description" className="border p-2 w-full" />
      <select name="status" value={form.status} onChange={change} className="border p-2 w-full">
        <option value="todo">To do</option>
        <option value="in-progress">In progress</option>
        <option value="done">Done</option>
      </select>
      <button className="px-4 py-2 bg-blue-600 text-white rounded">{submitLabel}</button>
    </form>
  );
}
