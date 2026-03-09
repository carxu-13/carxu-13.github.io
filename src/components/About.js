import React from "react";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-bgtext/20 blur-3xl" aria-hidden="true" />
      <div className="container mx-auto px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 text-center lg:text-left">
            <p className="section-eyebrow mb-4">Hello</p>
            <h1 className="mb-6 font-display text-4xl sm:text-5xl leading-tight text-white">
              Hi, I'm Caroline.
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-subtext max-w-2xl mx-auto lg:mx-0">
              Hi! I'm a third-year Echols Scholar at the University of Virginia majoring in Computer Science and Economics.
              <br />
              <br />My current interests include: Fintech, Data Analytics, Artificial Intelligence.
              <br />
              <br />Outside of my studies, I am also a co-chair for the Hackathon for University of Virginia's Women in Computing Sciences club.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a className="btn btn-primary" href="#footer" role="button">Contact me</a>
              <a className="btn btn-secondary" href="#projects" role="button">Personal Projects</a>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-bgtext/30 to-transparent blur-2xl" aria-hidden="true" />
              <div className="relative rounded-3xl bg-surface/70 p-4 shadow-2xl ring-1 ring-white/10">
                <img
                  className="object-cover object-center rounded-2xl w-64 sm:w-80 lg:w-96"
                  alt="Caroline Xu Headshot"
                  src="/headshot.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
