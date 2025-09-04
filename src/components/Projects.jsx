import { useEffect, useRef, useState } from "react";

export default function Projects() {
  // ── Real content (edit freely) ──────────────────────────────────────────────

  const projects = [
    // 1) Showcase app with audience & matching value
    {
      id: "certgram",
      title: "CertGram",
      blurb: "Find people going to the concert; match by artist & location.",
      tech: ["React", "Vite", "Supabase", "Tailwind"],
      highlights: [
        "Optimistic UI for likes/saves; no waiting on network.",
        "Client-side cache avoids refetch on tab switches.",
        "Route-level code splitting for faster initial load.",
      ],
      links: {
        live: "https://certgram.vercel.app/",
        code: "https://github.com/ii2Chris/syncwave-final",
      },
    },

    // 2) Reusable system (signals design/system thinking)
    {
      id: "grid-system",
      title: "Responsive Grid System",
      blurb: "Mini CSS framework for clean 12-column layouts.",
      tech: ["CSS Grid", "Flexbox", "PostCSS"],
      highlights: [
        "Desktop/tablet/phone with fluid gutters.",
        "Clamp() typography for readable scaling.",
        "Docs and examples for common patterns.",
      ],
      links: {
        live: "https://responsive-grid-layout-mu.vercel.app",
        code: "https://github.com/ii2Chris/Web-Design-1",
      },
    },

    // 3) Portfolio (production quality, shows craft)
    {
      id: "portfolio",
      title: "Portfolio Website",
      blurb: "This site — clean sections, smooth nav, consistent dividers.",
      tech: ["React", "Vite", "Tailwind"],
      highlights: [
        "Sticky nav with active section highlight.",
        "Semantic landmarks + basic SEO meta.",
        "Lazy-loaded images and explicit dimensions.",
      ],
      links: {
        live: "https://chrisbudhram.vercel.app/",
        code: "https://github.com/ii2Chris/portfolio",
      },
    },

    // 4) Misc demos
    {
      id: "js-playground",
      section: "JS Playground",
      title: "JS Playground",
      blurb: "Small utilities & UI widgets built for practice.",
      tech: ["JavaScript"],
      highlights: [
        "Debounce/throttle helpers + fetch wrappers.",
        "Micro-interactions for hover/focus states.",
        "Collection is organized and documented.",
      ],
      links: {
        code: "https://github.com/ii2Chris/javascript-playground",
      },
    },

    // ————— Web UI Demos (full pages / mockups) —————
    {
      id: "pulseboard",
      section: "Web UI Demos",
      title: "PulseBoard — Patient Dashboard (UI Demo)",
      blurb:
        "Three-column desktop dashboard with BP trend chart, KPI cards, and profile/labs panels.",
      tech: ["HTML", "CSS", "JavaScript", "Chart.js"],
      highlights: [
        "Desktop 3-column layout with sticky pill navbar.",
        "KPI cards (respiratory rate, temperature, heart rate) from latest record.",
        "Vanilla JS only (Chart.js via CDN); lightweight, framework-free build.",
      ],
      links: {
        code: "https://github.com/ii2Chris/javascript-playground/tree/main/projects/pulseboard",
      },
    },
  ];
  // ─────────────────────────────────────────────────────────────────────────────

  const trackRef = useRef(null);
  const cardRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdgeState = () => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setAtStart(scrollLeft <= 0);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 2);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateEdgeState();
    const onScroll = () => updateEdgeState();
    const onResize = () => updateEdgeState();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollByOneCard = (dir) => {
    const container = trackRef.current;
    const card = cardRef.current;
    if (!container || !card) return;
    const gap = 24; // gap-6
    const step = card.offsetWidth + gap; // 480 + 24 by default
    container.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="projects" className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-lg uppercase tracking-wide text-blue-200">
          Projects
        </h1>
        <p className="text-sm text-gray-500">Use the arrows to browse</p>
      </header>

      <div className="relative">
        <CarouselButton
          side="left"
          onClick={() => scrollByOneCard(-1)}
          disabled={atStart}
        />
        <CarouselButton
          side="right"
          onClick={() => scrollByOneCard(1)}
          disabled={atEnd}
        />

        {/* TRACK: grid → equal heights via items-stretch */}
        <div
          ref={trackRef}
          className="grid grid-flow-col auto-cols-[480px] gap-6 items-stretch
                     overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onWheel={(e) => e.preventDefault()}
        >
          {/* hide webkit scrollbar */}
          <style>{`
            #projects::-webkit-scrollbar, 
            #projects div::-webkit-scrollbar { display: none; }
          `}</style>

          {projects.map((p, i) => (
            <div
              key={p.id}
              ref={i === 0 ? cardRef : null}
              className="h-full snap-start" // no fixed width needed; auto-cols handles it
            >
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CarouselButton({ side = "left", onClick, disabled }) {
  const isLeft = side === "left";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isLeft ? "Previous projects" : "Next projects"}
      className={`absolute top-1/2 -translate-y-1/2 ${
        isLeft ? "-left-5" : "-right-5"
      } z-10 h-10 w-10 grid place-items-center rounded-full
                 border border-white/15 bg-white/5 backdrop-blur
                 text-gray-200 shadow-sm
                 hover:bg-white/10 hover:border-white/25 hover:shadow
                 active:scale-[0.98]
                 disabled:opacity-40 disabled:cursor-not-allowed`}
    >
      <span className="text-base leading-none select-none">
        {isLeft ? "←" : "→"}
      </span>
    </button>
  );
}

function ProjectCard({ title, blurb, tech = [], highlights = [], links = {} }) {
  return (
    <article
      className="group relative h-full rounded-lg border border-white/10 p-5 
                 bg-transparent hover:bg-white/5 
                 hover:border-white/20 transition-all duration-200
                 flex flex-col" // fill column + vertical layout
    >
      {/* TOP: Title, blurb, tech + highlights area grows */}
      <div className="flex-1 flex flex-col">
        <header className="space-y-1">
          <h3 className="text-base font-semibold text-gray-200 tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-gray-400">{blurb}</p>
          {tech.length > 0 && (
            <p className="text-xs italic text-gray-500">{tech.join(" • ")}</p>
          )}
        </header>

        {highlights.length > 0 && (
          <ul
            className="mt-3 grow overflow-auto pr-1
                         max-h-40 list-disc pl-5 space-y-1
                         text-sm leading-relaxed text-gray-300 marker:text-gray-500"
          >
            {highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}
      </div>

      {/* BOTTOM: Links pinned to bottom */}
      <div className="pt-4 flex flex-wrap gap-2">
        {links.live && (
          <a
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded border border-white/20 
                       px-3 py-1.5 text-sm text-gray-200
                       hover:bg-white/10 transition"
          >
            Live <span aria-hidden>↗</span>
          </a>
        )}
        {links.code && (
          <a
            href={links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded border border-white/20 
                       px-3 py-1.5 text-sm text-gray-200
                       hover:bg-white/10 transition"
          >
            Code <span aria-hidden>↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
