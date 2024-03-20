import React from 'react';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PropTypes from 'prop-types';

const ArrowBackButton = ({ path }) => {
  return (
    <Link to={path}>
      <IconButton>
        <ArrowBackIosNewIcon />
      </IconButton>
    </Link>
  );
};

ArrowBackButton.propTypes = {
  path: PropTypes.string.isRequired,
};

export default ArrowBackButton;
