import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY || process.env.EMAIL_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const escapeHtml = (value = '') =>
    value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');

export async function POST(request) {
    if (!resend) {
        return NextResponse.json(
            { error: 'Missing Resend API key. Add RESEND_API_KEY to your environment.' },
            { status: 500 }
        );
    }

    try {
        const { name, email, subject, message } = await request.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required.' },
                { status: 400 }
            );
        }

        const { error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'arshpreet.singh.dev@gmail.com',
            replyTo: email,
            subject: `Portfolio contact: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
                    <h2 style="margin-bottom: 16px;">New message from your portfolio</h2>
                    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
                    <p><strong>Message:</strong></p>
                    <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
                </div>
            `,
        });

        if (error) {
            return NextResponse.json(
                { error: error.message || 'Failed to send email.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Message sent successfully.' },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: error.message || 'Unexpected server error.' },
            { status: 500 }
        );
    }
}