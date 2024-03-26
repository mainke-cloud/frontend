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
  Box,
  ButtonGroup,
  IconButton,
  Tooltip,
  Icon,
} from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';

import { Filter, Search } from 'feather-icons-react';

import {
  Star,
  StarBorder,
  ArrowForwardIosSharp,
  ErrorOutline,
} from '@mui/icons-material';
import Todo from '@crema/components/Tabs/Todo/Todo';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

import { useDispatch, useSelector } from 'react-redux';
import { childTab } from '../../../../../redux/actions/tabActon';

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

export default function TodoDisposisi({ isCollapsed }) {
  const listData1 = [
    {
      id: 1,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      priority: 'tinggi',
      status: 'Read',
    },
    {
      id: 2,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      priority: 'rendah',
      status: 'Sekretaris',
    },
    {
      id: 3,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      priority: 'rendah',
      status: 'Disposisi',
    },
    {
      id: 4,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      priority: 'tinggi',
      status: 'Disposisi',
    },
    {
      id: 5,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      priority: 'tinggi',
      status: 'Unread',
    },
    {
      id: 6,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      priority: 'sedang',
      status: 'Read',
    },
    {
      id: 7,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      priority: 'sedang',
      status: 'Read',
    },
    {
      id: 8,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      priority: 'sedang',
      status: 'Unread',
    },
    {
      id: 9,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      priority: 'tinggi',
      status: 'Read',
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
      priority: 'rendah',
      status: 'Sekretaris',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      priority: 'rendah',
      status: 'Sekretaris',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      priority: 'sedang',
      status: 'Disposisi',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      priority: 'sedang',
      status: 'Disposisi',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      priority: 'tinggi',
      status: 'Unread',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      priority: 'tinggi',
      status: 'Read',
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
      priority: 'tinggi',
      status: 'Read',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      priority: 'rendah',
      status: 'Unread',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      priority: 'sedang',
      status: 'Unread',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Sekretaris':
        return '#BF2600';
      case 'Read':
        return '#FFB020';
      case 'Unread':
        return '#8C8F93';
      case 'Disposisi':
        return '#9DB5FF';
      default:
        return 'lightgrey';
    }
  };

  const getTotalCount = (listData) => {
    return listData.length;
  };

  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);

  const handleTodo = (item) => {
    dispatch(childTab(item.id, tabs, 'Todo', item));
  };

  return (
    <>
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
                Todo
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <ButtonGroup>
                <IconButton>
                  <Search />
                </IconButton>
                <IconButton>
                  <Filter />
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
                            onClick={() => handleTodo(item)}
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
                                  {item.status === 'Tinggi' && (
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
                                        padding: 1,
                                        borderRadius: 1,
                                      }}
                                    >
                                      {item.status}
                                    </Box>
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
        </AppScrollbar>
      </MainSidebar>
    </>
  );
}

TodoDisposisi.propTypes = {
  isCollapsed: PropTypes.bool,
};
