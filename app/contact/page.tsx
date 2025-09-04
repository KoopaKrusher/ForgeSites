'use client'
import { useState } from 'react'

type FormState = {
  name: string
  email: string
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [sent, setSent] = useState(false)

  function validate(values: FormState) {
    const next: Partial<FormState> = {}
    if (!values.name || values.name.trim().length < 2) next.name = 'Please enter your name.'
    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = 'Please enter a valid email.'
    if (!values.message || values.message.trim().length < 10)
      next.message = 'Message should be at least 10 characters.'
    return next
  }

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSent(true)
    }
  }

  return (
    <section>
      <h1 className="text-3xl font-semibold mb-6">Contact</h1>
      {sent ? (
        <p className="rounded-md bg-green-50 border border-green-200 p-4 text-green-800">
          Thanks! Your message passed validation (no backend wired).
        </p>
      ) : (
        <form onSubmit={onSubmit} noValidate className="max-w-xl space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              value={form.name}
              onChange={(e) => onChange('name', e.target.value)}
              className="w-full rounded-md border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-molten/60"
              placeholder="Your name"
              required
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => onChange('email', e.target.value)}
              className="w-full rounded-md border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-molten/60"
              placeholder="you@example.com"
              required
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => onChange('message', e.target.value)}
              className="w-full rounded-md border border-black/20 px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-molten/60"
              placeholder="How can I help?"
              required
            />
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="rounded-md bg-molten px-5 py-2.5 text-white font-semibold transition duration-200 motion-reduce:transition-none hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-molten/70"
          >
            Send
          </button>
        </form>
      )}
    </section>
  )
}
