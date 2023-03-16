import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import WorkExperience from '@/components/WorkExperience';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid';




const inter = Inter({ subsets: ['latin'] })

type Props ={
 
}

export default function Home({ }: Props) {
  return (
    <div className='bg-[rgb(36,36,36)] scrollbar-track-gray-400/20 scrollbar-thumb-[#39FF14]/80 scrollbar-thin text-white h-screen snap-y snap-mandatory
     overflow-y-scroll overflow-x-hidden z-0'>
      <Head>
        <title>portfolio</title>
     </Head>
    <Header/>
    <section id='hero' className='snap-start'>
     <Hero/>

    </section>

    <section id="about" className='snap-center'>
      <About />
    </section>
    <section id='experience' className='snap-start'>
    <WorkExperience/>
    </section>
    <section id='skills' className='snap-start'>
      <Skills/>
    </section>
    <section id='projects' className='snap-start'>
      <Projects/>
    </section>
<section id='contact' className='snap-start'>
  <ContactMe/>
</section>

<Link href="#hero">
<footer className='sticky bottom-5 w-full cursor-pointer'>
<div className='flex items-center justify-center'>
  <button type="button" className='rounded-md bg-[#39FF14]/40 opacity-30 hover:opacity-80 text-gray-400/80 text-lg' ><HomeIcon className='text-[#242424] h-7 w-14 animate-pulse'/></button>

</div>
</footer>
</Link>
    </div>
  )
}

