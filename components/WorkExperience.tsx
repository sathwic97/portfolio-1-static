import React from 'react';
import {motion} from 'framer-motion';
import ExperienceCard from './ExperienceCard';


type Props = {
 
}

export default function WorkExperience({  }: Props) {
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
    className='h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10
    justify-evenly mx-auto items-center'>
      <h3 className="absolute top-24 uppercase tracking-[15px] sm:tracking-[20px] text-gray-500 text-2xl">Experience</h3>


      <div className='w-screen mt-16 h-[72%] flex space-x-5 scrollbar-track-gray-400/20 scrollbar-thumb-[#39FF14]/80 scrollbar-thin overflow-x-auto p-10 snap-x snap-mandatory'>


<ExperienceCard role='React Developer' companyName='Cureus Technologies Private Limited' companyImage='/company-logos/cureus.png' started='2021-08' ended='present'

point1='Translated designs into clean, efficient, and maintainable code and gained experience on version control systems like Git and debugging tools like Jest'
point2='Contributed to the development of responsive and accessible user interfaces using ReactJS'
point3='Worked with RESTful APIs and Asynchoronous programming to fetch and manipulate data for use in ReactJS applications'
/>
<ExperienceCard role='Lumos Wizard' companyImage='/company-logos/lumoswizards.png' companyName='Lumos Labs - Metaverse'  started='2023-02' ended='present'

point1='Web3 centric social media content design and writing.'
point2='Underwent various educational sessions regarding the web3 ecosystem'
point3='Gained experience on content design and content writing as well as developed good communication skills resulting in being able to play the role of a better team-player and a strategic contributor'
/>




      </div>




    </motion.div>
  )
}