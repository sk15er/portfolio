import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { fullName, email, message } = await req.json();

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["shushankpawar664@gmail.com"], // <-- Replace with your email
      subject: `New Contact Message from ${fullName}`,
      replyTo: email, // <-- FIXED HERE
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (data.error) {
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request." }, { status: 500 });
  }
}