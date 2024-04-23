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
        zIndex: 1,
        bottom: 0,
        right: '1%',
      }}
    >
      {pemeriksa && (
        <IconButton>
          <AddCircleOutlineRoundedIcon
            onClick={onOpenComposeMail}
            sx={{ color: 'black', fontSize: '40px' }}
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
