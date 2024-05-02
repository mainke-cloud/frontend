import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Box,
  Button,
  Typography,
  Stack,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  styled,
  InputBase,
} from '@mui/material';
import { X, Trash2, UserPlus, XCircle } from 'feather-icons-react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ArrowForwardIosSharp } from '@mui/icons-material';
import AppScrollbar from '../AppScrollbar';
import SearchIcon from '@mui/icons-material/Search';
import { classification } from '@crema/services/dummy/classification/classification';

const ClassificationProblem = (props) => {
  const { isClassificationProblem, onCloseClassificationProblem, text } = props;
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [expanded, setExpanded] = React.useState({});

  const StyledAccordion = styled((props) => (
    <Accordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    // border: `1px solid ${theme.palette.divider}`,
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
  ))(({ theme, selected }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
      backgroundColor: selected ? theme.palette.action.selected : 'transparent',
    },
  }));

  const AccordionDetail = styled(AccordionDetails)(() => ({
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

  const handleSelectItem = (itemId) => {
    setSelectedItem(itemId === selectedItem ? null : itemId);
  };

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded({ ...expanded, [panel]: isExpanded });
  };

  return (
    <Modal
      open={isClassificationProblem}
      onClose={onCloseClassificationProblem}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          overflow: 'auto',
          bgcolor: 'background.paper',
          borderRadius: 8,
          maxWidth: 800,
          maxHeight: 600,
          padding: 3,
        }}
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          marginBottom={2}
        >
          <Typography variant='h1' id='compose-mail-modal'>
            Address Book {text}
          </Typography>
          <IconButton onClick={onCloseClassificationProblem}>
            <X />
          </IconButton>
        </Stack>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: '0.5px solid grey',
              width: '100%',
              borderRadius: 1,
            }}
          >
            <InputBase
              placeholder='Cari Jabatan'
              sx={{ flexGrow: 1, padding: '10px' }}
            />
            <IconButton aria-label='search'>
              <SearchIcon fontSize='small' />
            </IconButton>
          </Box>
          <Box sx={{ maxHeight: 450, overflowY: 'auto', marginTop: 5 }}>
            <AppScrollbar
              sx={{
                height: 450,
              }}
              scrollToTop={false}
            >
              {classification.map((item, index) => (
                <StyledAccordion
                  key={item.id}
                  expanded={expanded[`panel${index}`]}
                  onChange={handleChangeAccordion(`panel${index}`)}
                >
                  <AccordionSummarys
                    onClick={() => handleSelectItem(item.id)}
                    selected={selectedItem === item.id}
                  >
                    <Stack direction='row' alignItems='center'>
                      <Typography>{item.name}</Typography>
                      <Typography
                        variant='body2'
                        sx={{ ml: 2, color: 'text.secondary' }}
                      >
                        {item.desc}
                      </Typography>
                    </Stack>
                  </AccordionSummarys>
                  <AccordionDetail sx={{ paddingLeft: 4 }}>
                    {item.code.map((codeItem, codeIndex) => (
                      <StyledAccordion
                        key={`${item.id}-${codeItem.id}`}
                        expanded={expanded[`panel${index}-code${codeIndex}`]}
                        onChange={handleChangeAccordion(
                          `panel${index}-code${codeIndex}`,
                        )}
                      >
                        <AccordionSummarys
                          onClick={() => handleSelectItem(codeItem.id)}
                          selected={selectedItem === codeItem.id}
                        >
                          <Stack direction='row' alignItems='center'>
                            <Typography>{codeItem.name1}</Typography>
                            <Typography
                              variant='body2'
                              sx={{ ml: 2, color: 'text.secondary' }}
                            >
                              {codeItem.desc1}
                            </Typography>
                          </Stack>
                        </AccordionSummarys>
                        <AccordionDetail sx={{ paddingLeft: 8 }}>
                          {codeItem.code1.map((code1Item, code1Index) => (
                            <StyledAccordion
                              key={`${item.id}-${codeItem.id}-${code1Item.id}`}
                              expanded={
                                expanded[
                                  `panel${index}-code${codeIndex}-code1${code1Index}`
                                ]
                              }
                              onChange={handleChangeAccordion(
                                `panel${index}-code${codeIndex}-code1${code1Index}`,
                              )}
                            >
                              <AccordionSummarys
                                onClick={() => handleSelectItem(code1Item.id)}
                                selected={selectedItem === code1Item.id}
                              >
                                <Stack direction='row' alignItems='center'>
                                  <Typography>{code1Item.name2}</Typography>
                                  <Typography
                                    variant='body2'
                                    sx={{ ml: 2, color: 'text.secondary' }}
                                  >
                                    {code1Item.desc2}
                                  </Typography>
                                </Stack>
                              </AccordionSummarys>
                              <AccordionDetail sx={{ paddingLeft: 12 }}>
                                {code1Item.code2.map(
                                  (code2Item, code2Index) => (
                                    <StyledAccordion
                                      key={`${item.id}-${codeItem.id}-${code1Item.id}-${code2Item.id}`}
                                      expanded={
                                        expanded[
                                          `panel${index}-code${codeIndex}-code1${code1Index}-code2${code2Index}`
                                        ]
                                      }
                                      onChange={handleChangeAccordion(
                                        `panel${index}-code${codeIndex}-code1${code1Index}-code2${code2Index}`,
                                      )}
                                    >
                                      <AccordionSummarys
                                        onClick={() =>
                                          handleSelectItem(code2Item.id)
                                        }
                                        selected={selectedItem === code2Item.id}
                                      >
                                        <Stack
                                          direction='row'
                                          alignItems='center'
                                        >
                                          <Typography>
                                            {code2Item.name3}
                                          </Typography>
                                          <Typography
                                            variant='body2'
                                            sx={{
                                              ml: 2,
                                              color: 'text.secondary',
                                            }}
                                          >
                                            {code2Item.desc3}
                                          </Typography>
                                        </Stack>
                                      </AccordionSummarys>
                                    </StyledAccordion>
                                  ),
                                )}
                              </AccordionDetail>
                            </StyledAccordion>
                          ))}
                        </AccordionDetail>
                      </StyledAccordion>
                    ))}
                  </AccordionDetail>
                </StyledAccordion>
              ))}
            </AppScrollbar>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ClassificationProblem;

ClassificationProblem.defaultProps = {
  connection: null,
};

ClassificationProblem.propTypes = {
  isClassificationProblem: PropTypes.bool.isRequired,
  onCloseClassificationProblem: PropTypes.func.isRequired,
  text: PropTypes.string,
};
