import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import About from "./components/About/About"
import { Route, Routes } from "react-router-dom"

export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </>
    )
}