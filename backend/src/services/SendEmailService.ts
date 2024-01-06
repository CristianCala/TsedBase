import { Service } from "@tsed/di";
import nodemailer from "nodemailer";

@Service()
export class SendEmailService {
    async sendEmail(email: string, name: string, link: string, template: string) {
        const day = new Date().getDate().toString();
        const year = new Date().getFullYear();
        const month = new Date().toLocaleString('es', { month: 'long' });

        const emailBody = template
            .replace(/{{name}}/g, name)
            .replace(/{{day}}/g, day)
            .replace(/{{month}}/g, month)
            .replace(/{{link}}/g, link)
            .replace(/{{year}}/g, year.toString());

        
        /* If you can chance to gmail and others */
/*         let transporter = nodemailer.createTransport({
            host: "mail.vilotechnologies.cc",
            port: 587,
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD,
            },
            secure: false,
            requireTLS: true,
            tls: {
                rejectUnauthorized: false
            }
        }); */

        /* If you can chance to mailhog */
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: 1025,
            ignoreTLS: true,
        });
        
        const info = await transporter.sendMail({
            from: process.env.EMAIL_ADDRESS,
            to: email,
            subject: 'subject',
            text: 'text',
            html: emailBody,
        });
    }
}
