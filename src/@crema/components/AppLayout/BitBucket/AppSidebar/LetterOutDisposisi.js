import * as React from 'react';
import PropTypes from 'prop-types';
import AppScrollbar from '../../../AppScrollbar';
import MainSidebar from '../../components/MainSidebar';
import {
  styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItemAvatar,
  Avatar,
  Card,
  CardContent,
  Divider,
  Grid,
  Button,
  Box,
  ButtonGroup,
  IconButton,
  Tooltip,
  Icon,
  Stack,
} from '@mui/material';

import { Fonts } from '@crema/constants/AppEnums';

import { Mail, Plus, Filter, Search } from 'feather-icons-react';

import { ArrowForwardIosSharp, ErrorOutline } from '@mui/icons-material';

const Accordions = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummarys = styled((props) => (
  <AccordionSummary
    expandIcon={<ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetail = styled(AccordionDetails)(() => ({
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function LetterOutDisposisi({ isCollapsed }) {
  const listData1 = [
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      status: 'Selesai',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'Diproses',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'Batal',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      status: 'Batal',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'Diproses',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'Selesai',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      status: 'Selesai',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'Diproses',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'Selesai',
    },
  ];
  const listData2 = [
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      status: 'Diproses',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'Diproses',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'Batal',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      status: 'Batal',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'Diproses',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'Selesai',
    },
  ];
  const listData3 = [
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      status: 'Selesai',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'Diproses',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'Diproses',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Selesai':
        return ['#429777', '#DCF2EA'];
      case 'Diproses':
        return ['#FFB020', '#FFEFD2'];
      case 'Batal':
        return ['#C40D0E', '#F9E4E4'];
      default:
        return ['lightgrey', 'lightgrey'];
    }
  };

  const getTotalCount = (listData) => {
    return listData.length;
  };

  return (
    <MainSidebar>
      <Box sx={{ py: 2.5, px: 3.5 }}>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item xs={7}>
            <Typography
              sx={{ fontSize: 18, fontWeight: Fonts.BOLD }}
              component='h2'
            >
              Surat Keluar
            </Typography>
            <Typography
              sx={{ fontSize: 12, fontWeight: Fonts.LIGHT }}
              component='h2'
            >
              Perlu Tindak Lanjut
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <ButtonGroup>
              <IconButton>
                <Search />
              </IconButton>
              <IconButton>
                <Filter />
              </IconButton>
              <IconButton>
                <Plus />
              </IconButton>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Box>
      <AppScrollbar
        sx={{
          height: 'calc(100vh - 70px) !important',
        }}
        scrollToTop={false}
      >
        {!isCollapsed && (
          <div>
            {[listData1, listData2, listData3].map((listData, index) => (
              <Accordions key={index}>
                <AccordionSummarys
                  aria-controls={`panel${index + 1}d-content`}
                  id={`panel${index + 1}d-header`}
                >
                  <Typography>
                    Agustus-2021({getTotalCount(listData)})
                  </Typography>
                </AccordionSummarys>
                <AccordionDetail>
                  <List>
                    {listData.map((item, listIndex) => (
                      <React.Fragment key={listIndex}>
                        <Card
                          sx={{
                            position: 'relative',
                            borderLeft: `6px solid ${
                              getStatusColor(item.status)[0]
                            }`,
                            borderRadius: 0,
                          }}
                        >
                          <Button
                            sx={{ padding: 0, margin: 0, textAlign: 'left' }}
                          >
                            <CardContent>
                              <Grid container spacing={2}>
                                <Grid item xs={2}>
                                  <Stack alignItems='center' spacing={4}>
                                    <ListItemAvatar>
                                      <Avatar
                                        alt={`Avatar ${listIndex}`}
                                        src={item.avatarSrc}
                                        sx={{ width: 56, height: 56 }}
                                      />
                                    </ListItemAvatar>
                                    {(item.status === 'Diproses' ||
                                      item.status === 'Batal') && (
                                      <Tooltip title='Danger'>
                                        <Icon color='error'>
                                          <ErrorOutline />
                                        </Icon>
                                      </Tooltip>
                                    )}
                                  </Stack>
                                </Grid>
                                <Grid item xs={10}>
                                  <Grid container>
                                    <Grid item xs={8}>
                                      <Typography
                                        variant='body1'
                                        color='text.primary'
                                      >
                                        {item.primary}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={4} textAlign='right'>
                                      <Typography
                                        variant='body2'
                                        color='text.primary'
                                      >
                                        {item.date}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                      <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                      >
                                        {item.secondary}
                                      </Typography>
                                    </Grid>
                                    <Box
                                      sx={{
                                        backgroundColor: getStatusColor(
                                          item.status,
                                        )[1],
                                        color: getStatusColor(item.status)[0],
                                        width: 55,
                                        height: 25,
                                        borderRadius: 1,
                                        fontSize: '12px',
                                        lineHeight: '22px',
                                        textAlign: 'center',
                                      }}
                                    >
                                      {item.status}
                                    </Box>
                                    <Box
                                      sx={{
                                        marginLeft: 'auto',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        paddingTop: 2.4,
                                      }}
                                    >
                                      <Mail />
                                    </Box>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </CardContent>
                          </Button>
                        </Card>
                        {listIndex < listData.length - 1 && <Divider />}
                      </React.Fragment>
                    ))}
                  </List>
                </AccordionDetail>
              </Accordions>
            ))}
          </div>
        )}
      </AppScrollbar>
    </MainSidebar>
  );
}

LetterOutDisposisi.propTypes = {
  isCollapsed: PropTypes.bool,
};
