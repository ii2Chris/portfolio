export default function ExperienceSection() {
  return (
    <section id="experience" className="space-y-8">
      {/* Heading */}
      <header>
        <p className="text-sm text-gray-500">
          Internships, education, and skills at a glance
        </p>
      </header>

      {/* Experience */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Internships</h3>
        <article>
          <header className="flex flex-wrap items-baseline gap-2">
            <h3 className="text-lg font-medium">
              Technical Intern · CUNY – Queens College
            </h3>
            <span className="text-sm text-gray-500">Jul–Sep 2024</span>
          </header>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Designed responsive Figma mockups for a real‑estate platform;
              translated to semantic HTML/CSS.
            </li>
            <li>
              Worked in weekly reviews; participated in Agile sprints and design
              critiques.
            </li>
          </ul>
        </article>

        <article>
          <header className="flex flex-wrap items-baseline gap-2">
            <h3 className="text-lg font-medium">
              Software Engineer Fellow · CUNY Tech Prep
            </h3>
            <span className="text-sm text-gray-500">Aug 2024–May 2025</span>
          </header>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Full‑stack training with React/Node/JS; team projects with Git and
              Agile.
            </li>
            <li>
              Presented “CertGram” at the final showcase to 100+ attendees.
            </li>
          </ul>
        </article>
      </div>

      {/* Education */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Education</h3>
        <div>
          <p className="font-medium">
            CUNY – York College · B.S. Computer Science
          </p>
          <p className="text-sm text-gray-600">
            Aug 2021–May 2025 · GPA 3.3 · Dean’s List 2023 · NSF S‑STEM Scholar
            · ACE Scholar
          </p>
          <p className="text-sm text-gray-600">
            Relevant: Algorithms & Data Structures, Software Dev, Principles of
            PL, Networking, Architecture
          </p>
        </div>
        <div>
          <p className="font-medium">
            CUNY Tech Prep · Software Engineer Fellow
          </p>
          <p className="text-sm text-gray-600">
            Aug 2024–May 2025 · Modern full‑stack (React/Node/JS), Agile, Git
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Skills</h3>
        <ul className="flex flex-wrap gap-2 text-sm">
          {[
            "JavaScript",
            "C/C++",
            "Node.js",
            "React",
            "Express",
            "Vite",
            "TailwindCSS",
            "PostgreSQL",
            "Supabase",
            "SQL (basic)",
            "Git",
            "Figma",
            "Neovim",
            "Troubleshooting",
            "Client Support",
            "Agile",
          ].map((s) => (
            <li key={s} className="px-2 py-1 rounded border">
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Resume link */}
      <div className="pt-4">
        <a
          href="/Resume.pdf"
          className="inline-flex items-center gap-2 border px-3 py-2 rounded"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume (PDF)
        </a>
      </div>
    </section>
  );
}
