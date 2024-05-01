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
} from '@mui/material';
import { X, Trash2, UserPlus, XCircle } from 'feather-icons-react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ArrowForwardIosSharp } from '@mui/icons-material';
import AppScrollbar from '../AppScrollbar';

const ClassificationProblem = (props) => {
  const { isClassificationProblem, onCloseClassificationProblem, text } = props;

  const StyledAccordion = styled((props) => (
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
          <AppScrollbar
            sx={{
              height: 500
            }}
            scrollToTop={false}
          >
            <Box sx={{ maxHeight: 500, overflowY: 'auto' }}>
              <StyledAccordion>
                <AccordionSummarys
                  aria-controls='panel1d-content'
                  id='panel1d-header'
                >
                  <Typography>Agustus-2021</Typography>
                </AccordionSummarys>
                <AccordionDetail sx={{ padding: 0 }}>
                  <StyledAccordion>
                    <AccordionSummarys
                      aria-controls='panel2d-content'
                      id='panel2d-header'
                    >
                      <Typography>Sub Accordion 1</Typography>
                    </AccordionSummarys>
                    <AccordionDetail sx={{ padding: 0 }}>
                      <StyledAccordion>
                        <AccordionSummarys
                          aria-controls='panel2d-content'
                          id='panel2d-header'
                        >
                          <Typography>Sub Accordion 1</Typography>
                        </AccordionSummarys>
                        <AccordionDetail sx={{ padding: 0 }}>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetail>
                      </StyledAccordion>
                      <StyledAccordion>
                        <AccordionSummarys
                          aria-controls='panel3d-content'
                          id='panel3d-header'
                        >
                          <Typography>Sub Accordion 2</Typography>
                        </AccordionSummarys>
                        <AccordionDetail sx={{ padding: 0 }}>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetail>
                      </StyledAccordion>
                    </AccordionDetail>
                  </StyledAccordion>
                  <StyledAccordion>
                    <AccordionSummarys
                      aria-controls='panel3d-content'
                      id='panel3d-header'
                    >
                      <Typography>Sub Accordion 2</Typography>
                    </AccordionSummarys>
                    <AccordionDetail sx={{ padding: 0 }}>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse malesuada lacus ex, sit amet blandit
                        leo lobortis eget.
                      </Typography>
                    </AccordionDetail>
                  </StyledAccordion>
                </AccordionDetail>
              </StyledAccordion>
              <StyledAccordion>
                <AccordionSummarys
                  aria-controls='panel1d-content'
                  id='panel1d-header'
                >
                  <Typography>Agustus-2021</Typography>
                </AccordionSummarys>
                <AccordionDetail sx={{ padding: 0 }}>
                  <StyledAccordion>
                    <AccordionSummarys
                      aria-controls='panel2d-content'
                      id='panel2d-header'
                    >
                      <Typography>Sub Accordion 1</Typography>
                    </AccordionSummarys>
                    <AccordionDetail sx={{ padding: 0 }}>
                      <StyledAccordion>
                        <AccordionSummarys
                          aria-controls='panel2d-content'
                          id='panel2d-header'
                        >
                          <Typography>Sub Accordion 1</Typography>
                        </AccordionSummarys>
                        <AccordionDetail sx={{ padding: 0 }}>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetail>
                      </StyledAccordion>
                      <StyledAccordion>
                        <AccordionSummarys
                          aria-controls='panel3d-content'
                          id='panel3d-header'
                        >
                          <Typography>Sub Accordion 2</Typography>
                        </AccordionSummarys>
                        <AccordionDetail sx={{ padding: 0 }}>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetail>
                      </StyledAccordion>
                    </AccordionDetail>
                  </StyledAccordion>
                  <StyledAccordion>
                    <AccordionSummarys
                      aria-controls='panel3d-content'
                      id='panel3d-header'
                    >
                      <Typography>Sub Accordion 2</Typography>
                    </AccordionSummarys>
                    <AccordionDetail sx={{ padding: 0 }}>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse malesuada lacus ex, sit amet blandit
                        leo lobortis eget.
                      </Typography>
                    </AccordionDetail>
                  </StyledAccordion>
                </AccordionDetail>
              </StyledAccordion>
            </Box>
          </AppScrollbar>
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
