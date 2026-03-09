import React from "react";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="container mx-auto px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 text-center lg:text-left">
            <p className="text-bgtext uppercase tracking-widest text-xs mb-4">
              About
            </p>
            <h1 className="mb-6 text-4xl sm:text-5xl font-semibold leading-tight text-white">
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
              <a className="button-6" href="#footer" role="button">Contact me</a>
              <a className="button-6" href="#projects" role="button">Personal Projects</a>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="rounded-2xl bg-bgblue/60 p-3 shadow-xl ring-1 ring-white/10">
              <img
                className="object-cover object-center rounded-xl w-56 sm:w-72 lg:w-80"
                alt="Caroline Xu Headshot"
                src="/headshot.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
