import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

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

