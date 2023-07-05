import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';




type Props = {
    
}

export default function About({ }: Props) {
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

     className='flex flex-col relative h-screen text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center'>

        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
        
        <motion.div className='relative w-36 h-36 sm:w-44 sm:h-44 md:w-64 md:h-80
        xl:h-[384px] xl:w-[256px] mt-24 -mb-15 sm:mb-0 flex-shrink-0'
        initial={{
            x:-200,
            opacity:0

        }}
        whileInView={{
            x:0,
            opacity:1,
        }}
        transition={{
            duration:1.5,
        }}
        viewport={{
            once: true
        }}>
            <Image src={'/aboutImage.jpeg'}
            fill
            alt='another image of me'
            className='object-cover md:rounded-lg rounded-full'/>
        
         </motion.div>
         <div className="px-0 space-y-10 md:px-10">
            <h4 className="text-4xl md:text-3xl mt-5 font-semibold" >A little <span className='text-[#39FF14]'>intro</span></h4>
           <p className='sm:text-md md:text-lg text-xs scrollbar-thumb-[#39FF14]/80 w-fit h-auto overflow-y-auto'>Curious, Creative, Resilient and Versatile. Experienced React Developer with more than 1.5 years of expertise in designing and developing front end for web applications. Complex problem-solver with analytical and driven mindset. Dedicated to achieving demanding development objectives according to tight schedules while producing impeccable code. Detail-oriented, organized and meticulous employee. Enthusiastic team player ready to contribute to company success.</p>
            
         </div>
         </motion.div>
    
  )
}

