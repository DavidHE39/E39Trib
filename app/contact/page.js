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
    <p className="text-green-600">Thanks! We'll be in touch shortly.</p>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-800" />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-800" />
      <textarea name="message" placeholder="Message" onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-800" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      <iframe src="/bookings.html" width="100%" height="800" className="border mt-4 rounded"></iframe>
    </form>
  )
}
