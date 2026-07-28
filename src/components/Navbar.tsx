import { Link } from "react-router-dom"
import "./Navbar.css";

export default function Navbar() {
 return (

    <nav
      className="glass-nav"
    >
      <div className="nav-inner">
        <ul className="nav-links">
          <Link to="/">home</Link>
          <Link to="/projects">projects</Link>
          <Link to="/about">about</Link>
        </ul>
      </div>
    </nav>
  );
}