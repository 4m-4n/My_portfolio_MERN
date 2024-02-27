import {createTransport} from "nodemailer"
export const Sendmail=async(text)=>{
    const transporter=createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,       //mailtrap 
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD
        }
    })
    await transporter.sendMail({
        subject:"Mail request from my portfolio",
        to:process.env.MYMAIL,
        from:process.env.MYMAIL,
        text,
    })
}