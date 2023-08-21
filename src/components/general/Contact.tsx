import { Component } from "solid-js";
import ContactForm from "../forms/ContactForm";

const Contact: Component = () => {
    return (
        <>
            <div class="w-full pb-10 md:py-16 scroll-mt-16" id="contact">
                <h1 class="text-5xl text-center pb-10 text-gray-700">
                    Get intouch with us
                </h1>
                <div class="w-10/12 m-auto gap-4 flex flex-wrap lg:flex-nowrap">
                    <div class="w-full lg:w-3/4 m-auto">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;