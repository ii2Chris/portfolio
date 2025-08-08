import Title from "./components/Title.jsx";
import Navbar from "./components/Navbar.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  return (
    <div className="bg-darkblue min-h-screen flex flex-col md:flex-row">
      {/* Left: Fixed Title and Navbar on desktop, sticky on mobile */}
      <div className="w-full md:w-1/3 md:fixed md:left-0 md:top-0 md:h-screen border-b md:border-b-0 md:border-r border-zinc-800 bg-darkblue z-10 flex flex-col justify-center px-6 md:px-10 gap-8 sticky top-0">
        <Title />
        <Navbar />
        <Contact />
      </div>
      {/* Right: Scrollable content, always present */}
      <div className="flex-1 h-screen overflow-y-auto md:ml-[33.3333%]">
        <section
          id="about"
          className="py-24 px-4 md:px-8 min-h-screen flex flex-col justify-center"
        >
          <About />
        </section>
        <section
          id="projects"
          className="py-24 px-4 md:px-8 min-h-screen flex flex-col justify-center"
        >
          <Projects />
          {/* TEMPORARY FILLER CONTENT FOR SCROLL TESTING */}
          <div className="h-96 bg-slate-800 my-8 rounded-lg flex items-center justify-center text-slate-200 text-xl">
            Temporary Filler Content 3
          </div>
          <div className="h-96 bg-slate-700 my-8 rounded-lg flex items-center justify-center text-slate-200 text-xl">
            Temporary Filler Content 4
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
