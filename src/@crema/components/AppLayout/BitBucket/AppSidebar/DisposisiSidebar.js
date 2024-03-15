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
  Checkbox,
  ListItemAvatar,
  Avatar,
  Card,
  CardContent,
  Divider,
  Grid,
  ListItemIcon,
  Button,
  Box,
  ButtonGroup,
  IconButton,
} from '@mui/material';

import { Fonts } from '@crema/constants/AppEnums';

import { Plus, Filter, Search } from 'feather-icons-react';

import {
  Star,
  StarBorder,
  ArrowForwardIosSharp,
  Cached,
  DraftsOutlined,
  MailOutline,
} from '@mui/icons-material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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

const AccordionDetail = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function DisposisiSidebar({ isCollapsed }) {
  const listData1 = [
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      status: 'read',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'unread',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'disposisi',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      status: 'disposisi',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'unread',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'read',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      status: 'read',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'unread',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'read',
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
      status: 'unread',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'unread',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'disposisi',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      status: 'disposisi',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'unread',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'read',
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
      status: 'read',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'unread',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'unread',
    },
  ];

  const [readCount, setReadCount] = React.useState(0);
  const [unreadCount, setUnreadCount] = React.useState(0);
  const [disposisiCount, setDisposisiCount] = React.useState(0);

  React.useEffect(() => {
    const readList1 = listData1.filter((item) => item.status === 'read');
    const unreadList1 = listData1.filter((item) => item.status === 'unread');
    const disposisiList1 = listData1.filter(
      (item) => item.status === 'disposisi',
    );
    setReadCount(readList1.length);
    setUnreadCount(unreadList1.length);
    setDisposisiCount(disposisiList1.length);
  }, [listData1]);

  React.useEffect(() => {
    const readList2 = listData2.filter((item) => item.status === 'read');
    const unreadList2 = listData2.filter((item) => item.status === 'unread');
    const disposisiList2 = listData2.filter(
      (item) => item.status === 'disposisi',
    );
    setReadCount(readList2.length);
    setUnreadCount(unreadList2.length);
    setDisposisiCount(disposisiList2.length);
  }, [listData2]);

  React.useEffect(() => {
    const readList3 = listData3.filter((item) => item.status === 'read');
    const unreadList3 = listData3.filter((item) => item.status === 'unread');
    const disposisiList3 = listData3.filter(
      (item) => item.status === 'disposisi',
    );
    setReadCount(readList3.length);
    setUnreadCount(unreadList3.length);
    setDisposisiCount(disposisiList3.length);
  }, [listData3]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'read':
        return '#B1B5BA';
      case 'unread':
        return '#FFB020';
      case 'disposisi':
        return '#9DB5FF';
      default:
        return 'lightgrey';
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
              Disposisi
            </Typography>
            <Typography
              sx={{ fontSize: 12, fontWeight: Fonts.LIGHT }}
              component='h2'
            >
              My Disposisi
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
                            borderLeft: `6px solid ${getStatusColor(
                              item.status,
                            )}`,
                            borderRadius: 0,
                          }}
                        >
                          <Button
                            sx={{ padding: 0, margin: 0, textAlign: 'left' }}
                          >
                            <CardContent>
                              <Grid container>
                                <Grid item xs={2} container>
                                  <ListItemAvatar>
                                    <Avatar
                                      alt={`Avatar ${listIndex}`}
                                      src={item.avatarSrc}
                                      sx={{ width: 56, height: 56 }}
                                    />
                                  </ListItemAvatar>
                                </Grid>
                                <Grid item xs={10}>
                                  <Grid container>
                                    <Grid item xs={8}>
                                      <Typography
                                        variant='body1'
                                        color='text.primary'
                                        sx={{
                                          fontWeight:
                                            item.status === 'unread' ||
                                            item.status === 'disposisi'
                                              ? Fonts.BOLD
                                              : Fonts.LIGHT,
                                        }}
                                      >
                                        {item.primary}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={4} textAlign='right'>
                                      <Typography
                                        variant='body2'
                                        color='text.primary'
                                        sx={{
                                          fontWeight:
                                            item.status === 'unread' ||
                                            item.status === 'disposisi'
                                              ? Fonts.BOLD
                                              : Fonts.LIGHT,
                                        }}
                                      >
                                        {item.date}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                      <Typography
                                        sx={{
                                          display: 'inline',
                                          fontWeight:
                                            item.status === 'unread' ||
                                            item.status === 'disposisi'
                                              ? Fonts.BOLD
                                              : Fonts.LIGHT,
                                        }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                      >
                                        {item.secondary}
                                      </Typography>
                                    </Grid>
                                    <Button
                                      sx={{
                                        padding: 0,
                                        margin: 0,
                                        textAlign: 'left',
                                      }}
                                    >
                                      <Cached />
                                      <Typography
                                        sx={{
                                          fontSize: 12,
                                          fontWeight:
                                            item.status === 'unread' ||
                                            item.status === 'disposisi'
                                              ? Fonts.BOLD
                                              : Fonts.LIGHT,
                                        }}
                                      >
                                        ({item.messageCount})
                                      </Typography>
                                    </Button>
                                    <ListItemIcon
                                      sx={{
                                        marginLeft: 'auto',
                                        display: 'flex',
                                        flexDirection: 'row',
                                      }}
                                    >
                                      <Checkbox
                                        {...label}
                                        icon={<StarBorder />}
                                        checkedIcon={<Star />}
                                      />
                                      <Box sx={{ paddingTop: 2.4 }}>
                                        {item.status === 'read' ? (
                                          <DraftsOutlined />
                                        ) : (
                                          <MailOutline />
                                        )}
                                      </Box>
                                    </ListItemIcon>
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

DisposisiSidebar.propTypes = {
  isCollapsed: PropTypes.bool,
};
