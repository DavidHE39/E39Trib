import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}>
        <Header />
        <main className="min-h-screen px-4 py-8 max-w-4xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
