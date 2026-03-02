import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import Headshot from "../assets/headshot.jpg"

const Home = () => {
    useGSAP(() => {

    }, []);
    return (
        <main className="w-[var(--common-width)] pt-[calc(65px+2rem)] mx-auto">
            <div className=" h-[calc(100vh-65px-2rem-3rem)] mt-6">
                <div className="h-full flex gap-8">
                    <div className="flex-5 pl-8 pt-8">
                        <h1 className="">Welcome to my Website!</h1>
                        <p>
                            I'm a software engineer based in Baton Rouge, Louisiana. I have a passion for building intuitive and efficient software solutions that make a positive impact on people's lives. With experience in full-stack development, I enjoy working on projects that challenge me to learn and grow as a developer. In my free time, I love exploring new technologies, contributing to open-source projects, and collaborating with other developers to create innovative software applications.
                        </p>
                    </div>
                    <div className="h-full flex-3 border-4 border-[var(--black)]">

                    </div>
                </div>
            </div>


        </main>
    );
};

export default Home;

