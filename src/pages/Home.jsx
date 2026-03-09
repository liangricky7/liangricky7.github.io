import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import Headshot from "../assets/headshot.jpg"
import FSAE from "../assets/FSAE.jpg"

const subframes = [
    { src: FSAE, title: "TigerRacing Formula SAE", paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. " },
    { src: FSAE, title: "Projects", paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue." },
    { src: FSAE, title: "About", paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue." },
]

const Home = () => {
    const [selected, setSelected] = useState(null);

    useGSAP(() => {
		const tl = gsap.timeline();
    
		tl.from("#home-landing-container", {
				scale: 0,
                delay: 0.2,
                duration: 1,
                ease: "power3.out",
			})
            .from("#home-background", {
				backgroundColor: "var(--background)",
                duration: 0.6,
			})
    }, []);
    return (
        <main
            className="min-h-screen pt-[calc(65px+1.5rem)] bg-[var(--background)]"
            id="home-background"
        >
            <div 
                className="w-[var(--common-width)] mx-auto h-[calc(100vh-65px-2rem-1rem)]" // mt must always be twice the last rem subtracted in height calc
                id="home-landing-container"
            >
                <div className="w-full h-full border-[length:var(--border-width)] border-[var(--black)] p-5 flex flex-col justify-between gap-8 bg-[var(--background)]">
                    <div className="h-[55%] flex gap-5 mx-5 mt-5"> {/* gap must be same as parent padding */ }
                        {subframes.map((img, i) => (
                            <img
                                key={i}
                                src={img.src}
                                alt={img.title}
                                className="min-w-0 w-0 flex-1 h-full object-cover cursor-pointer"
                                onClick={() => setSelected(i)}
                            />
                        ))}
                    </div>
                    <div 
                        className="flex justify-between items-end mx-5 mb-8"
                        id="home-landing-text"    
                    > {/* gap must be same as parent padding */ }
                        <h1 className="w-fit">Welcome to my website!</h1>
                        <p className="w-[40%]">Big Long INtroduction paragraph here blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah </p>
                    </div>
                </div>

                {selected !== null && (
                    <div 
                        className="absolute inset-0 z-5 border-[length:var(--border-width)] p-5 flex flex-col justify-between"
                        style={{
                            backgroundImage: `url(${subframes[selected].src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div/> {/* to push content to the bottom */}
                        <div className="flex justify-between items-end mx-5 mb-8 text-white z-3"> {/* gap must be same as parent padding */ }
                            <div className="w-fit">
                                <h1 >{subframes[selected].title}</h1>
                                <h3 
                                    onClick={() => setSelected(null)}
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
                        />
                    </div>
                )}
            </div>
        </main>
    );
};

export default Home;