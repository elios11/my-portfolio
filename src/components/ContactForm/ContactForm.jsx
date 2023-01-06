import { useState } from "react"
import "./ContactForm.css"

export default function ContactForm() {
    const [formData, setFormData] = useState({})

    return (
        <div className="form-container">
            <h1 className="form-title">Let's work together!</h1>
            <form>
                <label className="nameLabel" htmlFor="name">Name</label>
                <input className="nameContainer" type="name" id="name" />
                <label className="emailLabel" htmlFor="email">Email</label>
                <input className="emailContainer"  type="email" id="email" />
                <label className="msgLabel" htmlFor="message">Message</label>
                <textarea className="msgContainer" name="message" id="message"></textarea>
                <button className="send-button" type="button">SEND</button>
            </form>
        </div>
    )
}