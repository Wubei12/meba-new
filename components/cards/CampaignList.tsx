"use client"

import React, { useState } from 'react'

import { Box, Button, Card, CardActions, CardContent, Collapse, Typography, useMediaQuery } from '@mui/material'


interface CampaignProps {
    title: string;
    description: string;
    category: string;
    goalAmount: number;
    currentAmount: number;
    startDate: string;
    endDate: string;
    status: string;
}


const Campaign = ({
    title, description, category, goalAmount, currentAmount, startDate, endDate, status
}: CampaignProps) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Card sx={{
            backgroundImage: "none",
            borderRadius: "0.55rem"
        }} className=' dark:bg-[#21295c] bg-[#21295c]  '>
            <CardContent>
                <Typography className='text-white mb-2 capitalize' variant="h5" component="div">
                    {title}
                </Typography>
                <Typography className=' mb-6 text-[14px] dark:text-[#997d3d] text-[#ffda85]' gutterBottom>
                    {category}
                </Typography>
                <Typography className=' dark:text-[#ffda85] text-[#ffd166] ' >
                    Goal Amount is to reach: ETB {Number(goalAmount).toFixed(2)}
                </Typography>
                <Typography className=' mb-6 dark:text-[#ffda85] text-[#ffd166] ' >
                    We are at: ETB {Number(currentAmount).toFixed(2)}
                </Typography>
                <Typography className='dark:text-[#ffda85] text-[#ffd166]' variant='body2'>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                {!isExpanded ? <Button size='small' className=' dark:text-[#fff6e0] dark:hover:text-[#fdcd49] text-[#fdcd49] hover:text-[#fff6e0]' onClick={() => setIsExpanded(!isExpanded)}>
                    See More
                </Button> : <Button size='small' className=' dark:text-[#fff6e0] dark:hover:text-[#fdcd49] text-[#fdcd49] hover:text-[#fff6e0]' onClick={() => setIsExpanded(!isExpanded)}>
                    See Less
                </Button>}
            </CardActions>
            <Collapse in={isExpanded} timeout="auto" unmountOnExit className='dark:text-[#a3a3a3] text-[#666666]'>
                <CardContent>
                    <Typography>
                        Status: {status}
                    </Typography>
                    <Typography>
                        Start Date: {startDate}
                    </Typography>
                    <Typography>
                        End Date: {endDate}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

function CampaignList() {

    const isNonMobile = useMediaQuery("(min-width: 1000px)")

    return (
        <div className='w-full h-full'>

            {/* {data || isLoading ? <Box mt="20px" display="grid" gridTemplateColumns="repeat(4, minmax(0, 1fr))" justifyContent="space-between" rowGap="20px" columnGap="1.33%" sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }
            }}>
                {data?.map(
                    ({
                        title,
                        description,
                        category,
                        goalAmount,
                        currentAmount,
                        startDate,
                        endDate,
                        status
                    }: CampaignProps) => (
                        <Campaign
                            key={category}
                            title={title}
                            description={description}
                            category={category}
                            goalAmount={goalAmount}
                            currentAmount={currentAmount}
                            startDate={startDate}
                            endDate={endDate}
                            status={status} />
                    ))}
            </Box>
                :
                <div className="flex gap-3">
                    Loading <Spinner sm />
                </div>
            } */}
            Campaigns
        </div>
    )
}

export default CampaignList