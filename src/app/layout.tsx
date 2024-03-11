import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components'

export const metadata: Metadata = {
  title: 'Red de trabajo',
  description: 'completar descripción'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
