import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './loader.css';

const AppLoader = () => {
  return (
    <div className='app-loader'>
      <div className='loader-spin'>
      <CircularProgress />
        {/* <span className='crema-dot crema-dot-spin'>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span> */}
      </div>
    </div>
  );
};

export default AppLoader;
