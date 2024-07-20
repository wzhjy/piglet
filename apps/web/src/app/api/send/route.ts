
import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/email/email-template';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
	try {
		//@ts-ignore use react over text
		const { data, error } = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: ['zhihui.wang711@gmail.com'],
			subject: 'Hello world',
			react: EmailTemplate({ firstName: 'John' }),
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json(data);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
