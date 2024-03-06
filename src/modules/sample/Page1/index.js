// import React from 'react';
// import { Box } from '@mui/material';
// import Tabs from '@crema/components/TabsMui';
// import AppTabs from '@crema/components/AppTabs';
// import { useDispatch } from 'react-redux';
// import Button from '@mui/material/Button';
// import { onGetListUser } from '../../../redux/actions/userAction';
import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { onGetListUser } from '../../../redux/actions/userAction';
const Page1 = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.lists);

  useEffect(() => {
    dispatch(onGetListUser());
  }, [dispatch]);
  return (
    <>
      {/* <h2>Sample page 1</h2>
      <Box sx={{ my: 2 }}>You can kick start your app</Box> */}
      {/* <Box>
        <Button onClick={() => dispatch(onGetListUser())} variant='contained'>
          Samsul
        </Button> */}
      {/* <Tabs></Tabs> */}
      {/* <AppTabs></AppTabs> */}
      {/* </Box> */}

      <Box>
        <Button variant='contained'>
          Get User List
        </Button>
        <Box>
          {userList.length > 0 ? (
            <Box>
              <Typography variant='h6'>List of Users:</Typography>
              <ul>
                {userList.map((user, index) => (
                  <li key={index}>
                    <Typography>{`Name: ${user.name}, Class: ${user.kelas}`}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
          ) : (
            <Typography variant='body1'>No users found</Typography>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Page1;
