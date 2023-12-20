import Navbar from '@/components/Navbar'
import '@/app/globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Akiranime',
  description: 'Akiranime Menyediakan Anime Secara Gratis Dan Bersubtitle Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-on-dark`} >
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
