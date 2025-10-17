import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const timeline = gsap.timeline();

    useGSAP(() => {
        timeline.to(".cool-box", {
            scrollTrigger: {
                trigger: ".abou-section",
            }
        })
        timeline.to(".cool-box", {
            scrollTrigger: {
                trigger: ".abou-section",
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
            <div className="home-container">asdf</div>
            <section className="about-section">
            
            </section>
            <section className="portfolio-section">
            
            </section>
        </main>
    );
};

export default Home;