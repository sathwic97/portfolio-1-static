import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';


type Props = {
    directionLeft?: boolean;
    skillImage:string;
    progress:number;
    
}

export default function Skill({directionLeft,skillImage,progress }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.div
        initial={{
            opacity:0,
            x: directionLeft ? -100 : 100,
        }}
        transition={{
            duration:1.5,
        }}
        whileInView={{
            opacity:1,
            x:0,
        }}
        className='relative w-24 h-24 
        xl:w-24 xl:h-24'>
<Image
fill
alt='skill'
src={skillImage}
className='rounded-full border border-gray-500 object-contain
transition duration-300 ease-in-out'
/>
</motion.div>
<div className='absolute hidden sm:block opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#343434] 
h-24 w-24 xl:w-24 xl:h-24 rounded-full'>
    <div className='flex items-center justify-center h-full'>
        <p className='text-3xl font-bold text-[#39FF14] opacity-100'>{progress}</p>
    </div>
</div>
    </div>
  )
}

