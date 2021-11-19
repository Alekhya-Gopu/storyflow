import type { NextApiRequest, NextApiResponse } from 'next';
import b2 from '@backblaze/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // get user Id
        const { id } = req.query;
        if (!id) {
            throw new Error('No user id provided');
        }

        // must authorize first (authorization lasts 24 hrs)
        await b2.authorize();

        const { data } = await b2.downloadFileByName({
            bucketName: "storyflow",
            fileName: `${id}.html`,
            responseType: 'blob',
            onDownloadProgress: (progress: any) => {
                console.log(progress);
            }
        });

        return res.send(data);
    } catch (err) {
        res.status(500).json({
            message: 'Failed to upload file',
            error: err
        });
    }
}