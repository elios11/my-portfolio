/* Main variants */
export const containerVariants = {
    toLeft: {
        x: "-100vw",
        opacity: 0,
        transition: {
            type: "spring",
            duration: 0.45
        }
    },
    toRight: {
        x: "100vw",
        transition: {
            type: "spring",
            duration: 0.45
        }
    },
    toSamePage: {
        opacity: 0,
        transition: {
            type: "spring",
            duration: 0.45
        }
    }
}

export const titleVariants = {
    start: {
        x: "-100vw"
    },
    end: {
        x: 0,
        transition: {
            duration: 1,
            type: "spring",
            stiffness: 70
        }
    }
}

export const paragraphVariants = {
    start: {
        opacity: 0,
    },
    end: {
        opacity: 0.8,
        transition: {
            duration: 1,
            type: "spring"
        }
    }
}

export const buttonVariants = {
    hover: {
        opacity: 1,
        scale: 1.1,
        transition: {
            repeatType: "reverse",
            repeat: Infinity,
            duration: 0.6
        }
    }
}

export const projectVariants = {
    startFromLeft: {
        x: "-100vw",
        opacity: 0
    },
    startFromRight: {
        x: "100vw",
        opacity: 0
    },
    end: {
        x: 0,
        opacity: 0.75,
        transition: {
            type: "tween",
            duration: 0.6
        }
    },
    startProjectsRow: {
        opacity: 0,
        scale: 0
    },
    endProjectsRow: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "tween",
            duration: 0.5
        }
    }
}