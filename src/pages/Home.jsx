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
        <main>
            <h1 className="">test</h1>
        </main>
    );
};

export default Home;

