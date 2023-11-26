import React from 'react'
import Layout from '@/components/layout/page'
import { Box } from '@mui/material'
import { Header } from '@/components'


export default function page() {
    return (

        <Layout>
            <Box>
                <Header title='GEOGRAPHY' subtitle='See where your donors are coming from here.' />
            </Box>
        </Layout>
    )
}

