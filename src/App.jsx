import "./App.css";
// import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
// import Projects from "./components/Projects.jsx";
// import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="bg-gradient-to-br from-darkred to-darkblue min-h-screen">
      <Navbar />
      <About />
    </div>
  );
}

export default App;
