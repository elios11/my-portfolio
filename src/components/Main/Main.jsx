import "./Main.css"
import { motion } from "framer-motion"
import { titleVariants, paragraphVariants, containerVariants } from "../../utils/transitionVariants"

export default function Main() {
    return (
        <motion.main
            variants={ containerVariants }
            initial="start"
            animate="end"
            transition={{ when: "beforeChildren", staggerChildren: 0.65 }}
            exit="toLeft"
        >
            <motion.h1 variants={ titleVariants } className="title">
                ELÍAS FERREIRA
            </motion.h1>
            <motion.p variants={ paragraphVariants } className="main-text">
                I am a Uruguayan front end developer, I currently develop in React and have the fundamentals
                of working with agile methodologies.
                I'm mostly self-taught and I always love learning new technologies that could fit any of my projects.
            </motion.p>
            <motion.p variants={ paragraphVariants } className="main-text">
                I aim to develop clean code and good practices, eager to make the improvements I know can
                make to my code as soon as I finish a big portion of it and reworking my whole work when necessary.
            </motion.p>
        </motion.main>
    )
}