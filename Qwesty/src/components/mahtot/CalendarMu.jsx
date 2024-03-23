import * as React from 'react';
import dayjs from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useState } from 'react';

export default function CalendarM({deadline, setDeadline, handleClose}) {
  const currentDate = dayjs();

  console.log(dayjs(deadline))
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker orientation="portrait" 
              value={deadline}
              onChange={(date)=>setDeadline(date)}
              onClose={handleClose}
              minDate={currentDate}

              inputFormat="MM/dd/yyyy"
              />
    </LocalizationProvider>
  );
}
