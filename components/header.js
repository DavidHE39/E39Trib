'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const root = document.documentElement.classList
    darkMode ? root.add('dark') : root.remove('dark')
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
