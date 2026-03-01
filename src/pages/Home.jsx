import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import Headshot from "../assets/headshot.jpg"

const Home = () => {

    useGSAP(() => {
        const texts = gsap.utils.toArray(".portfolio-slider h2");
        horizontalLoop(texts, {
            speed: 1,
            repeat: -1,
            paddingRight: 0,
        });
        // let welcomeTL = gsap.timeline({
        
        // });
        gsap.to(".cool-box", {
            width: "calc(33vw)",
            top: "50%",
            left: "81.5%",
            duration: 0.6,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".about-section",
                start: "top bottom",
                end: "top top",
                scrub: true,
            }
        })
        gsap.fromTo(".cool-box", {}, {
            width: "120vw",
            height: "8vh",
            top: "7%",
            left: "50%",
            duration: 0.6,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".portfolio-section",
                start: "top bottom",
                end: "center center",
                scrub: true,
                // markers: true,
            }
        })
    }, []);
    return (
        <main>
            <div className="cool-box"/>
            <section className="welcome-section">
                <div className="content-field">
                    <span className="centered-text">
                        <h1>Hey, thanks for dropping by.</h1>
                        <p>I'm Ricky, nice to meet you!</p>
                    </span>
                </div>
            </section>
            <section className="about-section">
                <div className="content-field">
                    <div>
                        <h2>Welcome to my website!</h2>
                        <p>
                            Big Long INtroduction paragraph here blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 

                            Big Long INtroduction paragraph here blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
 
                            Big Long INtroduction paragraph here blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
                        </p>
                    </div>
                    <img
                        src={Headshot}
                    />
                </div>

            </section>
            <section className="portfolio-section">
                <div className="content-field flex-column">
                    <div className="portfolio-slider">
                        <h2>PORTFOLIO → PORTFOLIO → PORTFOLIO → PORTFOLIO → PORTFOLIO → PORTFOLIO → PORTFOLIO → PORTFOLIO → PORTFOLIO → PORTFOLIO → PORTFOLIO → PORTFOLIO → </h2>
                        <h2>PORTFOLIO → PORTFOLIO → PORTFOLIO → PORTFOLIO → PORTFOLIO → PORTFOLIO → PORTFOLIO → PORTFOLIO → PORTFOLIO → PORTFOLIO → PORTFOLIO → PORTFOLIO → </h2>
                    </div>
                    <h1>HELLO THIS IS A PORTFOLIO SECTION</h1>
                </div>
            </section>
        </main>
    );
};

export default Home;

