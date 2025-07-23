import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);
    // const audienceId = process.env.RESEND_AUDIENCE_ID;

    // Send the email using Resend
    const { error } = await resend.emails.send({
      from: 'no-reply@codecollective.com',
      to: ['recipient@example.com'], // Replace with your recipient or use audienceId if needed
      subject: `New Get Started Inquiry from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message}</p>`,
    });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email.' }, { status: 500 });
  }
}
// Set RESEND_API_KEY and RESEND_AUDIENCE_ID in your environment variables.
