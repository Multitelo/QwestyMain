import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MuiSelect({defaultState, label, options }) {
  const [sort, setSort] = React.useState(defaultState);

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort"
          onChange={handleChange}
          sx={{
            height: 45,
          }}
        >
          {options.map((option, index) => {
            return(
              <MenuItem key = {index} value={option}>{option}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  );
}