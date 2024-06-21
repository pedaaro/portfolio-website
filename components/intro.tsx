"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import  Link  from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
     <div className='flex items-center justify-center'>
      <div className='relative'>
       <motion.div
       initial={{ opacity: 0, scale: 0 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{
        type: "tween",
        duration: 0.2
       }}
       >
        <Image 
        src="/PedroPNG.png" 
        alt='Pedro Corsi' 
        width={192} 
        height={192} 
        quality={75} 
        className='h-192 w-192 rounded-2xl object-cover border-[0.15rem] border-white shadow-xl'
        />
        </motion.div>
       <motion.span className='absolute -bottom-3.5 -right-3.5  text-4xl'
       initial={{ opacity: 0, scale: 0 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{
        type: "spring",
        stiffness: 125,
        delay: 0.1,
        duration: 0.7
       }}>
        ✌️
       </motion.span>
      </div>
     </div>
     <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl'
     initial={{ opacity: 0, y: 100 }}
     animate={{ opacity: 1, y: 0}}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit consectetur quos nostrum nihil molestiae accusantium, dolores fuga labore dolor, nobis voluptatem! Vero libero exercitationem magnam. Sapiente beatae esse nostrum deleniti.
     </motion.p>
     <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
     initial={{ opacity: 0, y: 0 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{
      delay: 0.1
     }}>
      <Link href="#contact" className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition'>Contact me here 
      <BsArrowRight />
      </Link>
      <a className='bg-white px-7 py-3 flex items-center gap-2 rounded-full'>Download CV <HiDownload /></a>
      <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full'><BsLinkedin /></a>
      <a className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full'><FaGithubSquare /></a>
     </motion.div>
    </section>
  )
}