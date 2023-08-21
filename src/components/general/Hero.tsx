import { Component } from "solid-js";

const Hero: Component = () => {
    return (
        <>
            <header class="w-full relative h-screen bg-gray-200 backgroundMobileImage md:hidden" id="home">
                <div class="w-full bg-yellow-600 md:px-36 bottom-0 left-0 bg-opacity-80 py-6 md:py-14 absolute">
                <p class="text-white text-lg  sm:text-xl text-center font-thin">
                        An Unforgettable Culinary Affair Awaits! Step into a world of culinary marvels, where events, weddings, corporate soirées, and private functions become moments of pure delight. Our chef's innovative artistry promises to leave a lasting impression on your guests' palates and hearts.
                </p>
                </div>
            </header>
            <header class="w-full relative h-screen bg-gray-200 backgroundDeskTopImage hidden sm:flex" id="home">
                <div class="w-full bg-black lg:px-36 bottom-0 left-0 bg-opacity-80 py-6 md:py-14 absolute">
                <p class="text-white text-lg  sm:text-xl text-center font-thin">
                        An Unforgettable Culinary Affair Awaits! Step into a world of culinary marvels, where events, weddings, corporate soirées, and private functions become moments of pure delight. Our chef's innovative artistry promises to leave a lasting impression on your guests' palates and hearts.
                </p>
                </div>
            </header>
        </>
    )
}

export default Hero;