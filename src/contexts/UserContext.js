import React, { createContext } from 'react';

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const contents = { ab: 120 };
    return (
        <AuthContext.Provider value={contents}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;