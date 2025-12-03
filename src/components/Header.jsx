import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-2xl font-extrabold text-amber-600">PostLoop</div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-amber-600">Home</Link>
          <a href="#features" className="text-gray-700 hover:text-amber-600">Features</a>
          <a href="#pricing" className="text-gray-700 hover:text-amber-600">Pricing</a>
          <Link to="/dashboard" className="text-gray-700 hover:text-amber-600">Dashboard</Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login"><button className="text-gray-700 hover:text-amber-600">Login</button></Link>
          <Link to="/signup"><button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-xl shadow-md">Start Free</button></Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X size={26}/> : <Menu size={26}/>}</button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t pb-4">
          <nav className="flex flex-col px-6 py-3 gap-4">
            <Link to="/" className="text-gray-700 hover:text-amber-600">Home</Link>
            <a href="#features" className="text-gray-700 hover:text-amber-600">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-amber-600">Pricing</a>
            <Link to="/login"><button className="w-full text-left text-gray-700 hover:text-amber-600">Login</button></Link>
            <Link to="/signup"><button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-xl shadow-md w-fit">Start Free</button></Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
