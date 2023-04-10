import { motion } from "framer-motion"
import "./About.css"
import { containerVariants, paragraphVariants } from "../../utils/transitionVariants"
import { useLocation } from "react-router-dom"

export default function About({nextPath}) {
    let location = useLocation()
    return (
        <motion.div 
            className="about"
            variants={ containerVariants }
            initial="start"
            animate="end"
            transition={{ when: "beforeChildren", staggerChildren: 0.5 }}
            exit="toLeft"
            key={ location.pathname }
        >
            <motion.p
                variants={ paragraphVariants }
            >
                I am 21 years old and started getting interested in programming when I was 14.
                Then I decided I wanted to work developing software apps. When I finally got my hands
                onto coding, I learned about web development and loved it.
            </motion.p>
            <motion.p
                variants={ paragraphVariants }
            >
                I started with The Odin Project to learn the basics and then jumped into CS50x Harvard’s
                course. I tend to vary a lot my learning sources and am always trying to update my knowledge
                in any topic I learn to improve my code and practices.
            </motion.p>
            <motion.p
                variants={ paragraphVariants }
            >
                I finally took a programming course which included transversal skills and fully dove into 
                web development where I learned client-server model and the use of technologies like 
                Bootstrap, Sass, Node, Express and asynchrony in JavaScript, as well as the use of the fetch and localStorage APIs.
            </motion.p>
        </motion.div>
    )
}