const steps = [
  {
    number: "1",
    title: "Connect Your Social Accounts",
    description: "Securely link Facebook, LinkedIn, or Twitter in one click.",
  },
  {
    number: "2",
    title: "Create Your Post",
    description: "Add your content, images, and choose where to publish.",
  },
  {
    number: "3",
    title: "Schedule & Automate",
    description: "Sit back — your posts go live automatically.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-100" id="how-it-works">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">How It Works</h2>
        <p className="text-gray-600 mt-3">3 simple steps to automate posting</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-md border">
              <div className="text-5xl font-bold text-amber-500">{step.number}</div>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
