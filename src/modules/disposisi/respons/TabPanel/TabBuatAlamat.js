import React, { useState } from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, Grid, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useSelector } from 'react-redux';
import { X } from 'feather-icons-react';

import exchange from '../../../../assets/icon/exchange.svg';
import DropZoneFile from '@crema/components/Tabs/DropZoneFile';
import FormAddressBook from '@crema/components/Tabs/FormAddressBook';

const RenderItemWrapper = styled(Stack)(() => ({
    paddingY:'16px',
    gap:'16px',
    '& .render-item-todo': {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    '& .render-item-todo-box': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    '& .render-item-todo-checkbox': {
        width: '20px',
        height: '20px',
    },
    '& .render-item-todo-text': {
        fontWeight: '400',
        fontSize: '14px',
    },
    '& .render-item-nota-box': {
        display: 'flex',
        padding: '4px 4px 4px 0px',
        gap: '8px',
        height:'30px'
    },
    '& .render-item-nota-text': {
        fontWeight: '700',
        fontSize: '16px',
        lineHeight: '22px',
    },
    '& .render-item-nota-icon': {
        backgroundColor:'#F9F9F9',
        borderRadius:'6px',
        padding:'4px',
        width:'fit-content',
        height:'fit-content',
        gap:'10px',
    },
}))

const CustomSpan = styled('span')(() => ({
    color: 'red',
}))

const CustomCloseButton = styled(Box)(({theme}) => ({
    width: '24px',
    height: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
        color: theme.palette.coofis.primary.main,
    },
}))

const CustomTambahDisposisi = styled(Stack)(({theme}) => ({
    backgroundColor: theme.palette.coofis.primary.main,
    color: theme.palette.background.paper,
    borderRadius: '8px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px',
    width:'100%',
    '&:hover': {
        cursor: 'pointer',
    }
}))

const BoxCopyLog = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    width: 'fit-content',
    height: '40px',
}))

