import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import { Link, useLocation } from "react-router-dom";

import { useState, useEffect, useRef, use } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const Navbar = () => {
    useGSAP(() => {
        gsap.from("#nav-item", {
            opacity: 0,
            scale: 0.95,
            duration: 0.8,
            ease: "power1.out",
        })

    }, []);
    return (
        <>
            <div className="fixed w-full">
                <div className="w-[var(--common-width)] h-[80px] border-4 border-[var(--black)] bg-[var(--background)] mx-auto mt-[1rem] px-8 flex items-center justify-between">
                    <h2 id='nav-item'>Ricky Liang</h2>

                    <div 
                        className='flex gap-10'
                        id='nav-item'
                    >
                        <Link to="/">
                            <h3>Home</h3>
                        </Link>
                        <Link to="/about">
                            <h3>About</h3>
                        </Link>
                        <Link to="/projects">
                            <h3>Portfolio</h3>
                        </Link>
                        <Link to="/contact">
                            <h3>Contact</h3>
                        </Link>
                    </div>
                </div>
            </div>

        </>

    )
};

