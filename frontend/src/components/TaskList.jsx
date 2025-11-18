export default function TaskList({ tasks = [], onEdit, onDelete }) {
  if (!tasks.length) return <p>No tasks yet</p>;
  return (
    <ul className="space-y-2">
      {tasks.map((t) => (
        <li key={t._id} className="p-3 border rounded flex justify-between items-start">
          <div>
            <div className="font-semibold">{t.title}</div>
            <div className="text-sm text-gray-600">{t.description}</div>
            <div className="text-xs mt-1">Status: {t.status}</div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => onEdit(t)} className="px-2 py-1 border rounded">Edit</button>
            <button onClick={() => onDelete(t._id)} className="px-2 py-1 border rounded text-red-600">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
