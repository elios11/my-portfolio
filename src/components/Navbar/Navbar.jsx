import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav>
            <Link to="/" className="active">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}