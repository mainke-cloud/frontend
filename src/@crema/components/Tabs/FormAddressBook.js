import React from 'react'
import PropTypes from 'prop-types';
import { Box, IconButton, Stack, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import AppScrollbar from '../AppScrollbar'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ComposeMail from '@crema/components/AppAddress';

const FormAddressBook = (props) => {
    const { text } = props;
    
    const StyledStack = styled(Stack)(() => ({
        width: '100%',
        gap:'16px',
    }))
    const StyledTitle = styled(Typography)(() => ({
        fontWeight: '600',
        fontSize: '16px',
        textDecoration: 'underline',
    }))
    const CustomSpan = styled('span')(() => ({
        color: 'red',
    }))

    const [isComposeMail, setComposeMail] = React.useState(false);

    const onOpenComposeMail = () => {
        setComposeMail(true);
    };
    const onCloseComposeMail = () => {
        setComposeMail(false);
    };

  return (
    <StyledStack>
        <StyledTitle>{text}<CustomSpan>*</CustomSpan></StyledTitle>

        <AppScrollbar>
            <TextField
                id='outlined-multiline-static'
                multiline
                rows={4}
                fullWidth
                InputProps={{
                    endAdornment: (
                    <IconButton>
                        <AddCircleOutlineRoundedIcon onClick={onOpenComposeMail} sx={{ color: 'black' }} />
                    </IconButton>
                    ),
                }}
            />
        </AppScrollbar>

        <ComposeMail
            isComposeMail={isComposeMail}
            onCloseComposeMail={onCloseComposeMail}
        />
    </StyledStack>
  )
}

export default FormAddressBook;

FormAddressBook.propTypes = {
    text: PropTypes.string,
}