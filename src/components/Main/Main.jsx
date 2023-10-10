import "./Main.css";
import { motion } from "framer-motion";
import {
    titleVariants,
    paragraphVariants,
    containerVariants
} from "../../utils/transitionVariants";
import { useEffect, useState } from "react";
import fetchData from "../../api/fetchData";
import Loader from "../Loader/Loader";

export default function Main() {
    const [info, setInfo] = useState([]);

    /* Fetches homepage info and updates state with it */
    useEffect(() => {
        fetchData("info")
            .then((data) => {
                const splittedInfo = data[0].home.split("\n");
                setInfo(splittedInfo);
            })
            .catch((e) => console.error(e));
    }, []);

    return !info ? (
        <Loader />
    ) : (
        <motion.main
            variants={containerVariants}
            initial="start"
            animate="end"
            transition={{ when: "beforeChildren", staggerChildren: 0.65 }}
            exit="toLeft"
        >
            <motion.h1 variants={titleVariants} className="title">
                ELÍAS FERREIRA
            </motion.h1>
            <motion.p variants={paragraphVariants} className="main-text">
                {info[0]}
            </motion.p>
            <motion.p variants={paragraphVariants} className="main-text">
                {info[1]}
            </motion.p>
        </motion.main>
    );
}
