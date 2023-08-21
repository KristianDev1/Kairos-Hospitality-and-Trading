import { Component } from "solid-js";
import Home from "./pages/Home";
import Footer from "./components/navigation/Footer";
import Nav from "./components/navigation/Nav";

const Main: Component = () => {
    return (
        <>
            <Nav />
            <Home />
            <Footer />
        </>
    )
}

export default Main;