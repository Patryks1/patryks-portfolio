import { NextApiRequest, NextApiResponse } from 'next';
import { IRestBaseResponse } from '../../interfaces/contact.interfaces';
import sanitizeHtml from 'sanitize-html';
import * as EmailValidator from 'email-validator';
import transporter from '../../lib/gmailTransporter';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IRestBaseResponse>
): Promise<void> => {
  const { method, body } = req;

  switch (method) {
    case 'POST': {
      const sanitizedEmail = sanitizeHtml(body.email);
      const sanitizedFirstName = sanitizeHtml(body.firstName);
      const sanitizedLastName = sanitizeHtml(body.lastName);
      const sanitizedMessage = sanitizeHtml(body.message);

      if (!EmailValidator.validate(sanitizedEmail)) {
        return res.status(200).json({ detail: 'Invalid Email', method: 'POST', status: 400 });
      }

      if (!sanitizedMessage) {
        return res.status(200).json({ detail: 'Message is required', method: 'POST', status: 400 });
      }

      const hasProvidedName = sanitizedFirstName && sanitizedLastName;

      const contactFrom = hasProvidedName
        ? `${sanitizedFirstName} ${sanitizedLastName}`
        : sanitizedEmail;

      const message = `FROM: ${sanitizedEmail}\n${sanitizedMessage}`;

      const mailOptions = {
        from: sanitizedEmail,
        to: process.env.GMAIL_EMAIL,
        subject: `Portfolio contact from ${contactFrom}`,
        text: message
      };

      const mailResponse = await transporter.sendMail(mailOptions);

      if (!mailResponse) {
        return res.status(500).json({ detail: 'Error sending email', method: 'POST', status: 500 });
      }

      return res.status(200).json({ detail: 'Message sent!', method: 'POST', status: 200 });
    }
    default: {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
    }
  }
};

export default handler;
