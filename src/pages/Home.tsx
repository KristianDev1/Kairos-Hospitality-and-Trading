import { Component } from "solid-js";
import Hero from "../components/general/Hero";
import About from "../components/general/About";
import Contact from "../components/general/Contact";
import BreakComponent from "../components/general/BreakComponent";

const Home:Component = () => {
    return (
        <>
            <Hero />
            <About />
            <BreakComponent />
            <Contact />
        </>
    )
}

export default Home;