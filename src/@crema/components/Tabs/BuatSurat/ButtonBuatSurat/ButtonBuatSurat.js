import { Box, IconButton } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import React from 'react';
import PropTypes from 'prop-types';
import ComposeMail from '@crema/components/AppAddress';

const ButtonBuatSurat = ({ pemeriksa }) => {
  const [isComposeMail, setComposeMail] = React.useState(false);

  const onOpenComposeMail = () => {
    setComposeMail(true);
  };

  const onCloseComposeMail = () => {
    setComposeMail(false);
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        //   top: 0,
        // left: '50%',
        right: '1%',
        bottom: '6%',
      }}
    >
      {pemeriksa && (
        <IconButton>
          <AddCircleOutlineRoundedIcon
            onClick={onOpenComposeMail}
            sx={{ color: 'black' }}
          />
        </IconButton>
      )}
      <ComposeMail
        isComposeMail={isComposeMail}
        onCloseComposeMail={onCloseComposeMail}
      />
    </Box>
  );
};

ButtonBuatSurat.propTypes = {
  pemeriksa: PropTypes.bool,
};

export default ButtonBuatSurat;
