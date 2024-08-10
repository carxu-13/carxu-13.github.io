// src/components/Navbar.js

import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 bg-opacity-75 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="title-font font-medium text-white mb-4 md:mb-0 no-underline">
          <p className="text-xl text-white">
            Caroline Xu
          </p>
        </p>
      </div>
    </header>
  );
}