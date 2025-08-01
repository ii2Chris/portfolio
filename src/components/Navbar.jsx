// src/components/Navbar.jsx
import { FaHome, FaInfoCircle, FaBriefcase, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-zinc-900 px-6 py-3 rounded-b-lg shadow-lg">
      <div className="flex items-center gap-2 text-white font-bold text-xl">
        React{" "}
        <span className="text-blue-400">
          <FaHome />
        </span>
      </div>
      <ul className="flex items-center gap-4">
        <li>
          <a
            href="#home"
            className="flex items-center gap-1 px-3 py-1 rounded bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
          >
            <FaHome /> Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="flex items-center gap-1 text-white hover:text-blue-400 transition"
          >
            <FaInfoCircle /> About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="flex items-center gap-1 text-white hover:text-blue-400 transition"
          >
            <FaBriefcase /> Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="flex items-center gap-1 text-white hover:text-blue-400 transition"
          >
            <FaEnvelope /> Contact
          </a>
        </li>
        <li>
          <button className="ml-2 px-3 py-1 rounded bg-gray-200 text-gray-900 font-semibold hover:bg-gray-300 transition">
            Sign Up
          </button>
        </li>
      </ul>
    </nav>
  );
}
