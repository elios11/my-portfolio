import { motion } from "framer-motion";
import "./About.css";
import {
    containerVariants,
    paragraphVariants
} from "../../utils/transitionVariants";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchData from "../../api/fetchData";
import Loader from "../Loader/Loader";

export default function About() {
    useLocation();

    let exitAnimation = "toLeft";
    if (window.location.pathname == "/") {
        exitAnimation = "toRight";
    }
    if (window.location.pathname == "/about") {
        exitAnimation = "toSamePage";
    }

    const [aboutInfo, setAboutInfo] = useState(null);
    /* Fetches about info and updates state with it */
    useEffect(() => {
        fetchData("about")
            .then((data) => {
                const splittedInfo = data[0]?.about.split("\n");
                setAboutInfo(splittedInfo);
            })
            .catch((e) => console.error(e));
    }, []);

    return !aboutInfo ? (
        <Loader />
    ) : (
        <motion.div
            className="about"
            variants={containerVariants}
            initial="start"
            animate="end"
            transition={{ when: "beforeChildren", staggerChildren: 0.5 }}
            exit={exitAnimation}
        >
            <motion.p variants={paragraphVariants}>{aboutInfo[0]}</motion.p>
            <motion.p variants={paragraphVariants}>{aboutInfo[1]}</motion.p>
            <motion.p variants={paragraphVariants}>{aboutInfo[2]}</motion.p>
        </motion.div>
    );
}
