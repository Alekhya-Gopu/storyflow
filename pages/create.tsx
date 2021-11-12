import Input from '@components/Input';
import Button from '@components/Button';
import Icon from '@components/Icon';
import Select from '@components/Select';
import { supabase } from '@supabase/client';
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { User } from '@supabase/supabase-js';
import styles from '@styles/Create.module.css';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { getYoutubeId } from '@utils/index';

interface CreateProps {
    user: User;
};
interface MediaOptions {
    readonly value: string;
    readonly label: string;
    readonly placeholder: string;
}

export default function Create({ user }: CreateProps) {
    const router = useRouter();
    const [saving, setSaving] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [storyUrl, setStoryUrl] = useState<string>('');
    const [selectedMediaOption, setSelectedMediaOption] = useState<MediaOptions>();
    let mediaId = '';

    const mediaOptions: MediaOptions[] = [
        { value: 'video', label: 'Video Link', placeholder: 'Paste Video link' },
        { value: 'youtube', label: 'YouTube', placeholder: 'Paste Youtube link' },
        { value: 'image', label: 'Image', placeholder: 'Paste Image link' },
        { value: 'instagram', label: 'Instagram', placeholder: 'Paste Instagram post URL' },
        { value: 'twitter', label: 'Twitter', placeholder: 'Paste tweet URL' },
        { value: 'tiktok', label: 'TikTok', placeholder: 'Paste TikTok URL' }
    ];

    const saveStory = async () => {
        setSaving(true);
        switch (selectedMediaOption?.value) {
            case 'youtube':
                mediaId = getYoutubeId(storyUrl);
                break;

            default:
                break;
        }
        const story = {
            name: title,
            description: description,
            type: selectedMediaOption?.value,
            url: storyUrl,
            media_id: mediaId,
            user_id: user.id,
        };

        const { data, error } = await supabase.from('stories').insert(story);
        if (data) {
            router.push('/stories');
        } else {
            toast('Something went wrong. Please try again', { type: 'error' });
            console.error(error);
        }

        setSaving(false);
    };

    return (
        <div className={styles.create}>
            <h3>Add your Story Videos</h3>
            <form className={styles.inputs}
                onSubmit={(e) => {
                    e.preventDefault();
                    title && selectedMediaOption?.value && (storyUrl || mediaId) && saveStory();
                }}>
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
                <Select
                    placeholder="Select Media Type"
                    onChange={option => setSelectedMediaOption(option as MediaOptions)}
                    options={mediaOptions}
                />
                <Input
                    type="url"
                    placeholder={selectedMediaOption?.placeholder || 'Media Link'}
                    icon="link"
                    value={storyUrl}
                    onChange={(e) => setStoryUrl(e.target.value)}
                />

                <div className={styles.submitBtn}>
                    <Button
                        size="large"
                        disabled={saving}
                        type='submit'>
                        <Icon type="plus-circle" />
                        <span>{saving ? 'Saving...' : 'Save'}</span>
                    </Button>
                </div>
            </form>
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