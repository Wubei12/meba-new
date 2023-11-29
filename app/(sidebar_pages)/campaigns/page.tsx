import React from 'react'
import Layout from '@/components/layout/page'
import { Box } from '@mui/material'
import PageTitle from '@/components/PageTitle'
import CampaignList from '@/components/cards/CampaignList'
import CampaignModal from '@/components/CampaignModal'

export default function page() {
  return (
    <Layout>
      <Box>
        <div className='flex items-center justify-between sm:mx-4'>
        <PageTitle
         title='CAMPAIGNS' subtitle='view all your available campaigns here.' 
         />
          <CampaignModal />
         </div>
         <CampaignList />
      </Box>
    </Layout>
  )
}
