import React from 'react'
import { Header } from '@/components/common'
import DonationsList from '@/components/data-grids/donationList'
import Layout from '@/components/layout/page'
import { Box } from '@mui/material'

export default function page() {
    return (
        <Layout>
            <div className='mr-2 sm:mr-5'>
                <Box>
                    <Header title='DONATIONS' subtitle='View your available donations here.' />
                </Box>
                <DonationsList />
            </div>
        </Layout>
    )
}

