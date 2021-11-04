import { supabase } from '@supabase/client';
import { GetServerSideProps } from 'next';
import { User } from '@supabase/supabase-js';
import styles from '@styles/Create.module.css';
import Input from '@components/Input';
import Button from '@components/Button';
import Icon from '@components/Icon';

export default function Create(user: User) {
    return (
        <div className={styles.create}>
            <h3>Add your Story Videos</h3>
            <div className={styles.inputs}>
                <Input placeholder="Title" icon="edit-3" />
                <Input placeholder="Description" icon="edit-3" />
                <Input type="url" placeholder="Video URL" icon="link" />
                <Button size="large">
                    <Icon type="plus-circle" />Add
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