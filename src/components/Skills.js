// src/components/Skills.js

import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="section-eyebrow mb-3">Skills</p>
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-base leading-relaxed max-w-2xl mx-auto text-subtext">
            These are some of the skills I've developed through projects, classes, and other coding experiences.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-surface/60 px-4 py-2 text-sm text-subtext"
            >
              <BadgeCheckIcon className="h-4 w-4 text-bgtext" />
              <span className="font-medium text-white">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
