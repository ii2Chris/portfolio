// src/components/Navbar.jsx

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    function handleScroll() {
      const aboutSection = document.getElementById("about");
      const projectsSection = document.getElementById("projects");
      if (!aboutSection || !projectsSection) return;
      const aboutRect = aboutSection.getBoundingClientRect();
      const projectsRect = projectsSection.getBoundingClientRect();
      if (projectsRect.top <= 100) {
        setActive((prev) => (prev !== "projects" ? "projects" : prev));
      } else {
        setActive((prev) => (prev !== "about" ? "about" : prev));
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex flex-col items-start gap-0 py-0 px-0 bg-transparent w-full mb-auto border-b border-slate-600 font-mono text-lg" >
      <ul className="flex flex-col items-start gap-2 w-full">
        <li className="w-full flex justify-start">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              setActive("about");
              const section = document.getElementById("about");
              if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className={`group flex items-center py-3 w-full text-left focus:outline-none ${
              active === "about" ? "text-slate-200" : ""
            }`}
          >
            <span
              className={`nav-indicator mr-4 h-px ${
                active === "about"
                  ? "w-16 bg-slate-200"
                  : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 transition-all motion-reduce:transition-none"
              }`}
            ></span>
            <span
              className={`nav-text text-xs font-bold uppercase tracking-widest ${
                active === "about"
                  ? "text-slate-200"
                  : "text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
              }`}
            >
              About
            </span>
          </a>
        </li>
        <li className="w-full flex justify-start">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              setActive("projects");
              const section = document.getElementById("projects");
              if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className={`group flex items-center py-3 w-full text-left focus:outline-none ${
              active === "projects" ? "text-slate-200" : ""
            }`}
          >
            <span
              className={`nav-indicator mr-4 h-px ${
                active === "projects"
                  ? "w-16 bg-slate-200"
                  : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 transition-all motion-reduce:transition-none"
              }`}
            ></span>
            <span
              className={`nav-text text-xs font-bold uppercase tracking-widest ${
                active === "projects"
                  ? "text-slate-200"
                  : "text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
              }`}
            >
              Projects
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
