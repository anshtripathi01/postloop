import { Bell, User } from "lucide-react";

export default function Topbar() {
  return (
    <header className="w-full h-16 bg-white shadow flex items-center justify-between px-8 fixed top-0 left-64">
      <h2 className="text-xl font-semibold">Dashboard</h2>

      <div className="flex items-center gap-6">
        <Bell className="text-gray-600 cursor-pointer" />
        
        <div className="flex items-center gap-2 cursor-pointer">
          <User />
          <p className="text-sm font-medium">My Account</p>
        </div>
      </div>
    </header>
  );
}
