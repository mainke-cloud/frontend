import React from 'react';
import { Box, Stack } from '@mui/material';
import { Table, TableBody, TableContainer} from '@mui/material';
import CustomRow from '@crema/components/Tabs/Disposisi/TabPanel/CustomRow';
import PropsTypes from 'prop-types';

const AgendaSurat = (props) => {
  const { data } = props;
  return (
    <Stack
      rowGap='16px'
      sx={{ border: '1px solid #A7A7A7', borderRadius: '10px' }}
    >
      <Box className='content-styled-box'>
        <TableContainer>
          <Table aria-label='customized table'>
            <TableBody>
                <>
                  <CustomRow name='No Agenda' data={data.noAgenda} />
                  <CustomRow
                  
                    name='tanggal Dikirim'
                    data={data.tanggalKirim}
                  />
                  <CustomRow name='No Surat' data={data.noSurat} />
                  <CustomRow name='Dari' data={data.dari} />
                  <CustomRow name='Kepada' data={data.kepada} />
                  <CustomRow name='Perihal' data={data.perihal} />
                  <CustomRow name='Tembusan' data={data.tembusan} />
                  <CustomRow name='lampiran' data={data.lampiran} />
                </>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Stack>
  );
};

export default AgendaSurat;

AgendaSurat.propTypes = {
  data: PropsTypes.any,
};
