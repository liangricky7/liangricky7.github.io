import { 
    React, 
    useState,
    useEffect 
} from "react";
import "../styles/home.css";

import Button from "../components/button/button";
import Card from "../components/card/card";

import RickyPic from "../assets/ricky.png"
import Mail from "../assets/icons/mail.png"
import GitHub from "../assets/icons/github.png"
import Linkedin from "../assets/icons/linkedin.png"

import Resume from "../assets/Ricky_Liang_Resume.pdf"

const Home = () => {
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
                        <p>👋 Hi, I'm <span className="highlightP">Ricky Liang,</span> </p>
                        <h1><strong>Student Full Stack Developer</strong> with a passion for design.</h1>
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
                        I'm an LSU student and developer passionate about solving problems and building innovative solutions from the ground up.
                        Throughout both my professional and academic journey, I've consistently taken the lead in  <span className="highlight">identifying challenges, developing solutions, and guiding teams to implement them effectively.</span>
                        <br/>
                        <br/>
                        As an dedicated student in software development, I've taken Senior-level courses like <span className="highlight">Operating Systems, DBMS, and Software Systems,</span> earning top grades in each.
                        Despite being a Sophomore, I've sought to deepen my knowledge in advanced topics to better prepare myself for real-world challenges.
                        For the current Spring 2025 semester, I'll be taking exclusively Senior-level coursework, such as <span className="highlight">Software Testing and Compilers</span> (pray for me).
                        <br/>
                        <br/>
                        Beyond coding, I enjoy sharing my love for building software with others. 
                        In that spirit, I served as <span className="highlight">Director of SASE GeauxHack '24</span>, LSU's premier Hackathon, where I helped create an environment where participants could dive into creating their own projects and experience what it's like to be a developer. 
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

export default Home;