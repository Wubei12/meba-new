"use client"

import React, { ChangeEvent, useEffect, useState } from 'react'
import bgImg6 from '@/public/images/bg-landing6.jpeg'
import bgImg4 from '@/public/images/bg-landing4.jpeg'
import bgImg3 from '@/public/images/bg-landing3.jpeg'
import logoImg from '@/public/images/logo.png'
import Image from 'next/image';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { axiosInstance } from '@/app/api/axios'
import { useRouter } from 'next/navigation'
import { CheckCred } from '..'

export default function Register() {
  const router = useRouter();
  
   const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    password1: "",
    password2: "",
  });

  const { full_name, email, phone_number, password1, password2 } = formData;

 
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
     const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance.post(`/account/auth/registration/`, {
      full_name,
      email,
      phone_number,
      password1,
      password2,
    }).then((res) => {
      router.push("/auth/login")
      console.log(res)
      console.log(res.data)
    })
  }

   useEffect(() => {
      const token = localStorage.getItem("access_token")
      console.log("🚀 ~ file: Login.tsx:63 ~ useEffect ~ token:", token)

      if (token !== null) {
        <CheckCred />
        console.log("token !== null")
        router.push("/dashboard")
      } else {
        console.log("go to login")
        
      }

    }, [router])
  

  return (
    <div className='flex flex-wrap relative items-center max-lg:justify-center overflow-x-hidden h-screen mx-auto'>
            <div className='absolute w-full h-full'>
                <div className='flex relative w-full h-full'>
                    <div className='absolute flex w-full h-full bg-black/50 z-10' />
                    <Image src={bgImg4} objectFit='contain' width={700} height={810} alt="bgImg4" />
                    <Image src={bgImg3} objectFit='contain' width={700} height={810} alt="bgImg3" />
                    <Image src={bgImg6} objectFit='contain' width={700} height={810} alt="bgImg6" />
                </div>
            </div>
            <div className="flex absolute items-center  bg-white overscroll-y-contain z-20 lg:right-0 rounded-xl w-full max-w-sm md:max-w-2xl shadow-2xl md:mx-8 flex-1 flex-col justify-center md:py-10 md:my-0 my-4 pb-10 max-[380px]:mt-64">
               <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image
                        className="mx-auto h-20 w-auto"
                        src={logoImg}
                        alt="logo"
                    />
                    <h2 className="mt-10 text-center text-[#fdcd49] text-2xl font-bold leading-9 tracking-tight">
                        Signup for an account
                    </h2>
                    <p className="mt-4 text-gray-500 text-center mx-2 dark:text-gray-400">
                        Let's get you all set up.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <label className='block text-gray-900block text-sm font-medium leading-8 text-gray-900'>
                    Full Name
                  </label>
                  <input id='full_name' value={full_name} name='full_name' required type='text' className='block w-full rounded-md border-0 py-1.5 sm:px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6  transition duration-300 mb-6'
                  onChange={handleChange}
                  />
                  <label className='block text-gray-900block text-sm font-medium leading-8 text-gray-900'>
                    Email Adress
                  </label>
                  <input id='email' value={email} name='email' type='email' required className='block w-full rounded-md border-0 py-1.5 sm:px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6 transition duration-300 mb-6'
                  onChange={handleChange}
                  
                  />
                  <label className='block text-gray-900block text-sm font-medium leading-8 text-gray-900'>
                    Phone Number
                  </label>
                  <input className="block w-full rounded-md border-0 py-1.5 sm:px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6 transition duration-300 mb-6"  id='phone_number' value={phone_number}  name='phone_number' required type='text'
                  onChange={handleChange}
                  />
                  <label className='block text-gray-900block text-sm font-medium leading-8 text-gray-900'>
                    Password
                  </label>
                  <input id='password1' value={password1} name='password1' type='password' required className='block w-full rounded-md border-0 py-1.5 sm:px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6  transition duration-300 mb-12' 
                  onChange={handleChange}
                   />
                  <label className='block text-gray-900block text-sm font-medium leading-8 text-gray-900'>
                    Confirm Your Password
                  </label>
                  <input id='password2' value={password2} name='password2' type='password' required className='block w-full rounded-md border-0 py-1.5 sm:px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6  transition duration-300 mb-12' 
                  onChange={handleChange}
                   />
                <div>
                <button
                    type="submit"
                    className="flex w-full shadow-xl justify-center rounded-md bg-[#fdcd49] items-center px-3 py-3 text-[16px] font-semibold leading-6 text-gray-700 hover:bg-[#fdd35d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-110 focus-visible:outline-[#fdd35d] transition duration-200 "
                    // disabled={isLoading}
                >
                    {/* {
                      isLoading ? <Spinner sm /> : Signup
                    } */}
                    Signup
                </button>
              </div>
                </form>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <a href="/auth/login" className="font-semibold leading-6 text-[#f2b202] hover:text-[#fdbd0d] transition duration-200">
                            Sign in.
                        </a>
                    </p>
            </div>
        </div>
  )
}
