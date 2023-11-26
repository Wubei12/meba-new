import HomeBody from '@/components/homeBody'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Meba | Home",
  description: "Welcome to Meba!"
}


export default function Home() {
  return (
  <main className='m-0 w-full h-screen '>
      <div className='absolute z-10 w-full h-full bg-black/70' />
      <video src={`https://res.cloudinary.com/dtbufoojz/video/upload/v1697496423/Easter_Midnight_Mass_in_Lalibela-_Ethiopia_Dolce_Africa_Episode_Preview_online-video-cutter.com_dv7ocf.mp4`} autoPlay loop muted className='w-full h-full object-cover ' />
      <HomeBody />
    </main>
  )
}
