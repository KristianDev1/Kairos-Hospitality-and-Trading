import { Component, For, createSignal } from "solid-js";
import Logo from "../../assets/img/Logo.png"
import { A, useNavigate } from "@solidjs/router"
import { IoMenuOutline, IoCloseOutline } from 'solid-icons/io'

const Nav:Component = () => {
    const [toggleMobileMenu, setToggleMobileMenu] = createSignal(false);
    const navigate = useNavigate();
    const Links = [
        {
            id: 1,
            name: 'Home',
            link: '#home'
        },
        {
            id: 2,
            name: 'About us',
            link: '#about'
        },
        {
            id: 7,
            name: 'Contact us',
            link: '#contact'
        },
    ];

    const handleMobileLink = (e: any) => {
        if(e === "home"){
            navigate('#home');
            setToggleMobileMenu(false);
        }
        if(e === "venu"){
            navigate('#venu');
            setToggleMobileMenu(false);
        }
        if(e === "contact"){
            navigate('#contact');
            setToggleMobileMenu(false);
        }
    }

    return (
        <>
            <nav class="w-full pt-1 z-40 fixed bg-gray-800 bg-opacity-80 h-16">
                <div class="w-10/12 m-auto flex justify-between items-center">
                    <div>
                        <A href="#home">
                            <img 
                                src={Logo}
                                alt="Company logo"
                                class="h-14"
                            />
                        </A>
                    </div>
                    <div class="hidden lg:block">
                        <ul class="flex gap-16 text-lg text-white font-thin">
                            <For each={Links}>{
                                (l) => <A href={l.link}><li>{l.name}</li></A> 
                            }</For>
                        </ul>
                    </div>
                    <div class="md:hidden">
                        <button 
                            class="md:hidden"
                            onClick={() => setToggleMobileMenu(true)}
                        >
                            <IoMenuOutline class="text-2xl"/>
                        </button>
                    </div>
                </div>
            </nav>
            <div class={`${toggleMobileMenu() ? 'w-full' : 'w-0'} fixed top-0 left-0 h-screen overflow-hidden bg-opacity-70 bg-black z-40`}>
                <button
                    onClick={() => setToggleMobileMenu(false)} 
                    class="z-50 text-white mt-5 ml-5">
                    <IoCloseOutline class="text-3xl" 
                    />
                </button>
                <div class={`fixed ${toggleMobileMenu() ? 'w-[300px]' : 'w-0'} h-screen flex overflow-hidden duration-300 ease-in-out z-50 top-0 right-0 bg-yellow-600 2xl:hidden`}>
                    <div class="w-10/12 relative mx-auto text-white">
                        <ul class="text-lg">
                            <button
                                onClick={() => handleMobileLink('home')}
                                class="w-full"
                            >
                                <li class="w-full py-4 border-b">Home</li>
                            </button>
                            <button
                                onClick={() => handleMobileLink('about')}
                                class="w-full"
                            >
                                <li class="w-full py-4 border-b">About</li>
                            </button>
                            <button
                                onClick={() => handleMobileLink('contact')}
                                class="w-full"
                            >
                                <li class="w-full py-4">Contact</li>
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;