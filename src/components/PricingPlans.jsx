export default function PricingPlans() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Simple Pricing</h2>
        <p className="text-gray-600 mt-3">Start for free, upgrade anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* Free Plan */}
          <div className="p-8 border rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold">Free</h3>
            <p className="text-4xl font-bold mt-4">₹0</p>
            <ul className="mt-6 space-y-2 text-gray-600">
              <li>✔ 10 scheduled posts</li>
              <li>✔ 1 social account</li>
            </ul>
            <button className="mt-6 w-full bg-amber-500 text-white py-2 rounded-lg">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="p-8 border rounded-2xl shadow-xl scale-105 bg-gray-50">
            <h3 className="text-xl font-bold">Pro</h3>
            <p className="text-4xl font-bold mt-4">₹499/mo</p>
            <ul className="mt-6 space-y-2 text-gray-600">
              <li>✔ Unlimited scheduled posts</li>
              <li>✔ 5 social accounts</li>
              <li>✔ AI Smart Scheduler</li>
            </ul>
            <button className="mt-6 w-full bg-amber-600 text-white py-2 rounded-lg">
              Upgrade
            </button>
          </div>

          {/* Enterprise */}
          <div className="p-8 border rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold">Enterprise</h3>
            <p className="text-4xl font-bold mt-4">Custom</p>
            <ul className="mt-6 space-y-2 text-gray-600">
              <li>✔ Unlimited everything</li>
              <li>✔ Dedicated support</li>
            </ul>
            <button className="mt-6 w-full bg-black text-white py-2 rounded-lg">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
