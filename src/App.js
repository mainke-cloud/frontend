import React from 'react';
import { Provider } from 'react-redux'; 
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppContextProvider from '@crema/context/AppContextProvider';
import AppThemeProvider from '@crema/context/AppThemeProvider';
import AppStyleProvider from '@crema/context/AppStyleProvider';
import AppLocaleProvider from '@crema/context/AppLocaleProvider';
import InfoViewContextProvider from '@crema/context/AppContextProvider/InfoViewContextProvider';
import AppAuthProvider from '@crema/core/AppAuthProvider';
import AuthRoutes from '@crema/components/AuthRoutes';
import AppLayout from '@crema/core/AppLayout';
import './styles/index.css';
import configureStore from './redux/store';
import { AuthContextProvider } from '@crema/context/AuthContext';

const store = configureStore();

const App = () => (  
  <Provider store={store}>
    <AuthContextProvider>
      <AppContextProvider>
        <AppThemeProvider>
          <AppStyleProvider>
            <AppLocaleProvider>
              <BrowserRouter>
                <InfoViewContextProvider>
                  <AppAuthProvider>
                    <AuthRoutes>
                      <CssBaseline />
                      <AppLayout />
                    </AuthRoutes>
                  </AppAuthProvider>
                </InfoViewContextProvider>
              </BrowserRouter>
            </AppLocaleProvider>
          </AppStyleProvider>
        </AppThemeProvider>
      </AppContextProvider>
    </AuthContextProvider>
  </Provider>
);

export default App;
