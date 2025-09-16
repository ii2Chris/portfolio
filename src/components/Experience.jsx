export default function ExperienceSection() {
  return (
    <section id="experience" className="space-y-8">
      {/* Experience */}
      <div className="space-y-6">
        <h1 className="text-lg uppercase tracking-wide text-blue-200">
          Internships
        </h1>

        <article className="first:border-t-0 border-t border-white/10 pt-4">
          <header className="flex items-baseline gap-2">
            <h3 className="text-lg font-medium min-w-0 truncate">
              Technical Intern · CUNY – Queens College
            </h3>
            <span className="ml-auto text-xs font-medium tracking-wider text-gray-400 whitespace-nowrap">
              Jul 2024 – Sep 2024
            </span>
          </header>

          <ul className="mt-2 max-w-[72ch] list-disc pl-5 space-y-2 leading-relaxed marker:text-gray-400">
            <li>
              Built responsive Figma mockups for a real-estate platform and a
              small component set (buttons, forms, cards) to speed up handoff to
              engineering.
            </li>
            <li>
              Participated in Agile sprints and weekly design critiques,
              improving collaboration and delivery speed.
            </li>
          </ul>
        </article>

        <article className="pt-4">
          <header className="flex items-baseline gap-2">
            <h3 className="text-lg font-medium min-w-0 truncate">
              Software Engineer Fellow · CUNY Tech Prep
            </h3>
            <span className="ml-auto text-xs font-medium tracking-wider text-gray-400 whitespace-nowrap">
              Aug 2024 – May 2025
            </span>
          </header>

          <ul className="mt-2 max-w-[72ch] list-disc pl-5 space-y-2 leading-relaxed marker:text-gray-400">
            <li>
              Gained full-stack experience with{" "}
              <span className="font-semibold">React</span>,{" "}
              <span className="font-semibold">Node.js</span>, and modern{" "}
              <span className="font-semibold">JavaScript</span> through an
              intensive, project-based program.
            </li>
            <li>
              Presented “CertGram” to 100+ attendees, demonstrating a
              production-ready concert-matching platform.
            </li>
          </ul>
        </article>
      </div>

      {/* Education */}
      <div className="space-y-4 mt-8">
        <h1 className="text-lg uppercase tracking-wide text-blue-200">
          Education
        </h1>

        <div className="first:border-t-0 border-t border-white/10 pt-4">
          <header className="flex items-baseline gap-2">
            <h4 className="font-medium min-w-0 truncate">
              CUNY – York College · B.S. Computer Science
            </h4>
            <span className="ml-auto text-xs font-medium tracking-wider text-gray-400 whitespace-nowrap">
              Aug 2021 – May 2025
            </span>
          </header>
          <p className="text-sm text-gray-500 mt-1">
            GPA 3.3 · Dean’s List 2023 · NSF S-STEM Scholar · ACE Scholar
          </p>
          <p className="text-sm text-gray-500">
            Relevant Coursework: Algorithms & Data Structures, Software Dev,
            Principles of PL, Networking, Architecture
          </p>
        </div>

        <article className="pt-4">
          <header className="flex items-baseline gap-2">
            <h4 className="font-medium min-w-0 truncate">
              CUNY Tech Prep · Software Engineer Fellow
            </h4>
            <span className="ml-auto text-xs font-medium tracking-wider text-gray-400 whitespace-nowrap">
              Jul 2024 – May 2025
            </span>
          </header>
          <p className="text-sm text-gray-500 mt-1">
            Modern full-stack (React/Node/JS), Agile, Git
          </p>
        </article>
      </div>

      {/* Skills */}
      <div className="space-y-4 mt-8">
        <h2 className="text-lg uppercase tracking-wide text-blue-200">
          Skills
        </h2>

        <div className="first:border-t-0 border-t border-white/10 pt-4">
          <SkillRow
            label="Languages"
            items={["JavaScript", "C/C++", "SQL", "Python"]}
          />
          <SkillRow
            label="Frameworks & Libraries"
            items={["React", "Node.js", "Express", "Vite", "TailwindCSS"]}
          />
          <SkillRow
            label="Tools & Platforms"
            items={[
              "Git",
              "GitHub",
              "Linux",
              "PostgreSQL",
              "SQLite",
              "Supabase",
              "Docker",
              "Vercel",
              "Figma",
            ]}
          />
        </div>
        {/* Divider below skills */}
        <div className="border-t border-white/10 pt-4">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-white/15 
             px-3 py-1.5 text-sm hover:bg-white/10 transition"
          >
            View Resume (PDF) ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function SkillRow({ label, items }) {
  return (
    <div className="py-3 flex items-start gap-4">
      {/* fixed label column */}

      <div className="w-56 shrink-0 text-sm text-gray-500 self-center">
        {label}
      </div>

      {/* pills */}
      <ul className="flex flex-wrap gap-2 text-sm">
        {items.map((s) => (
          <li
            key={s}
            className="px-2 py-1 rounded border border-white/20 bg-white/5
                       hover:bg-white/10 transition"
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
