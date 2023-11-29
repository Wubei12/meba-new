"use client"

import React, { useEffect, useState } from 'react'



// import { DonationProps, DonationPropsResponse, useRetrieveDonationsQuery } from '@/redux/features/donations/donationsSlice'
import { Box, Typography } from '@mui/material';
import { axiosInstance } from '@/app/api/axios';
import { toast } from 'react-toastify';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Spinner } from '../utils/index';



export interface DonationProps {
  amount: number;
  tip: number;
  campaign: string;
  donor: string;
  currency: string;
  note: string;
  transactionNumber: string;
  anonymous: boolean;
  paymentStatus: string;
  paymentMethod: string;
}

interface ItemWithId {
  id: number;
  value: DonationProps[]; // Adjust the type according to your array items
}

export interface DonationPropsResponse {
  results: DonationProps[];
  next: string;
  count: number | null;
}

export default function DonationsList() {
   const [donations, setDonations] = useState<DonationProps[]>([])
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(false)

   console.log("🚀 donations:", donations)

    // useEffect(() => {
    //     try {
    //         axiosInstance.get(`/donation/donations`)
    //     .then((res) => setDonations(res.data));
    //     } catch (err: any) {
    //         setError(err.message)
    //         toast.error("Oops! There was an error.")
    //     }
    // }, [])

    if (isLoading) {
        return (
            <div className='flex items-center gap-4 mt-2 text-lg'>
                <Typography>Loading</Typography>
                <Spinner sm />
            </div>
        )
    }
    const [columnDefs, setColumnDefs] = useState(
    [
        {
            field: "campaign",
        },
        {
            field: "transactionNumber",
        },
        {
            field: "donor",
        },
        {
            field: "amount",
        },
        {
            field: "tip",
        },
        {
            field: "currency",
        },
        {
            field: "anonymous",
        },
        {
            field: "paymentMethod",
        },
        {
            field: "paymentStatus",
        },
        {
            field: "note",
        },
    ])

    return (
           <Box
            width="100%"
            alignContent="center"
            height="68vh"
            marginTop="20px"
            className="donations__dataGrid">
            <Table>
            <TableCaption>A list of your recent donations.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Campaign</TableHead>
                    <TableHead>Transaction Number</TableHead>
                    <TableHead>Donor</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Tip</TableHead>
                    <TableHead>Currency</TableHead>
                    <TableHead>Anonymous</TableHead>
                    <TableHead>Payment Method</TableHead>
                    <TableHead>Payment Status</TableHead>
                    <TableHead>Note</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
            

                {/* {
                    doantions.map((item, index) => {
                        <TableBody>

                        <TableCell>
                            {item.campaign}
                        </TableCell>
                        <TableCell>
                            {item.transactionNumber}
                        </TableCell>
                        <TableCell>
                            {item.donor}
                        </TableCell>
                        <TableCell>
                            {item.amount}
                        </TableCell>
                        <TableCell>
                            {item.tip}
                        </TableCell>
                        <TableCell>
                            {item.currency}
                        </TableCell>
                        <TableCell>
                            {item.anonymous}
                        </TableCell>
                        <TableCell>
                            {item.paymentMethod}
                        </TableCell>
                        <TableCell>
                            {item.paymentStatus}
                        </TableCell>
                        <TableCell>
                            {item.note}
                        </TableCell>
                        </TableBody>
                    })
                } */} 
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
            </TableBody>
            </Table>
        </Box>
    )
}
