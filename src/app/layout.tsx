import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components'

export const metadata: Metadata = {
  title: 'Red de trabajo',
  description: 'Web para encontrar trabajo o empleados'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className='flex flex-col min-h-[100vh]'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
