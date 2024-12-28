import React, { useEffect } from "react";
import "./cursor.css";

const Cursor = () => {
    useEffect(() => {
        // create dot
        const dot = document.createElement('div');
        dot.className = "cursor"
        dot.style.transform = `translate(-50%, -50%)`;
        document.body.appendChild(dot);

        let rafId = null;
        let lastX = 0;
        let lastY = 0;
        let currX = 0;
        let currY = 0;

        const cursorSpeed = 0.25;

        const updatePosition = () => {
            // lerp dot to the cursor position
            currX += (lastX - currX) * cursorSpeed;
            currY += (lastY - currY) * cursorSpeed;

            dot.style.transform = `translate(${currX - 8}px, ${currY - 8}px)`;

            rafId = requestAnimationFrame(updatePosition);
        };

        const onMouseMove = (e) => {
            lastX = e.clientX;
            lastY = e.clientY;
            
            if (rafId === null) {
                rafId = requestAnimationFrame(updatePosition);
            }
        };
    
        window.addEventListener('mousemove', onMouseMove);

        rafId = requestAnimationFrame(updatePosition);
    }, [])

    return null;
}

export default Cursor;