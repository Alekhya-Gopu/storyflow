import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@supabase/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { stories } = req.query;
    console.log(stories);
    if (stories) {
        const storyIds = stories[0];
        console.log(storyIds);
        const storiesData = await supabase.from('user_stories').select('story_url').contains('user_id', [storyIds]);
        res.status(200).json(storiesData);
    } else {
        console.log('no stories');
        res.status(400).json({ error: 'No stories available for the user' });
    }
}