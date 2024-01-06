import { Service } from "@tsed/di";
import twilio from "twilio";

@Service()
export class SendSmsService {
    async sendSms(phoneNumber: string, message: string) {
        const smsSid = process.env.SMS_SID;
        const smsToken = process.env.SMS_TOKEN;
        const smsNumber = process.env.SMS_NUMBER;

        const client = twilio(smsSid, smsToken);

        const response = await client.messages.create({
            body: message,
            from: smsNumber,
            to: phoneNumber,
        });

        return response;
    }
}
