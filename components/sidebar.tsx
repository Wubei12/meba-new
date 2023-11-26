"use client"

import { AdminPanelSettingsOutlined, CalendarMonthOutlined, CampaignOutlined, ChevronLeft, ChevronRightOutlined, Groups2Outlined, HomeOutlined, PieChartOutlined, PointOfSaleOutlined, PublicOutlined, TodayOutlined, TrendingUpOutlined, VolunteerActivismOutlined } from '@mui/icons-material';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import logoImg from '@/public/images/logo.png'


type SideProps = {
    isSidebarOpen: boolean
    setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

const navItems = [
    {
        text: "Dashboard",
        icon: <HomeOutlined />,
    },
    {
        text: "Donor Facing",
        icon: null,
    },
    {
        text: "Campaigns",
        icon: <CampaignOutlined />,
    },
    {
        text: "Donors",
        icon: <Groups2Outlined />,
    },
    {
        text: "Donations",
        icon: <VolunteerActivismOutlined />,
    },
    {
        text: "Geography",
        icon: <PublicOutlined />,
    },
    {
        text: "Donations",
        icon: null,
    },
    {
        text: "Overview",
        icon: <PointOfSaleOutlined />,
    },
    {
        text: "Daily",
        icon: <TodayOutlined />,
    },
    {
        text: "Monthly",
        icon: <CalendarMonthOutlined />,
    },
    {
        text: "Breakdown",
        icon: <PieChartOutlined />,
    },
    {
        text: "Management",
        icon: null,
    },
    {
        text: "Admin",
        icon: <AdminPanelSettingsOutlined />,
    },
    {
        text: "Performance",
        icon: <TrendingUpOutlined />,
    },
];

function Sidebar({ isSidebarOpen, setIsSidebarOpen }: SideProps) {
    let pathname = usePathname();
    if (pathname.startsWith('/')) {
        pathname = pathname.substring(1)
    }

    const [active, setActive] = useState(`${pathname}`);
    const router = useRouter();
    // const path = usePathname();


    return (
        <div className={`${isSidebarOpen ? "w-[250px] transform duration-500" : "w-0 transform duration-500"}`}>
            {isSidebarOpen && (
                <Drawer
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(!isSidebarOpen)}
                    variant="persistent"
                    anchor="left">
                    <Box width="100%">

                        <Box className="max-[641px]:my-8 max-[641px]:m-0" m="1.5rem 1.5rem 2rem 3rem">
                            <div className="meba-box__flex-between w-full text-[#fdcd49] dark:text-[#ffe3a3] bg-opacity-80 max-sm:px-4">
                                <Box display="flex" height="100%" justifyContent="center" alignItems='center' gap="2rem" >
                                    <Image src={logoImg} alt='logo' width={30} height={30} />
                                    <Typography alignItems='center' variant='h4' fontWeight="bold" >
                                        MEBA
                                    </Typography>
                                </Box>
                                <button className='sm:hidden flex' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                    <ChevronLeft />
                                </button>
                            </div>
                        </Box>
                        <List>
                            {navItems.map(({ text, icon }) => {
                                if (!icon) {
                                    return (
                                        <Typography className='text-gray-950 dark:text-[#fff6e0]' key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                                            {text}
                                        </Typography>
                                    )
                                }
                                const lcText = text.toLowerCase();
                                return (
                                    <ListItem className='group hover:bg-transparent dark:hover:bg-neutral-400/10 ease-in-out transition-colors' key={text} disablePadding>
                                        <ListItemButton onClick={() => {
                                            router.push(`/${lcText}`)
                                            setActive(lcText)
                                        }}
                                            className={`${active === lcText && (lcText === "dashboard" || lcText === "campaigns" || lcText === "donors" || lcText === "donations" || lcText === "geography" || lcText === "overview" || lcText === "daily" || lcText === "monthly" || lcText === "breakdown" || lcText === "admin" || lcText === "performance") ? "bg-[#ffe3a3] text-[#191f45] dark:hover:text-[#fff6e0] transition-colors ease-in-out" : "bg-transparent  text-[#191f45] dark:text-[#fff6e0]"} dark:hover:text-[#ede2c7] hover:text-[#191f45] transition-colors ease-in-out`}
                                        >
                                            <ListItemIcon className={`ml-8 ${active === lcText && (lcText === "dashboard" || lcText === "campaigns" || lcText === "donors" || lcText === "donations" || lcText === "geography" || lcText === "overview" || lcText === "daily" || lcText === "monthly" || lcText === "breakdown" || lcText === "admin" || lcText === "performance") ? "text-[#191F45] dark:group-hover:text-[#fff6e0]" : "dark:text-[#ffedc2] text-[#191f45] dark:group-hover:text-[#fff6e0] group-hover:text-[#191f45]"}`}>
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                            {active === lcText && (
                                                <ChevronRightOutlined sx={{ ml: "auto" }} />
                                            )}
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Box>
                </Drawer>
            )
            }
        </div >
    )
}

export default Sidebar