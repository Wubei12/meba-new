"use client"

import React, { useState } from 'react'
import { CheckCred, Navbar, Sidebar } from '../index'
import Image from "next/image"
import grapeImg from "@/public/images/grape.png"
import { axiosInstance } from '@/app/api/axios'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'


interface Props  {
    children: React.ReactNode;
}

interface UserResponse {
    user: string | null;
    error: AxiosError | null;
}

export default function Layout({ children }: Props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)

    const router = useRouter();

    const token = localStorage.getItem("access_token")

    axiosInstance.post(`/account/auth/token/verify/`, {
        token
    }).then((res) => {
        console.log(res.data)
        setIsSuccess(true)
    }).catch((e) => {
        toast.info("You need to Log in.", {
            toastId: "LoginInfo"
        })
        router.push("/auth/login")
    })

    if (!isSuccess) {
        return <CheckCred />
    }

    return (
        <div className={"sm" ? "flex w-full h-screen fixed" : "block w-full h-screen fixed"}>
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <div className={`${isSidebarOpen ? 'pl-14 max-sm:-z-10 max-sm:absolute' : "ml-8"} w-full`}>
                <div>
                <Navbar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <Image className="absolute hidden w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] sm:w-[100px] sm:h-[100px] right-0" src={grapeImg}  alt="grape-vine" />
                </div>
                {children}
            </div>
        </div>
    )
}