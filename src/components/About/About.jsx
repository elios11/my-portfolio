import { useContext } from "react";
import { motion } from "framer-motion";
import "./About.css";
import Loader from "@components/Loader/Loader";
import {
    containerVariants,
    paragraphVariants
} from "@utils/transitionVariants";
import { useLocation } from "react-router-dom";
import DataContext from "@context/DataContext";
import FetchDataToContext from "@utils/FetchDataToContext";

export default function About() {
    useLocation();
    const { aboutInfo } = useContext(DataContext);
    const { loading } = FetchDataToContext();

    let exitAnimation = "toLeft";
    if (window.location.pathname == "/") {
        exitAnimation = "toRight";
    }
    if (window.location.pathname == "/about") {
        exitAnimation = "toSamePage";
    }

    return loading || !aboutInfo ? (
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
