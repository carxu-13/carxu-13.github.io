// src/components/Education.js

import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { schools } from "../data";

export default function Education() {
  return (
    <section id="schools">
      <div className="container mx-auto px-6 py-20">
        <div className="mb-12 text-center lg:text-left">
          <p className="section-eyebrow mb-3">Education</p>
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">
            Education
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {schools.map((school) => (
            <div key={school.name} className="rounded-2xl border border-white/10 bg-surface/70 p-6">
              <div className="flex items-center gap-3">
                <BadgeCheckIcon className="w-6 h-6 text-bgtext" />
                <span className="text-lg font-semibold text-white">
                  {school.name}
                </span>
              </div>
              <div className="mt-5 space-y-5">
                {school.studies.map((studies, index) => (
                  <div key={index}>
                    <span className="block text-base font-semibold text-white">
                      {studies.study}
                    </span>
                    <ul className="mt-2 list-disc list-inside text-subtext space-y-1">
                      {studies.courses.map((course, idx) => (
                        <li key={idx}>{course}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
