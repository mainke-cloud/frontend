import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getUser } from '@crema/services/apis/profile';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async (userId) => {
    try {
      const userData = await getUser(userId);
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  useEffect(() => {
    const dataFromSession = sessionStorage.getItem('user');
    if (dataFromSession) {
      const data = JSON.parse(dataFromSession);
      if (data && data.id) {
        fetchUser(data.id);
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
