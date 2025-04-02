import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

import './index.css'

const projects = [
    {
        uniqueId: 1,
        title: 'AI Image Generator',
        imgSrc: '/svg/AI Image.png',
        languages: ['svg/react.svg','/svg/javascript.svg', '/svg/tailwind.png'],
        description: 'Developed a full-stack AI Image Generator application using React.js and Node.js that converts text descriptions into high-quality images with AI.Designed and built an intuitive user interface with customizable generation parameters,image history tracking, and download image options.Integrated AI model with a custom API architecture that optimizes image generation speed and quality, while managing computational resources efficiently for a responsive application experience',
        githubLink: 'https://github.com/jagadeesh056/AI-Image-Generator',
        demoLink: 'https://ai-image-generator-self-phi.vercel.app/',
    },
    {
        uniqueId: 2,
        title: 'Jobby App',
        imgSrc: '/svg/jobby.png',
        languages: ['/svg/react.svg', '/svg/javascript.svg','/svg/css.svg'],
        description: 'Developed a React-based job search web application with JWT authentication,implementing complex state management and API integration to dynamically filter jobs by employment type and salary range.Managed state and form handling using React hooks.Engineered advanced data transformation logic to parse job API responses, mapping raw data to clean, structured components and implementing robust error management with retry mechanisms for failed network requests. ',
        githubLink: 'https://github.com/jagadeesh056/Jobby-App',
        demoLink: 'https://jobbysapps.ccbp.tech/login',
    },
    {
        uniqueId: 3,
        title: 'Personal Portfolio',
        imgSrc: '/svg/portfolio.png',
        languages: ['/svg/react.svg', '/svg/javascript.svg','/svg/css.svg'],
        description: 'Designed and developed a responsive personal portfolio website using React.js and CSS to showcase my skills, projects, and contact information. Implemented smooth navigation, dynamic components, and modern UI design to enhance user experience. Utilized React state management for interactive elements and ensured mobile responsiveness for seamless access across devices.',
        githubLink: 'https://github.com/jagadeesh056/Personal-Portfolio',
        demoLink: 'https://personal-portfolio-six-beta-57.vercel.app/',
    },
    {
        uniqueId: 4,
        title: 'Rock-Paper-Scissors',
        imgSrc: '/svg/rockpaper.jpeg',
        languages: ['svg/javascript.svg','/svg/html.svg', '/svg/css.svg'],
        description: 'Developed a Rock-Paper-Scissors game using React, HTML, and CSS, allowing users to play the game and view their scores,Implemented logic for user and computer moves, result determination (win/loss/draw), and score tracking.Used event listeners to capture user input and manipulate the DOM to display game outcomes dynamically.Leveraged JavaScript for random computer choices and conditional logic to determine the game results.',
        githubLink: 'https://github.com/jagadeesh056/Rock-Paper-Scissors',
        demoLink: 'https://rock-paper-scissors-mu-rosy.vercel.app/',
    }
]
const Projects = () => {
    return (
        <div id="projects" className='projects-container'>
            <h2>Projects</h2>
            <div className='projects'>
                <ul className='projects-list'>
                    {projects.map(project => {
                        const iseven = project.uniqueId % 2 === 0;
                        return (
                            <li 
                                className={`project-card ${iseven ? 'reverse' : ''}`} 
                                key={project.title}
                            >
                                <div className='project-details'>
                                    <h1>{project.title}</h1>
                                    <div className='languages'>
                                        {project.languages.map((eachImg, index) => (
                                            <img
                                                key={index}
                                                src={eachImg}
                                                alt={`${project.title} technology`}
                                            />
                                        ))}
                                    </div>
                                    <p>{project.description}</p>
                                    <div className="project-links">
                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="github-link"
                                            >
                                               <FaGithub />Github
                                            </a>
                                        )}
                                        {project.demoLink && (
                                            <a
                                                href={project.demoLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="demo-link"
                                            >
                                                <BiLinkExternal />Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="project-img">
                                    <img
                                        src={project.imgSrc}
                                        alt={project.title}
                                    />
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Projects;
