import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';

type Props = {
  role: string;
  companyName : string;
  companyImage: string;
  started: string;
  ended: string;
  point1:string;
  point2:string;
  point3:string;

}

export default function ExperienceCard({companyName,companyImage,role,started,ended,point1,point2,point3 }: Props) {
  
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full snap-center bg-[#292929] p-10
    hover:opacity-100 opacity-40 cursor-pointer  transition-opacity duration-200 overflow-x-hidden overflow-y-auto scrollbar-track-gray-400/20 scrollbar-thumb-[#39FF14]/80 scrollbar-thin'>
      
      <motion.div className='relative w-24 h-24 xl:w-[120px] xl:h-[120px]'
      initial={{
        y:-100,
        opacity:0,
      }}
      transition={{duration:1.2}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}>
      <Image
      alt=''
      className='rounded-full object-cover object-center'
      src={companyImage}
      fill
      
      />
      </motion.div>
<div className='px-0 md:px-10 relative'>
  <div className='backdrop-blur sticky top-0'>
  <h4 className='xl:text-4xl sm:text-2xl md:text-3xl text-[#39FF14] font-bold '>{role}</h4>
  <p className='font-bold xl:text-lg md:text-sm sm:text-xs  mt-1'>{companyName}</p>
  </div> 
  
  <p className='space-y-4 ml-5  text-gray-300'>
   {started} - {ended}
  </p>

  <ul className='list-disc space-y-4 ml-5 text-md sm:text-lg'>
   <li>{point1}</li>
   <li>{point2}</li>
   <li>{point3}</li>

  </ul>
</div>



    </article>
  )
}

