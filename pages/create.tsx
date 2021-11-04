import { supabase } from '@supabase/client';
import { GetServerSideProps } from 'next';

export default function Protected({ user }: { user: any }) {
    console.log({ user })
    return (
        <div style={{ maxWidth: '420px', margin: '96px auto' }}>
            <h2>Hello from protected route</h2>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    /* check to see if a user is set */
    const { user } = await supabase.auth.api.getUserByCookie(req);

    /* if no user is set, redirect to the home page */
    if (!user) {
        return { props: {}, redirect: { destination: '/login' } };
    }

    /* if a user is set, pass it to the page via props */
    return { props: { user } };
}