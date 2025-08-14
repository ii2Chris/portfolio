import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-[#0e1422] text-slate-200">
      <div className="md:grid md:grid-cols-[1fr_2fr]">
        {/* LEFT RAIL */}

        <aside className="md:sticky md:top-0 md:h-screen p-8">
          {/* crisp line */}
          <div className="pointer-events-none absolute top-0 right-0.5 h-full w-[2px] bg-gradient-to-b from-transparent via-[#9daaf2] to-transparent opacity-90" />
          {/* soft glow halo */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-[8px] bg-[#9daaf2]/15 blur-sm" />

          <div className="flex h-full flex-col">
            <Title />
            <Navbar />

            <div className="mt-auto relative">
              <div className="absolute -top-6 left-0 right-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#9daaf2] to-transparent opacity-90" />
              <Contact />
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <section className="blue-glow max-w-4xl mx-auto px-4 sm:px-6 font-mono">
          {/* About */}
          <div id="about" className="py-24 space-y-8">
            <h2 className="text-3xl font-semibold tracking-tight text-white scroll-mt-24">
              About Me
            </h2>
            <About />
          </div>

          {/* Divider */}
          <div className="h-[2px] my-2 bg-gradient-to-r from-transparent via-[#9daaf2] to-transparent opacity-80" />

          {/* Experience */}
          <div id="Experience" className="py-24 space-y-8">
            <h2 className="text-3xl font-semibold tracking-tight text-white scroll-mt-24">
              Experience
            </h2>
            <Experience />
          </div>

          {/* Divider */}
          <div className="h-[2px] my-2 bg-gradient-to-r from-transparent via-[#9daaf2] to-transparent opacity-80" />

          {/* Projects */}
          <div id="projects" className="py-24 space-y-8">
            <h2 className="text-3xl font-semibold tracking-tight text-white scroll-mt-24">
              Projects
            </h2>
            <Projects />
          </div>

          {/* Divider */}
          <div className="h-[2px] my-2 bg-gradient-to-r from-transparent via-[#9daaf2] to-transparent opacity-80" />

          {/* Footer */}
          <footer className="py-8 text-center text-sm text-gray-400">
            <Footer />
          </footer>
        </section>
      </div>
    </main>
  );
}
