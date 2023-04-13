import { useState } from "react"
import "./Projects.css"
import { motion } from "framer-motion"
import { containerVariants, projectVariants } from "../../utils/transitionVariants"
import projects from "./projects.json"
import { useLocation } from "react-router-dom"

export default function Projects() {
    useLocation()

    let exitAnimation = "toRight"
    if (window.location.pathname === "/projects") {
        exitAnimation = "toSamePage"
    }
    if (window.location.pathname === "/contact") {
        exitAnimation = "toLeft"
    }

    let [currentProject, setCurrentProject] = useState(projects[0])

    function openProject(e) {
        let newCurrentProject = projects.filter(project => {
            return project.id == e.target.id
        })
        setCurrentProject(newCurrentProject[0])
    }

    let displayedProjects = projects.map(element => {
        let isSelected = element.id === currentProject.id;

        return (
            <motion.img
                className={`project--img projects-row-container-img ${isSelected ? "selected-project" : ""}`}
                src={`/project-images/${ element.img }/`}
                key={ element.id }
                id={ element.id }
                onClick={ openProject }
            />
        );
    });

    return (
        <motion.div
            className="projects-container"
            variants={ containerVariants }
            initial="start"
            animate="end"
            exit={ exitAnimation }
        >
            <div key={ currentProject.id } className="project">
                <motion.img
                    className="project--img"
                    src={`/project-images/${ currentProject.img }`}
                    variants={ projectVariants }
                    initial="startFromLeft"
                    animate="end"
                />
                <div className="project--description">
                    <motion.p
                        className="project--description--text"
                        variants={ projectVariants }
                        initial="startFromRight"
                        animate="end"
                    >
                        { currentProject.description }
                    </motion.p>
                    <motion.a
                        target="_blank"
                        href={ currentProject.url }
                        className="project--description--link"
                        variants={ projectVariants }
                        initial="startFromRight"
                        animate="end"
                        whileHover={{ backgroundColor: "rgb(0, 0, 0)", color: "rgb(255, 255, 255)" }}
                    >
                        Go to project website
                    </motion.a>
                </div>
            </div>

            <motion.div
                className="projects-row-container"
                variants={ projectVariants }
                initial="startProjectsRow"
                animate="endProjectsRow"
            >
                { displayedProjects }
            </motion.div>
        </motion.div>
    )
}