import React from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Typography, Select, MenuItem, TextField } from '@mui/material';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

const LabelInput = ({ type, name, item, important, under }) => {
  const [date, setDate] = React.useState(null);
  const [select, setSelect] = React.useState('');

  const handleSelect = (event) => {
    setSelect(event.target.value);
  };
  return (
    <>
      <Stack rowGap='8px'>
        <Typography
          fontSize='16px'
          fontWeight='700'
          style={{ textDecoration: under ? 'underline' : 'none' }}
        >
          {name}
          {important && <span style={{ color: '#E42313' }}>*</span>}
        </Typography>
        {type === 'tanggal' ? (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={date}
              onChange={(date) => {
                setDate(date);
              }}
            />
          </LocalizationProvider>
        ) : type === 'select' ? (
          <Select value={select} onChange={handleSelect} placeholder='Normal'>
            {item.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        ) : type === 'input' ? (
          <TextField />
        ) : type === 'textfield' ? (
          <TextField multiline minRows={6} />
        ) : (
          <Box/>
        )}
      </Stack>
    </>
  );
};

LabelInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  item: PropTypes.array,
  important: PropTypes.bool,
  under: PropTypes.bool,
};

export default LabelInput;
