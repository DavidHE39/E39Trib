// nextjs-business-site/app/layout.js
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

// nextjs-business-site/components/Header.js
'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const classList = document.documentElement.classList
    darkMode ? classList.add('dark') : classList.remove('dark')
  }, [darkMode])

  return (
    <header className="flex justify-between items-center p-4 border-b dark:border-gray-700">
      <h1 className="text-xl font-bold">My Business</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <button onClick={() => setDarkMode(!darkMode)} className="ml-4 px-2 py-1 border rounded">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  )
}

// nextjs-business-site/components/Footer.js
export default function Footer() {
  return (
    <footer className="p-4 text-center text-sm border-t dark:border-gray-700">
      © {new Date().getFullYear()} My Business. All rights reserved.
    </footer>
  )
}

// nextjs-business-site/app/page.js (Home Page)
export default function Home() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Welcome to My Business</h2>
      <p>
        We specialize in Microsoft 365, Power Platform, and secure cloud solutions. Learn more about how we can support your business.
      </p>
    </section>
  )
}

// nextjs-business-site/app/about/page.js
export default function About() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p>
        Our team delivers expert-level Microsoft solutions with a focus on security, speed, and automation.
      </p>
    </section>
  )
}

// nextjs-business-site/app/contact/page.js
'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/sendToSharePoint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) setSubmitted(true)
  }

  return submitted ? (
    <p className="text-green-600">Thank you! We’ll be in touch shortly.</p>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-800" required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-800" required />
      <textarea name="message" placeholder="Message" onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-800" required></textarea>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
    </form>
  )
}

// nextjs-business-site/pages/api/sendToSharePoint.js
// 🔧 This is a placeholder — connect this to a Power Automate flow or direct SharePoint REST API
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { name, email, message } = req.body

  // Here, call your Power Automate HTTP trigger or SharePoint API logic
  console.log('Received contact submission:', { name, email, message })
  return res.status(200).json({ status: 'ok' })
} 

// nextjs-business-site/public/bookings.html (optional iframe embed)
<!-- Create /public/bookings.html and embed your Microsoft Bookings page -->
<iframe src="https://outlook.office365.com/owa/calendar/YOURBOOKINGPAGEURL" width="100%" height="800px" frameborder="0"></iframe>

// In contact/page.js you could also embed it directly:
// <iframe src="/bookings.html" width="100%" height="800"></iframe>
