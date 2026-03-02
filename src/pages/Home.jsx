import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import Headshot from "../assets/headshot.jpg"

const Home = () => {
    useGSAP(() => {
		const tl = gsap.timeline();
    
		tl.from("#home-landing-container", {
				scale: 0,
                duration: 0.8,
                // ease: "steps(4)",
			})
            .from("#home-background", {
				backgroundColor: "var(--background)",
                duration: 0.6,
			}, "<")
            .from("#home-landing-content", {
                opacity: 0,
                duration: 0.8,
                ease: "power1.out",
            })
            .from("#home-landing-img-frame", {
                scale: 0,
                duration: 0.8,
                ease: "power1.out",
            }, "<")
            .from("#home-landing-img", {
                opacity: 0,
                duration: 0.8,
            })

    }, []);
    return (
        <main
            className="min-h-screen pt-[calc(65px+2rem)] bg-[var(--primary)]"
            id="home-background"
        >
            <div 
                className="w-[var(--common-width)] mx-auto h-[calc(100vh-65px-2rem-2.5rem)] mt-5" // mt must always be twice the last rem subtracted in height calc
                id="home-landing-container"
            >
                <div className="h-full border-4 border-[var(--black)] p-5 flex gap-8 bg-[var(--background)]">
                    <div 
                        className="flex-4 p-8"
                        id="home-landing-content"
                    >
                        <h1 className="">Welcome to my Website!</h1>
                        <p>
                            I'm a software engineer based in Baton Rouge, Louisiana. I have a passion for building intuitive and efficient software solutions that make a positive impact on people's lives. With experience in full-stack development, I enjoy working on projects that challenge me to learn and grow as a developer. In my free time, I love exploring new technologies, contributing to open-source projects, and collaborating with other developers to create innovative software applications.
                        </p>
                    </div>

                     <div 
                        className="flex-2 h-full border-4 border-[var(--black)] p-5"
                        id="home-landing-img-frame"
                     >
                        <img 
                            src={Headshot} 
                            alt="Headshot of Ricky Liang" 
                            className="w-full h-full object-cover"
                            id="home-landing-img"
                        />
                     </div>
                </div>
            </div>


        </main>
    );
};

export default Home;

