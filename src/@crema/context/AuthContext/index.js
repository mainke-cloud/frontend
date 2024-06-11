import React, { createContext, useContext, useEffect, useState,  } from 'react';
import PropTypes from 'prop-types';

import { getUser } from '@crema/services/apis/profile';

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('user') || null)
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')) || null)
  const [getProfile, setGetProfile] = useState('')

  const fetchUser = async () => {
    try {
      if (!user.id) {
        return
      } else {
        const userData = await getUser(user.id);
        setGetProfile(userData[0]);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  useEffect(() => {
    fetchUser()
  }, [user])

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        getProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
