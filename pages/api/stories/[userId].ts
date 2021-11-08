import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@supabase/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userId } = req.query;
    console.log(userId);
    if (userId) {
        const { data, error } = await supabase
            .from('user_stories')
            .select('story_url')
            .eq('user_uid', userId)
        // const storiesData = await supabase.from('user_stories').select('story_url').contains('user_id', stories);
        console.log(data);
        res.status(200).json(data);
    } else {
        console.log('no stories');
        res.status(400).json({ error: 'No stories available for the user' });
    }
}