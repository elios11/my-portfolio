import { useState } from "react"
import "./ContactForm.css"
import { motion } from "framer-motion"
import { containerVariants } from "../../utils/transitionVariants"
import { useLocation } from "react-router-dom"

export default function ContactForm() {
    useLocation()
    let [email, setEmail] = useState("")
    let exitAnimation = window.location.pathname == "/contact" ? "toSamePage" : "toRight"

    function updateEmail(event) {
        setEmail(event.target.value)
    }

    return (
        <motion.div 
            className="form-container"
            variants={ containerVariants }
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={ exitAnimation }
        >
            <h1 className="form-title">Let's work together!</h1>
            <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="1b123a8b-32f6-45f7-9f57-22fd47dea4f2" />
                <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                <input type="hidden" name="subject" value={ email } />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }}></input>
                <label className="nameLabel" htmlFor="name">Name</label>
                <input className="inputName" type="text" name="Name" id="name" required />
                <label className="emailLabel" htmlFor="email">Email</label>
                <input className="inputEmail" type="email" name="Email" id="email" onChange={ updateEmail } required />
                <label className="msgLabel" htmlFor="message">Message</label>
                <textarea className="inputMsg" name="Message" id="message" required></textarea>
                <motion.button
                    className="send-button" type="submit"
                    whileHover={{ backgroundColor: "white", color: "black" }}
                >
                    SEND
                </motion.button>
            </form>
        </motion.div>
    )
}