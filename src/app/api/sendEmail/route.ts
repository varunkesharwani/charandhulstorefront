import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    const mailOption = {
      from: "charandhul11@gmail.com",
      to: "charandhul11@gmail.com",
      subject: "New Support Query",
      html: `
      h1>New Support Query</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Query:</strong> ${query}</p>
      `,
    };

    await transporter.sendMail(mailOption);

    return new Response(
      JSON.stringify({ message: "Email Sent Successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          Location: "/success",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to Send Email" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
