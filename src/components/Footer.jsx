export default function Footer() {
  return (
    <footer className="text-center p-4">
      <div className="space-x-4">
        <a href="mailto:ChristopherBudhram.jobs@gmail.com">Email</a>
        <a href="" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <a
          href="https://github.com/ii2Chris"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/chrisbudhram/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <p className="mt-2 text-gray-500">React • Vite • Tailwind</p>
      <p className="mt-1">
        &copy; {new Date().getFullYear()} Christopher Budhram · New York, NY
      </p>
    </footer>
  );
}
