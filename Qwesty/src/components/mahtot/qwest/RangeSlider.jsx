import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 10,
    label: '10',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 37,
    label: '37',
  },
  {
    value: 100,
    label: '100',
  },
];


function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider({id, max, initialValue}) {
  return (
        <Box sx={{ width: 300 }} id={id}>
          <Slider
          // style={{border:'1px solid red'}}
            
            aria-label="Always visible"
            defaultValue={initialValue}
            // getAriaValueText={valuetext}
            step={50}
            marks={marks}
            // disabled='true'
            max={max}
            valueLabelDisplay="on"
          />
        </Box>
  );
}
