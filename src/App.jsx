import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import ContactForm from "./components/ContactForm/ContactForm";
import Projects from "./components/Projects/Projects";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import background from "/background.jpg";

export default function App() {
    let location = useLocation();

    return (
        <>
            <Navbar />
            <video autoPlay muted loop playsInline poster={background}>
                <source src="/background-video.mp4" type="video/mp4" />
                <source src="/background-video.ogv" type="video/ogv" />
                <source src="/background-video.webm" type="video/webm" />
            </video>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<ContactForm />} />
                </Routes>
            </AnimatePresence>
            <Footer />
        </>
    );
}
