import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { switchTheme } from "../../data/data";
import { useTheme } from "../../context/ThemeContext";

export default function MuiSelect({ label, options }) {
  const [value, setSort] = React.useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const { resTheme } = useTheme();

  const textColor = switchTheme("black", "white", resTheme);
  const bgColor = switchTheme("white", "#2a2a27", resTheme);


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel sx={{ color: textColor }} id="demo-simple-select-label">
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
          sx={{
            height: 45,
            border: 1,
            borderColor: "#f4f4f4",
            color: { textColor },
          }}
        >
          {options.map((option, index) => {
            return (
              <MenuItem
                key={index}
                sx={{ background: bgColor, color: textColor }}
                value={option}
              >
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
