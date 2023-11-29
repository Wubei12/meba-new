import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Setup } from '@/components/utils'
import { ThemeProvider } from '@/components/theme-provider'


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
    <html lang="en" suppressHydrationWarning>
        {/* <ThemeSwitch /> */}
      <body className={`${inter.className} bg-[#ffffff] text-gray-700 dark:bg-[#191F45] dark:text-gray-50 dark:text-opacity-90`}>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Setup /> 
            {children}
          </ThemeProvider>
      </body>
    </html>
  )
}
