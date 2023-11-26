import { axiosInstance } from '@/app/api/axios'
import { CheckCred } from '@/components';
import Login from '@/components/forms/Login'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function page() {
   
  return (
    <div>
      <Login />
    </div>
  )
}
