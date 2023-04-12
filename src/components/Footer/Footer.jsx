import { motion } from "framer-motion"
import "./Footer.css"
import { buttonVariants } from "../../utils/transitionVariants"

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
        >
            <a href="https://www.linkedin.com/in/eliosferre/" target="_blank">
                <motion.img variants={buttonVariants} whileHover="hover" src="/linkedin-logo.png" alt="LinkedIn logo" />
            </a>
            <a href="https://github.com/elios11" target="_blank">
                <motion.img variants={buttonVariants} whileHover="hover" src="/github-logo.png" alt="GitHub logo" />
            </a>
        </motion.footer>
    )
}