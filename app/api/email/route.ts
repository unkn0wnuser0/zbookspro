
import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, phone } = await request.json();

  const text = `
  Hello. 
  The consultation was requested by ${email}. 
  You can reach this person via email: ${email} or by contact phone ${phone}`

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  // const recipients = ['yann@zazmic.com', 'elena@zazmic.com']
  const recipients = ['fishmalek@gmail.com']

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: 'support@zbookpro.com',
    cc: recipients,
    subject: `Consultation request from ${name} (${email})`,
    text
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}