import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <div className="font-mono">
      <h2 className="text-3xl font-bold text-slate-100 mb-4">About Me</h2>
      <p className="text-slate-300 max-w-4xl mb-6">
        Hi! I'm Christopher Budhram. I am a recent graduate from{" "}
        <a
          className="text-blue-400 hover:text-blue-300"
          href="https://www.york.cuny.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          York College, City University of New York
        </a>.
      </p>
      
      <p className="text-slate-300 max-w-6xl mb-6">
       I am a Recent Computer Science graduate with way too much free time. I have a passion for building clean, user-focused applications. I love tackling challenging problems and learning new technologies along the way.
	</p>
      <p className="text-slate-300 max-w-6xl mb-6">
	I have experience in various programming languages and frameworks, including JavaScript, React, Node.js. I specialize in web development and full-stack solutions, with growing interests in machine learning. When I'm not coding, you'll find me contributing to open source projects, exploring the latest tech trends, or playing ranked matches in Marvel Rivals{" "}
      <a
          className="text-blue-400 hover:text-blue-300"
          href="https://tracker.gg/marvel-rivals/profile/ign/iiCopy/overview?season=6"
          target="_blank"
          rel="noopener noreferrer"
        >
          (check out my profile)
        </a>!
      </p>

      <p className="text-slate-300 mb-6">
        I'm always excited to connect with fellow developers, tech enthusiasts, and anyone interested in my work. Whether you have a question about a project, want to collaborate, or just want to say hi, feel free to reach out!
      </p>
	<p className="text-slate-300 mb-6">
	 Keep scrolling to see some of my Experience, Projects, and Skills!
	</p>
         <div className="h-96 bg-slate-800 my-8 rounded-lg flex items-center justify-center text-slate-200 text-xl p-8">
  <div className="flex w-full max-w-4xl justify-between gap-8">
    
    {/* Tech/Skills Column */}
    <div className="flex-1 text-center">
      <h3 className="text-lg font-bold mb-4 text-blue-300">Tech Stack</h3>
      <div className="text-sm space-y-2">
        <p><span className="text-blue-200">Frontend:</span> React, JavaScript, Tailwind</p>
        <p><span className="text-blue-200">Backend:</span> Node.js, Express</p>
        <p><span className="text-blue-200">Tools:</span> Git, Neovim, VS Code</p>
      </div>
    </div>

    {/* Current Projects Column */}
    <div className="flex-1 text-center">
      <h3 className="text-lg font-bold mb-4 text-blue-300">Currently Working On</h3>
      <div className="text-sm space-y-2">
        <p>🚀 This portfolio site</p>
        <p>🤖 Exploring AI/ML integration</p>
        <p>📚 Contributing to open source</p>
        <p>💼 Job applications & LC prep</p>
      </div>
    </div>

    {/* Quick Stats Column */}
    <div className="flex-1 text-center">
      <h3 className="text-lg font-bold mb-4 text-blue-300">Quick Stats</h3>
      <div className="text-sm space-y-2">
        <p>☕ Coffee consumed: Too many</p>
        <p>💻 Favorite editor: Neovim</p>
        <p>📍 Based in: New York</p>
      </div>
    </div>
  </div>
</div>
</div>
  );
}
