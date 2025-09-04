import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

function validate(body: any) {
  const errors: string[] = []
  if (!body?.name || String(body.name).trim().length < 2) errors.push('name')
  if (!body?.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email))) errors.push('email')
  return errors
}

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const errors = validate(data)
    if (errors.length) {
      return NextResponse.json({ ok: false, errors }, { status: 400 })
    }
    // If no DB configured, no-op and 200.
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ ok: true })
    }
    // Lazy import prisma only when DB is present
    const { prisma } = await import('@/lib/prisma')
    const created = await prisma.request.create({
      data: {
        name: data.name,
        email: data.email,
        businessName: data.business_name || null,
        industry: data.industry || null,
        budget: data.budget || null,
        timeline: data.timeline || null,
        notes: data.notes || null
      }
    })
    return NextResponse.json({ ok: true, id: created.id }, { status: 201 })
  } catch (_e) {
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 })
  }
}
