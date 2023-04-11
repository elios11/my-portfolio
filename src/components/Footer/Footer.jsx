import { motion } from "framer-motion"
import "./Footer.css"

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
        >
            <a href="https://www.linkedin.com/in/eliosferre/" target="_blank">
                <img src="/linkedin-logo.png" alt="LinkedIn logo" />
            </a>
            <a href="https://github.com/elios11" target="_blank">
                <img src="/github-logo.png" alt="GitHub logo" />
            </a>
        </motion.footer>
    )
}