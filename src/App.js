import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Github from "./components/Github";
import Navbar from "./components/Navbar";
import ContactMe from "./components/ContactMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/about" element={[<Navbar />,<About />]}></Route>
          <Route path="/experience" element={[<Navbar />,<Experience />]}></Route>
          <Route path="/projects" element={[<Navbar />,<Github />]}></Route>
          <Route path="/contact" element={[<Navbar />,<ContactMe />]}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
