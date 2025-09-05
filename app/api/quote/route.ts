import { NextResponse } from 'next/server'
import nodemailer, { type SentMessageInfo } from 'nodemailer'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type QuoteBody = {
  name: string
  email: string
  business_name?: string
  industry?: string
  budget?: string
  timeline?: string
  notes?: string
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<QuoteBody>
    const { name, email, business_name, industry, budget, timeline, notes } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Build plain-text email content
    const lines = [
      `New Quote Request`,
      `-------------------`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Business: ${business_name || '-'}`,
      `Industry: ${industry || '-'}`,
      `Budget: ${budget || '-'}`,
      `Timeline: ${timeline || '-'}`,
      ``,
      `Notes:`,
      `${notes || '-'}`,
    ]
    const text = lines.join('\n')

    const host = process.env.SMTP_HOST
    const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const from = process.env.SMTP_FROM || user
    const to = process.env.SMTP_TO || 'braden@forge-sites.com'

    const requiredMap = {
      SMTP_HOST: host,
      SMTP_PORT: port,
      SMTP_USER: user,
      SMTP_PASS: pass,
    } as const
    const missing = Object.entries(requiredMap)
      .filter(([, v]) => !v)
      .map(([k]) => k)
    if (missing.length > 0) {
      console.error('[quote] Missing SMTP envs:', missing)
      return NextResponse.json({ ok: false, error: 'Missing SMTP envs', missing }, { status: 500 })
    }

    const secure = port === 465
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure, // 465 => secure, 587 => false
      auth: { user: user as string, pass: pass as string },
    })

    console.log('[quote] Attempting SMTP send', { to, from, host, port, secure })

    // Optional connectivity check; helpful when first configuring SMTP
    try {
      await transporter.verify()
    } catch (e) {
      console.error('[quote] SMTP verify failed:', (e as Error)?.message)
      return NextResponse.json({ error: 'SMTP configuration failed' }, { status: 500 })
    }

    const info: SentMessageInfo = await transporter.sendMail({
      from,
      to,
      subject: `New Quote Request — ${name}`,
      text,
    })
    console.log('[quote] SMTP send result', {
      messageId: (info as any)?.messageId,
      accepted: (info as any)?.accepted,
      rejected: (info as any)?.rejected,
      response: (info as any)?.response,
    })
    if (!info.accepted || (Array.isArray(info.accepted) && info.accepted.length === 0)) {
      return NextResponse.json({ ok: false, error: 'Email not accepted by SMTP' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[quote] Error handling request:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
