import React, { useState } from 'react';
import {
  Stack,
  Typography,
  Box,
  Grid,
  Button,
  Divider,
  IconButton,
  InputBase,
  Chip,
} from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import AProfile from '../../../../../assets/vector/Avatar.png';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { MessageSquare, File, X } from 'feather-icons-react';

const ListKomentar = ({ komen }) => {
  const StyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
      color: 'white',
    },
    '&.angka': {
      backgroundColor: '#000000',
    },
  }));

  const KirimButton = styled(Button)({
    borderRadius: '25px',
    backgroundColor: '#4B4747',
    color: 'white',
    fontSize: '12px',
    boxShadow: 'none',
    textTransform: 'none',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    '&:hover': {
      backgroundColor: '#E42313',
      borderColor: '#E42313',
      boxShadow: 'none',
    },
  });

  const [showReplyInput, setShowReplyInput] = useState(null);
  const [showReply, setShowReply] = useState(null);

  return (
    <>
      {Array.from({
        length: 1,
      }).map((_, index) => (
        <Stack key={index} sx={{ paddingX: '20px', paddingY: '10px' }}>
          <Grid
            container
            columnSpacing='16px'
            // alignItems='center'
          >
            <Grid item xs={2}>
              <Stack justifyContent='space-between' alignItems='center'>
                <Avatar
                  sx={{
                    marginBottom: '30px',
                    marginTop: '7px',
                  }}
                  alt='Profile'
                  src={AProfile}
                />
                <StyledBadge
                  overlap='circular'
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  badgeContent='1'
                  className='angka'
                />
              </Stack>
            </Grid>
            <Grid item xs={10}>
              <Stack
                direction='row'
                justifyContent='space-between'
                spacing={15}
              >
                <Typography fontSize='16px' fontWeight='700'>
                  Yani Dama Putera
                </Typography>

                <Typography fontSize='16px' color='#8C8F93'>
                  7200004
                </Typography>
              </Stack>
              <Typography fontSize='12px' color='#8C8F93'>
                6 Oktober 2021 - 10:09
              </Typography>
              <Typography
                sx={{
                  overflowWrap: 'break-word',
                  wordWrap: 'break-word',
                  whiteSpace: 'normal',
                }}
              >
                {komen}
              </Typography>
            </Grid>

            <Stack direction='row' gap={6} paddingX='35px'>
              <Stack direction='row' columnGap='18px' alignItems='center'>
                <IconButton
                  onClick={() =>
                    setShowReply(showReply === index ? null : index)
                  }
                  sx={{ padding: '0px' }}
                >
                  <Stack direction='row' columnGap='6px' alignItems='center'>
                    <MessageSquare style={{ width: '16px' }} />
                    <Typography>1</Typography>
                  </Stack>
                </IconButton>
                <IconButton
                  onClick={() =>
                    setShowReplyInput(showReplyInput === index ? null : index)
                  }
                  sx={{ padding: '0px' }}
                >
                  <Typography>Balas</Typography>
                </IconButton>
                <IconButton sx={{ padding: '0px' }}>
                  <Stack direction='row' columnGap='6px' alignItems='center'>
                    <File style={{ width: '16px' }} />
                    <Typography>2</Typography>
                  </Stack>
                </IconButton>
              </Stack>
            </Stack>
          </Grid>
          {showReply === index && (
            <Box
              paddingX='8px'
              marginTop='8px'
              paddingY='12px'
              backgroundColor='#F7F8F9'
              border='1px solid #B1B5BA'
              borderRadius='4px'
            >
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                paddingBottom='8px'
              >
                <Typography>Balasan Komentar</Typography>
                <IconButton sx={{ padding: '0px' }}>
                  <X
                    onClick={() => setShowReply(null)}
                    style={{ width: '16px', height: '16px' }}
                  />
                </IconButton>
              </Stack>
              <Grid
                container
                columnSpacing='16px'
                alignItems='flex-start'
                paddingLeft='16px'
              >
                <Grid item xs={2}>
                  <Avatar alt='Profile' src={AProfile} />
                </Grid>
                <Grid item xs={10}>
                  <Stack
                    direction='row'
                    alignItems='baseline'
                    justifyContent='space-between'
                    columnGap='4px'
                  >
                    <Typography fontSize='14px' fontWeight='700'>
                      Yani Dama Putera
                    </Typography>
                    <Typography fontSize='16px' color='#8C8F93'>
                      7200004
                    </Typography>
                  </Stack>
                  <Typography fontSize='10px' color='#8C8F93'>
                    6 Oktober 2021 - 10:09
                  </Typography>
                  <Typography fontSize='13px'>Mohon Dicek</Typography>
                  <Stack direction='row' columnGap='18px' alignItems='center'>
                    <IconButton
                      onClick={() =>
                        setShowReply(showReplyInput === index ? null : index)
                      }
                      sx={{ padding: '0px' }}
                    >
                      <Stack
                        direction='row'
                        columnGap='6px'
                        alignItems='center'
                      >
                        <MessageSquare style={{ width: '16px' }} />
                        <Typography>1</Typography>
                      </Stack>
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        setShowReplyInput(
                          showReplyInput === index ? null : index,
                        )
                      }
                      sx={{ padding: '0px' }}
                    >
                      <Typography>balas</Typography>
                    </IconButton>
                  </Stack>
                </Grid>
              </Grid>
              <Divider />
            </Box>
          )}
          {showReplyInput === index && (
            <Stack
              paddingY='8px'
              direction='row'
              columnGap='16px'
              sx={{
                marginTop: '8px',
                justifyContent: 'space-between',
              }}
            >
              <InputBase
                placeholder='Balas Komentar...'
                sx={{
                  width: '100%',
                  border: '0.5px solid #8C8F93',
                  borderRadius: '8px',
                  paddingX: '8px',
                }}
              />
              <KirimButton onClick={() => setShowReplyInput(null)}>
                Balas
              </KirimButton>
            </Stack>
          )}
        </Stack>
      ))}
    </>
  );
};

ListKomentar.propTypes = {
  // label: PropTypes.string.isRequired,
  komen: PropTypes.string.isRequired,
};
export default ListKomentar;
