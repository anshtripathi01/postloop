import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import LogoutButton from "./Logout";

export default function Topbar() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white shadow flex justify-end items-center px-6 md:ml-64 z-10">
      {isLoggedIn && <LogoutButton />}
    </div>
  );
}
