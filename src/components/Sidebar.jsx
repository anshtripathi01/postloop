import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, Layers, Settings, LogOut } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: <Home size={18} /> },
    { name: "Create Post", path: "/post/create", icon: <Calendar size={18} /> },
    { name: "Scheduled Posts", path: "/scheduled", icon: <Layers size={18} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={18} /> },
  ];

  return (
    <aside className="
      fixed 
      left-0 top-0 
      h-screen 
      w-64 
      bg-white 
      border-r border-gray-200 
      shadow-sm 
      flex flex-col
      z-50
    ">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-amber-600">PostLoop</h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menu.map((item, index) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl font-medium 
                transition duration-200
                ${
                  active
                    ? "bg-amber-100 text-amber-700"
                    : "text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
