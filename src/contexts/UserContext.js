import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({ children }) => {

    // Sign Up with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }



    const contents = { createUser };
    return (
        <AuthContext.Provider value={contents}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;