import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow  md:pr-16 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="mb-4 text-white">
            Hi, I'm Caroline.
          </h1>
          <p className="mb-8 leading-relaxed text-bgtext">
            I'm a current second year at the University of Virginia, where I hope to major in 
            Computer Science and Economics. I'm interested in working in Fintech. 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact me here!
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-1/4 ">
          <img
            className="object-cover object-center rounded"
            alt="headshot"
            src="/headshot.jpg"
          />
        </div>
      </div>
    </section>
  );
}