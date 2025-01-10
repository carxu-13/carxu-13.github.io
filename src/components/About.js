import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow  md:pr-16 md:items-start md:text-left mb-16 md:mb-0 text-center">
          <h1 className="mb-4 text-white">
            Hi, I'm Caroline.
          </h1>
          <p className="mb-8 leading-relaxed text-white">
          Hi! I'm a second-year Echols Scholar at the University of Virginia majoring in Computer Science and Economics.
          <br />
          <br/>My current interests include: Fintech, Data Analytics, Artificial Intelligence. 
          <br />
          <br/>Outside of my studies, I am also a co-chair for the Hackathon for University of Virginia's Women in Computing Sciences club. 
          </p>
          <div className="flex justify-center">
            <a class="button-6" href="#footer"role="button">Contact me</a>
            <a class="button-6" href="#projects"role="button">Personal Projects</a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-1/5 ">
          <img
            className="object-cover object-center rounded"
            alt="Caroline Xu Headshot"
            src="/headshot.jpg"
          />
        </div>
      </div>
    </section>
  );
}