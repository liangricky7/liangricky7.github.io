import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import Headshot from "../assets/headshot.jpg"

const projects = [
    {
        id: 1,
        title: "TigerRacing Member Portal",
        description: "Web application I led the design and development of for my Formula SAE club to help universalize workflows",
        image: "https://via.placeholder.com/300x200",
    },
    {
        id: 2,
        title: "Elyssiu",
        description: "Game I developed in Unity for a class",
        image: "https://via.placeholder.com/300x200",
    },
        {
        id: 1,
        title: "TigerRacing Website",
        description: "Modern website I redesigned and implemented for my Formula SAE team.",
        image: "https://via.placeholder.com/300x200",
    },
];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const currentProject = projects[currentIndex];
    const nextProject = projects[(currentIndex + 1) % projects.length];

    useGSAP(() => {
		const tl = gsap.timeline();
    
		tl.from("#home-landing-container", {
				scale: 0,
                duration: 0.8,
                // ease: "steps(4)",
			})
            .from("#home-background", {
				backgroundColor: "var(--background)",
                duration: 0.6,
			}, "<")
            .from("#home-landing-content", {
                opacity: 0,
                duration: 0.8,
                ease: "power1.out",
            })
            .from("#home-landing-img-frame", {
                scale: 0,
                duration: 0.8,
                ease: "power1.out",
            }, "<")
            .from("#home-landing-img", {
                opacity: 0,
                duration: 0.8,
            })

    }, []);
    return (
        <main
            className="min-h-screen pt-[calc(65px+2rem)] bg-[var(--primary)]"
            id="home-background"
        >
            <div 
                className="w-[var(--common-width)] mx-auto h-[calc(100vh-65px-2rem-2.5rem)] mt-5" // mt must always be twice the last rem subtracted in height calc
                id="home-landing-container"
            >
                    <div 
                        className="flex-4 p-8"
                        id="home-landing-content"
                    >
                        <h1 className="">Welcome to my Website!</h1>
                        <p>
                            I'm a software engineer based in Baton Rouge, Louisiana. I have a passion for building intuitive and efficient software solutions that make a positive impact on people's lives. With experience in full-stack development, I enjoy working on projects that challenge me to learn and grow as a developer. In my free time, I love exploring new technologies, contributing to open-source projects, and collaborating with other developers to create innovative software applications.
                        </p>
                <div className="w-full h-full border-[length:var(--border-width)] border-[var(--black)] p-5 flex flex-col justify-between gap-8 bg-[var(--background)]">
                    </div>

                     <div 
                        className="flex-2 h-full border-4 border-[var(--black)] p-5"
                        id="home-landing-img-frame"
                     >
                        <img 
                            src={Headshot} 
                            alt="Headshot of Ricky Liang" 
                            className="w-full h-full object-cover"
                            id="home-landing-img"
                        />
                     </div>
                </div>
            </div>


  <section className="w-full min-h-screen bg-white flex items-center justify-center px-8 py-16">
      <div className="max-w-7xl w-full grid grid-cols-12 gap-8">
        
        {/* Left Side - Current Project */}
        <div className="flex flex-col justify-between col-span-8">
          {/* Project Image */}
          <div 
            className="w-full aspect-video bg-gray-300 mb-4"
            data-gsap="current-project-image"
          >
            <img 
              src={currentProject.image} 
              alt={currentProject.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Title */}
          <h2 
            id="current-project-title"
          >
            {currentProject.title}
          </h2>
        </div>

        {/* Right Side - Next Project Preview & Description */}
        <div className="flex flex-col justify-between col-span-4">
          {/* Next Project Thumbnail */}
          <div>
            <div 
                className="w-full aspect-video bg-gray-300 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleNextProject}
                data-gsap="next-project-thumbnail"
            >
                <img 
                src={nextProject.thumbnail} 
                alt={nextProject.title}
                className="w-full h-full object-cover"
                />
            </div>

            {/* Next Project Button */}
            <button 
                onClick={handleNextProject}
                className="flex items-center gap-2"
                data-gsap="next-project-button"
            >
                Next Project 
                <span className="text-2xl">→</span>
            </button>

          </div>
  
          {/* Current Project Description */}
          <p 
            className="text-right"
            data-gsap="current-project-description"
          >
            {currentProject.description}
          </p>
        </div>
      </div>
    </section>
        </main>
    );
};

export default Home;