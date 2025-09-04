'use client'
import { useState } from 'react'

type FormState = {
  name: string
  email: string
  business_name: string
  industry: string
  budget: string
  timeline: string
  notes: string
}

export default function RequestPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    business_name: '',
    industry: '',
    budget: '',
    timeline: '',
    notes: ''
  })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    try {
      const res = await fetch('/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setSent(true)
      setForm({ name: '', email: '', business_name: '', industry: '', budget: '', timeline: '', notes: '' })
    } catch (err) {
      setError('Something went wrong. Please try again soon.')
    }
  }

  return (
    <section>
      <h1 className="text-3xl font-extrabold mb-6">Request a Quote</h1>
      {sent && (
        <p className="mb-4 rounded-md bg-green-50 border border-green-200 p-3 text-green-800">Thanks! We’ll reach out soon.</p>
      )}
      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
      <form onSubmit={onSubmit} className="grid gap-4 max-w-2xl">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
          <input id="name" className="w-full rounded-md border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-molten/60" value={form.name} onChange={(e) => onChange('name', e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input id="email" type="email" className="w-full rounded-md border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-molten/60" value={form.email} onChange={(e) => onChange('email', e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="business_name">Business Name</label>
          <input id="business_name" className="w-full rounded-md border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-molten/60" value={form.business_name} onChange={(e) => onChange('business_name', e.target.value)} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="industry">Industry</label>
            <input id="industry" className="w-full rounded-md border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-molten/60" value={form.industry} onChange={(e) => onChange('industry', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="budget">Budget</label>
            <input id="budget" className="w-full rounded-md border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-molten/60" value={form.budget} onChange={(e) => onChange('budget', e.target.value)} placeholder="$500–$2k, etc." />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="timeline">Timeline</label>
            <input id="timeline" className="w-full rounded-md border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-molten/60" value={form.timeline} onChange={(e) => onChange('timeline', e.target.value)} placeholder="e.g., 2–4 weeks" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="notes">Notes</label>
          <textarea id="notes" className="w-full rounded-md border border-black/20 px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-molten/60" value={form.notes} onChange={(e) => onChange('notes', e.target.value)} placeholder="Tell us about your business and goals" />
        </div>
        <button type="submit" className="rounded-md bg-molten px-5 py-2.5 text-white font-semibold transition duration-200 motion-reduce:transition-none hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-molten/70">Send Request</button>
      </form>
    </section>
  )
}
