import React, { createContext, useContext } from 'react';
import useFirebaseAuth from './useFirebaseAuth';
import './firebase';

const UserContext = createContext({
    authUser: null,
    loading: true
});

const AuthUserProvider = UserContext.Provider;

export function UserProvider({ children }: any) {
    const auth = useFirebaseAuth();
    return (
        <AuthUserProvider value={auth} >
            {children}
        </AuthUserProvider>
    );
};

// custom hook to use the UserContext and access authUser and loading
export const useAuth = () => useContext(UserContext);