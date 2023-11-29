import React from 'react'
import bgImg6 from '@/public/images/bg-landing6.jpeg'
import bgImg4 from '@/public/images/bg-landing4.jpeg'
import bgImg3 from '@/public/images/bg-landing3.jpeg'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { Spinner } from './utils'

export default function CheckCred() {
     const containerVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: 'easeInOut' } },
  };

  return (
   <motion.div  
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className='flex absolute w-full h-full items-center justify-center gap-6'>
        <div className='flex relative w-full h-full'>
            <div className='absolute flex w-full h-full bg-black/50 z-10' />
            <Image src={bgImg4} objectFit='contain' width={700} height={810} alt="bgImg4" />
            <Image src={bgImg3} objectFit='contain' width={700} height={810} alt="bgImg3" />
            <Image src={bgImg6} objectFit='contain' width={700} height={810} alt="bgImg6" />
        </div>
        <div className='flex gap-6 absolute text-[#fdcd49] items-center bg-transparent z-20'>
            <Typography variant='h2' fontWeight="bold">Confirming your Credentials</Typography>
            <Spinner lg />
            </div>
   </motion.div>
  )
}
