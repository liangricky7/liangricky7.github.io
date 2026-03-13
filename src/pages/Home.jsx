import { useState, useRef, use } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"

import { resolveColor } from "../assets/helpers/resolveColor";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

gsap.config({ colorProps: { interpolation: "rgb" } }); // 👈 module-level, runs once

import Headshot from "../assets/headshot.jpg"
import FSAE from "../assets/FSAE.jpg"

const subframes = [
    { 
        src: FSAE, 
        title: "TigerRacing Formula SAE", 
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue.",
        backgroundColor: resolveColor("var(--primary)")
    },
    { 
        src: FSAE, 
        title: "Projects", 
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue.",
        backgroundColor: resolveColor("var(--secondary)")
    },
    { 
        src: FSAE, 
        title: "About", 
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue.",
        backgroundColor: resolveColor("var(--accent)")
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

    /* SUBFRAME NONSENSE BEGINS HERE */
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
                    <div className="h-[55%] flex gap-5 mx-5 mt-5"> {/* gap must be same as parent padding */ }
                        {subframes.map((img, i) => (
                            <img
                                key={i}
                                src={img.src}
                                alt={img.title}
                                className={`home-landing-subframe-thumbnail min-w-0 w-0 flex-1 h-full object-cover cursor-pointer rounded-[var(--common-border-radius)] border-3`}
                                id={`home-thumbnail-${i}`}
                                onClick={() => openSubframe(i)}
                            />
                        ))}
                    </div>
                    <div 
                        className="flex justify-between items-end mx-5 mb-8"
                        id="home-landing-text"    
                    > {/* gap must be same as parent padding */ }
                        <div className="w-fit" id="home-landing-text-child">
                            <h1>Welcome to my website!</h1>
                            <h3>Click on any of the boxes to explore!</h3>
                        </div>

                        <p className="w-[40%]" id="home-landing-text-child">Big Long INtroduction paragraph here blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah </p>
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
                                <h1>{subframes[selected].title}</h1>
                                <h3 
                                    onClick={() => closeSubframe()}
                                    className="cursor-pointer"
                                >
                                    Return to Homepage
                                </h3>
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