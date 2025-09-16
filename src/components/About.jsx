import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <div className="font-mono">
      <p className="text-slate-300 max-w-4xl mb-6">
        Hi! I'm Christopher Budhram. I am a recent graduate from{" "}
        <a
          className="text-blue-400 hover:text-blue-300"
          href="https://www.york.cuny.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          York College (CUNY)
        </a>
        .
      </p>

      <p className="text-slate-300 max-w-6xl mb-6">
        I'm current a recent graduate looking for my first role as a Software
        Engineer. I have a strong foundation in computer science and a passion
        for technology. I am eager to apply my skills and knowledge to
        real-world problems and contribute to a dynamic team.
      </p>

      <p className="text-slate-300 max-w-6xl mb-6">
        My main coding langugage is JavaScript. I’m comfortable across the
        frontend and I have experience with multiple JS libraries. I am
        currently learning backend technologies, such as Python and SQL.
      </p>

      <p className="text-slate-300 mb-6">
        Scroll to see my experience and projects. If something stands out, I’m
        happy to chat, my contact is on the left! (or up top on mobile).
      </p>
    </div>
  );
}
{
  /* Info panel */
}
<div className="my-8 rounded-lg border border-white/10 bg-white/5 p-4 sm:p-6">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 divide-y divide-white/10 sm:divide-y-0 sm:divide-x">
    {/* Tech/Skills */}
    <div className="pt-2 sm:pt-0 sm:pr-6 text-left">
      <h3 className="text-base sm:text-lg font-bold mb-3 text-blue-300 text-center sm:text-left">
        Tech Stack
      </h3>
      <div className="text-[13px] sm:text-sm space-y-2 text-slate-200 text-center sm:text-left">
        <p>
          <span className="text-blue-200">Frontend:</span> React, JavaScript,
          Tailwind
        </p>
        <p>
          <span className="text-blue-200">Backend:</span> Node.js, Express
        </p>
        <p>
          <span className="text-blue-200">Tools:</span> Git, Docker, Vercel
        </p>
      </div>
    </div>

    {/* Currently Working On */}
    <div className="pt-4 sm:pt-0 sm:px-6 text-left">
      <h3 className="text-base sm:text-lg font-bold mb-3 text-blue-300 text-center sm:text-left">
        Currently
      </h3>
      <ul className="text-[13px] sm:text-sm space-y-2 text-slate-200 text-center sm:text-left">
        <li>Learning Tech Skills</li>
      </ul>
    </div>

    {/* Quick Stats */}
    <div className="pt-4 sm:pt-0 sm:pl-6 text-left">
      <h3 className="text-base sm:text-lg font-bold mb-3 text-blue-300 text-center sm:text-left">
        Quick Stats
      </h3>
      <ul className="text-[13px] sm:text-sm space-y-2 text-slate-200 text-center sm:text-left">
        <li>Coffee consumed: Too many</li>
        <li>Based in: New York</li>
      </ul>
    </div>
  </div>
</div>;
