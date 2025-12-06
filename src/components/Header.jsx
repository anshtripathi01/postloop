import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { isLoggedIn, user } = useContext(AuthContext);

  // Auto-close mobile menu on login/logout
  useEffect(() => setOpen(false), [isLoggedIn]);
  console.log(user,"userdetails");
  

  return (
    <header className="w-full border-b bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-2xl font-extrabold text-amber-600">PostLoop</div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-amber-600">Home</Link>
          <a href="#features" className="text-gray-700 hover:text-amber-600">Features</a>
          <a href="#pricing" className="text-gray-700 hover:text-amber-600">Pricing</a>
          {isLoggedIn && <Link to="/dashboard" className="text-gray-700 hover:text-amber-600">Dashboard</Link>}
        </nav>

        {/* Desktop auth */}
        <div className="hidden md:flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <Link to="/login"><button className="text-gray-700 hover:text-amber-600">Login</button></Link>
              <Link to="/signup"><button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-xl shadow-md">Start Free</button></Link>
            </>
          ) : (
            <Link to="/dashboard"><button className="text-gray-700 hover:text-amber-600">Dashboard</button></Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26}/> : <Menu size={26}/>}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t pb-4">
          <nav className="flex flex-col px-6 py-3 gap-4">
            <Link to="/" className="text-gray-700 hover:text-amber-600">Home</Link>
            <a href="#features" className="text-gray-700 hover:text-amber-600">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-amber-600">Pricing</a>

            {isLoggedIn ? <h2 className="text-xl font-bold text-amber-300">{user.name}</h2> : (
              <>
                <Link to="/login"><button className="w-full text-left text-gray-700 hover:text-amber-600">Login</button></Link>
                <Link to="/signup"><button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-xl shadow-md w-fit">Start Free</button></Link>
              </>
            )}

            {isLoggedIn && (
              <Link to="/dashboard"><button className="w-full text-left text-gray-700 hover:text-amber-600">Dashboard</button></Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
