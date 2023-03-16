import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';


type Props = {
    projectTitle:string;
    projectImage:string;
    projectSummary: string;
    technologiesUsed: string;
}

export default function ProjectCard({projectImage,projectSummary,projectTitle,technologiesUsed}: Props) {
  return (
    <motion.div
// initial={{
//     opacity:0,
    
// }}
// transition={{
//     duration:1,
// }}
// whileInView={{
//     opacity:1,
    
// }}

 className='flex-shrink-0 snap-center flex flex-col space-y-5 items-center
justify-center p-20 md:p-44 w-screen h-screen'>

<motion.div
 className='relative mt-7 h-24 w-24 sm:h-36 sm:w-36 md:w-[200px] md:h-[150px] xl:w-[400px] xl:h-[350px]'
 initial={{y: -200,opacity:0}}
whileInView={{y:0,opacity:1}}
transition={{duration:1.2}}
viewport={{once:true}}
whileHover={{
    scale:1.2
}}
>
<Image

fill
src={projectImage} className='object-cover' alt='image'/>
</motion.div>

<div className='space-y-10 px-0 md:px-10 max-w-6xl'>
<h4 className='text-4xl font-semibold text-center'>{projectTitle}
</h4>
{/* <div className='flex items-center space-x-2 justify-center'>

technologies used


</div> */}


<motion.div className='text-center text-sm sm:text-lg md:text-left w-full transition duration-300 ease-in-out scrollbar-track-gray-400/20 scrollbar-thumb-[#39FF14]/80 scrollbar-thin overflow-x-clip overflow-y-scroll max-h-32 sm:h-auto'>

<p className='mb-5'>{projectSummary}</p>
<ul className='list-disc space-y-4 ml-5 text-md sm:text-lg'>
  <li>{technologiesUsed}</li>

  </ul>
</motion.div>


</div>


</motion.div>
  )
}
