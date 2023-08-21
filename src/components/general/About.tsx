import { Component } from "solid-js";
import Chef from "../../assets/img/WhatsApp Image 2023-08-21 at 23.56.22.jpg"

const About:Component = () => {
    return (
        <div class="w-full py-16 bg-black bg-opacity-90 scroll-mt-16" id="about">
            <div class="w-10/12 m-auto flex flex-wrap">
                <div class="w-full sm:w-1/3">
                    <img 
                        src={Chef} 
                        alt="cheff personal image" 
                        class="rounded shadow-xl"
                    />
                </div>
                <div class="w-full sm:w-2/3 md:px-10">
                    <h1 class="text-5xl text-center text-white pt-5 md:pt-0 pb-5 sm:pb-10">
                        About
                    </h1>
                    <p class="text-white text-lg sm:text-xl font-thin">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptate necessitatibus eum nulla maxime quas consequuntur aliquid perferendis deserunt. Exercitationem praesentium odit eveniet! Tempore odit veritatis debitis quasi nam suscipit aut quis dignissimos quisquam nisi hic, fugit omnis accusamus non nesciunt quod animi, porro voluptate! Dolore nisi velit eaque iste blanditiis, magni, dolores animi aliquam suscipit sequi voluptate pariatur quia inventore porro saepe? Optio qui eius autem ratione ab magni illo. Illum, debitis architecto, voluptates eligendi, quod aliquid iste amet adipisci explicabo perspiciatis dolore! Nesciunt aspernatur aut similique necessitatibus consequatur soluta, autem, dolores officia quidem nulla labore
                    </p>
                    <button class="py-4 px-10 text-lg text-white mt-5 rounded-sm bg-black">
                        Get intouch
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About;