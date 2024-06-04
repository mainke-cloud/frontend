import React, { useState } from 'react';
import { Stack, Button } from '@mui/material';
import PropTypes from 'prop-types';
import FormAddressBook from '../../FormAddressBook';
import { useSelector } from 'react-redux';
const SuratInternal_4 = ({ handleNext, handlePrev, templateData }) => {
  const pemeriksa = useSelector((state) => state.addressbook.pemeriksa);
  const pemohon = useSelector((state) => state.addressbook.pemohon);

  const [isFormValidPemeriksa, setFormValidPemeriksa] = useState(true);
  const [isFormValidPemohon, setFormValidPemohon] = useState(true);

  const handleSubmit = () => {
    const validPemeriksa = !PemeriksaIsEmpty();
    const validPemohon = !PemohonIsEmpty();

    setFormValidPemeriksa(validPemeriksa);
    setFormValidPemohon(validPemohon);

    if (validPemeriksa && validPemohon) {
      handleNext();
    }
  };

  const PemeriksaIsEmpty = () => {
    return (
      !pemeriksa ||
      !Array.isArray(pemeriksa) ||
      pemeriksa.some((item) => !item.jabatan || !item.nama)
    );
  };

  const PemohonIsEmpty = () => {
    return (
      !pemohon ||
      !Array.isArray(pemohon) ||
      pemohon.some((item) => !item.jabatan || !item.nama)
    );
  };

  const handleAddressBookChangePemeriksa = () => {
    setFormValidPemeriksa(true);
  };
  const handleAddressBookChangePemohon = () => {
    setFormValidPemohon(true);
  };

  return (
    <>
      <Stack
        spacing={4}
        sx={{
          border: '1px solid #D8D8D8',
          minHeight: '300px',
          borderRadius: '12px',
          padding: '15px',
        }}
      >
        <FormAddressBook
          text='Pemeriksa'
          data={pemeriksa}
          templateData={templateData}
          isValid={isFormValidPemeriksa}
          onAddressBookChange={handleAddressBookChangePemeriksa}
        />
        <FormAddressBook
          text='Pemohon'
          data={pemohon}
          templateData={templateData}
          isValid={isFormValidPemohon}
          onAddressBookChange={handleAddressBookChangePemohon}
        />
        <Stack direction='row' justifyContent='flex-end' spacing={4}>
          <Button
            variant='contained'
            sx={{
              borderRadius: '12px',
              bgcolor: '#D9DDE3',
              color: '#5C5E61',
              minWidth: '84px',
            }}
            onClick={handlePrev}
          >
            Kembali
          </Button>

          <Button
            variant='contained'
            sx={{
              borderRadius: '12px',
              bgcolor: '#E42313',
              minWidth: '220px',
              minHeight: '50px',
            }}
            onClick={handleSubmit}
          >
            Selanjutnya (lainnya)
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

SuratInternal_4.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  templateData: PropTypes.object,
};

export default SuratInternal_4;
