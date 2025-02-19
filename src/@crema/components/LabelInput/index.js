import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Stack,
  Typography,
  Select,
  MenuItem,
  TextField,
  IconButton,
} from '@mui/material';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

const LabelInput = ({
  type,
  name,
  label,
  item,
  important,
  under,
  value,
  onChange,
  onClick,
  addressBook,
}) => {
  return (
    <>
      <Stack rowGap='8px'>
        <Typography
          fontSize='16px'
          fontWeight='700'
          style={{ textDecoration: under ? 'underline' : 'none' }}
          onClick={onClick}
        >
          {label}
          {important && <span style={{ color: '#E42313' }}>*</span>}
        </Typography>
        {type === 'tanggal' ? (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={value}
              onChange={(date) => {
                onChange(date);
              }}
            />
          </LocalizationProvider>
        ) : type === 'select' ? (
          <Select
            name={name}
            value={value}
            onChange={(e) => onChange(e)}
            placeholder='Normal'
          >
            {item.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        ) : type === 'input' ? (
          <TextField
            name={name}
            value={value}
            onChange={(e) => onChange(e)}
            {...(addressBook && {
              InputProps: {
                endAdornment: (
                  <IconButton
                    onClick={onClick}
                    style={{ position: 'absolute', right: 0 }}
                  >
                    <AddCircleOutlineRoundedIcon sx={{ color: 'black' }} />
                  </IconButton>
                ),
              },
            })}
          />
        ) : type === 'textfield' ? (
          <TextField
            name={name}
            multiline
            minRows={6}
            value={value}
            onChange={(e) => onChange(e)}
            {...(addressBook && {
              InputProps: {
                endAdornment: (
                  <IconButton
                    onClick={onClick}
                    style={{ position: 'absolute', bottom: 0, right: 0 }}
                  >
                    <AddCircleOutlineRoundedIcon sx={{ color: 'black' }} />
                  </IconButton>
                ),
              },
            })}
          />
        ) : (
          <Box />
        )}
      </Stack>
    </>
  );
};

LabelInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  item: PropTypes.array,
  important: PropTypes.bool,
  under: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  onChange: PropTypes.func,
  addressBook: PropTypes.bool,
};

export default LabelInput;
