import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Link, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import AppScrollbar from '../AppScrollbar';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ClassificationProblem from '@crema/components/AppClassificationProblem';
import { users } from '@crema/services/dummy/user/user';
import { useSelector } from 'react-redux';

const FormClassification = (props) => {
  const { text, isValid, klasifikasi } = props;

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

  const [isClassificationProblem, setClassificationProblem] =
    React.useState(false);

  const onOpenClassificationProblem = () => {
    setClassificationProblem(true);
  };
  const onCloseClassificationProblem = () => {
    setClassificationProblem(false);
  };

  return (
    <StyledStack>
      <Link
        component='button'
        onClick={onOpenClassificationProblem}
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
          border: '1px solid #B1B5BA',
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
          <Typography>
            {klasifikasi.name} {klasifikasi.desc}
          </Typography>
        </AppScrollbar>
        <StyledBox>
          <IconButton>
            <AddCircleOutlineRoundedIcon
              onClick={onOpenClassificationProblem}
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

      <ClassificationProblem
        isClassificationProblem={isClassificationProblem}
        onCloseClassificationProblem={onCloseClassificationProblem}
        text={text}
      />
    </StyledStack>
  );
};

export default FormClassification;

FormClassification.propTypes = {
  text: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  klasifikasi: PropTypes.func.isRequired,
};
