import { NavLink } from "react-router-dom"
import "./Navbar.css"
import { motion } from "framer-motion"

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, x: "-100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
        >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </motion.nav>
    )
}