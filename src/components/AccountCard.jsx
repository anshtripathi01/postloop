export default function AccountCard({ icon, title, description, onClick }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow border hover:shadow-lg transition">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>

      <button 
        onClick={onClick}
        className="mt-4 bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition"
      >
        Connect
      </button>
    </div>
  );
}
