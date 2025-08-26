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
          York College, City University of New York
        </a>
        .
      </p>

      <p className="text-slate-300 max-w-6xl mb-6">
        I am a Recent Computer Science graduate with way too much free time. I
        have a passion for building clean, user-focused applications. I love
        tackling challenging problems and learning new technologies along the
        way.
      </p>

      <p className="text-slate-300 max-w-6xl mb-6">
        I have experience in various programming languages and frameworks,
        including JavaScript, React, Node.js. I specialize in web development
        and full-stack solutions, with growing interests in machine learning.
        When I'm not coding, you'll find me contributing to open source
        projects, exploring the latest tech trends, or playing ranked matches in
        Marvel Rivals{" "}
        <a
          className="text-blue-400 hover:text-blue-300"
          href="https://tracker.gg/marvel-rivals/profile/ign/iiCopy/overview?season=6"
          target="_blank"
          rel="noopener noreferrer"
        >
          (check out my profile)
        </a>
        !
      </p>

      <p className="text-slate-300 mb-6">
        I'm always excited to connect with fellow developers, tech enthusiasts,
        and anyone interested in my work. Whether you have a question about a
        project, want to collaborate, or just want to say hi, feel free to reach
        out!
      </p>

      <p className="text-slate-300 mb-6">
        Keep scrolling to see some of my Experience, Projects, and Skills!
      </p>

      {/* Info panel */}
      <div className="my-8 rounded-lg border border-white/10 bg-white/5 p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 divide-y divide-white/10 sm:divide-y-0 sm:divide-x">
          {/* Tech/Skills */}
          <div className="pt-2 sm:pt-0 sm:pr-6 text-left">
            <h3 className="text-base sm:text-lg font-bold mb-3 text-blue-300 text-center sm:text-left">
              Tech Stack
            </h3>
            <div className="text-[13px] sm:text-sm space-y-2 text-slate-200 text-center sm:text-left">
              <p>
                <span className="text-blue-200">Frontend:</span> React,
                JavaScript, Tailwind
              </p>
              <p>
                <span className="text-blue-200">Backend:</span> Node.js, Express
              </p>
              <p>
                <span className="text-blue-200">Tools:</span> Git, Neovim, VS
                Code
              </p>
            </div>
          </div>

          {/* Currently Working On */}
          <div className="pt-4 sm:pt-0 sm:px-6 text-left">
            <h3 className="text-base sm:text-lg font-bold mb-3 text-blue-300 text-center sm:text-left">
              Currently Working On
            </h3>
            <ul className="text-[13px] sm:text-sm space-y-2 text-slate-200 text-center sm:text-left">
              <li>🚀 This portfolio site</li>
              <li>🤖 Exploring AI/ML integration</li>
              <li>📚 Contributing to open source</li>
              <li>💼 Job applications &amp; LC prep</li>
            </ul>
          </div>

          {/* Quick Stats */}
          <div className="pt-4 sm:pt-0 sm:pl-6 text-left">
            <h3 className="text-base sm:text-lg font-bold mb-3 text-blue-300 text-center sm:text-left">
              Quick Stats
            </h3>
            <ul className="text-[13px] sm:text-sm space-y-2 text-slate-200 text-center sm:text-left">
              <li>☕ Coffee consumed: Too many</li>
              <li>💻 Favorite editor: Neovim</li>
              <li>📍 Based in: New York</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
