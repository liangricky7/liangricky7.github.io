import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

    useGSAP(() => {
        let welcomeTL = gsap.timeline({
        
        });
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
            height: "10vh",
            top: "8%",
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
            <div 
                className="cool-box"
            />
            <section className="welcome-section">
                <span className="centered-text">
                    <h1>Hey, thanks for dropping by.</h1>
                    <p>I'm Ricky, nice to meet you!</p>
                </span>
            </section>
            <section className="about-section">
                <div className="test">asdfasdf</div>
                <h1>HELLO THIS IS AN ABOUT SECTION</h1>
            </section>
            <section className="portfolio-section">
                <h1>HELLO THIS IS A PORTFOLIO SECTION</h1>
            </section>
        </main>
    );
};

export default Home;