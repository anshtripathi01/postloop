const features = [
  {
    title: "Auto-Post Everywhere",
    description: "Post to Facebook Pages, LinkedIn Pages, Twitter — in one click.",
    icon: "🚀",
  },
  {
    title: "Smart Scheduler",
    description: "AI picks the highest engagement time for posting.",
    icon: "⏰",
  },
  {
    title: "Simple Dashboard",
    description: "Fast, minimal, distraction-free interface.",
    icon: "📊",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Features</h2>
        <p className="text-gray-600 mt-3">Everything you need to automate your posting.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-2xl border shadow-sm hover:shadow-xl transition">
              <div className="text-5xl">{f.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{f.title}</h3>
              <p className="text-gray-600 mt-2">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
