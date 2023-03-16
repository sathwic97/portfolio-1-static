import React from 'react';
import {motion} from 'framer-motion';
import ProjectCard from './ProjectCard';


type Props = {
  
}

export default function Projects({}: Props) {
    
  return (
    <motion.div
    
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1.5
    }}
    
    
    className='h-screen relative flex overflow-hidden flex-col
    text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
    
<div className='relative w-full flex scrollbar-track-gray-400/20 scrollbar-thumb-[#39FF14]/80 scrollbar-thin overflow-x-scroll overflow-y-hidden snap-x
snap-mandatory z-20'>
 
<ProjectCard projectTitle='BRN Pulse' projectImage='/project-snaps/brn-pulse.jpg' projectSummary='This project was conceptualized
 to enhance student interactions with the
 institution and to simply attendance, task assignments and task submissions' technologiesUsed='ReactJS, JavaScript, HTML, CSS, Redux, MongoDB, NodeJS'/>
 <ProjectCard projectTitle='Portfolio' projectImage='/project-snaps/portfolio-1.jpg' projectSummary='A modern portfolio using nextJS, tailwindCSS,
  framer motion, vercel and sanity technologies.' technologiesUsed='NextJS, TypeScript, Sanity, Framer Motion, Tailwind CSS'/>




</div>

    <div className='w-full absolute top-[30%] bg-[#39FF14]/10 
    left-0 h-[500px] -skew-y-12'></div>
    
    </motion.div>
  )
}

