// src/components/Title.jsx
export default function Title() {
  return (
    <section
      className="flex flex-col min-h-[60vh] text-center px-4 top-1/2 justify-center "
    >
      <h1 className="text-5xl text-left sm:text-6xl font-mono font-bold text-accent mb-4">
        <span className="text-6xl text-blue-400">&gt;</span> Christopher Budhram{" "}
        <span className="bg-accent/40 px-4 animate-pulse rounded">|</span>
      </h1>
      <p className="text-2xl text-left text-blue-200 max-w-2xl mb-2 font-mono font-bold">
        Software Developer
      </p>
      <p className="text-lg text-left text-gray-500 max-w-2xl mb-2 font-mono font-bold">
        My passion is to continue learning and exploring, the tech industry.
      </p>
    </section>
  );
}
