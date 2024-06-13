import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AppScrollbar from '../AppScrollbar';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ComposeMail from '@crema/components/AppAddress';
import { users } from '@crema/services/dummy/user/user';
import AProfile from '../../../assets/vector/Avatar.png';
import { X } from 'feather-icons-react';

const FormAddressBook = (props) => {
  const { text, data, templateData, isValid, onAddressBookChange } = props;
  const StyledStack = styled(Stack)(() => ({
    width: '100%',
    gap: '16px',
  }));
  const StyledTitle = styled(Typography)(() => ({
    fontWeight: '600',
    fontSize: '16px',
    textDecoration: 'underline',
  }));
  const CustomSpan = styled('span')(() => ({
    color: 'red',
  }));
  const StyledBox = styled(Box)(() => ({
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    right: '1%',
  }));

  const [isComposeMail, setComposeMail] = React.useState(false);

  const onOpenComposeMail = () => {
    setComposeMail(true);
  };
  const onCloseComposeMail = () => {
    setComposeMail(false);
    onAddressBookChange();
  };

  return (
    <StyledStack>
      <Link
        component='button'
        onClick={onOpenComposeMail}
        sx={{ color: 'black' }}
      >
        <StyledTitle sx={{ textAlign: 'left' }}>
          {text}
          <CustomSpan>*</CustomSpan>
        </StyledTitle>
      </Link>

      <Box
        position={'relative'}
        sx={{
          border: !isValid ? '1px solid red' : '1px solid #B1B5BA',
          borderRadius: '10px',
        }}
      >
        <AppScrollbar
          sx={{
            minHeight: '145px',
            maxHeight: '145px',
            overflow: 'auto',
          }}
        >
          {templateData && text == 'Kepada' ? (
            <Typography>{templateData.kepada}</Typography>
          ) : templateData && text == 'Pemeriksa' ? (
            <Typography>{templateData.pemeriksa}</Typography>
          ) : templateData && text == 'Pemohon' ? (
            <Typography>{templateData.pemohon}</Typography>
          ) : (
            data?.map((item) => (
              <Stack key={item.id}>
                {item.id && (
                  <Stack
                    direction='row'
                    spacing={5}
                    pl='20px'
                    pr='300px'
                    pt='20px'
                  >
                    <Stack>
                      <Avatar
                        sx={{
                          marginBottom: '30px',
                          marginTop: '7px',
                        }}
                        alt='Profile'
                        src={AProfile}
                      />
                    </Stack>
                    <Stack flex={1}>
                      <Typography>{item.jabatan}</Typography>
                      <Typography>{item.nama}</Typography>
                    </Stack>
                    <Stack flex={1}>
                      <Typography color='#8C8F93'>{item.nikg}</Typography>
                    </Stack>
                    <Stack flex={1}>
                      <IconButton
                        sx={{
                          width: '48px',
                          height: '48px',
                        }}
                        // onClick={() => handleDeleteFile(item.id)}
                      >
                        <X />
                      </IconButton>
                    </Stack>
                  </Stack>
                )}
              </Stack>
            ))
          )}
        </AppScrollbar>
        <StyledBox>
          <IconButton>
            <AddCircleOutlineRoundedIcon
              onClick={onOpenComposeMail}
              sx={{ color: 'black', fontSize: '40px' }}
            />
          </IconButton>
        </StyledBox>
      </Box>

      {!isValid && (
        <Typography variant='body1' color='error'>
          Kolom ini wajib diisi
        </Typography>
      )}

      <ComposeMail
        isComposeMail={isComposeMail}
        onCloseComposeMail={onCloseComposeMail}
        datas={users}
        title={text}
        type='multi'
      />
    </StyledStack>
  );
};

export default FormAddressBook;

FormAddressBook.propTypes = {
  text: PropTypes.string.isRequired,
  data: PropTypes.any,
  templateData: PropTypes.object,
  isValid: PropTypes.bool.isRequired,
  onAddressBookChange: PropTypes.func.isRequired,
};
