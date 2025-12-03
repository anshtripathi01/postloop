const reviews = [
  {
    name: "Kuhu",
    text: "PostLoop saved me 5 hours every week! Scheduling is super simple.",
  },
  {
    name: "Sonam",
    text: "I handle 3 Facebook Pages and this tool made my life easy.",
  },
  {
    name: "Ramesh",
    text: "The UI is clean and fast. Perfect for agencies.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-100" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Loved by Early Users</h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <div key={i} className="p-8 bg-white shadow-md rounded-2xl border">
              <p className="text-gray-700 italic">"{r.text}"</p>
              <h4 className="mt-4 font-semibold text-gray-900">- {r.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
