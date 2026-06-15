import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // SMTP configuration using Gmail service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'viduraruwantha2002@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact Form: Message from ${name}`,
      text: `You received a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; rounded: 8px;">
          <h2 style="color: #ff6b00; border-bottom: 2px solid #ff6b00; padding-bottom: 10px; margin-top: 0;">New Message Received</h2>
          <p style="margin: 15px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 15px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <p style="margin: 15px 0; font-weight: bold; color: #555555;">Message Content:</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #ff6b00; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <p style="font-size: 11px; color: #999999; text-align: center; margin-bottom: 0;">Sent automatically from your portfolio website contact form.</p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Nodemailer sending error:', error)
    return NextResponse.json(
      { error: error.message || 'An error occurred while dispatching email.' },
      { status: 500 }
    )
  }
}