const TabBuatAlamat = () => {
    const [items, setItems] = useState([{
        todo: false,
        reminder: false,
        reminderDay: 0,
        nota: '',
        dateFrom: null,
        prior: ''
    }]);
    const [valueLog, setValueLog] = useState('tidak');

    const handleChange = (index, key, value) => {
        const newItems = [...items];
        newItems[index] = { ...newItems[index], [key]: value };
        setItems(newItems);
    };

    const handleChangeCopy = (event) => {
        setValueLog(event.target.value);
    };
    
    const handleAddItem = () => {
        setItems([...items, {
            todo: false,
            reminder: false,
            reminderDay: 0,
            nota: '',
            dateFrom: null,
            prior: ''
        }]);
    };

    const handleRemoveItem = (index) => {
        if (items.length > 1) {
            const newItems = [...items];
            newItems.splice(index, 1);
            setItems(newItems);
        }
    };

    const kepada = useSelector((state) => state.addressbook.kepada);
    let dataAddressBook = kepada[0];
    if (!dataAddressBook || !Array.isArray(dataAddressBook)) {
        dataAddressBook = [];
    }

    const RenderItem = ( item, index ) => {
        return (
            <RenderItemWrapper>
                <Box className='render-item-todo'>
                    <Box className='render-item-todo-box'>
                        <Checkbox
                            className='render-item-todo-checkbox'
                            checked={item.todo}
                            onChange={() => handleChange(index, 'todo', !item.todo)}
                        />
                        <Typography className='render-item-todo-text'>
                            Todo
                        </Typography>
                    </Box>
                    <CustomCloseButton onClick={() => handleRemoveItem(index)}>
                        <X style={{ width: '14px', height: '14px' }} />
                    </CustomCloseButton>
                </Box>
    
                <Box sx={{ width: '60%' }}>
                    <FormAddressBook text='Kepada' data={dataAddressBook} />
                </Box>
    
                <Box className='render-item-todo-box'>
                    <Typography className='render-item-todo-text'>
                        Pengingat
                    </Typography>
                    <Checkbox
                        className='render-item-todo-checkbox'
                        checked={item.reminder}
                        onChange={() => handleChange(index, 'reminder', !item.reminder)}
                    />
                    {item.reminder === true && (
                        <>
                            <TextField
                                onChange={(event) => handleChange(index, 'reminderDay', parseInt(event.target.value))}
                                type='number'
                                sx={{width: '85px'}}
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            />
                            <Typography className='render-item-todo-text'>
                                Hari Sebelum
                            </Typography>
                        </>
                    )}
                </Box>
    
                <Box className='render-item-todo' gap={'20px'}>
                    <Box sx={{ width: '50%' }}>
                        <Box className='render-item-nota-box'>
                            <Typography className='render-item-nota-text'>
                                Nota Tindakan
                                <CustomSpan>*</CustomSpan>
                            </Typography>
                            <Box className='render-item-nota-icon'>
                                <img src={exchange} alt='exchange' />
                            </Box>
                        </Box>
                        <Select
                            labelId={`select-label-nota-${index}`} 
                            id={`select-nota-${index}`} 
                            value={item.nota} 
                            onChange={(event) => handleChange(index, 'nota', event.target.value)}
                            sx={{ width: '100%' }}
                        >
                            <MenuItem value={''}>None</MenuItem>
                            <MenuItem value={'10'}>Ten</MenuItem>
                            <MenuItem value={'20'}>Twenty</MenuItem>
                            <MenuItem value={'30'}>Thirty</MenuItem>
                        </Select>
                    </Box>
    
                    <Box sx={{ width: '20%' }}>
                        <Box className='render-item-nota-box'>
                            <Typography className='render-item-nota-text'>
                                Due Date
                            </Typography>
                        </Box>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                value={item.dateFrom} 
                                onChange={(date) => handleChange(index, 'dateFrom', date)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Box>
    
                    <Box sx={{ width: '30%' }}>
                        <Box className='render-item-nota-box'>
                            <Typography className='render-item-nota-text'>
                                Prioritas
                            </Typography>
                        </Box>
                        <Select
                            labelId={`select-label-prior-${index}`} 
                            id={`select-prior-${index}`} 
                            value={item.prior} 
                            onChange={(event) => handleChange(index, 'prior', event.target.value)}
                            sx={{ width: '100%' }}
                        >
                            <MenuItem value={''}>None</MenuItem>
                            <MenuItem value={'Rendah'}>Rendah</MenuItem>
                            <MenuItem value={'Sedang'}>Sedang</MenuItem>
                            <MenuItem value={'Tinggi'}>Tinggi</MenuItem>
                        </Select>
                    </Box>
                </Box>
            </RenderItemWrapper>
        );
    };

    return (
        <FormControl fullWidth>
            <Stack rowGap={'16px'}>  
                <Grid container>
                    <Grid item xs={8}>
                        <Stack rowGap={'16px'}>
                            <Box className='content-styled-box'>
                                <Stack gap={'10px'}>
                                    <Typography sx={{fontWeight: '700', fontSize: '14px'}}>
                                        Diteruskan Dari
                                    </Typography>
                                    <Typography sx={{fontWeight: '400', fontSize: '14px'}}>
                                        EVITA TUNJUNG SEKAR / 690013
                                    </Typography>
                                </Stack>
                            </Box>

                            {items.map((item, index) => (
                                <Box key={index}>
                                    {RenderItem(item, index)}
                                </Box>
                            ))}
                            {console.log('items', items)}
                            
                            <CustomTambahDisposisi onClick={handleAddItem}>
                                <Typography sx={{fontWeight: '700',fontSize: '16px',}}>
                                    Tambah Disposisi
                                </Typography>
                            </CustomTambahDisposisi>

                            <BoxCopyLog>
                                <Typography sx={{fontWeight:'700', fontSize:'14px'}}>
                                    Copy Log Disposisi
                                </Typography>
                                <Typography sx={{padding:'12px'}}>
                                    :
                                </Typography>
                                <Stack direction={'row'} gap={'35px'}>
                                    <RadioGroup
                                        row
                                        aria-labelledby="radio-buttons-gender"
                                        name="controlled-radio-buttons-gender"
                                        value={valueLog}
                                        onChange={handleChangeCopy}
                                    >
                                        <FormControlLabel
                                            value="ya"
                                            control={<Radio />}
                                            label="Ya"
                                        />
                                        <FormControlLabel
                                            value="tidak"
                                            control={<Radio />}
                                            label="Tidak"
                                        />
                                    </RadioGroup>
                                </Stack>
                            </BoxCopyLog>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={11}>
                        <Stack rowGap={'16px'}>    
                            <Box>
                                <Typography sx={{fontWeight: '700', fontSize: '16px'}}>
                                    Lampiran
                                    <CustomSpan>*</CustomSpan>
                                </Typography>
                                <DropZoneFile />
                            </Box>

                            <Box sx={{
                                padding:'8px 24px 8px 24px',
                                lineHeight: '20px',
                            }}>
                                <Typography sx={{
                                    color: 'red',
                                    fontWeight: '700',
                                    fontSize: '14px',
                                }}>Perhatian :</Typography>
                                <Box>
                                    <Typography sx={{fontWeight: '400', fontSize: '13px'}}>
                                        Total Ukuran Surat & Lampiran yang dapat diproses{' '}
                                        <CustomSpan>maksimal 25 MB.</CustomSpan>
                                    </Typography>
                                </Box>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </FormControl>
    )
}

export default TabBuatAlamat
