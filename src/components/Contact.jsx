// src/components/Contact.jsx

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
<div className="flex flex-col items-center ">
    <p className="font-mono text-gray-500 font-bold text-xl ml-4">Let's Connect!</p>
    <div className="flex flex-row items-center justify-center gap-6 mt-4 mb-12 px-2 w-full">
	      <a
        	href="https://github.com/ii2Chris"
        	target="_blank"
        	rel="noopener noreferrer"
        	className="text-slate-400 hover:text-slate-200 transition-colors"
        	aria-label="Github"
      	>
        	<FaGithub size={35} />
      	</a>
      	<a
        	href="https://www.linkedin.com/in/chrisbudhram/"
        	target="_blank"
        	rel="noopener noreferrer"
        	className="text-slate-400 hover:text-slate-200 transition-colors"
        	aria-label="LinkedIn"
      	>
		<FaLinkedin size={35} />
      	</a>
    	</div>
</div>
  );
}
