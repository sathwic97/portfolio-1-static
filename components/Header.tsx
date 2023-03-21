import React from 'react';
import {SocialIcon} from 'react-social-icons';
import { EnvelopeIcon } from '@heroicons/react/20/solid';

import { motion } from 'framer-motion'; 
import Link from 'next/link';




type Props = {
    
}

export default function Header({ }: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-50 xl:items-center'>
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }} 
        animate={{
            x: 0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration: 1.5,
        }}
         className='flex flex-row items-center'>

<SocialIcon
 bgColor='transparent'
 url="https://www.linkedin.com/in/sathwic-raj"
 fgColor='gray' />
 <SocialIcon
 bgColor='transparent'
 url="https://www.twitter.com/sathwic97"
 fgColor='gray' />

<SocialIcon
 bgColor='transparent'
 url="https://www.github.com/sathwic97"
 fgColor='gray'/>
        </motion.div>


        
        <Link href='#contact'>  
        <motion.div
        initial={{
            x: 500,
            opacity:0,
            scale:0.5,

        }} 
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration:1.5,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
          <EnvelopeIcon className='text-gray-600 w-9 h-9' />
           <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Send me a mail!</p> 
        </motion.div>
        </Link>
        

    </header>
    
  )
}

