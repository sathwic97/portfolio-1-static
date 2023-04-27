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
  <ProjectCard projectTitle='Resume Builder' projectSummary='This Capstone project is being developed under the aim to bring trendy and latest resume templates for free. The website is designed to be mobile-responsive with clean and user friendly interface. This website lets the user to choose a resume template which later can be downloaded after filling in the details. ' technologiesUsed='ReactJS, JavaScript, HTML, CSS, Redux Toolkit, Material UI, React-Hook-Form'/>
<ProjectCard projectTitle='Shopping Cart' projectSummary='This is a simple examplary academic using redux toolkit. Using redux toolkit, a replica of an E-commerce website shopping cart has been developed.' technologiesUsed='ReactJS, JavaScript, HTML, CSS, Redux Toolkit'/>
<ProjectCard projectTitle='BRN Pulse' projectSummary='This project was conceptualized
 to enhance student interactions with the
 institution and to simply attendance, task assignments and task submissions.
 This website is a mobile-responsive with user-friendly interface.' technologiesUsed='ReactJS, JavaScript, HTML, CSS, Redux, MongoDB, NodeJS'/>
 <ProjectCard projectTitle='Portfolio' projectSummary='A modern portfolio using nextJS, tailwindCSS,
  framer motion, vercel and sanity technologies. This portfolio has been a personal project to showcase my works and potential.' technologiesUsed='NextJS, TypeScript, Sanity, Framer Motion, Tailwind CSS'/>




</div>

    <div className='w-full absolute top-[30%] bg-[#39FF14]/10 
    left-0 h-[500px] -skew-y-12'></div>
    
    </motion.div>
  )
}

