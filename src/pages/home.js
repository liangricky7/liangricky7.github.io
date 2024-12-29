import React from "react";
import "../styles/home.css";

import RickyPic from "../assets/ricky.png"
import Mail from "../assets/icons/mail.png"
import GitHub from "../assets/icons/github.png"

import Linkedin from "../assets/icons/linkedin.png"

const Home = () => {
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
                        <p>👋 Hi, I'm <span className="highlight">Ricky Liang,</span> </p>
                        <h1><strong>Student Full Stack Developer</strong> with a passion for design.</h1>
                    </div>
                    
                    <img src={RickyPic} alt="Ricky Liang" className="selfPortrait"/>
                </section>
{/* 
                <section className="featuredProjectsSection">
                    <h1>Featured Work</h1>


                </section> */}

                <section>

                </section>
            </main>
        </>
    )
};

export default Home;