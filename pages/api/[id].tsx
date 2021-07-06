import { NextApiRequest, NextApiResponse } from 'next';

type Response = {
  id: string | string[];
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>): Promise<void> => {
  const { id } = req.query;

  res.status(200).json({ id: id, message: 'Dynamic API' });
};

export default handler;
