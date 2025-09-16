import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="flex flex-col gap-4 font-mono text-2xl text-slate-300 mb-16">
      {navItems.map((item) => {
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setActive(item.id)} // 🔹 update immediately on click
            className={`transition-colors duration-200 
                        ${
                          isActive
                            ? "text-accent drop-shadow-[0_0_8px_rgba(157,170,242,0.8)]"
                            : "text-slate-300 hover:text-accent hover:drop-shadow-[0_0_8px_rgba(157,170,242,0.6)]"
                        }`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
