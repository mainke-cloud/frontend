import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const getUser = async (userId) => {
        try {
            const response = await axios.get(`https://new.coofis.com/api/profile/?id_user=${userId}`);
            setUser(response.data.results);
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    useEffect(() => {
        const dataFromSession = sessionStorage.getItem('user');
        if (dataFromSession) {
            const data = JSON.parse(dataFromSession);
            if (data && data.id) {
                getUser(data.id);
            }
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
