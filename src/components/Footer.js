import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
    return (
      <footer id="footer" className="container mx-auto px-6 pb-24 pt-10">
        <div className="rounded-3xl border border-white/10 bg-surface/70 px-6 py-12 text-center sm:px-10">
          <p className="section-eyebrow mb-3">Contact</p>
          <h2 className="font-display text-3xl text-white mb-4">
            Interested in working with me?
          </h2>
          <p className="text-subtext mb-8">
            I'm always excited to collaborate on thoughtful products and ideas.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-bgtext">
            <a
              href="https://github.com/carxu-13"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-midblue/70 text-2xl transition hover:border-bgtext/70 hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/caroline-xu1/"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-midblue/70 text-2xl transition hover:border-bgtext/70 hover:text-white"
              aria-label="LinkedIn"
            >
              <CiLinkedin />
            </a>
            <a
              href="mailto:carolinexu2014@gmail.com"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-midblue/70 text-2xl transition hover:border-bgtext/70 hover:text-white"
              aria-label="Email"
            >
              <MdOutlineMail />
            </a>
          </div>
        </div>
      </footer>
    )
}
