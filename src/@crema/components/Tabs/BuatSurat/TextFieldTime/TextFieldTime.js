import { MenuItem, Select, Typography } from '@mui/material';
import React from 'react';

const TextFieldTime = () => {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Select value={age} displayEmpty onChange={handleChange}>
        <MenuItem value=''>
          <em>-</em>
        </MenuItem>
        <MenuItem value={1}>00:00</MenuItem>
        <MenuItem value={2}>00:15</MenuItem>
        <MenuItem value={3}>00:30</MenuItem>
        <MenuItem value={4}>00:45</MenuItem>
        <MenuItem value={5}>01:00</MenuItem>
        <MenuItem value={6}>01:15</MenuItem>
        <MenuItem value={7}>01:30</MenuItem>
        <MenuItem value={8}>01:45</MenuItem>
        <MenuItem value={9}>02:00</MenuItem>
        <MenuItem value={10}>02:15</MenuItem>
        <MenuItem value={11}>02:30</MenuItem>
        <MenuItem value={12}>02:45</MenuItem>
        <MenuItem value={13}>03:00</MenuItem>
        <MenuItem value={14}>03:15</MenuItem>
        <MenuItem value={15}>03:30</MenuItem>
        <MenuItem value={16}>03:45</MenuItem>
        <MenuItem value={17}>04:00</MenuItem>
        <MenuItem value={18}>04:15</MenuItem>
        <MenuItem value={19}>04:30</MenuItem>
        <MenuItem value={20}>04:45</MenuItem>
        <MenuItem value={21}>05:00</MenuItem>
        <MenuItem value={22}>05:15</MenuItem>
        <MenuItem value={23}>05:30</MenuItem>
        <MenuItem value={24}>05:45</MenuItem>
        <MenuItem value={25}>06:00</MenuItem>
        <MenuItem value={26}>06:15</MenuItem>
        <MenuItem value={27}>06:30</MenuItem>
        <MenuItem value={28}>06:45</MenuItem>
        <MenuItem value={29}>07:00</MenuItem>
        <MenuItem value={30}>07:15</MenuItem>
        <MenuItem value={32}>07:30</MenuItem>
        <MenuItem value={32}>07:45</MenuItem>
        <MenuItem value={33}>08:00</MenuItem>
        <MenuItem value={34}>08:15</MenuItem>
        <MenuItem value={35}>08:30</MenuItem>
        <MenuItem value={36}>08:45</MenuItem>
        <MenuItem value={37}>09:00</MenuItem>
        <MenuItem value={38}>09:15</MenuItem>
        <MenuItem value={39}>09:30</MenuItem>
        <MenuItem value={40}>09:45</MenuItem>
        <MenuItem value={41}>10:00</MenuItem>
        <MenuItem value={42}>10:15</MenuItem>
        <MenuItem value={43}>10:30</MenuItem>
        <MenuItem value={44}>10:45</MenuItem>
        <MenuItem value={45}>11:00</MenuItem>
        <MenuItem value={46}>11:15</MenuItem>
        <MenuItem value={47}>11:30</MenuItem>
        <MenuItem value={48}>11:45</MenuItem>
        <MenuItem value={49}>12:00</MenuItem>
        <MenuItem value={50}>12:15</MenuItem>
        <MenuItem value={51}>12:30</MenuItem>
        <MenuItem value={52}>12:45</MenuItem>
        <MenuItem value={53}>13:00</MenuItem>
        <MenuItem value={54}>13:15</MenuItem>
        <MenuItem value={55}>13:30</MenuItem>
        <MenuItem value={56}>13:45</MenuItem>
        <MenuItem value={57}>14:00</MenuItem>
        <MenuItem value={58}>14:15</MenuItem>
        <MenuItem value={59}>14:30</MenuItem>
        <MenuItem value={60}>14:45</MenuItem>
        <MenuItem value={61}>15:00</MenuItem>
        <MenuItem value={62}>15:15</MenuItem>
        <MenuItem value={63}>15:30</MenuItem>
        <MenuItem value={64}>15:45</MenuItem>
        <MenuItem value={65}>16:00</MenuItem>
        <MenuItem value={66}>16:15</MenuItem>
        <MenuItem value={67}>16:30</MenuItem>
        <MenuItem value={68}>16:45</MenuItem>
        <MenuItem value={69}>17:00</MenuItem>
        <MenuItem value={70}>17:15</MenuItem>
        <MenuItem value={71}>17:30</MenuItem>
        <MenuItem value={72}>17:45</MenuItem>
        <MenuItem value={73}>18:00</MenuItem>
        <MenuItem value={74}>18:15</MenuItem>
        <MenuItem value={75}>18:30</MenuItem>
        <MenuItem value={76}>18:45</MenuItem>
        <MenuItem value={77}>19:00</MenuItem>
        <MenuItem value={78}>19:15</MenuItem>
        <MenuItem value={79}>19:30</MenuItem>
        <MenuItem value={80}>19:45</MenuItem>
        <MenuItem value={81}>20:00</MenuItem>
        <MenuItem value={82}>20:15</MenuItem>
        <MenuItem value={83}>20:30</MenuItem>
        <MenuItem value={84}>20:45</MenuItem>
        <MenuItem value={85}>21:00</MenuItem>
        <MenuItem value={86}>21:15</MenuItem>
        <MenuItem value={87}>21:30</MenuItem>
        <MenuItem value={88}>21:45</MenuItem>
        <MenuItem value={89}>22:00</MenuItem>
        <MenuItem value={90}>22:15</MenuItem>
        <MenuItem value={91}>22:30</MenuItem>
        <MenuItem value={92}>22:45</MenuItem>
        <MenuItem value={93}>23:00</MenuItem>
        <MenuItem value={94}>23:15</MenuItem>
        <MenuItem value={95}>23:30</MenuItem>
        <MenuItem value={96}>23:45</MenuItem>
      </Select>
    </>
  );
};

export default TextFieldTime;
