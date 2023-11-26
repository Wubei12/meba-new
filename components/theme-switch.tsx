"use client"

import React, { useEffect, useState } from 'react'
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material'
import { usePathname } from 'next/navigation'

type Theme = "light" | "dark"

function ThemeSwitch() {

    const pathname = usePathname()

    const [theme, setTheme] = useState<Theme>("light")


    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")
        } else {
            setTheme("light")
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark")
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null;

        if (localTheme) {
            setTheme(localTheme);

            if (localTheme === "dark") {
                document.documentElement.classList.add("dark")
            }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark")
            document.documentElement.classList.add("dark")
        }
    }, [])

    return (
        <button className={`${pathname === "/" ? "hidden" : ' z-20 fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-125 transition-all dark:bg-[#21295c]'}`} onClick={toggleTheme}>
            {theme === "light" ? <LightModeOutlined /> : <DarkModeOutlined />}
        </button>
    )
}

export default ThemeSwitch