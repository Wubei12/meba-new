"use client"

import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { Typography } from '@mui/material';
import Image from 'next/image';
import logoImg from '@/public/images/logo.png'
import { axiosInstance } from '@/app/api/axios';
import { useRouter } from 'next/navigation';

function HomeBody() {
    const router = useRouter()
    const accessToken = localStorage.getItem('access_token');

    const handleLogout = () => {
        const response = axiosInstance.post('/account/auth/logout/');
        localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
		router.push('/auth/login');
    }

    return (
    <div className='absolute text-[#fdcd49] w-full h-full top-0 bottom-0 flex z-20 flex-col items-center justify-center'>
        <motion.div 
            initial={{ opacity: 0, scale: 0.5, }}
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
            className='flex flex-col items-center gap-6 justify-center mb-14'
            >
                <Image src={logoImg} className='w-16 h-20' alt='logo' />
            <Typography variant="h2" fontWeight="bold">
                MEBA
            </Typography>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className='flex flex-col items-center justify-center'
            >
            <h1 className=' text-center text-6xl leading-[5rem] mb-10 font-bold'>Welcome to <br /> The Admin Dashboard!</h1>

        {
            accessToken === null && (
        <div>
            <p className='font-medium text-xl text-center '>Please Login or Register to get started.</p>
            <div  className="flex gap-20 mt-20 items-center justify-between max-w-6xl">

            <Link href="/auth/login">
                <button className='px-10 rounded-xl py-2 border border-[#fdcd49] text-2xl hover:bg-[#fdcd49] hover:text-gray-900 transition duration-200  active:scale-110'>
                    Login
                </button>
            </Link>
            <Link href="/auth/register">
                <button className='px-10 rounded-xl py-2 border border-[#fdcd49] text-2xl hover:bg-[#fdcd49e8] bg-[#fdcd49] text-gray-900 transition duration-200 active:scale-110'>
                        Signup
                </button>
            </Link>
        </div>
        </div>
                    )
                }

         {
            accessToken !== null && (
        <div>
            <p className='font-medium text-xl text-center '>Let's Get to work!</p>
        <div className="flex gap-20 mt-20 items-center justify-between max-w-6xl">
            <Link href="/dashboard">
                <button className='px-10 rounded-xl py-2 border border-[#fdcd49] text-2xl hover:bg-[#fdcd49] hover:text-gray-900 transition duration-200  active:scale-110'>
                    Dashboard
                </button>
            </Link>
                <button className='px-10 rounded-xl py-2 border border-[#fdcd49] text-2xl hover:bg-[#f8cb4d] bg-[#fdcd49] text-gray-900 transition duration-200 active:scale-110' onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
                    )
                }
        
        </motion.div>
    </div>
    )
}

export default HomeBody