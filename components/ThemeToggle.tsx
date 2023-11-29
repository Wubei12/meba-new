"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export function ModeToggle() {
  const { setTheme } = useTheme()
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
      <div>
      <Button
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='dark:hover:text-[#fdcf6a] dark:text-white text-gray-900 active:scale-110 transition rounded-full text-center'
      >
        <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem id="light" onClick={() => {
            setTheme("light")
            setAnchorEl(null);
        }}>Light</MenuItem>
        <MenuItem onClick={() => {
            setTheme("dark")
            setAnchorEl(null);
        }}>Dark</MenuItem>
        <MenuItem onClick={() => {
            setTheme("system")
            setAnchorEl(null);
        }}>System</MenuItem>
      </Menu>
    </div>
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline" size="icon">
    //       <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //       <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //       <span className="sr-only">Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end" className="backdrop-blur-2xl p-4 rounded-xl" >
    //     <DropdownMenuItem className="cursor-pointer hover:bg-slate-400" onClick={() => setTheme("light")}>
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem className="cursor-pointer hover:bg-slate-400" onClick={() => setTheme("dark")}>
    //       Dark
    //     </DropdownMenuItem>
    //     <DropdownMenuItem className="cursor-pointer hover:bg-slate-400" onClick={() => setTheme("system")}>
    //       System
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  )
}




// "use client"

// import React, { useEffect, useState } from 'react'
// import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material'
// import { usePathname } from 'next/navigation'

// type Theme = "light" | "dark"

// const ThemeToggle = () => {
//       const pathname = usePathname()

//     const [theme, setTheme] = useState<Theme>("light")
//     const toggleTheme = () => {
//         if (theme === "light") {
//             setTheme("dark")
//             localStorage.setItem("theme", "dark")
//             document.documentElement.classList.add("dark")
//         } else {
//             setTheme("light")
//             localStorage.setItem("theme", "light")
//             document.documentElement.classList.remove("dark")
//         }
//     }

//     useEffect(() => {
//         const localTheme = window.localStorage.getItem("theme") as Theme | null;

//         if (localTheme) {
//             setTheme(localTheme);

//             if (localTheme === "dark") {
//                 document.documentElement.classList.add("dark")
//             }
//         } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//             setTheme("dark")
//             document.documentElement.classList.add("dark")
//         }
//     }, [])
//   return (
//      <button className={`${pathname === "/" || "/auth/login" || "/auth/regiter" ? "hidden" : ' z-20 fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-125 transition-all dark:bg-[#21295c]'}`} onClick={toggleTheme}>
//             {theme === "light" ? <LightModeOutlined /> : <DarkModeOutlined />}
//         </button>
//   )
// }

// export default ThemeToggle
