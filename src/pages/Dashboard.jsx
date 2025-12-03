import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-gray-600 mt-2">Quick actions</p>
      <div className="mt-6 flex gap-4">
        <Link to="/create-post" className="bg-amber-500 text-white px-4 py-2 rounded">Create Post</Link>
        <Link to="/history" className="px-4 py-2 rounded border">Post History</Link>
      </div>
    </div>
  );
}
