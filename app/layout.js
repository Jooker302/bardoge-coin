import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bardoge Coin',
  description: 'Bardoge (DxSale)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="main.jpeg" />
    </head>
      <body className="">{children}</body>
    </html>
  )
}
