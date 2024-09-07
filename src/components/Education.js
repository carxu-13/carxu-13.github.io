// src/components/Skills.js

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { schools } from "../data";

export default function Education() {
  return (
    <section id="schools">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4 text-subtext" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Education
          </h1>
        </div>
        <div className="flex lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
  {schools.map((school) => (
    <div key={school.name} className="p-2 sm:w-1/2 w-full">
      <div className="bg-gray-800 rounded p-4">
        <div className="flex items-center mb-2">
          <BadgeCheckIcon className="w-6 h-6 flex-shrink-0 mr-4 text-subtext" />
          <span className="title-font font-medium text-white">
            {school.name}
          </span>
        </div>
        <div className="ml-10">
          {school.studies.map((studies, index) => (
            <div key={index} className="mb-4">
              <span className="block title-font font-medium text-white">
                {studies.study}
              </span>
              <ul className="list-disc list-inside text-white">
                {studies.courses.map((course, idx) => (
                  <li key={idx} className="text-white">{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}