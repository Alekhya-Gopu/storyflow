import { useAuth } from '@firebase/FirebaseContext';

const Auth = () => {
    const { authUser, loading } = useAuth();

    return (
        <div>
            <h1>Auth</h1>
            <p>You are {!loading && authUser ? 'logged in' : 'not logged in'}</p>
        </div>
    );
}

export default Auth;