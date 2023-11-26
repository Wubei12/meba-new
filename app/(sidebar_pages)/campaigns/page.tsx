import { Header } from '@/components'
import CampaignList from '@/components/cards/CampaignList'
import Layout from '@/components/layout/page'
import { Box } from '@mui/material'
import React from 'react'

export default function page() {
    return (
        <Layout>
            <Box>
                <Header title='CAMPAIGNS' subtitle='view all your available campaigns here.' />
            </Box>
            <CampaignList />
        </Layout>
    )
}

