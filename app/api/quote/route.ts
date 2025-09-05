import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

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
    const from = process.env.SMTP_FROM
    const to = process.env.SMTP_TO || 'braden@forge-sites.com'

    const hasConfig = !!(host && port && user && pass && from)

    if (!hasConfig) {
      // Local/dev fallback: don’t fail, just log
      console.log('[quote] Email config missing. Logging submission:', { name, email, business_name, industry, budget, timeline, notes })
      return NextResponse.json({ ok: true, mocked: true })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // common secure port
      auth: { user, pass },
    })

    console.log('[quote] Attempting SMTP send', { to, from, host, port, secure: port === 465 })

    // Optional connectivity check; helpful when first configuring SMTP
    try {
      await transporter.verify()
    } catch (e) {
      console.error('[quote] SMTP verify failed:', (e as Error)?.message)
      return NextResponse.json({ error: 'SMTP configuration failed' }, { status: 500 })
    }

    await transporter.sendMail({
      from,
      to,
      subject: `New Quote Request — ${name}`,
      text,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[quote] Error handling request:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
