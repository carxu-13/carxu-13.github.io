// src/components/Navbar.js

import React from "react";

export default function Navbar() {
  return (
    <header className="container mx-auto px-6 pt-10 pb-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="section-eyebrow">Portfolio</p>
          <p className="nav-title text-white">Caroline Xu</p>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-subtext">
          <a className="transition hover:text-white" href="#about">About</a>
          <a className="transition hover:text-white" href="#schools">Education</a>
          <a className="transition hover:text-white" href="#projects">Projects</a>
          <a className="transition hover:text-white" href="#skills">Skills</a>
          <a className="transition hover:text-white" href="#footer">Contact</a>
        </nav>
      </div>
    </header>
  );
}
