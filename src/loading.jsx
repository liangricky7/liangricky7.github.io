import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export const LoadingScreen = ({ onComplete }) => {	
    const landingRef = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline({
			onComplete: () => {
				onComplete();
			},
    	});
    
		tl.to("#loading-border-content", {
				opacity: 0,
				delay: 1.6,
			})
			.to(".loading-border", {
				height: "60px",
				duration: 0.9,
				ease: "power3.inOut",
			})

	}, { scope: landingRef });

	return (
		<div 
			className="bg-[var(--background)] w-screen h-screen"
			ref={landingRef}
		>
			<div className="loading-border">
				<div id="loading-border-content">
					<h1 className="text-center mb-4"><strong>Hey, thanks for dropping by.</strong></h1>
					<h5 className="text-center">I’m Ricky, nice to meet you!</h5>
				</div>
			</div>
		</div>
	)
}