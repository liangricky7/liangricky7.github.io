import { 
    React, 
    useState,
    useEffect 
} from "react";
import "../styles/personal.css";

import Button from "../components/button/button";
import Card from "../components/card/card";

import RickyPic from "../assets/personal/ricky.jpg"
import Mail from "../assets/icons/mail.png"
import GitHub from "../assets/icons/github.png"
import Linkedin from "../assets/icons/linkedin.png"

import Resume from "../assets/Ricky_Liang_Resume.pdf"

const Personal = () => {
    const [currIndex, setIndex] = useState(0);

    const projects = [ 
        <Card
        key="1"
        title="RENVI"
        text="I created RENVI, an interior design app that automatically creates comfortable and logical furniture layouts for the user. Once given a home's floorplan and the user's furniture, RENVI will be able to generate a layout with the press of the button. My role on RENVI is project manager and lead backend engineer, responsible for designing generator logic in C#/.NET."
        />,
        <Card
        key="2"
        title="Elyssiu"
        text="Elyssiu is a 2D Top-Down RPG game demo created in Unity parodying the LSU campus. You play as a CS Major (Combat Sorcery) and tasked with the goal of cleansing the kingdom of Elyssiu from evil. I was responsible for project management with a team of four others, as well as ideation of core gameplay ideas. Programwise, I was responsible for creating the entire combat system."
        />,
        <Card
        key="3"
        title="SASE@LSU Website"
        text="As Webmaster of SASE@LSU, I redesigned and developed the club website in React.js/CSS. The website currently serves 150+ active club members, garnering 1.5k views weekly during the school semesters."
        />
    ];

    return (
        <>
            <main className="home">
                <aside className="contact">
                    <div className="contactPoint"><img src={Mail} alt="Mail Icon"/><p>liangricky7@gmail.com</p></div>
                    <div className="contactPoint"><img src={GitHub} alt="Github Icon"/><p>liangricky7</p></div>
                    <div className="contactPoint"><img src={Linkedin} alt="Linkedin Icon"/><p>rickyxliang</p></div>
                </aside>
                <section className="introSection">
                    <div className="introSectionText">
                        <h1>👋 Hi! I'm <span className="highlight">Ricky!</span> </h1>
                        <p>just a chill guy. Welcome to my Website!</p>
                        {/* <Button
                            text="Resume"
                            link={Resume}
                        /> */}
                    </div>
                    
                    <img src={RickyPic} alt="Ricky Liang" className="selfPortrait"/>
                </section>


                <section className="aboutSection">
                    <h1>About Me</h1>
                    <p>
                        Hello Again! Welcome to the other side of me!
                        While the other page shows off my professional side, here's the part of the site where I get to talk about who I am away from work.
                        <br/>
                        <br/>
                        If I'm not in front of a computer coding, you might find me playing the guitar! 
                        Starting in my Junior year of Highschool, I've since hopped between all sorts of genres, but these days I've been into a lot of folk and rock. 
                        Currently, I'm learning <span className="highlightP"> "Don't Think Twice, It's Alright" by Bob Dylan. </span>
                        <br/>
                        <br/>
                        When I'm not making noice with a guitar, you'll find me at the gym!
                        I've come to love lifting weights over the past year and have found it as a core part of my day to day life (NEVER SKIP LEG DAY).
                        If you're interested, my main lift PRs are <span className="highlightP">185 on Bench, 265 on Squat, </span>and Deadlifts are still pending because of terrible form. 
                        <br/>
                        <br/>
                        {/* Between the sets and the strumming, I also love to read about history. */}

                    </p>
                </section>


                <section className="featuredProjectsSection">
                    <h1>Featured Work</h1>
                    <div className="projectCarousel">
                        <div 
                            className="slideContainer"
                            style={{transform: `translateX(-${currIndex * 100}%)`}}
                        >
                            {projects.map((project, index) => (
                                <div 
                                    key={index}
                                    className="slide"
                                    style={{transform: `translateX(${index * 100}%)`}}
                                >
                                    {project}
                                </div>
                            ))}
                        </div>

                        <div className="carouselDots">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setIndex(index)}
                                    className={`carouselDot ${currIndex == index ?'carouselDotActive' : ''}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>


            </main>
        </>
    )
};

export default Personal;