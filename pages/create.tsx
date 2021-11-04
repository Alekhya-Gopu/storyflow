import { supabase } from '@supabase/client';
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { User } from '@supabase/supabase-js';
import styles from '@styles/Create.module.css';
import Input from '@components/Input';
import Button from '@components/Button';
import Icon from '@components/Icon';

interface CreateProps {
    user: User;
};

export default function Create({ user }: CreateProps) {
    const [saving, setSaving] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [storyUrl, setStoryUrl] = useState<string>('');

    const saveStory = async () => {
        setSaving(true);
        const story = {
            story_name: title,
            story_desc: description,
            story_url: storyUrl,
            user_uid: user.id,
        };

        const { data, error } = await supabase.from('user_stories').insert(story);
        setSaving(false);
        if (error) {
            console.error(error);
        }
        console.log(data);
    };

    return (
        <div className={styles.create}>
            <h3>Add your Story Videos</h3>
            <div className={styles.inputs}>
                <Input
                    placeholder="Title"
                    icon="edit-3"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Input
                    placeholder="Description"
                    icon="edit-3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Input
                    type="url"
                    placeholder="Video Story URL"
                    icon="link"
                    value={storyUrl}
                    onChange={(e) => setStoryUrl(e.target.value)}
                />
                <Button
                    size="large"
                    disabled={saving}
                    onClick={saveStory}>
                    <Icon type="plus-circle" />
                    <span>{saving ? 'Saving...' : 'Save'}</span>
                </Button>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) {
        return { props: {}, redirect: { destination: '/login' } };
    }

    return { props: { user } };
}