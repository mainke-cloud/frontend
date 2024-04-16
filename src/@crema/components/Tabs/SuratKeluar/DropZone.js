import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import IconPdf from '../../../../assets/icon/pdfIcon.svg';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const DropZone = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');
  const [isInputActive, setIsInputActive] = useState(true);
  const [selectedFileIndex, setSelectedFileIndex] = useState(null);
  const filesdummy = [
    { name: 'file1file3.pdf', size: 87654 },
    { name: 'file2file2.pdf', size: 87654 },
    { name: 'file3fil2.pdf', size: 87654 },
    { name: 'file4.pdf', size: 87654 },
  ];
  const onDrop = useCallback((acceptedFiles) => {
    const pdfFiles = acceptedFiles.filter(
      (file) => file.type === 'application/pdf',
    );

    if (pdfFiles.length !== acceptedFiles.length) {
      setError('Hanya file PDF yang diperbolehkan.');
    } else {
      setError('');
      setIsInputActive(true);
      setFiles((prevFiles) => [...prevFiles, ...pdfFiles]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    disabled: !isInputActive,
  });

  return (
    <Stack
      {...getRootProps()}
      sx={{
        padding: 2,
      }}
    >
      <input {...getInputProps()} multiple />
      {!isInputActive &&
        (isDragActive ? (
          <Typography>Drop the PDF files here ...</Typography>
        ) : (
          <Typography>
            Drag drop some PDF files here, or click to select PDF files
          </Typography>
        ))}
      {error && <Typography style={{ color: 'red' }}>{error}</Typography>}
      {isInputActive && (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container columns={12} spacing={5}>
            {filesdummy.map((file, index) => (
              <Grid item xs={6} sm={6} md={4} lg={3} key={index} sx={{}}>
                <Stack
                  sx={{
                    borderRadius: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: 2,
                    backgroundColor:
                      selectedFileIndex === index ? '#A0A4AA' : 'transparent',
                  }}
                >
                  <img
                    src={IconPdf}
                    height={'93px'}
                    width={'80px'}
                    alt='PDF Icon'
                  />
                  <Typography
                    sx={{
                      pt: 1,
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      WebkitLineClamp: 1, // Number of lines to show
                    }}
                  >
                    {file.name}
                  </Typography>
                </Stack>
                <Stack
                  direction='row'
                  sx={{ alignItems: 'center', justifyContent: 'center' }}
                  gap={2}
                >
                  <Typography fontSize='12px'>
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </Typography>
                  <Typography fontSize='9px'>Edit</Typography>
                  <Typography fontSize='9px'>Hapus</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Stack>
  );
};

export default DropZone;
