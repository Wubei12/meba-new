import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Setup } from '@/components/utils'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meba | Empower Your Faith, Support Your Community',
  description: "Support our church's mission with our fundraising app. Make a difference today.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Setup /> 
        {children}</body>
    </html>
  )
}
