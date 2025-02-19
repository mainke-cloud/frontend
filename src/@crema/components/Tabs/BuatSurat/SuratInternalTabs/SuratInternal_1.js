import { Button, MenuItem, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import FormClassification from '../../FormClassification';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateData } from '../../../../../redux/actions/buatsuratinternalAction';
const prioritas = [
  {
    value: '1',
    label: 'Normal',
  },
  {
    value: '2',
    label: 'Segera',
  },
];

const jenisSurat = [
  {
    value: '1',
    label: 'Biasa',
  },
  {
    value: '2',
    label: 'Rhs',
  },
  {
    value: '3',
    label: 'Rhs-Prib',
  },
];

const SuratInternal_1 = ({ handleNext, onStateChange, templateData }) => {
  const [formData, setFormData] = useState({
    perihal: '',
    prioritas: '1',
    jenis: '1',
    lampiran: 1,
  });
const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      perihal: '',
    },
    onSubmit: () => {
      if (klasifikasiIsEmpty()) {
        setFormClassificationValid(false);
      } else {
        // Update the state in the reducer with formData
        dispatch(updateData({
          kategori: formData.jenis,
          urgensi: formData.prioritas,
          lampiran: formData.lampiran,
          perihal: formData.perihal,
        }));
        console.log(formData);
        handleNext();
      }
    },
    validationSchema: yup.object().shape({
      perihal: yup.string().required('Kolom ini wajib diisi'),
    }),
  });

  const kepada = useSelector((state) => state.addressbook.kepada);

  useEffect(() => {
    if (templateData) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        perihal: templateData.perihal,
        prioritas: templateData.priority,
        jenis: templateData.jenis,
        lampiran: templateData.lampiran,
      }));
    }
  }, [templateData]);

  let datass = kepada[0];
  if (!datass || !Array.isArray(datass)) {
    datass = [];
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    onStateChange({ ...formData, [name]: value });
    formik.setFieldValue(name, value);

    if (name === 'lampiran' && parseInt(value) < 0) {
      setFormData({ ...formData, [name]: 0 });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const [isFormClassificationValid, setFormClassificationValid] =
    useState(true);

  const klasifikasi = useSelector((state) => state.classification.klasifikasi);

  const klasifikasiIsEmpty = () => {
    return !klasifikasi.name && !klasifikasi.desc;
  };

  const handleClassificationChange = () => {
    setFormClassificationValid(true);
  };

  return (
    <>
      <Stack
        spacing={4}
        sx={{
          border: '1px solid #D8D8D8',
          minHeight: '570px',
          borderRadius: '12px',
          padding: '15px',
        }}
      >
        <Typography
          variant='h4'
          sx={{
            '&::after': {
              content: '"*"',
              color: 'red',
            },
          }}
        >
          Perihal
        </Typography>

        <TextField
          id='outlined-select-currency'
          fullWidth
          name='perihal'
          error={formik.touched.perihal && Boolean(formik.errors.perihal)}
          value={formData.perihal}
          onChange={handleChange}
        />
        {formik.touched.perihal && formik.errors.perihal && (
          <Typography variant='body1' color='error'>
            {formik.errors.perihal}
          </Typography>
        )}

        <FormClassification
          text='Klasifikasi Masalah'
          isValid={isFormClassificationValid}
          klasifikasi={klasifikasi}
          onClassificationChange={handleClassificationChange}
        />

        <Typography
          variant='body1'
          sx={{
            color: '#5C5E61',
          }}
        >
          Saat klasifikasi masalah dipilih, menampilkan nama klasifikasi masalah
        </Typography>
        <Typography variant='h4'>Prioritas Surat</Typography>
        <TextField
          id='outlined-select-currency'
          select
          fullWidth
          defaultValue='1'
          name='prioritas'
          value={formData.prioritas}
          onChange={handleChange}
        >
          {prioritas.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Typography variant='h4'>Jenis Surat</Typography>
        <TextField
          id='outlined-select-currency'
          select
          fullWidth
          defaultValue='1'
          name='jenis'
          value={formData.jenis}
          onChange={handleChange}
        >
          {jenisSurat.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Typography variant='h4'>Lampiran</Typography>
        <TextField
          sx={{ marginTop: '8px' }}
          placeholder={'Masukkan jumlah'}
          variant='outlined'
          fullWidth
          type='number'
          name='lampiran'
          value={formData.lampiran}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Stack direction='row' justifyContent='flex-end' spacing={4}>
          <Button
            variant='contained'
            sx={{
              borderRadius: '12px',
              bgcolor: '#E42313',
              minWidth: '220px',
              minHeight: '50px',
            }}
            onClick={formik.handleSubmit}
          >
            Selanjutnya (Pengirim)
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

SuratInternal_1.propTypes = {
  handleNext: PropTypes.func.isRequired,
  templateData: PropTypes.object,
  onStateChange: PropTypes.func,
};

export default SuratInternal_1;
