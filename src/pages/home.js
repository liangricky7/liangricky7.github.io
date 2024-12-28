import React from "react";
import "../styles/home.css";

import RickyPic from "../assets/ricky.png"

const Home = () => {
    return (
        <>
            <main className="home">
                <section className="introSection">
                    <div className="introSectionText">
                        <h1>👋 Hi, I'm <span className="highlight">Ricky Liang!</span></h1>
                        <p className="subtitle">Back End Developer and Hobbyist Front End</p>
                    </div>
                    
                    <img src={RickyPic} alt="Ricky Liang" className="selfPortrait"/>
                </section>

                {/* <section className="currentProjectsSection">
                    asdfasd
                </section> */}
            </main>
        </>
    )
};

export default Home;