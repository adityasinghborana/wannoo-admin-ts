import type { Metadata } from 'next'

import "./../globals.css"
import SidebarLayout from '@/components/sidebar/sidebar_layout'



export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'  suppressHydrationWarning={true}>
      <body
        
      >
        <div className='flex flex-row min-h-screen'>
          <SidebarLayout />
          <div className='flex-1 flex flex-col bg-secondary'>{children}</div>
        </div>
      </body>
    </html>
  )
}
