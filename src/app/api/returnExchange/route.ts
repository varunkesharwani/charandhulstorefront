import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ensure these environment variables are set in your .env.local file
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

export async function POST(request: Request) {
  try {
    const { name, phoneNumber, email, query } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "charandhul11@gmail.com",
        pass: "fmgz htvi dawh tnfn", // Replace with your Gmail app password
      },
    });

    const mailOptions = {
      from:"charandhul11@gmail.com",
      to: "charandhul11@gmail.com", // Change to your desired recipient
      subject: "New Support Query",
      html: `
        <h1>New Support Query</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Query:</strong> ${query}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new NextResponse(
      JSON.stringify({ message: "Email Sent Successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse(
      JSON.stringify({ message: "Failed to Send Email" }),
      { status: 500 }
    );
  }
}
