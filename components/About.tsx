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
            <Image src={'/img2.jpg'}
            fill
            alt='another image of me'
            className='object-cover md:rounded-lg rounded-full'/>
        
         </motion.div>
         <div className="px-0 space-y-10 md:px-10">
            <h4 className="text-4xl md:text-3xl mt-5 font-semibold" >A little <span className='text-[#39FF14]'>intro</span></h4>
           <p className='sm:text-md md:text-lg text-xs scrollbar-thumb-[#39FF14]/80 w-fit h-auto overflow-y-auto'> I am a B. Com Computer Applications Graduate of 2021 ( GPA - 7.54). I have completed 6 months of training in MERN Full Stack Development which deals in web development and creating responsive websites using React Framework (REACT JS).
            I have completed Front-end development module in AlmaBetter Full Stack Web Development course. I have always been upto date with whatever tasks that were given to test our learnings.
            I am a curious learner, Resilient, Creative and Versatile.</p>
            
         </div>
         </motion.div>
    
  )
}

