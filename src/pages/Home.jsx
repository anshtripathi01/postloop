import { Link } from "react-router";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import PricingPlans from "../components/PricingPlans";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-white to-gray-100 flex flex-col items-center px-6 py-20 text-center">
        {/* Hero Section */}
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Post Smarter, Not Harder
          </h1>

          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            Schedule and auto‑post to{" "}
            <span className="font-semibold text-amber-600">Facebook Pages</span>
            ,
            <span className="font-semibold text-amber-600">
              {" "}
              LinkedIn Pages
            </span>
            , and
            <span className="font-semibold text-amber-600"> Twitter</span> — all
            from one clean, simple dashboard.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link to="/login">
              <button className="bg-amber-500 hover:bg-amber-600 cursor-pointer transition text-white font-semibold px-6 py-3 rounded-xl shadow-md">
                Start Free
              </button>
            </Link>

            <button className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2 cursor-pointer">
              See How It Works
            </button>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">
              Multi‑Platform Posting
            </h3>
            <p className="text-gray-600">
              Post to all major platforms at once — save time and maintain
              consistency.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Smart Scheduler</h3>
            <p className="text-gray-600">
              Pick a time or auto‑optimize for maximum engagement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Clean Dashboard</h3>
            <p className="text-gray-600">
              A simple interface to manage posts, drafts, and analytics easily.
            </p>
          </div>
        </div>
      </div>
      <Features />
      <HowItWorks />
      <PricingPlans />
      <Testimonials />
    </>
  );
}
