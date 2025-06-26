export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div
        onClick={onToggle}
        className={`flex-1 cursor-pointer ${
          task.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {task.text}
      </div>
      <button onClick={onDelete} className="text-red-500 ml-4">
        Delete
      </button>
    </div>
  );
}
