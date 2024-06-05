import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import jwtAxios, { setAuthToken } from './index';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
// import { connectFirestoreEmulator } from 'firebase/firestore';

const JWTAuthContext = createContext();
const JWTAuthActionsContext = createContext();

export const useJWTAuth = () => useContext(JWTAuthContext);

export const useJWTAuthActions = () => useContext(JWTAuthActionsContext);

const JWTAuthAuthProvider = ({ children }) => {
  const { fetchStart, fetchSuccess, fetchError } = useInfoViewActionsContext();
  const [firebaseData, setJWTAuthData] = useState({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    const getAuthUser = () => {
      fetchStart();
      const token = localStorage.getItem('token');
      if (!token) {
        fetchSuccess();
        setJWTAuthData({
          user: undefined,
          isLoading: false,
          isAuthenticated: false,
        });
        return;
      }
      // console.log(token);
      setAuthToken(token);
      const userData = JSON.parse(sessionStorage.getItem('user'));
      if (userData) {
        setJWTAuthData({
          user: userData,
          isLoading: false,
          isAuthenticated: true,
        });
        fetchSuccess();
      } else {
        setJWTAuthData({
          user: undefined,
          isLoading: false,
          isAuthenticated: false,
        });
        fetchSuccess();
      }
      // jwtAxios
      //   .get('/auth')
      //   .then(({ data }) => {
      //     fetchSuccess();
      //     setJWTAuthData({
      //       user: data,
      //       isLoading: false,
      //       isAuthenticated: true,
      //     });
      //   })
      //   .catch(() => {
      //     setJWTAuthData({
      //       user: undefined,
      //       isLoading: false,
      //       isAuthenticated: false,
      //     });
      //     fetchSuccess();
      //   });
      // console.log(token);
    };
    getAuthUser();
  }, []);

  const signInUser = async ({ username, password }) => {
    fetchStart();
    try {
      // console.log('Signing in with credentials:', { username, password });

      const { data } = await jwtAxios.post('/api/auth/login/', {
        username,
        password,
      });
      // console.log('Response data:', data);

      sessionStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('token', data.jwt);
      setAuthToken(data.jwt);

      setJWTAuthData({
        user: data,
        isAuthenticated: true,
        isLoading: false,
      });
      fetchSuccess();
    } catch (error) {
      console.error('Sign in error:', error.response?.data || error.message);
      setJWTAuthData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      fetchError(error?.response?.data?.error || 'Something went wrong');
    }
  };

  const signUpUser = async ({ name, username, password }) => {
    fetchStart();
    try {
      const { data } = await jwtAxios.post('users', {
        name,
        username,
        password,
      });
      localStorage.setItem('token', data.token);
      setAuthToken(data.token);
      const res = await jwtAxios.get('/auth');
      setJWTAuthData({
        user: res.data,
        isAuthenticated: true,
        isLoading: false,
      });
      fetchSuccess();
    } catch (error) {
      setJWTAuthData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      console.log('error:', error.response.data.error);
      fetchError(error?.response?.data?.error || 'Something went wrong');
    }
  };

  const logout = async () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('user');

    setAuthToken();
    setJWTAuthData({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });
  };

  return (
    <JWTAuthContext.Provider
      value={{
        ...firebaseData,
      }}
    >
      <JWTAuthActionsContext.Provider
        value={{
          signUpUser,
          signInUser,
          logout,
        }}
      >
        {children}
      </JWTAuthActionsContext.Provider>
    </JWTAuthContext.Provider>
  );
};
export default JWTAuthAuthProvider;

JWTAuthAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
  fetchStart: PropTypes.func,
  fetchSuccess: PropTypes.func,
  fetchError: PropTypes.func,
};
