import React from "react";

export  const Footer = () => {
    return(
       <footer className="mt-20 text-gray-500 text-sm text-center mb-4">
        © {new Date().getFullYear()} PostLoop — All Rights Reserved.
      </footer>
    )
}