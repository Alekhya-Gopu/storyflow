import type { NextApiRequest, NextApiResponse } from 'next';
import read from './backblaze/read';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const data = await read(req, res);

        res.setHeader(
            'Content-Type', 'text/html'
        );
        const html = await data?.text();
        res.status(200).send(html);
    } catch (err) {
        res.status(500).json({ err });
    }
}