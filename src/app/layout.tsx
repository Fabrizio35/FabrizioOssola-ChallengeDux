import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import MyToaster from '@/components/MyToaster'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fabrizio Ossola - ChallengeDux',
  description: 'Prueba Técnica Frontend Team - ABM de Usuarios en React',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} p-0 m-0`}>
        <MyToaster />
        <Navbar />
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
