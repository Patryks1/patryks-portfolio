import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../util/mongodb';

type Response = {
  message?: string;
  method?: string;
  success: boolean;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>): Promise<void> => {
  const { method } = req;

  // DB connection if needed
  await dbConnect();

  switch (method) {
    case 'GET':
      res.status(200).json({ message: 'Hello World', method: 'GET', success: true });
      break;
    case 'POST':
      res.status(200).json({ message: 'Hello World', method: 'POST', success: true });
      break;
    case 'DELETE':
      res.status(200).json({ message: 'Hello World', method: 'DELETE', success: true });
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default handler;
