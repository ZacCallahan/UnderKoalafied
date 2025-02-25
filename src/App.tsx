import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Characters from "./pages/Characters.tsx";
import Socials from "./pages/Socials.tsx";
import Crew from "./pages/Crew.tsx";
import Quiz from "./pages/Quiz.tsx";
import "./styles/global.css";
import logo from "./assets/logo.png";

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <header>
          <img src={logo} alt="Under Koalafied Logo" className="logo" />{" "}
          {/* Add logo */}
          <nav>
            <Link to="/">Home</Link>
            <Link to="/characters">Meet the Animals</Link>
            <Link to="/crew">Meet the Humans</Link>
            <Link to="/quiz">Take our Character Quiz</Link>
            <Link to="/socials">Follow Our Socials</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/socials" element={<Socials />} />
          </Routes>
        </main>

        <footer>
          &copy; 2025 Peregrine Productions + Savant Garde Productions
        </footer>
      </div>
    </Router>
  );
};

export default App;
