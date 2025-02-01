import React, { createContext, useContext } from 'react';

// Create the context
export const BaseURLContext = createContext();

// Provider component to wrap the app
export const BaseURLProvider = ({ children }) => {
    const BASE_URL = "https://sourabh-jewels1-copy.onrender.com"; // Replace with your actual base URL

    return (
        <BaseURLContext.Provider value={BASE_URL}>
            {children}
        </BaseURLContext.Provider>
    );
};

// Custom hook for consuming the context
export const useBaseURL = () => {
    return useContext(BaseURLContext);
};
