import { useState, useEffect } from 'react';
import { supabase } from '@supabase/client';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { User } from '@supabase/supabase-js';

const Profile: NextPage = () => {
    const [profile, setProfile] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        async function fetchProfile() {
            const profileData: (User | null) = await supabase.auth.user();
            if (!profileData) {
                router.push('/');
            } else {
                setProfile(profileData);
            }
        }
        fetchProfile();
    }, [router]);

    async function signOut() {
        await supabase.auth.signOut();
        router.push('/');
    }

    if (!profile) return null;

    return (
        <div style={{ maxWidth: '420px', margin: '96px auto' }}>
            <h2>Hello, {profile.email}</h2>
            <p>User ID: {profile.id}</p>
            <button onClick={signOut}>Sign Out</button>
        </div>
    )
}

export default Profile;