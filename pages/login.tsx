import type { NextPage } from 'next';
import { useState } from 'react';
import { supabase } from '@supabase/client';
import Button from '@components/Button';
import Input from '@components/Input';
import styles from '@styles/Login.module.css';

const Login: NextPage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('')

    const handleLogin = async (email: string) => {
        try {
            setLoading(true)
            const { user, session, error } = await supabase.auth.signIn({ email });
            if (error) throw error
            alert('Check your email for the login link!')
        } catch (error) {
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={styles.login}>
            <div className={styles.loginForm}>
                <h3 className="description">Login in via magic link</h3>
                <div className={styles.emailInput}>
                    <Input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={styles.loginButton}>
                    <Button
                        disabled={loading}
                        onClick={() => handleLogin(email)}>
                        <span>{loading ? 'Sending...' : 'Send magic link'}</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login;