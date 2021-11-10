import { supabase } from '@supabase/client';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import styles from '@styles/Stories.module.css';
import Button from '@components/Button';
import Icon from '@components/Icon';
import Card from '@components/Card';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface StoryProps {
    user: User;
};

interface Story {
    id: string;
    name: string;
    description: string;
    url: string;
    user_id: string;
};

export default function Stories({ user }: StoryProps) {
    const router = useRouter();
    const [stories, setStories] = useState<Story[]>([]);

    const fetchStories = async () => {
        const { data, error } = await supabase.from('stories').select('*');

        if (data) {
            setStories(data);
        } else {
            error && console.error(error);
        }
    };

    const removeStory = async (story_id: string) => {
        const { data, error } = await supabase.from('stories').delete().match({ id: story_id });
        if (error) {
            console.error(error);
        }
    };

    const updateStory = async (story_id: string, name: string, description: string, url: string) => {
        const { data, error } = await supabase.from('stories').update({ name, description, url }).match({ id: story_id });
        if (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchStories();
    }, []);

    return (
        <div className={styles.storiesContainer}>
            <div className={styles.storiesHead}>
                <h2 className={styles.title}>Your Stories</h2>
                <Link href='/create' passHref>
                    <Button size='large'>
                        <Icon type="plus-circle" />
                        Add stories
                    </Button>
                </Link>
            </div>
            <div className={styles.stories}>
                {stories.map((story) => (
                    <Card key={story.id}
                        title={story.name}
                        description={story.description}
                        url={story.url}
                        id={story.id}
                        cardActions={[
                            { icon: 'trash', action: () => removeStory(story.id) },
                        ]} />
                ))}
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) {
        return { props: {}, redirect: { destination: '/login' } };
    }

    return { props: { user } };
}