import { useState, useRef, use } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"

import { resolveColor } from "../assets/helpers/resolveColor";

import HomeGif from "../assets/landing/landinglogo.webp"
import FSAEGif from "../assets/landing/formulalogo.webp"
import PortfolioLogoGif from "../assets/landing/portfolio.webp"
import SelfPortraitGif from "../assets/landing/selfportrait.webp"

import BackArrow from "../assets/landing/back-arrow.png"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

gsap.config({ colorProps: { interpolation: "rgb" } }); // 👈 module-level, runs once

import Headshot from "../assets/headshot.jpg"
import FSAE from "../assets/FSAE.jpg"
import Projects from "../assets/Rectangle-8.png"
import Me from "../assets/Rectangle-9.png"

const subframes = [
    { 
        src: FSAE, 
        title: "TigerRacing Formula SAE", 
        paragraph: "I'm currently the Software Lead for LSU's Formula SAE team, TigerRacing. As the Software Lead, I oversee the development across embedded systems, data analysis, and pure software applications.",
        backgroundColor: resolveColor("var(--primary)"),
        logoSrc: FSAEGif,
    },
    { 
        src: Projects, 
        title: "Projects", 
        paragraph: "From webtools for local hospitals to college club sites (and even some game dev on the side), my work is all about smart systems design and building stuff people actually enjoy using.",
        backgroundColor: resolveColor("var(--secondary)"),
        logoSrc: PortfolioLogoGif,
    },
    { 
        src: Me, 
        title: "About", 
        paragraph: "I love building things! It's the bulk of what I do in my free time. But, I've learned that stepping away to pick up my guitar or reading into philsophy sharpens me as a developer as well as a person. Here's where I talk about myself outside the code.",
        backgroundColor: resolveColor("var(--accent)"),
        logoSrc: SelfPortraitGif,
    },
]

