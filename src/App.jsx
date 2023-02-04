import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Projects from "./components/Projects";
import SideNav from "./components/SideNav";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SideNav />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
