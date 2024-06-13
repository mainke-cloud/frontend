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
  const pengirim = useSelector((state) => state.addressbook.pengirim);
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
      if (pengirim && pengirim.id) {
        dispatch(updateData({ penyetuju: [pengirim.id] }));
        handleNext();
      } else {
        console.error('Pengirim ID tidak ditemukan.');
      }
    },
  });

  useEffect(() => {
    if (pengirim) {
      formik.setValues({
        jabatan: templateData?.dari || pengirim.jabatan || '',
        nama: templateData?.nama || pengirim.nama || '',
        divisi: templateData?.primary || pengirim.divisi || '',
        nik: templateData?.nik || pengirim.nikg || '',
        kodeDepart: templateData?.kodeDepart || pengirim.kode_departemen || '',
        departemen: templateData?.departemen || pengirim.departemen || '',
        kotaKantor: templateData?.kotaKantor || pengirim.kota || '',
      });
    }
  }, [pengirim, templateData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value);
  };

  const onOpenComposeMail = () => {
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
            onClick={() => onOpenComposeMail()}
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
              <IconButton onClick={() => onOpenComposeMail()}>
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
            onClick={() => onOpenComposeMail()}
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
              <IconButton onClick={() => onOpenComposeMail()}>
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
        title='Pengirim'
        type='single'
      />
    </>
  );

  // yg dikomen jangan di apus dulu soalnya gak tau temp datanya buat apa

  // const formik = useFormik({
  //   initialValues: {
  //     jabatan: '',
  //     nama: '',
  //   },
  //   onSubmit: handleNext,
  //   validationSchema: yup.object().shape({
  //     jabatan: yup.string().required('Kolom ini wajib diisi'),
  //     nama: yup.string().required('Kolom ini wajib diisi'),
  //   }),
  // });

  // // const pengirim = useSelector((state) => state.addressbook.pengirim);
  // const jabatann = useSelector((state) => state.addressbook.jabatann);
  // let datass = jabatann[0];
  // if (!datass || !Array.isArray(datass)) {
  //   datass = [];
  // }
  // const namaa = useSelector((state) => state.addressbook.namaa);
  // const initialState = useSelector((state) => state.surat);
  // const [formData, setFormData] = useState(initialState);
  // const [jabatanValue, setJabatanValue] = useState('');
  // const [namaValue, setNamaValue] = useState('');

  // useEffect(() => {
  //   setJabatanValue(datass[0]?.jabatan ?? '');
  //   setNamaValue(datass.map((item) => item.nama).join('\n'));
  // }, [datass]);

  // const handleJabatanChange = (event) => {
  //   setJabatanValue(event.target.value);
  // };

  // const [isComposeMail, setComposeMail] = React.useState(false);
  // const [composeMailTitle, setComposeMailTitle] = useState('');

  // const onOpenComposeMail = (title) => {
  //   setComposeMailTitle(title);
  //   setJabatanValue('');
  //   setNamaValue('');
  //   setComposeMail(true);
  // };

  // const onCloseComposeMail = () => {
  //   setJabatanValue(datass[0]?.jabatan ?? '');
  //   setComposeMail(false);
  // };

  // return (
  //   <>
  //     <Stack
  //       spacing={4}
  //       sx={{
  //         border: '1px solid #D8D8D8',
  //         minHeight: '570px',
  //         borderRadius: '12px',
  //         padding: '15px',
  //       }}
  //     >
  //       <Stack direction='row'>
  //         <Link
  //           component='button'
  //           underline='always'
  //           sx={{
  //             fontSize: '16px',
  //             fontWeight: 600,
  //             color: 'black',
  //             textDecorationColor: 'black',
  //           }}
  //           onClick={() => onOpenComposeMail('Jabatan')}
  //         >
  //           Jabatan
  //         </Link>
  //         <Typography variant='h4' color='red'>
  //           *
  //         </Typography>
  //       </Stack>

  //       <TextField
  //         fullWidth
  //         value={jabatanValue}
  //         onChange={handleJabatanChange}
  //         InputProps={{
  //           endAdornment: (
  //             <IconButton onClick={() => onOpenComposeMail('Jabatan')}>
  //               <AddCircleOutlineRoundedIcon
  //                 sx={{ color: 'black', fontSize: '40px' }}
  //               />
  //             </IconButton>
  //           ),
  //         }}
  //         sx={{ color: 'black', fontWeight: 'bold' }}
  //       />

  //       <Stack direction='row'>
  //         <Link
  //           component='button'
  //           underline='always'
  //           sx={{
  //             fontSize: '16px',
  //             fontWeight: 600,
  //             color: 'black',
  //             textDecorationColor: 'black',
  //           }}
  //           onClick={() => onOpenComposeMail('Nama')}
  //         >
  //           Nama
  //         </Link>
  //         <Typography variant='h4' color='red'>
  //           *
  //         </Typography>
  //       </Stack>

  //       <Box position={'relative'}>
  //         <AppScrollbar
  //           sx={{
  //             minHeight: '145px',
  //             maxHeight: '145px',
  //             overflow: 'auto',
  //           }}
  //         >
  //           <Stack>
  //             <TextField
  //               id='outlined-multiline-static'
  //               multiline
  //               rows={5}
  //               sx={{
  //                 border: 'none',
  //               }}
  //               value={
  //                 composeMailTitle === 'Nama' ? `${namaa.nama}` : namaValue
  //               }
  //               InputProps={{
  //                 endAdornment: (
  //                   <IconButton onClick={() => onOpenComposeMail('Nama')}>
  //                     <AddCircleOutlineRoundedIcon
  //                       sx={{ color: 'black', fontSize: '40px' }}
  //                     />
  //                   </IconButton>
  //                 ),
  //               }}
  //             />
  //           </Stack>
  //         </AppScrollbar>
  //       </Box>

  //       <Typography variant='h4'>Divisi</Typography>

  //       <TextField
  //         fullWidth
  //         value={
  //           composeMailTitle === 'Nama'
  //             ? `${namaa.divisi}`
  //             : datass[0]?.divisi ?? ''
  //         }
  //       />

  //       <Stack direction='row' spacing={5}>
  //         <Stack flex={1} spacing={5}>
  //           <Typography variant='h4'>NIK</Typography>
  //           <TextField
  //             value={
  //               composeMailTitle === 'Nama'
  //                 ? `${namaa.nikl}`
  //                 : datass[0]?.nikl ?? ''
  //             }
  //           />
  //         </Stack>
  //         <Stack flex={1} spacing={5}>
  //           <Typography variant='h4'>Kode Departemen</Typography>
  //           <TextField
  //             value={
  //               composeMailTitle === 'Nama'
  //                 ? `${namaa.kode_departemen}`
  //                 : datass[0]?.kode_departemen ?? ''
  //             }
  //           />
  //         </Stack>
  //       </Stack>

  //       <Typography variant='h4'>Departemen</Typography>

  //       <TextField
  //         fullWidth
  //         value={
  //           composeMailTitle === 'Nama'
  //             ? `${namaa.departemen}`
  //             : datass[0]?.departemen ?? ''
  //         }
  //       />

  //       <Typography variant='h4'>Kota Kantor</Typography>

  //       <TextField
  //         fullWidth
  //         value={
  //           composeMailTitle === 'Nama'
  //             ? `${namaa.kota}`
  //             : datass[0]?.kota ?? ''
  //         }
  //       />
  //     <Stack direction='row' justifyContent='flex-end' spacing={4}>
  //          <Button
  //           variant='contained'
  //           sx={{
  //             borderRadius: '12px',
  //             bgcolor: '#D9DDE3',
  //             color: '#5C5E61',
  //             minWidth: '84px',
  //           }}
  //           onClick={handlePrev}
  //         >
  //           Kembali
  //         </Button>

  //         <Button
  //           variant='contained'
  //           sx={{
  //             borderRadius: '12px',
  //             bgcolor: '#E42313',
  //             minWidth: '220px',
  //             minHeight: '50px',
  //           }}
  //           onClick={formik.handleSubmit}
  //         >
  //           Selanjutnya (Penerima)
  //         </Button>
  //       </Stack>
  //     </Stack>

  //     <ComposeMail
  //       isComposeMail={isComposeMail}
  //       onCloseComposeMail={onCloseComposeMail}
  //       datas={users}
  //       title={composeMailTitle}
  //       type='single'
  //     />
  //   </>
  // );
};

SuratInternal_3.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  onStateChange: PropTypes.func,
  templateData: PropTypes.object,
};

export default SuratInternal_3;