const Home = () => {
    const [selected, setSelected] = useState(null);
    const [animate, setAnimate] = useState(false); // ensure multiple subframes arent opened
    
    // initial loading animation
    useGSAP(() => {
		const tl = gsap.timeline();
    
		tl.from("#home-landing-container", {
				scale: 0,
                delay: 0.2,
                duration: 0.75,
                ease: "power3.out"
			})
            .from("#home-landing-text-child", {
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out",
            })
            .from(".home-landing-subframe-thumbnail", {
                y: 50,
                scale: 0.5,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out",
            }, "<")            
    }, []);

    /* SUBFRAME ANIMATION NONSENSE BEGINS HERE */
    const subframeOpenTl = useRef(null); // plays on thumbnail click to open subframe
    const subframeCloseTl = useRef(null); // plays on return to homepage
    const subframeTl = useRef(null); // plays to set up subframe after open tween is done

    const openSubframe = (frameId) => {
        if (animate) return;
        setAnimate(true);
        const otherFrames = subframes
            .map((_, i) => i)
            .filter(i => i !== frameId); // returns [x, y] where x and y are the other 2 frame ids that arent selected

        requestAnimationFrame(() => {
            subframeOpenTl.current?.kill();
            subframeOpenTl.current = gsap.timeline({
                onComplete: () => {
                    setSelected(frameId);
                }
            })
            .to(`#home-thumbnail-${frameId}`, {
                clipPath: "inset(100% 0 0 0)",
                duration: 0.52,
                ease: "power3.in",
            })
            .to(otherFrames.map(i => `#home-thumbnail-${i}`), {
                clipPath: "inset(100% 0 0 0)",
                duration: 0.52,
                ease: "power3.in",
                stagger: 0.1,
            }, "-=0.3")
            .to("#home-landing-text", {
                y: 50,
                opacity: 0,
                stagger: 0.2,
                // duration: 0.6,
                ease: "power3.in",
            }, "<")          
        })
    };

    const closeSubframe = () => {
        if (animate) return;
        setAnimate(true);
        requestAnimationFrame(() => {
            subframeCloseTl.current?.kill();
            subframeCloseTl.current = gsap.timeline({
                onComplete: () => {
                    setSelected(null);
                    setAnimate(false);
                }
            })
                .to(`#home-landing-subframe-gradient`, {
                    opacity: 0,
                    duration: 0.52,
                    ease: "power3.in",
                })
                .to(`#home-landing-subframe-text`, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.in",
                }, "<")
                .fromTo(`#home-background`, {
                    backgroundColor: subframes[selected].backgroundColor,
                    delay: 0.2,
                }, {
                    backgroundColor: "#FBFAFA",
                    duration: 0.45,
                    ease: "power3.in",
                }, "<")
                .to(`#home-landing-subframe`, {
                    clipPath: "inset(100% 0 0 0)",
                    duration: 0.45,
                    ease: "power3.in",
                },)
                .from("#home-landing-text-child", {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    ease: "power3.out",
                })
                .from(".home-landing-subframe-thumbnail", {
                    opacity: 0,
                    scale: 0.5,
                    y: 50,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power3.out",
                }, "<")
        })
    }

    // subframe open animation
    useGSAP(() => {
        if (selected === null) return;
        subframeTl.current = gsap.timeline({
            onComplete: () => {
                subframeOpenTl.current?.revert(); // reset effects of subframe open
                setAnimate(false); // allow animations again after subframe is fully open
            }
        })
            .from("#home-landing-subframe", {
                clipPath: "inset(100% 0 0 0)",
                duration: 0.59,
                ease: "power3.out",
            })
            .from("#home-landing-subframe-gradient", {
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            }, "<")
            .from("#home-landing-subframe-text", {
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out",
            }, "<")
            .to("#home-background", {
				backgroundColor: subframes[selected].backgroundColor,
                duration: 0.6,
			}, "<")

    }, { dependencies: [selected] });


    return (
        <main
            className="min-h-screen pt-[calc(65px+1.5rem)] bg-[var(--background)]"
            id="home-background"
        >
            <div 
                className="w-[var(--common-width)] mx-auto h-[calc(100vh-65px-2rem-1rem)]" // mt must always be twice the last rem subtracted in height calc
                id="home-landing-container"
            >
                <div className="w-full h-full rounded-[var(--common-border-radius)] border-[length:var(--border-width)] border-[var(--black)] p-5 flex flex-col justify-between gap-8 bg-[var(--background)]">
                    <div className="h-[55%] flex gap-5 px-5 pt-5 max-[475px]:pt-20"> {/* gap must be same as parent padding */ }
                        {subframes.map((img, i) => (
                            <div 
                                className="home-landing-subframe-thumbnail mobile-hider relative min-w-0 flex-1 h-full flex rounded-[var(--common-border-radius)] overflow-hidden cursor-pointer"
                                key={i}
                                onClick={() => openSubframe(i)}
                                id={`home-thumbnail-${i}`}
                            >
                                {/* manual border since theres a small bug putting a border on the parent*/}
                                <div className="absolute inset-0 rounded-[var(--common-border-radius)] border-[length:var(--border-width)] border-[color:var(--border-color)] pointer-events-none z-10" />
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className={`w-full h-full object-cover hover:scale-110 transition-transform duration-300 ease-out`}
                                />
                                <img
                                    src={img.logoSrc}
                                    className="w-[20%] absolute right-3 bottom-3"
                                />
                            </div>
                        ))}
                        {subframes.map((img, i) => (
                            <div 
                                className="home-landing-subframe-thumbnail desktop-hider relative min-w-0 flex-1 h-fit aspect-square flex items-center justify-center rounded-[var(--common-border-radius)] overflow-hidden cursor-pointer"
                                style={{
                                    backgroundColor: subframes[i - 2 < 0 ? i + 1 : i - 2].backgroundColor,
                                }}
                                key={i}
                                onClick={() => openSubframe(i)}
                                id={`home-thumbnail-${i}`}
                            >
                                <img
                                    src={img.logoSrc}
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div 
                        className="flex justify-between items-end mx-5 mb-8 max-[475px]:flex-col gap-12"
                        id="home-landing-text"    
                    > {/* gap must be same as parent padding */ }
                        <div className="w-fit" id="home-landing-text-child">
                            <img
                                src={HomeGif}
                                className="w-26 ml-2 mb-4"
                            />
                            <h1>Welcome to my website!</h1>
                            <h3>Click on any of the boxes to explore.</h3>
                        </div>

                        <p className="w-[42%] max-[475px]:w-full" id="home-landing-text-child">
                       Hey! I'm a junior in CS at LSU currently balancing two worlds: <strong>leading the software side of a Formula SAE race car</strong> and preparing for a <strong>summer internship at Capital One.</strong> I’m big on turning complex problems into simple solutions and seeing my code impact the real world.
                        Click around to learn more!
                        </p>
                    </div>
                </div>

                {/* subframes */}
                {selected !== null && (
                    <div 
                        className="absolute inset-0 z-5 rounded-[var(--small-border-radius)] border-[length:var(--border-width)] p-5 flex flex-col justify-between overflow-hidden"
                        style={{
                            backgroundImage: `url(${subframes[selected].src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        id="home-landing-subframe"
                    >
                        <div/> {/* to push content to the bottom */}

                        <div 
                            className="flex justify-between items-end mx-5 mb-8 text-white z-3" // gap must be same as parent padding 
                            id="home-landing-subframe-text"
                        > 
                            <div className="w-fit">
                                <img
                                    src={subframes[selected].logoSrc}
                                    className="w-30 mb-4"
                                />
                                <h1>{subframes[selected].title}</h1>
                                <div
                                    onClick={() => closeSubframe()}
                                    className="flex items-center gap-3 cursor-pointer"
                                >
                                    <h3>
                                        Return to Homepage
                                    </h3>
                                    <img
                                        src={BackArrow}
                                        className="h-[1.4rem]"
                                    />
                                </div>

                                
                            </div>
                            <p className="w-[40%]">{subframes[selected].paragraph} </p>
                        </div>

                        {/* gradient */}
                        <div 
                            className="absolute inset-0"
                            style={{
                                background: 'linear-gradient(to bottom, transparent 0%, transparent 64%, var(--black) 100%)'
                            }}
                            id="home-landing-subframe-gradient"
                        />
                    </div>
                )}
            </div>
        </main>
    );
};

export default Home;