import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowBigRightDash, PanelLeftOpen, PanelRightClose } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile sidebar button */}
      <div className="md:hidden p-2 bg-gray-800 text-white flex justify-between items-center shadow-md">
        <span className="font-bold text-lg"><ArrowBigRightDash /></span>
        <button onClick={() => setOpen(!open)}>{open ? <PanelLeftOpen /> : <PanelRightClose />}</button>
      </div>

      <aside
        className={`fixed top-0 left-0 h-full bg-white text-amber-500 w-64 p-6 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 z-20`}
      >
        <h1 className="text-2xl font-bold mb-6">PostPilot</h1>
        <nav className="flex flex-col gap-4">
          <Link to="/dashboard" className="hover:text-amber-400">Dashboard</Link>
          <Link to="/posts" className="hover:text-amber-400">Posts</Link>
          <Link to="/accounts" className="hover:text-amber-400">Accounts</Link>
          <Link to="/settings" className="hover:text-amber-400">Settings</Link>
        </nav>
      </aside>

      {/* Overlay on mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}
