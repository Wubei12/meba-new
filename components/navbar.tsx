import React from 'react'
import { Menu as MenuIcon, Search, SettingsOutlined } from "@mui/icons-material";
import { usePathname, useRouter } from 'next/navigation';
import { ModeToggle } from './ThemeToggle';


type NavProps = {
    isSidebarOpen: boolean
    setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

function Navbar({ isSidebarOpen, setIsSidebarOpen }: NavProps) {
    const pathname = usePathname()
    const router = useRouter()


    return (
        <nav className={`${isSidebarOpen ? 'w-full flex justify-between items-center h-[80px] sm:h-[98.19px]' : 'w-full flex justify-between items-center h-[80px] sm:h-[98.19px]'}`} >
            <div className='meba-box__flex-between'>
                <div className='flex sm:ml-0 ml-10 max-sm:ml-0 items-center justify-center'>
                    <button className=' active:scale-110 max-sm:left-0 dark:hover:text-[#fdcf6a] text-center p-[0.5rem] transition border-gray hover:outline-none rounded-full'
                        onClick={() => {
                            if (pathname === "/donations") {
                                setIsSidebarOpen(!isSidebarOpen)
                                router.refresh()
                            } else {
                                setIsSidebarOpen(!isSidebarOpen)
                            }
                        }
                        }
                    >
                        <MenuIcon />
                    </button>
                </div>
                <div className='relative meba-box__flex-between dark:bg-[#21295c] bg-gray-200 rounded-[6px] gap-12 py-2 px-2'>
                    <input className='dark:bg-[#21295c] bg-transparent w-full border-none outline-none focus:border-none pr-12 focus:ring-2 focus:ring-inset focus:ring-transparent sm:leading-6 transition duration-300 items-center' type='text' placeholder='Search...' />
                    <button className='absolute right-2'>
                        <Search />
                    </button>
                </div>
            </div>
            <div className='meba-box__flex-between gap-6 sm:mx-6'>
                <ModeToggle />
                <button className='dark:hover:text-[#fdcf6a] active:scale-110 rounded-full transition text-center p-[0.5rem]'>
                    <SettingsOutlined sx={{ fontSize: "25px" }} />
                </button>
            </div>
        </nav >
    )
}

export default Navbar