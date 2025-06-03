import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'
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
        <Navbar />
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
