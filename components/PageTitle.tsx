import { Box, Typography } from '@mui/material'
import React from 'react'

interface PageTitleProps {
    title: string;
    subtitle: string;
}

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <Box>
        <Typography variant='h2' className='dark:text-[#fff6e0] text-[#fdcd49] font-bold mb-[5px]'>
                {title}
            </Typography>
            <Typography variant='h5' className='dark:text-[#fff6e0] text-[#fdcd49] sm:mx-0 mx-4'>
                {subtitle}
            </Typography>
    </Box>
  )
}
