import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [showModel, setShowModel] = useState(false);
    const [login, setLogin] = useState(false);
    const [videoId] = useState(667538);


    return (
        <Context.Provider value={{ showModel, setShowModel, videoId, login, setLogin }}>
            {children}
        </Context.Provider>
    );
};
