import { IconButton, Link, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { Button } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import PropTypes from 'prop-types';
import ComposeMail from '@crema/components/AppAddress';
import { users } from '../../../../services/dummy/user/user';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState, useEffect } from 'react';
import { updateData } from '../../../../../redux/actions/buatsuratinternalAction';
import { useDispatch } from 'react-redux';
const SuratInternal_3 = ({
  handleNext,
  handlePrev,
  onStateChange,
  templateData,
}) => {
  const [isComposeMail, setComposeMail] = useState(false);
  const [composeMailTitle, setComposeMailTitle] = useState('');
  const [composeMailType, setComposeMailType] = useState('');
  const namaa = useSelector((state) => state.addressbook.namaa);
  const jabatann = useSelector((state) => state.addressbook.jabatann);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      jabatan: '',
      nama: '',
      divisi: '',
      nik: '',
      kodeDepart: '',
      departemen: '',
      kotaKantor: '',
    },
    validationSchema: yup.object().shape({
      jabatan: yup.string().required('Kolom ini wajib diisi'),
      nama: yup.string().required('Kolom ini wajib diisi'),
    }),
    onSubmit: (values) => {
      if (namaa && namaa.id) {
        dispatch(updateData({ penyetuju: [namaa.id] }));
        handleNext();
      } else {
        console.error('ID tidak ditemukan.');
      }
    },
  });

  useEffect(() => {
    if (namaa) {
      formik.setValues({
        jabatan: templateData?.dari || namaa.jabatan || '',
        nama: templateData?.nama || namaa.nama || '',
        divisi: templateData?.primary || namaa.divisi || '',
        nik: templateData?.nik || namaa.nikg || '',
        kodeDepart: templateData?.kodeDepart || namaa.kode_departemen || '',
        departemen: templateData?.departemen || namaa.departemen || '',
        kotaKantor: templateData?.kotaKantor || namaa.kota || '',
      });
    }
  }, [namaa, templateData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value);
  };

  const onOpenComposeMail = (title, type) => {
    setComposeMailTitle(title);
    setComposeMailType(type);
    setComposeMail(true);
  };

  const onCloseComposeMail = () => {
    setComposeMail(false);
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
        <Stack direction='row'>
          <Link
            component='button'
            underline='always'
            sx={{
              fontSize: '16px',
              fontWeight: 600,
              color: 'black',
              textDecorationColor: 'black',
            }}
            onClick={() => onOpenComposeMail('Jabatan', 'multi')}
          >
            Jabatan
          </Link>
          <Typography variant='h4' color='red'>
            *
          </Typography>
        </Stack>

        <TextField
          fullWidth
          name='jabatan'
          error={formik.touched.jabatan && formik.errors.jabatan}
          value={formik.values.jabatan}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => onOpenComposeMail('Jabatan', 'multi')}>
                <AddCircleOutlineRoundedIcon
                  sx={{ color: 'black', fontSize: '40px' }}
                />
              </IconButton>
            ),
          }}
        />
        {formik.touched.jabatan && formik.errors.jabatan && (
          <Typography variant='body1' color='error'>
            {formik.errors.jabatan}
          </Typography>
        )}

        <Stack direction='row'>
          <Link
            component='button'
            underline='always'
            sx={{
              fontSize: '16px',
              fontWeight: 600,
              color: 'black',
              textDecorationColor: 'black',
            }}
            onClick={() => onOpenComposeMail('Nama', 'single')}
          >
            Nama
          </Link>
          <Typography variant='h4' color='red'>
            *
          </Typography>
        </Stack>

        <TextField
          fullWidth
          name='nama'
          error={formik.touched.nama && formik.errors.nama}
          value={formik.values.nama}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => onOpenComposeMail('Nama', 'single')}>
                <AddCircleOutlineRoundedIcon
                  sx={{ color: 'black', fontSize: '40px' }}
                />
              </IconButton>
            ),
          }}
        />
        {formik.touched.nama && formik.errors.nama && (
          <Typography variant='body1' color='error'>
            {formik.errors.nama}
          </Typography>
        )}

        <Typography variant='h4'>Divisi</Typography>

        <TextField
          fullWidth
          name='divisi'
          value={formik.values.divisi}
          onChange={handleChange}
        />

        <Stack direction='row' spacing={5}>
          <Stack flex={1} spacing={5}>
            <Typography variant='h4'>NIK</Typography>
            <TextField
              name='nik'
              value={formik.values.nik}
              onChange={handleChange}
            />
          </Stack>
          <Stack flex={1} spacing={5}>
            <Typography variant='h4'>Kode Departemen</Typography>
            <TextField
              name='kodeDepart'
              value={formik.values.kodeDepart}
              onChange={handleChange}
            />
          </Stack>
        </Stack>

        <Typography variant='h4'>Departemen</Typography>

        <TextField
          fullWidth
          name='departemen'
          value={formik.values.departemen}
          onChange={handleChange}
        />

        <Typography variant='h4'>Kota Kantor</Typography>

        <TextField
          fullWidth
          name='kotaKantor'
          value={formik.values.kotaKantor}
          onChange={handleChange}
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
            onClick={formik.handleSubmit}
          >
            Selanjutnya (Penerima)
          </Button>
        </Stack>
      </Stack>

      <ComposeMail
        isComposeMail={isComposeMail}
        onCloseComposeMail={onCloseComposeMail}
        datas={users}
        title={composeMailTitle}
        type={composeMailType}
      />
    </>
  );
};

SuratInternal_3.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  onStateChange: PropTypes.func,
  templateData: PropTypes.object,
};

export default SuratInternal_3;
