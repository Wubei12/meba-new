"use client"

import React, { ChangeEvent, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import logoImg from '@/public/images/logo.png'
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { axiosInstance } from '@/app/api/axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

export default function CampaignModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [formData, setFormData] = useState({
    title: "",
    short_description: "",
    description: "",
    organizer: "",
    beneficiary: "",
    category: "",
    thumbnail: "",
    goalAmount: "",
    currentAmount: "",
    startDate: "",
    endDate: "",
    status: "",
  });
  
     const { title, short_description, description, organizer, beneficiary, category, thumbnail, goalAmount, currentAmount, startDate, endDate, status, } = formData;

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
     const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

   const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
     const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);

       axiosInstance.post(`/donation/campaigns`, {
      title, 
      description,
      short_description,
      organizer,
      beneficiary, 
      thumbnail,
      category, 
      goalAmount,
      currentAmount,
      startDate,
      endDate,
      status,
    }).then((res) => {
      toast.success("Your Campaign has been successfully uploaded.")
      router.push("/campaign")
      console.log(res)
      console.log(res.data)
      // setIsSuccess(true)
      setIsLoading(false)
    }).catch(() => {
        toast.error("Failed to upload Campaign", {
          // toastId: FailedCampaignId
        });
        setIsLoading(false)
    })
  }

  return (
    <div>
       <button  onClick={handleOpen} className="flex gap-2 hover:bg-[#fdcf4f] dark:hover:bg-[#fdcf6a] dark:bg-transparent border border-[#fdcf6a] dark:text-[#fdcf6a] dark:hover:text-gray-900 bg-[#fdcf6a] max-h-10 px-4 py-6 rounded-xl shadow-2xl active:scale-110 transition ease-in-out items-center justify-center">
          <FaPlus />
          Add Campaign
         </button>
         <Modal
         keepMounted
         id="campaign"
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
         <motion.div 
            initial={{ opacity: 0, scale: 0.5, }}
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
            className='mt-20 sm:mx-[30rem] flex flex-col items-center justify-center rounded-2xl bg-white '
            >
            <Image src={logoImg} className='w-10 h-12 sm:my-4' alt='logo' />
            <Typography variant="h4" fontWeight="bold" className='text-[#fdcd49] sm:mb-4'>
                MEBA
            </Typography>
            <p className='text-[#fdcd49] sm:mb-4 text-lg'>This information will be displayed publicly so be careful what you share.</p>
            <form 
            onSubmit={handleSubmit} 
            className="my-4 sm:mx-auto sm:w-full sm:max-w-xl">
              <div className="space-y-12">
            <div className='w-full'>
             <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                  <input
                     id='title' value={title} name='title' type='title' required className='block w-full rounded-md border-0 py-1.5 sm:px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6 transition duration-300 mb-6'
                  onChange={handleChange}
                  />
             <label htmlFor="short_description" className="block text-sm font-medium leading-6 text-gray-900">Short Description</label>
                  <input
                     id='short_description' value={short_description} name='short_description' type='short_description' required className='block w-full rounded-md border-0 py-1.5 sm:px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6 transition duration-300 mb-6'
                  onChange={handleChange}
                  />
                {/* <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                  <textarea rows={3}
                     id='description' value={description} name='description' required className='block w-full rounded-md border-0 py-1.5 sm:px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6 transition duration-300 mb-6'
                  onChange={handleTextChange}
                  /> */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                <label htmlFor="organizer" className="block text-sm font-medium leading-6 text-gray-900">Organizer</label>
                  <input
                     id='organizer' value={organizer} name='organizer' type='organizer' required className='block w-full rounded-md border-0 py-1.5 sm:px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6 transition duration-300 mb-2'
                     onChange={handleChange}
                  />
                  </div>
                  <div>
                <label htmlFor="benefeciary" className="block text-sm font-medium leading-6 text-gray-900">Beneficiary</label>
                  <input
                     id='beneficiary' value={beneficiary} name='beneficiary' type='beneficiary' required className='block w-full rounded-md border-0 py-1.5 sm:px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6 transition duration-300'
                     onChange={handleChange}
                     />
                     </div>
                     </div>
                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
                  <input
                     id='category' value={category} name='category' type='category' required className='block w-full rounded-md border-0 py-1.5 sm:px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6 transition duration-300 mb-6'
                  onChange={handleChange}
                  />
              <div className="flex justify-between">
                <div>

                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Goal Amount</label>
                  <input
                     id='goalAmount' value={goalAmount} name='goalAmount' type='goalAmount' required className='block w-full rounded-md border-0 py-1.5 sm:px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6 transition duration-300 mb-6'
                     onChange={handleChange}
                     />
                     </div>
                     <div>

                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Current Amount</label>
                  <input
                     id='currentAmount' value={currentAmount} name='currentAmount' type='currentAmount' required className='block w-full rounded-md border-0 py-1.5 sm:px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6 transition duration-300 mb-6'
                     onChange={handleChange}
                     />
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Start Date</label>
                  <input
                     id='startDate' value={startDate} name='startDate' type='startDate' required className='block w-full rounded-md border-0 py-1.5 sm:px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6 transition duration-300 mb-2'
                     onChange={handleChange}
                  />
                  </div>
                  <div>
                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">End Date</label>
                  <input
                     id='endDate' value={endDate} name='endDate' type='endDate' required className='block w-full rounded-md border-0 py-1.5 sm:px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6 transition duration-300'
                     onChange={handleChange}
                     />
                     </div>
                     <div>
                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Status</label>
                  <input
                     id='status' value={status} name='status' type='status' required className='block w-full rounded-md border-0 py-1.5 sm:px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6 transition duration-300 mb-6'
                     onChange={handleChange}
                     />
                     </div>
                     </div>
            </div>
              </div>

      <div className="flex items-center justify-end gap-x-6">
        <button type="button" onClick={() => {router.push("/campaigns")}} className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-[#fdcf6a] px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-[#fdd35d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fdcf6a]"
        >
          Save
        </button>
      </div>
    </form>
        </motion.div>
      </Modal>
    </div>
  )
}
