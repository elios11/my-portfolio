/* Main variants */
export const containerVariants = {
    toLeft: {
        x: "-100vw",
        transition: {
            type: "spring",
            duration: 0.6
        }
    },
    toRight: {
        x: "100vw",
        transition: {
            type: "spring",
            duration: 0.6
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
        opacity: 1,
        transition: {
            duration: 1,
            type: "spring"
        }
    }
}

export const linkVariants = {
    end: {
        color: "#FFFFFF",
        transition: {
            duration: 1.3,
            repeatType: "reverse",
            repeat: Infinity
        }
    }
}