// src/components/About.jsx
export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"
    >
      <h1 className="text-5xl sm:text-6xl font-mono font-bold text-accent mb-4">
        <span className="text-6xl text-blue-400">&gt;</span> Chris{" "}
        <span className="bg-accent/40 px-4 animate-pulse rounded">|</span>
      </h1>
      <p className="text-lg text-gray-200 max-w-2xl mb-2">
        I am a software developer, gamer, and Marvel Rivals enjoyer.
      </p>
      <p className="text-lg text-gray-400 max-w-2xl mb-2">
        My passion is building simple, beautiful user experiences.
      </p>
      <p className="text-lg text-gray-400 max-w-2xl">
        Check out my{" "}
        <a
          href="https://marvelrivals.com/"
          className="text-accent font-semibold underline hover:text-blue-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Marvel Rivals
        </a>{" "}
        obsession below.
      </p>
    </section>
  );
}
