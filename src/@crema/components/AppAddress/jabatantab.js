import * as React from 'react';
import PropTypes from 'prop-types';
import AppScrollbar from '../AppScrollbar';

import {
  Button,
  Box,
  Typography,
  Stack,
  Divider,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
} from '@mui/material';

import { UserPlus } from 'feather-icons-react';

const JabatanTab = ({
  datas,
  multipleData,
  type,
  handleConfirmation,
  divisiCount,
  handleAccordionClick,
  uniqueDivisions,
  StyledAccordion,
  AccordionSummarys,
  AccordionDetail,
}) => {
  return (
    // <>
    //   <Box sx={{ height: 300, overflowY: 'auto', marginTop: 5 }}>
    //     <AppScrollbar
    //       sx={{
    //         height: 300,
    //       }}
    //       scrollToTop={false}
    //     >
    //       <TableContainer component={Paper}>
    //         <Table aria-label='divisi table'>
    //           <TableHead>
    //             <TableRow>
    //               <TableCell>Divisi</TableCell>
    //               <TableCell>Departemen</TableCell>
    //             </TableRow>
    //           </TableHead>
    //           <TableBody>
    //             {uniqueDivisions.map((divisi, index) => (
    //               <StyledAccordion key={index}>
    //                 <AccordionSummarys>
    //                   <Typography>{divisi}</Typography>
    //                 </AccordionSummarys>
    //                 <AccordionDetail>
    //                   {Object.entries(divisiCount[divisi]).map(
    //                     ([jabatan, count]) => (
    //                       <StyledAccordion
    //                         key={jabatan}
    //                         onClick={() =>
    //                           handleAccordionClick(divisi, jabatan)
    //                         }
    //                       >
    //                         <AccordionSummarys>
    //                           <Typography>{jabatan}</Typography>
    //                           <Typography
    //                             variant='caption'
    //                             sx={{ ml: 2, color: 'text.secondary' }}
    //                           >
    //                             Jumlah: {count}
    //                           </Typography>
    //                         </AccordionSummarys>
    //                         <AccordionDetail>
    //                           {datas
    //                             .filter(
    //                               (user) =>
    //                                 user.divisi === divisi &&
    //                                 user.jabatan === jabatan,
    //                             )
    //                             .map((user) => (
    //                               <StyledAccordion key={user.id}>
    //                                 <AccordionSummarys>
    //                                   <Typography>{user.nama}</Typography>
    //                                 </AccordionSummarys>
    //                                 <AccordionDetail>
    //                                   <Typography variant='body1'>
    //                                     Alamat: {user.alamat}
    //                                   </Typography>
    //                                   <Typography variant='body1'>
    //                                     NIK: {user.nik}
    //                                   </Typography>
    //                                   <Typography variant='body1'>
    //                                     Email: {user.email}
    //                                   </Typography>
    //                                 </AccordionDetail>
    //                               </StyledAccordion>
    //                             ))}
    //                         </AccordionDetail>
    //                       </StyledAccordion>
    //                     ),
    //                   )}
    //                 </AccordionDetail>
    //               </StyledAccordion>
    //             ))}
    //           </TableBody>
    //         </Table>
    //       </TableContainer>
    //     </AppScrollbar>
    //   </Box>
    //   <Divider />
    //   <Box
    //     sx={{
    //       display: 'flex',
    //       justifyContent: 'flex-end',
    //       padding: 5,
    //     }}
    //   >
    //     <Button
    //       variant='contained'
    //       sx={{
    //         borderRadius: '50px',
    //         minWidth: '150px',
    //         border: '2px solid #8F95B2',
    //         bgcolor: 'transparent',
    //         color: '#8F95B2',
    //       }}
    //       endIcon={<UserPlus />}
    //     >
    //       Tambah Ke Personal
    //     </Button>
    //     {type === 'single' && (
    //       <Button
    //         variant='contained'
    //         color='secondary'
    //         style={{ marginLeft: '10px' }}
    //         onClick={() => handleConfirmation(multipleData)}
    //         sx={{
    //           borderRadius: '50px',
    //           minWidth: '150px',
    //           bgcolor: '#52BD94',
    //         }}
    //       >
    //         Tambahkan
    //       </Button>
    //     )}
    //   </Box>
    // </>
    <>
      {/* <Box sx={{ height: 300, overflowY: 'auto', marginTop: 5 }}>
        <AppScrollbar
          sx={{
            height: 300,
          }}
          scrollToTop={false}
        >
          <StyledAccordion>
            <AccordionSummarys>
              <Typography>Divisi</Typography>
            </AccordionSummarys>
            <AccordionDetail>
              {uniqueDivisions.map((divisi, index) => (
                <StyledAccordion key={index}>
                  <AccordionSummarys>
                    <Typography>{divisi}</Typography>
                  </AccordionSummarys>
                  <AccordionDetail>
                    {Object.entries(divisiCount[divisi]).map(
                      ([jabatan, count]) => (
                        <StyledAccordion
                          key={jabatan}
                          onClick={() => handleAccordionClick(divisi, jabatan)}
                        >
                          <AccordionSummarys>
                            <Stack alignItems='start'>
                              <Typography>{jabatan}</Typography>
                              <Typography
                                variant='caption'
                                sx={{
                                  ml: 2,
                                  color: 'text.secondary',
                                }}
                              >
                                Jumlah: {count}
                              </Typography>
                            </Stack>
                          </AccordionSummarys>
                          <AccordionDetail>
                            {datas
                              .filter(
                                (user) =>
                                  user.divisi === divisi &&
                                  user.jabatan === jabatan,
                              )
                              .map((user) => (
                                <StyledAccordion key={user.id}>
                                  <AccordionSummarys>
                                    <Stack alignItems='start'>
                                      <Typography>{user.nama}</Typography>
                                    </Stack>
                                  </AccordionSummarys>
                                  <AccordionDetail>
                                    <Typography variant='body1'>
                                      Alamat: {user.alamat}
                                    </Typography>
                                    <Typography variant='body1'>
                                      NIK: {user.nikg}
                                    </Typography>
                                    <Typography variant='body1'>
                                      Email: {user.email}
                                    </Typography>
                                  </AccordionDetail>
                                </StyledAccordion>
                              ))}
                          </AccordionDetail>
                        </StyledAccordion>
                      ),
                    )}
                  </AccordionDetail>
                </StyledAccordion>
              ))}
            </AccordionDetail>
          </StyledAccordion>
        </AppScrollbar>
      </Box> */}
      {/* <Box sx={{ height: 300, overflowY: 'auto', marginTop: 5 }}>
        <AppScrollbar sx={{ height: 300 }} scrollToTop={false}>
          <TableContainer component={Paper}>
            <Table aria-label='divisi table'>
              <TableHead>
                <TableRow>
                  <TableCell>Divisi</TableCell>
                  <TableCell>Departemen</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledAccordion>
                  <AccordionSummarys>
                    <Typography>Divisi</Typography>
                  </AccordionSummarys>
                  <AccordionDetail>
                    {uniqueDivisions.map((divisi, index) => (
                      <TableRow key={index}>
                        <TableCell colSpan={2}>
                          <StyledAccordion>
                            <AccordionSummarys>
                              <Typography>{divisi}</Typography>
                            </AccordionSummarys>
                            <AccordionDetail>
                              {Object.entries(divisiCount[divisi]).map(
                                ([jabatan, count]) => (
                                  <StyledAccordion
                                    key={jabatan}
                                    onClick={() =>
                                      handleAccordionClick(divisi, jabatan)
                                    }
                                  >
                                    <AccordionSummarys>
                                      <Stack alignItems='start'>
                                        <Typography>{jabatan}</Typography>
                                        <Typography
                                          variant='caption'
                                          sx={{
                                            ml: 2,
                                            color: 'text.secondary',
                                          }}
                                        >
                                          Jumlah: {count}
                                        </Typography>
                                      </Stack>
                                    </AccordionSummarys>
                                    <AccordionDetail>
                                      {datas
                                        .filter(
                                          (user) =>
                                            user.divisi === divisi &&
                                            user.jabatan === jabatan,
                                        )
                                        .map((user) => (
                                          <StyledAccordion key={user.id}>
                                            <AccordionSummarys>
                                              <Stack alignItems='start'>
                                                <Typography>
                                                  {user.nama}
                                                </Typography>
                                              </Stack>
                                            </AccordionSummarys>
                                            <AccordionDetail>
                                              <Typography variant='body1'>
                                                Alamat: {user.alamat}
                                              </Typography>
                                              <Typography variant='body1'>
                                                NIK: {user.nik}
                                              </Typography>
                                              <Typography variant='body1'>
                                                Email: {user.email}
                                              </Typography>
                                            </AccordionDetail>
                                          </StyledAccordion>
                                        ))}
                                    </AccordionDetail>
                                  </StyledAccordion>
                                ),
                              )}
                            </AccordionDetail>
                          </StyledAccordion>
                        </TableCell>
                      </TableRow>
                    ))}
                  </AccordionDetail>
                </StyledAccordion>
              </TableBody>
            </Table>
          </TableContainer>
        </AppScrollbar>
      </Box> */}
      {/* <Box sx={{ height: 300, overflowY: 'auto', marginTop: 5 }}>
        <AppScrollbar sx={{ height: 300 }} scrollToTop={false}>
          <TableContainer component={Paper}>
            <Table aria-label='divisi table'>
              <TableHead>
                <TableRow>
                  <TableCell>Divisi</TableCell>
                  <TableCell>Departemen</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledAccordion>
                  <AccordionSummarys>
                    <Typography>Divisi</Typography>
                  </AccordionSummarys>
                  <AccordionDetail>
                    {uniqueDivisions.map((divisi, index) => (
                      <TableRow key={index}>
                        <TableCell colSpan={2}>
                          <StyledAccordion>
                            <AccordionSummarys>
                              <Typography>{divisi}</Typography>
                            </AccordionSummarys>
                            <AccordionDetail>
                              {Object.entries(divisiCount[divisi]).map(
                                ([jabatan, count]) => (
                                  <StyledAccordion
                                    key={jabatan}
                                    onClick={() =>
                                      handleAccordionClick(divisi, jabatan)
                                    }
                                  >
                                    <AccordionSummarys>
                                      <Stack alignItems='start'>
                                        {datas.filter(
                                          (user) =>
                                            user.divisi === divisi &&
                                            user.jabatan === jabatan,
                                        ).length === 1 && (
                                          <Avatar sx={{ mr: 2 }}>
                                            {
                                              datas.find(
                                                (user) =>
                                                  user.divisi === divisi &&
                                                  user.jabatan === jabatan,
                                              ).nama[0]
                                            }
                                          </Avatar>
                                        )}
                                        <Typography>{jabatan}</Typography>
                                        <Typography
                                          variant='caption'
                                          sx={{
                                            ml: 2,
                                            color: 'text.secondary',
                                          }}
                                        >
                                          Jumlah: {count}
                                        </Typography>
                                      </Stack>
                                    </AccordionSummarys>
                                    <AccordionDetail>
                                      {datas
                                        .filter(
                                          (user) =>
                                            user.divisi === divisi &&
                                            user.jabatan === jabatan,
                                        )
                                        .map((user) => (
                                          <StyledAccordion key={user.id}>
                                            <AccordionSummarys>
                                              <Stack alignItems='start'>
                                                <Typography>
                                                  {user.nama}
                                                </Typography>
                                              </Stack>
                                            </AccordionSummarys>
                                            <AccordionDetail>
                                              <Typography variant='body1'>
                                                Alamat: {user.alamat}
                                              </Typography>
                                              <Typography variant='body1'>
                                                NIK: {user.nik}
                                              </Typography>
                                              <Typography variant='body1'>
                                                Email: {user.email}
                                              </Typography>
                                            </AccordionDetail>
                                          </StyledAccordion>
                                        ))}
                                    </AccordionDetail>
                                  </StyledAccordion>
                                ),
                              )}
                            </AccordionDetail>
                          </StyledAccordion>
                        </TableCell>
                      </TableRow>
                    ))}
                  </AccordionDetail>
                </StyledAccordion>
              </TableBody>
            </Table>
          </TableContainer>
        </AppScrollbar>
      </Box> */}
      {/* <Box sx={{ height: 300, overflowY: 'auto', marginTop: 5 }}>
        <AppScrollbar sx={{ height: 300 }} scrollToTop={false}>
          <TableContainer component={Paper}>
            <Table aria-label='divisi table'>
              <TableHead>
                <TableRow>
                  <TableCell>Divisi</TableCell>
                  <TableCell>Departemen</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledAccordion>
                  <AccordionSummarys>
                    <Typography>Divisi</Typography>
                  </AccordionSummarys>
                  <AccordionDetail>
                    {uniqueDivisions.map((divisi, index) => (
                      <TableRow key={index}>
                        <TableCell colSpan={2}>
                          <StyledAccordion>
                            <AccordionSummarys>
                              <Typography>{divisi}</Typography>
                            </AccordionSummarys>
                            <AccordionDetail>
                              {Object.entries(divisiCount[divisi]).map(
                                ([jabatan, count]) => (
                                  <StyledAccordion
                                    key={jabatan}
                                    onClick={() =>
                                      handleAccordionClick(divisi, jabatan)
                                    }
                                  >
                                    <AccordionSummarys>
                                      <Stack
                                        direction='row'
                                        alignItems='center'
                                        spacing={1}
                                      >
                                        {datas.filter(
                                          (user) =>
                                            user.divisi === divisi &&
                                            user.jabatan === jabatan,
                                        ).length === 1 && (
                                          <Avatar>
                                            {
                                              datas.find(
                                                (user) =>
                                                  user.divisi === divisi &&
                                                  user.jabatan === jabatan,
                                              ).nama[0]
                                            }
                                          </Avatar>
                                        )}
                                        <Typography>{jabatan}</Typography>
                                        <Typography
                                          variant='caption'
                                          sx={{
                                            ml: 2,
                                            color: 'text.secondary',
                                          }}
                                        >
                                          Jumlah: {count}
                                        </Typography>
                                      </Stack>
                                    </AccordionSummarys>
                                  </StyledAccordion>
                                ),
                              )}
                            </AccordionDetail>
                          </StyledAccordion>
                        </TableCell>
                      </TableRow>
                    ))}
                  </AccordionDetail>
                </StyledAccordion>
              </TableBody>
            </Table>
          </TableContainer>
        </AppScrollbar>
      </Box> */}
      <Box sx={{ height: 300, overflowY: 'auto', marginTop: 5 }}>
        <AppScrollbar sx={{ height: 300 }} scrollToTop={false}>
          <TableContainer component={Paper}>
            <Table aria-label='divisi table'>
              <TableHead>
                <TableRow>
                  <TableCell>Divisi</TableCell>
                  <TableCell>Departemen</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledAccordion>
                  <AccordionSummarys>
                    <Typography>Divisi</Typography>
                  </AccordionSummarys>
                  <AccordionDetail>
                    {uniqueDivisions.map((divisi, index) => (
                      <StyledAccordion key={index}>
                        <AccordionSummarys>
                          <Typography>{divisi}</Typography>
                        </AccordionSummarys>
                        <AccordionDetail>
                          {Object.entries(divisiCount[divisi]).map(
                            ([jabatan, count]) => (
                              <StyledAccordion
                                key={jabatan}
                                onClick={() =>
                                  handleAccordionClick(divisi, jabatan)
                                }
                              >
                                <AccordionSummarys>
                                  <TableRow>
                                    <TableCell>
                                      <Stack
                                        direction='row'
                                        alignItems='center'
                                        spacing={4}
                                      >
                                        {datas.filter(
                                          (user) =>
                                            user.divisi === divisi &&
                                            user.jabatan === jabatan,
                                        ).length === 1 && (
                                          <Avatar>
                                            {
                                              datas.find(
                                                (user) =>
                                                  user.divisi === divisi &&
                                                  user.jabatan === jabatan,
                                              ).nama[0]
                                            }
                                          </Avatar>
                                        )}
                                        <Typography>{jabatan}</Typography>
                                        <Typography
                                          variant='caption'
                                          sx={{
                                            ml: 2,
                                            color: 'text.secondary',
                                          }}
                                        >
                                          Jumlah: {count}
                                        </Typography>
                                      </Stack>
                                    </TableCell>
                                    <TableCell>
                                      {datas.filter(
                                        (user) =>
                                          user.divisi === divisi &&
                                          user.jabatan === jabatan,
                                      ).length === 1 &&
                                        datas.find(
                                          (user) =>
                                            user.divisi === divisi &&
                                            user.jabatan === jabatan,
                                        ).departemen}
                                    </TableCell>
                                  </TableRow>
                                </AccordionSummarys>
                              </StyledAccordion>
                            ),
                          )}
                        </AccordionDetail>
                      </StyledAccordion>
                    ))}
                  </AccordionDetail>
                </StyledAccordion>
              </TableBody>
            </Table>
          </TableContainer>
        </AppScrollbar>
      </Box>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 5,
        }}
      >
        <Button
          variant='contained'
          sx={{
            borderRadius: '50px',
            minWidth: '150px',
            border: '2px solid #8F95B2',
            bgcolor: 'transparent',
            color: '#8F95B2',
          }}
          endIcon={<UserPlus />}
        >
          Tambah Ke Personal
        </Button>
        {type === 'single' && (
          <Button
            variant='contained'
            color='secondary'
            style={{ marginLeft: '10px' }}
            onClick={() => handleConfirmation(multipleData)}
            sx={{
              borderRadius: '50px',
              minWidth: '150px',
              bgcolor: '#52BD94',
            }}
          >
            Tambahkan
          </Button>
        )}
      </Box>
    </>
  );
};

JabatanTab.propTypes = {
  datas: PropTypes.array.isRequired,
  multipleData: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  divisiCount: PropTypes.object.isRequired,
  handleAccordionClick: PropTypes.func.isRequired,
  uniqueDivisions: PropTypes.array.isRequired,
  StyledAccordion: PropTypes.elementType.isRequired,
  AccordionSummarys: PropTypes.elementType.isRequired,
  AccordionDetail: PropTypes.elementType.isRequired,
};

export default JabatanTab;
