import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import jwtAxios, { setAuthToken } from './index';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import { useAuthContext } from '@crema/context/AuthContext';
// import { connectFirestoreEmulator } from 'firebase/firestore';

const JWTAuthContext = createContext();
const JWTAuthActionsContext = createContext();

export const useJWTAuth = () => useContext(JWTAuthContext);

export const useJWTAuthActions = () => useContext(JWTAuthActionsContext);

const JWTAuthAuthProvider = ({ children }) => {
  const {setToken, setUser} = useAuthContext();
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
      const userData = JSON.parse(localStorage.getItem('user'));

      function toISODateWithoutMilliseconds(date) {
        const pad = (n) => n < 10 ? '0' + n : n;
        const year = date.getUTCFullYear();
        const month = pad(date.getUTCMonth() + 1);
        const day = pad(date.getUTCDate());
        const hours = pad(date.getUTCHours());
        const minutes = pad(date.getUTCMinutes());
        const seconds = pad(date.getUTCSeconds());
      
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
      }

      if(userData && userData.refresh_token_exp <= toISODateWithoutMilliseconds(new Date())){
        logout();
      }
      
      if (!token) {
        fetchSuccess();
        setJWTAuthData({
          user: undefined,
          isLoading: false,
          isAuthenticated: false,
        });
        return;
      }
      setAuthToken(token);
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

      localStorage.setItem('token', data.jwt);
      localStorage.setItem('user', JSON.stringify(data));
      // sessionStorage.setItem('user', JSON.stringify(data));
      setAuthToken(data.jwt);
      // const res = await jwtAxios.get('/api/auth/login/');
      setJWTAuthData({
        user: data,
        isAuthenticated: true,
        isLoading: false,
      });
      setToken(localStorage.getItem('token'));
      setUser(JSON.parse(localStorage.getItem('user')));
      fetchSuccess();
    } catch (error) {
      setJWTAuthData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      fetchError(error?.response?.data?.error || 'Something went wrong');
    }
  };

  const signUpUser = async ({ nama_lengkap, username, password_confirm, password, email, phone_number, organisasi }) => {
    fetchStart();
    try {
      const { data } = await jwtAxios.post('/api/auth/register/admin/', {
        email,
        password,
        nama_lengkap,
        username,
        password_confirm,
        phone_number,
        organisasi,
      });
      alert(`username ${data.username} berhasil dibuat`, data);
      // localStorage.setItem('token', data.token);
      // setAuthToken(data.token);
      // const res = await jwtAxios.get('/api/auth');
      // setJWTAuthData({
      //   user: res.data,
      //   isAuthenticated: true,
      //   isLoading: false,
      // });
      fetchSuccess();
    } catch (error) {
      setJWTAuthData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      alert(`${error.response.data.detail}`, error.response.data.detail);
      fetchError(error?.response?.data?.error || 'Something went wrong');
    }
  };

  const logout = async () => {
    localStorage.clear();
    sessionStorage.clear();
    setToken(null);
    setUser(null);

    setAuthToken();
    setJWTAuthData({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });

    location.reload();
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
