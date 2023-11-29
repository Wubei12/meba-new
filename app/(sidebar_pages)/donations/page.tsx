import React from 'react'
import Layout from '@/components/layout/page'
import PageTitle from '@/components/PageTitle'
import { Box } from '@mui/material'
import DonationsList from '@/components/data-grids/donationList'

export default function page() {
    return (
        <Layout>
            <div className='mr-2 sm:mr-5'>
                <Box>
                    <PageTitle title='DONATIONS' subtitle='View your available donations here.' />
                </Box>
                <DonationsList />
            </div>
        </Layout>
    )
}

