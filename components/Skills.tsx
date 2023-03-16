import React from 'react';
import {motion} from 'framer-motion';
import Skill from './Skill';



type Props = {
  
}

export default function Skills({ }: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    transition={{duration:1.2}}
    whileInView={{opacity:1}}
    
    className='flex relative flex-col text-center md:text-left 
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen 
    justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
      <h3 className='absolute hidden sm:block top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for current <span className='text-[#39FF14]/70'>proficiency</span></h3>
        <div className='grid grid-cols-4 gap-5 mt-12'>

<Skill skillImage='/skill-icons/javascript-icon.png' progress={75}  />
<Skill skillImage='/skill-icons/css-icon.png' progress={75}  />
<Skill skillImage='/skill-icons/html-icon.png' progress={80}  />
<Skill skillImage='/skill-icons/react-js-icon.png' progress={85}  />
<Skill skillImage='/skill-icons/next-js-icon.png' progress={65}  />
<Skill skillImage='/skill-icons/tailwind-css-icon.png' progress={70} directionLeft  />
<Skill skillImage='/skill-icons/node-js-icon.png' progress={55} directionLeft  />
<Skill skillImage='/skill-icons/mongodb-icon.png' progress={45} directionLeft  />
<Skill skillImage='/skill-icons/mysql-icon.png' progress={65}  directionLeft />

        </div>
    </motion.div>
  )
}

