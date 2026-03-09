// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container mx-auto px-6 py-20">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-eyebrow mb-3">Projects</p>
            <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">
              What I've Built
            </h2>
            <p className="max-w-xl text-subtext">
              Personal projects, class projects, hackathon submissions.
            </p>
          </div>
          <a className="btn btn-secondary" href="#footer">Work with me</a>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group rounded-2xl border border-white/10 bg-surface/70 p-6 transition hover:-translate-y-1 hover:border-bgtext/60 hover:shadow-glow"
            >
              <div className="flex items-center gap-3 text-sm text-bgtext">
                <CodeIcon className="h-5 w-5" />
                <span>{project.subtitle}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-subtext leading-relaxed">
                {project.description}
              </p>
              <div className="mt-6 text-sm font-semibold text-bgtext">
                View project
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
