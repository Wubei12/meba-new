"use client"

import React, { ChangeEvent, useState } from 'react'
import logoImg from '@/public/images/logo.png'
import bgImg6 from '@/public/images/bg-landing6.jpeg'
import bgImg4 from '@/public/images/bg-landing4.jpeg'
import bgImg3 from '@/public/images/bg-landing3.jpeg'
import Image from 'next/image'
import { axiosInstance } from '@/app/api/axios'
import { useRouter } from 'next/navigation'
import { toast } from "react-toastify";
import { CheckCred, Spinner } from '..'
import { FiEye, FiEyeOff } from 'react-icons/fi';



export default function Login() {
  
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password, } = formData;

 
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
     const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);

    axiosInstance.post(`/account/auth/login/`, {
      email,
      password,
    }).then((res) => {
      toast.success("Logged in successfully!")
      localStorage.setItem("access_token", res.data.access_token); 
      localStorage.setItem("refresh_token", res.data.refresh_token); 
      axiosInstance.defaults.headers["Authorization"] = "JWT " + localStorage.getItem("access_token");
      router.push("/dashboard")
      console.log(res)
      console.log(res.data)
      setIsSuccess(true)
      setIsLoading(false)
    }).catch(() => {
        toast.error("Failed to log in");
    })
  }
    // const token = localStorage.getItem("access_token")
    
    
    // if (token !== null) {
    //   toast.info("You're already signed in.")
    //   setIsLoggedIn(true)
    //   router.push("/dashboard")
    // } else {
    //   return null;
    // }
    // if(isLoggedIn === false) {
    //   return <CheckCred />
    // }

  const [showPassword, setShowPassword] = useState(false);


    const toggleShowPass = () => {
        setShowPassword(!showPassword)
    }
  
  return (
    <div className='flex relative items-center max-lg:justify-center overflow-x-hidden h-screen mx-auto'>
            <div className='absolute w-full h-full'>
                <div className='flex relative w-full h-full'>
                    <div className='absolute flex w-full h-full bg-black/50 z-10' />
                    <Image src={bgImg4} objectFit='contain' width={700} height={810} alt="bgImg4" />
                    {/* <div className='absolute w-[6.5rem] h-screen justify-center shadow-2xl shadow-black z-10'></div> */}
                    <Image src={bgImg3} objectFit='contain' width={700} height={810} alt="bgImg3" />
                    <Image src={bgImg6} objectFit='contain' width={700} height={810} alt="bgImg6" />
                </div>
            </div>
            <div className="flex absolute items-center bg-white z-20 lg:right-0 rounded-xl w-full max-w-sm md:max-w-xl shadow-2xl md:mx-8 flex-1 flex-col justify-center md:py-[5rem] md:my-0 my-4 py-10">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image
                        className="mx-auto h-20 w-auto"
                        src={logoImg}
                        alt="logo"
                    />
                    <h2 className="mt-10 text-center text-[#fdcd49] text-2xl font-bold leading-9 tracking-tight">
                        Sign In
                    </h2>
                    <p className="mt-4 text-gray-500 text-center mx-2 dark:text-gray-400">
                        Welcome, Please provide all the information to login
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <label className='block text-sm font-medium leading-8 text-gray-900'>
                    Email Adress
                  </label>
                  <input id='email' value={email} name='email' type='email' required className='block w-full rounded-md border-0 py-1.5 sm:px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6 transition duration-300 mb-6'
                  onChange={handleChange}
                  
                  />
                  <label className='block text-gray-900block text-sm font-medium leading-8 text-gray-900'>
                    Password
                  </label>
                  <div className='relative'>

                  <input id='password' value={password} name='password' type={showPassword ? "text" : "password"} required className='block w-full rounded-md border-0 py-1.5 sm:px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6  transition duration-300 mb-12' 
                  onChange={handleChange}
                  />
                   <div className='absolute cursor-pointer right-4 bottom-2 transition duration-300 active:scale-125' onClick={toggleShowPass}>

                            {
                                showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />
                            }
                        </div>
                  </div>
                <div>
                <button
                    type="submit"
                    className="flex w-full shadow-xl justify-center rounded-md bg-[#fdcd49] items-center px-3 py-3 text-[16px] font-semibold leading-6 text-gray-700 hover:bg-[#fdd35d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-110 focus-visible:outline-[#fdd35d] transition duration-200 "
                    // disabled={!isLoading}
                >
                  {!isLoading ? <Spinner sm /> : <p>Login</p>}
                  
                </button>
              </div>
                </form>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don't have an account?{' '}
                        <a href="/auth/register" className="font-semibold leading-6 text-[#f2b202] hover:text-[#fdbd0d] transition duration-200">
                            Register here.
                        </a>
                    </p>
                </div>
            </div>
        </div>
  )
}
