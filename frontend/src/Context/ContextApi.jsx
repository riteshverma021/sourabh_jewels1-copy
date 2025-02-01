import React, { createContext, useContext } from 'react';

// Create the context
export const BaseURLContext = createContext();

// Provider component to wrap the app
export const BaseURLProvider = ({ children }) => {
    const BASE_URL = "http://localhost:1002"; // Replace with your actual base URL

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
