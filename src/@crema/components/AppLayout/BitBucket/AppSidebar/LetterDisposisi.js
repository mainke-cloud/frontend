import * as React from 'react';
import PropTypes from 'prop-types';
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
  Chip,
  Grid,
  ListItemIcon,
  Button,
  Box,
  Tooltip,
  Icon,
} from '@mui/material';

import { MessageCircle, Mail } from 'feather-icons-react';

import {
  Star,
  StarBorder,
  ArrowForwardIosSharp,
  ErrorOutline,
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

export default function LetterDisposisi({ isCollapsed }) {
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

  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {!isCollapsed && (
        <div>
          {[listData1, listData2, listData3].map((listData, index) => (
            <Accordions
              key={index}
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
            >
              <AccordionSummarys
                aria-controls={`panel${index + 1}d-content`}
                id={`panel${index + 1}d-header`}
              >
                <Grid container>
                  <Grid
                    item
                    xs={4}
                    container
                    justifyContent='start'
                    alignItems='center'
                  >
                    <Typography>
                      Agustus-2021({getTotalCount(listData)})
                    </Typography>
                  </Grid>
                  <Grid item xs={8} container justifyContent='flex-end'>
                    <Chip
                      label={`Read (${readCount})`}
                      size='small'
                      sx={{ margin: 1, backgroundColor: '#F9E4E4' }}
                    />
                    <Chip
                      label={`Unread (${unreadCount})`}
                      size='small'
                      sx={{ margin: 1, backgroundColor: '#FFB020' }}
                    />
                    <Chip
                      label={`Disposisi (${disposisiCount})`}
                      size='small'
                      sx={{ margin: 1, backgroundColor: '#DCF2EA' }}
                    />
                  </Grid>
                </Grid>
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
                              {(item.status === 'Diproses' ||
                                item.status === 'Batal') && (
                                <Tooltip title='Danger'>
                                  <Icon
                                    color='error'
                                    sx={{ marginLeft: 4, marginTop: 1 }}
                                  >
                                    <ErrorOutline />
                                  </Icon>
                                </Tooltip>
                              )}
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
                                <Grid item xs={4}>
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
                                    textAlign: 'center'
                                  }}
                                >
                                  {item.status}
                                </Box>
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
                                    <Mail />
                                  </Box>
                                </ListItemIcon>
                              </Grid>
                            </Grid>
                          </Grid>
                        </CardContent>
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
    </>
  );
}

LetterDisposisi.propTypes = {
  isCollapsed: PropTypes.bool,
};
