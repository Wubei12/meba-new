"use client"

import React, { useCallback, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import { DonationProps, DonationPropsResponse, useRetrieveDonationsQuery } from '@/redux/features/donations/donationsSlice'
import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Spinner } from '../common';



export default function DonationsList() {

    const { data, isLoading, refetch, isError } = useRetrieveDonationsQuery();
    const processDataFromDjango = (dataFromDjango: DonationPropsResponse | any) => {
        if (!dataFromDjango || !Array.isArray(dataFromDjango)) {
            return [];
        }

        return dataFromDjango.map(item => ({
            id: uuidv4(), // Generating a unique identifier for each item
            ...item, // Spread the original data fields
        }));
    };

    const rows = processDataFromDjango(data)

    if (isLoading) {
        return (
            <div className='flex text-lg gap-4 items-center mt-2'>
                <Typography>Loading</Typography>
                <Spinner sm />
            </div>
        )
    }

    if (isError) {
        return <Typography>Error fetching data</Typography>;
    }

    const columns: GridColDef[] = [
        {
            field: "id",
            headerName: "ID",
            flex: 1,
        },
        {
            field: "campaign",
            headerName: "Campaign",
            flex: 1,
        },
        {
            field: "transactionNumber",
            headerName: "Transaction Number",
            flex: 1,
        },
        {
            field: "donor",
            headerName: "Donor",
            flex: 1,
        },
        {
            field: "amount",
            headerName: "Amount",
            flex: 0.5,
            sortable: false,
            // renderCell: (params: string) => `${Number(params).toFixed(2)}`,
        },
        {
            field: "tip",
            headerName: "Tip",
            flex: 1,
            // renderCell: (params: number) => `${Number(params.valueOf).toFixed(2)}`,
        },
        {
            field: "currency",
            headerName: "Currency",
            flex: 1,
        },
        {
            field: "anonymous",
            headerName: "Anonymous",
            flex: 1,
        },
        {
            field: "paymentMethod",
            headerName: "Payment Method",
            flex: 1,
        },
        {
            field: "paymentStatus",
            headerName: "Payment Status",
            flex: 1,
        },
        {
            field: "note",
            headerName: "Note",
            flex: 1,
        },
    ];

    return (
        <Box
            width="100%"
            alignContent="center"
            height="68vh"
            marginTop="20px"
            className="donations__dataGrid" >
            <DataGrid
                loading={isLoading || !data}
                rows={rows || []}
                columns={columns}
                rowCount={(data?.results && data?.count) || 0}
                pagination
                checkboxSelection
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                    }
                }}
            />
        </Box >
    )
}
