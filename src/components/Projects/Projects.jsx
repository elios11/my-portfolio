import { useState } from "react"
import "./Projects.css"
import { motion } from "framer-motion"

export default function Projects(props) {
    let [currentProject, setCurrentProject] = useState({})

/*     let displayedProjects = props.projects.filter(project => {
        return (
            <motion.div>

            </motion.div>
        )
    }) */
    return (
        <motion.div className="projects-container">
            <div className="project">
                <div className="project--img-container">
                    <img className="project--img" src="/project-images/e-commerce.png"/>
                </div>
                <div className="project--description">
                    <p className="project--description--text">
                        e-commerce project for the Jóvenes a Programar curriculum, made with JavaScript, CSS, HTML, Bootstrap, and Sass.
                    </p>
                    <button className="project--description--btn">
                        <span className="project--description--btn-text">
                            Go to project website
                        </span>
                    </button>
                </div>
            </div>
                
            <div>

            </div>
        </motion.div>
    )
}