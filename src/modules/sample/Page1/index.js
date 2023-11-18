import React from 'react';
import { Box } from '@mui/material';
import { useGetDataApi } from '../../../@crema/hooks/APIHooks';

const Page1 = () => {
  const [{ apiData, loading }] = useGetDataApi('/api/sample', {}, {}, true);

  console.log('apiData: ', apiData, loading);
  return (
    <>
      <h2>Sample page 1</h2>
      <Box sx={{ my: 2 }}>You can kick start your app</Box>
    </>
  );
};

export default Page1;
