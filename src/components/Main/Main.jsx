import { useContext } from "react";
import "./Main.css";
import { motion } from "framer-motion";
import Loader from "@components/Loader/Loader";
import {
    titleVariants,
    paragraphVariants,
    containerVariants
} from "@utils/transitionVariants";
import DataContext from "@context/DataContext";
import FetchDataToContext from "@utils/FetchDataToContext";

export default function Main() {
    const { mainInfo } = useContext(DataContext);
    const { loading } = FetchDataToContext();

    return loading || !mainInfo ? (
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
                {mainInfo[0]}
            </motion.p>
            <motion.p variants={paragraphVariants} className="main-text">
                {mainInfo[1]}
            </motion.p>
        </motion.main>
    );
}
