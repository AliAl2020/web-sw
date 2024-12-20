import React, { createContext, useState } from 'react';

// Create the context
export const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({
        token: null, // Example global parameter
        email: null,  // Example user data
        taxId: null,
        expirationTime:null,
        status:null

    });

    return (
        <GlobalContext.Provider value={{ globalState, setGlobalState }}>
            {children}
        </GlobalContext.Provider>
    );
};
