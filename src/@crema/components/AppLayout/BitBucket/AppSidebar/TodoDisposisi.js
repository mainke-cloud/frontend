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

export default function TodoRendah({ isCollapsed }) {
  const listData1 = [
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      status: 'Tinggi',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'Sedang',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'Rendah',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      status: 'Rendah',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'Sedang',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'Tinggi',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      status: 'Tinggi',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'Sedang',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'Tinggi',
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
      status: 'Sedang',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'Sedang',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'Rendah',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      status: 'Rendah',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'Sedang',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'Tinggi',
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
      status: 'Tinggi',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'Sedang',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'Sedang',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Tinggi':
        return ['#E42313', '#FFBDAD'];
      case 'Sedang':
        return ['#FFB020', '#FFEFD2'];
      case 'Rendah':
        return ['#3366FF', '#D6E0FF'];
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
    </>
  );
}

TodoRendah.propTypes = {
  isCollapsed: PropTypes.bool,
};
