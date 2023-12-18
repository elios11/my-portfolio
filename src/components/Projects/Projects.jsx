import { useContext, useEffect } from "react";
import "./Projects.css";
import Loader from "@components/Loader/Loader";
import { motion } from "framer-motion";
import { containerVariants, projectVariants } from "@utils/transitionVariants";
import { useLocation } from "react-router-dom";
import DataContext from "@context/DataContext";
import FetchDataToContext from "@utils/FetchDataToContext";

export default function Projects() {
    useLocation();
    const { projectsInfo, currentProject, setCurrentProject } =
        useContext(DataContext);

    const { loading } = FetchDataToContext();

    let exitAnimation = "toRight";
    if (window.location.pathname === "/projects") {
        exitAnimation = "toSamePage";
    }
    if (window.location.pathname === "/contact") {
        exitAnimation = "toLeft";
    }

    function openProject(e) {
        let newCurrentProject = projectsInfo.filter((project) => {
            return project.id == e.target.id;
        });
        setCurrentProject(newCurrentProject[0]);
    }

    let displayedProjects = [];

    if (projectsInfo !== null && !projectsInfo.error) {
        displayedProjects = projectsInfo.map((element) => {
            let isSelected = element.id === currentProject.id;
            return (
                <motion.img
                    className={`project--img projects-row-container-img ${
                        isSelected ? "selected-project" : ""
                    }`}
                    src={`/project-images/${element.img}/`}
                    key={element.id}
                    id={element.id}
                    onClick={openProject}
                />
            );
        });
    }

    return loading || !projectsInfo ? (
        <Loader />
    ) : (
        <motion.div
            className="projects-container"
            variants={containerVariants}
            initial="start"
            animate="end"
            exit={exitAnimation}
        >
            <div key={currentProject._id} className="project">
                <motion.img
                    className="project--img"
                    src={`/project-images/${currentProject.img}`}
                    variants={projectVariants}
                    initial="startFromLeft"
                    animate="end"
                />
                <div className="project--description">
                    <motion.p
                        className="project--description--text"
                        variants={projectVariants}
                        initial="startFromRight"
                        animate="end"
                    >
                        {currentProject.description}
                    </motion.p>
                    <motion.a
                        target="_blank"
                        href={currentProject.url}
                        className="project--description--link"
                        variants={projectVariants}
                        initial="startFromRight"
                        animate="end"
                        whileHover={{
                            backgroundColor: "rgb(0, 0, 0)",
                            color: "rgb(255, 255, 255)"
                        }}
                    >
                        Go to project website
                    </motion.a>
                </div>
            </div>

            <motion.div
                className="projects-row-container"
                variants={projectVariants}
                initial="startProjectsRow"
                animate="endProjectsRow"
            >
                {displayedProjects}
            </motion.div>
        </motion.div>
    );
}
